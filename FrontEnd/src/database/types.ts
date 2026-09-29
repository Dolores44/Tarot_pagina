/**
 * Filas de la base de datos, tal como las define
 * SQL/migrations/20260929000100_catalog_schema.sql.
 *
 * Mantener sincronizado con el SQL. En la Fase 6 este archivo se puede
 * reemplazar por los tipos generados con `supabase gen types typescript`.
 *
 * Estos tipos son SOLO de la capa de datos: la UI nunca los importa,
 * usa los DTO de src/types/catalog.ts.
 */

/** timestamptz → string ISO 8601 */
type Timestamp = string;

/** numeric(12,2) → PostgREST lo devuelve como number; se acepta string por seguridad */
type Numeric = number | string;

export type CategoryRow = {
  id: string; // uuid
  name: string;
  slug: string;
  description: string | null;
  active: boolean;
  sort_order: number;
  created_at: Timestamp;
  updated_at: Timestamp;
};

export type ProductDetailJson = {
  label: string;
  value: string;
};

export type ProductRow = {
  id: string; // uuid
  category_id: string; // uuid → categories.id
  name: string;
  slug: string;
  short_description: string;
  description: string;
  price: Numeric;
  image_url: string | null;
  image_alt: string | null;
  details: ProductDetailJson[]; // jsonb (array)
  active: boolean;
  featured: boolean;
  sort_order: number;
  created_at: Timestamp;
  updated_at: Timestamp;
};
