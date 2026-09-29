-- =============================================================================
-- Paola Tarot — Seguridad del catálogo: Row Level Security (Fase 5 → aplicar en Fase 6)
-- Documentación: Docs/FASE-5-Modelo-de-datos.md §6
--
-- Estado: DISEÑO. Se aplica en la Fase 6, inmediatamente después del esquema.
--
-- Modelo:
--   - anon / authenticated: SOLO lectura de filas activas.
--   - Ninguna política de escritura: INSERT/UPDATE/DELETE quedan denegados
--     para cualquier usuario del navegador.
--   - El futuro /admin escribirá desde el servidor (Server Actions) después de
--     verificar la autorización; ver Docs §6.3. La service_role key nunca va al navegador.
-- =============================================================================

alter table public.categories enable row level security;
alter table public.products   enable row level security;

-- -----------------------------------------------------------------------------
-- Privilegios (defensa en profundidad: además de RLS, sin permisos de escritura)
-- -----------------------------------------------------------------------------
revoke all on public.categories from anon, authenticated;
revoke all on public.products   from anon, authenticated;
grant select on public.categories to anon, authenticated;
grant select on public.products   to anon, authenticated;

-- -----------------------------------------------------------------------------
-- Lectura pública
-- -----------------------------------------------------------------------------
create policy "Categorías activas visibles para todos"
  on public.categories
  for select
  to anon, authenticated
  using (active);

-- Un producto es público solo si está activo Y su categoría también.
-- (Desactivar una categoría oculta todos sus productos sin tocarlos.)
create policy "Productos activos de categorías activas visibles para todos"
  on public.products
  for select
  to anon, authenticated
  using (
    active
    and exists (
      select 1
      from public.categories c
      where c.id = products.category_id
        and c.active
    )
  );
