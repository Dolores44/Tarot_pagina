import "server-only";
import { cache } from "react";
import { catalog } from "@/services/catalog";
import type { Category, CategoryWithCount, Product } from "@/types/catalog";
import { parseSlug } from "@/validation/catalog";

/**
 * Capa de servicio del catálogo: la única puerta de entrada desde las páginas.
 *
 *   UI (app/, components/)  →  servicio (este archivo, valida)  →  repositorio  →  datos
 *
 * Los parámetros de URL llegan como `unknown` y se validan acá; un valor
 * inválido nunca llega al repositorio (ni, en la Fase 6, a Supabase).
 * `cache` evita consultas repetidas entre generateMetadata y la página.
 */

/** Categorías con al menos un producto activo (las vacías no se muestran). */
export const getVisibleCategories = cache(async (): Promise<CategoryWithCount[]> => {
  const categories = await catalog.getCategories();
  return categories.filter((category) => category.productCount > 0);
});

export const getCategory = cache(async (rawSlug: unknown): Promise<Category | null> => {
  const slug = parseSlug(rawSlug);
  if (!slug) return null;
  return catalog.getCategoryBySlug(slug);
});

export const getAllProducts = cache(async (): Promise<Product[]> => catalog.getProducts());

export const getCategoryProducts = cache(async (categorySlug: string): Promise<Product[]> => {
  const slug = parseSlug(categorySlug);
  if (!slug) return [];
  return catalog.getProducts({ categorySlug: slug });
});

export const getProduct = cache(async (rawCategory: unknown, rawProduct: unknown): Promise<Product | null> => {
  const categorySlug = parseSlug(rawCategory);
  const productSlug = parseSlug(rawProduct);
  if (!categorySlug || !productSlug) return null;
  return catalog.getProductBySlug(categorySlug, productSlug);
});

export const getFeaturedProducts = cache(async (limit = 3): Promise<Product[]> => catalog.getFeaturedProducts(limit));

/** Otros productos de la misma categoría para el detalle. */
export async function getRelatedProducts(product: Product, limit = 3): Promise<Product[]> {
  const products = await getCategoryProducts(product.categorySlug);
  return products.filter((p) => p.id !== product.id).slice(0, limit);
}

export function productPath(product: Pick<Product, "categorySlug" | "slug">): string {
  return `/catalogo/${product.categorySlug}/${product.slug}`;
}
