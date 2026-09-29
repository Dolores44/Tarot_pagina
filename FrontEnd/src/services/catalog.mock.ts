import type { CategoryRow, ProductRow } from "@/database/types";
import { bySortOrder, toCategory, toProduct } from "@/services/catalog.mapper";
import type { CatalogRepository } from "@/services/catalog.repository";
import type { CategoryWithCount, Product } from "@/types/catalog";

/**
 * Repositorio mock: mismas filas que SQL/seed.sql (mismos UUID y columnas),
 * con la misma forma que devolverá Supabase. En la Fase 6 este archivo se
 * reemplaza por catalog.supabase.ts sin tocar la UI.
 *
 * Nombres y precios son los reales; las descripciones no provistas quedan
 * como [COMPLETAR: ...]. `featured` y `sort_order` definen qué se destaca en Inicio.
 * Velas: la categoría se agrega cuando esté confirmado su catálogo.
 */

const SEED_TIMESTAMP = "2026-09-29T00:00:00.000Z";
const RESERVA = { label: "Reserva", value: "Turnos con reserva previa" };
const LECTURAS_ID = "0b6c1f2e-3a4d-4c5e-8f60-000000000001";

const categoryRows: CategoryRow[] = [
  {
    id: LECTURAS_ID,
    name: "Lecturas",
    slug: "lecturas",
    description: null,
    active: true,
    sort_order: 1,
    created_at: SEED_TIMESTAMP,
    updated_at: SEED_TIMESTAMP,
  },
];

const productRows: ProductRow[] = [
  {
    id: "a1d0c3b2-5e4f-4a6b-9c7d-000000000001",
    category_id: LECTURAS_ID,
    name: "Lectura de pareja",
    slug: "lectura-de-pareja",
    short_description: "[COMPLETAR: descripción corta de la lectura de pareja.]",
    description: "[COMPLETAR: descripción completa de la lectura de pareja.]",
    price: 5000,
    image_url: null,
    image_alt: null,
    details: [RESERVA],
    active: true,
    featured: true,
    sort_order: 1,
    created_at: SEED_TIMESTAMP,
    updated_at: SEED_TIMESTAMP,
  },
  {
    id: "a1d0c3b2-5e4f-4a6b-9c7d-000000000002",
    category_id: LECTURAS_ID,
    name: "Lectura sobre tu relación",
    slug: "lectura-sobre-tu-relacion",
    // Flyer "5 preguntas para tu relación"
    short_description: "5 preguntas enfocadas en tu pareja actual.",
    description:
      "Una sesión de 5 preguntas enfocadas en tu pareja actual: qué siente realmente por vos en este momento, qué piensa de la relación y hacia dónde quiere llevarla, cuáles son sus intenciones a corto y mediano plazo, qué pueden mejorar juntos y qué consejo tienen las cartas para la relación.",
    price: 8000,
    image_url: null,
    image_alt: null,
    details: [{ label: "Sesión", value: "5 preguntas" }, RESERVA],
    active: true,
    featured: true,
    sort_order: 2,
    created_at: SEED_TIMESTAMP,
    updated_at: SEED_TIMESTAMP,
  },
  {
    id: "a1d0c3b2-5e4f-4a6b-9c7d-000000000003",
    category_id: LECTURAS_ID,
    name: "Lectura de 30 minutos",
    slug: "lectura-de-30-minutos",
    short_description: "[COMPLETAR: descripción corta de la lectura de 30 minutos.]",
    description: "[COMPLETAR: descripción completa de la lectura de 30 minutos.]",
    price: 8000,
    image_url: null,
    image_alt: null,
    details: [{ label: "Duración", value: "30 minutos" }, RESERVA],
    active: true,
    featured: false,
    sort_order: 3,
    created_at: SEED_TIMESTAMP,
    updated_at: SEED_TIMESTAMP,
  },
  {
    id: "a1d0c3b2-5e4f-4a6b-9c7d-000000000004",
    category_id: LECTURAS_ID,
    name: "Lectura de 1 hora",
    slug: "lectura-de-1-hora",
    // Flyer "Sesión de tarot 1 hora"
    short_description: "Preguntas libres, mensajes y orientación para tu camino.",
    description:
      "Una sesión de preguntas libres: mensajes y orientación para tu camino, descubrí qué energías te rodean y consultá sobre cualquier tema que necesites aclarar.",
    price: 18000,
    image_url: null,
    image_alt: null,
    details: [{ label: "Duración", value: "1 hora" }, RESERVA],
    active: true,
    featured: true,
    sort_order: 4,
    created_at: SEED_TIMESTAMP,
    updated_at: SEED_TIMESTAMP,
  },
  {
    id: "a1d0c3b2-5e4f-4a6b-9c7d-000000000005",
    category_id: LECTURAS_ID,
    name: "Lectura de la expareja",
    slug: "lectura-de-la-expareja",
    short_description: "[COMPLETAR: descripción corta de la lectura de la expareja.]",
    description: "[COMPLETAR: descripción completa de la lectura de la expareja.]",
    price: 10000,
    image_url: null,
    image_alt: null,
    details: [RESERVA],
    active: true,
    featured: false,
    sort_order: 5,
    created_at: SEED_TIMESTAMP,
    updated_at: SEED_TIMESTAMP,
  },
];

/*
 * Estas dos funciones reproducen lo que harán las políticas RLS y la consulta
 * de la Fase 6: solo categorías activas, y productos activos de categorías activas.
 */
function visibleCategoryRows(): CategoryRow[] {
  return categoryRows.filter((c) => c.active).sort(bySortOrder);
}

function visibleProducts(): Product[] {
  const categories = new Map(visibleCategoryRows().map((c) => [c.id, c]));
  return productRows
    .filter((p) => p.active && categories.has(p.category_id))
    .sort(bySortOrder)
    .map((row, index) => toProduct(row, categories.get(row.category_id)!, index + 1));
}

export const mockCatalogRepository: CatalogRepository = {
  async getCategories(): Promise<CategoryWithCount[]> {
    const products = visibleProducts();
    return visibleCategoryRows().map((row) => ({
      ...toCategory(row),
      productCount: products.filter((p) => p.categoryId === row.id).length,
    }));
  },

  async getCategoryBySlug(slug) {
    const row = visibleCategoryRows().find((c) => c.slug === slug);
    return row ? toCategory(row) : null;
  },

  async getProducts(options) {
    const all = visibleProducts();
    return options?.categorySlug ? all.filter((p) => p.categorySlug === options.categorySlug) : all;
  },

  async getFeaturedProducts(limit = 3) {
    return visibleProducts()
      .filter((p) => p.featured)
      .slice(0, limit);
  },

  async getProductBySlug(categorySlug, productSlug) {
    return visibleProducts().find((p) => p.categorySlug === categorySlug && p.slug === productSlug) ?? null;
  },
};
