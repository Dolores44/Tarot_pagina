import type { Category, CategoryWithCount, Product } from "@/types/catalog";

/**
 * Contrato de acceso al catálogo. Las páginas dependen solo de esta interfaz:
 * - Fase 4: implementación con datos mock.
 * - Fase 6: implementación con Supabase.
 * Cambiar de fuente de datos no requiere tocar componentes.
 *
 * Todas las implementaciones devuelven únicamente productos/categorías activos,
 * ordenados por sort_order.
 *
 * Los slugs que reciben estos métodos ya llegan validados (validation/catalog.ts);
 * las implementaciones igualmente deben usar consultas parametrizadas.
 */
export interface CatalogRepository {
  getCategories(): Promise<CategoryWithCount[]>;
  getCategoryBySlug(slug: string): Promise<Category | null>;
  getProducts(options?: { categorySlug?: string }): Promise<Product[]>;
  getFeaturedProducts(limit?: number): Promise<Product[]>;
  getProductBySlug(categorySlug: string, productSlug: string): Promise<Product | null>;
}
