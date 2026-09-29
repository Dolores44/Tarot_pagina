/**
 * DTO públicos del catálogo: solo los campos que el sitio necesita mostrar.
 * Las filas de la base (con created_at, updated_at, external_id, etc.)
 * se mapean a estos tipos en services/ y nunca llegan completas al cliente.
 */

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
};

export type ProductDetail = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  categoryId: string;
  categorySlug: string;
  categoryName: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  /** Pesos argentinos, entero */
  price: number;
  imageUrl: string | null;
  imageAlt: string;
  featured: boolean;
  /**
   * Número de carta estable (1, 2, 3…) según el orden del catálogo.
   * Define el número romano y el motivo de la carta: la misma lectura se ve
   * igual en Inicio, en el catálogo y en el detalle.
   */
  cardNumber: number;
  /** "Información importante": duración, modalidad, etc. */
  details: ProductDetail[];
};

export type CategoryWithCount = Category & {
  productCount: number;
};
