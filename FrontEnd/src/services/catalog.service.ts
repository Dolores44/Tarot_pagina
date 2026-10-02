import { categories, products } from "@/content/catalog";
import type { Category, CategoryWithCount, Product } from "@/types/catalog";
import { parseSlug } from "@/validation/catalog";

/**
 * Consultas sobre el catálogo local (src/content/catalog.ts).
 *
 *   content/catalog.ts  →  este servicio  →  páginas y componentes
 *
 * Los parámetros de URL llegan como `unknown` y se validan antes de buscar:
 * un slug inválido o inexistente termina en 404.
 */

export function productPath(product: Pick<Product, "categorySlug" | "slug">): string {
  return `/catalogo/${product.categorySlug}/${product.slug}`;
}

export function getAllProducts(): Product[] {
  return products;
}

/** Categorías con al menos un producto (las vacías no se muestran). */
export function getVisibleCategories(): CategoryWithCount[] {
  return categories
    .map((category) => ({
      ...category,
      productCount: products.filter((p) => p.categorySlug === category.slug).length,
    }))
    .filter((category) => category.productCount > 0);
}

export function getCategory(rawSlug: unknown): Category | null {
  const slug = parseSlug(rawSlug);
  if (!slug) return null;
  return getVisibleCategories().find((c) => c.slug === slug) ?? null;
}

export function getCategoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}

export function getCategoryProducts(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProduct(rawCategory: unknown, rawProduct: unknown): Product | null {
  const categorySlug = parseSlug(rawCategory);
  const productSlug = parseSlug(rawProduct);
  if (!categorySlug || !productSlug) return null;
  return products.find((p) => p.categorySlug === categorySlug && p.slug === productSlug) ?? null;
}

export function getProductBySlug(slug: string): Product | null {
  return products.find((p) => p.slug === slug) ?? null;
}

export function getFeaturedProducts(limit = 3): Product[] {
  return products.filter((p) => p.featured).slice(0, limit);
}

/** Otros productos de la misma categoría para el detalle. */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return getCategoryProducts(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, limit);
}

/** Número de carta (I, II, III…) para las lecturas sin banner: posición en el catálogo. */
export function getCardNumber(product: Product): number {
  return products.findIndex((p) => p.slug === product.slug) + 1;
}
