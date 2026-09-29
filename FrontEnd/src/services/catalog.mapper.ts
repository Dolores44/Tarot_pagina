import type { CategoryRow, ProductRow } from "@/database/types";
import type { Category, Product, ProductDetail } from "@/types/catalog";

/**
 * Conversión fila de base de datos → DTO público.
 * La usan todas las implementaciones del repositorio (mock hoy, Supabase en Fase 6),
 * así los datos llegan a la UI con exactamente la misma forma.
 *
 * Se arma cada campo explícitamente: columnas internas (active, sort_order,
 * created_at, updated_at) nunca salen hacia la UI.
 */

export function toCategory(row: CategoryRow): Category {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description,
  };
}

function toPrice(value: ProductRow["price"]): number {
  const price = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(price) || price < 0) {
    throw new Error("Precio inválido en el catálogo");
  }
  return price;
}

/** jsonb viene de la base: se descarta cualquier entrada que no sea { label, value } de texto */
function toDetails(value: unknown): ProductDetail[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter(
      (item): item is ProductDetail =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as ProductDetail).label === "string" &&
        typeof (item as ProductDetail).value === "string",
    )
    .map(({ label, value: detailValue }) => ({ label, value: detailValue }));
}

/**
 * @param cardNumber posición 1, 2, 3… del producto en el catálogo público ordenado
 */
export function toProduct(row: ProductRow, category: CategoryRow, cardNumber: number): Product {
  return {
    id: row.id,
    categoryId: row.category_id,
    categorySlug: category.slug,
    categoryName: category.name,
    name: row.name,
    slug: row.slug,
    shortDescription: row.short_description,
    description: row.description,
    price: toPrice(row.price),
    imageUrl: row.image_url,
    imageAlt: row.image_alt ?? row.name,
    featured: row.featured,
    cardNumber,
    details: toDetails(row.details),
  };
}

/** Orden público: sort_order ascendente y, ante empate, por nombre. */
export function bySortOrder<T extends { sort_order: number; name: string }>(a: T, b: T): number {
  return a.sort_order - b.sort_order || a.name.localeCompare(b.name, "es");
}
