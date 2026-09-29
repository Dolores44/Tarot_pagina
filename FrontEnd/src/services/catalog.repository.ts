import type { CategoryWithCount, Product } from "@/types/catalog";

/**
 * Contrato de acceso al catálogo. Las páginas dependen solo de esta interfaz:
 * - Fase 4: implementación con datos mock.
 * - Fase 6: implementación con Supabase.
 * Cambiar de fuente de datos no requiere tocar componentes.
 *
 * Todas las implementaciones devuelven únicamente productos/categorías activos,
 * ordenados por sort_order.
 */
export interface CatalogRepository {
  getCategories(): Promise<CategoryWithCount[]>;
  getProducts(options?: { categorySlug?: string }): Promise<Product[]>;
  getFeaturedProducts(limit?: number): Promise<Product[]>;
  getProductBySlug(categorySlug: string, productSlug: string): Promise<Product | null>;
}
