-- =============================================================================
-- Paola Tarot — Esquema del catálogo (Fase 5)
-- Documentación: Docs/FASE-5-Modelo-de-datos.md
--
-- Category 1 ──── N Product
--
-- Estado: DISEÑO. No aplicado todavía a ningún proyecto de Supabase.
-- Se aplica en la Fase 6 (supabase db push / SQL editor), antes que las políticas RLS.
-- =============================================================================

-- gen_random_uuid() es nativa desde PostgreSQL 13 (Supabase usa 15+).

-- -----------------------------------------------------------------------------
-- updated_at automático
-- -----------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

-- -----------------------------------------------------------------------------
-- categories
-- -----------------------------------------------------------------------------
create table public.categories (
  id          uuid        primary key default gen_random_uuid(),
  name        text        not null,
  slug        text        not null,
  description text,
  active      boolean     not null default true,
  sort_order  integer     not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),

  constraint categories_slug_key    unique (slug),
  constraint categories_name_check  check (btrim(name) <> ''),
  -- Mismo formato que valida la web (src/validation/catalog.ts): minúsculas, números y guiones
  constraint categories_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(slug) <= 80)
);

comment on table  public.categories is 'Categorías del catálogo (Lecturas, Velas, …).';
comment on column public.categories.slug is 'Identificador de URL: /catalogo/{slug}. Único.';
comment on column public.categories.active is 'false = oculta en la web sin borrarla.';
comment on column public.categories.sort_order is 'Orden en el menú de categorías (ascendente).';

create trigger categories_set_updated_at
  before update on public.categories
  for each row execute function public.set_updated_at();

-- -----------------------------------------------------------------------------
-- products
-- -----------------------------------------------------------------------------
create table public.products (
  id                uuid          primary key default gen_random_uuid(),
  category_id       uuid          not null,
  name              text          not null,
  slug              text          not null,
  short_description text          not null default '',
  description       text          not null default '',
  price             numeric(12,2) not null,
  image_url         text,
  image_alt         text,
  details           jsonb         not null default '[]'::jsonb,
  active            boolean       not null default true,
  featured          boolean       not null default false,
  sort_order        integer       not null default 0,
  created_at        timestamptz   not null default now(),
  updated_at        timestamptz   not null default now(),

  -- RESTRICT: no se puede borrar una categoría que todavía tiene productos.
  -- Para sacar algo de la web se usa active = false (no se pierde nada).
  constraint products_category_id_fkey
    foreign key (category_id) references public.categories (id)
    on update restrict on delete restrict,

  constraint products_slug_key     unique (slug),
  constraint products_name_check   check (btrim(name) <> ''),
  constraint products_slug_format  check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(slug) <= 80),
  constraint products_price_check  check (price >= 0),
  -- Solo URLs https o rutas locales ("/..."): evita esquemas como javascript: o data:
  constraint products_image_url_check check (image_url is null or image_url ~ '^(https://|/)'),
  -- Lista de datos { "label": ..., "value": ... } para "Información importante"
  constraint products_details_is_array check (jsonb_typeof(details) = 'array')
);

comment on table  public.products is 'Productos y servicios del catálogo (lecturas, velas, …).';
comment on column public.products.category_id is 'Categoría a la que pertenece (FK, ON DELETE RESTRICT).';
comment on column public.products.slug is 'Identificador de URL: /catalogo/{categoria}/{slug}. Único en todo el catálogo.';
comment on column public.products.price is 'Precio en pesos argentinos (ARS). NUMERIC: exacto, nunca float.';
comment on column public.products.image_url is 'URL https (Supabase Storage) o ruta local /... . La imagen no se guarda en la tabla.';
comment on column public.products.image_alt is 'Texto alternativo de la imagen. Si es null, la web usa el nombre.';
comment on column public.products.details is 'Array JSON de { label, value } para la caja "Información" del detalle.';
comment on column public.products.featured is 'true = aparece en "Lecturas destacadas" de Inicio.';
comment on column public.products.sort_order is 'Orden de aparición en el catálogo (ascendente).';

create trigger products_set_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

-- -----------------------------------------------------------------------------
-- Índices
-- (los UNIQUE de slug ya crean su propio índice)
-- -----------------------------------------------------------------------------

-- Índice de la FK (Postgres no lo crea solo) que además sirve para listar
-- una categoría en orden: WHERE category_id = ? ORDER BY sort_order
create index products_category_sort_idx
  on public.products (category_id, sort_order);

-- Destacados de Inicio: WHERE active AND featured ORDER BY sort_order
create index products_featured_sort_idx
  on public.products (sort_order)
  where active and featured;
