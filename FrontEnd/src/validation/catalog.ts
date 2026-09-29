import { z } from "zod";

/**
 * Los parámetros de URL son datos no confiables: se validan antes de
 * llegar a la capa de datos. Un slug inválido se trata como 404.
 */
export const slugSchema = z
  .string()
  .min(1)
  .max(80)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export function parseSlug(value: unknown): string | null {
  const result = slugSchema.safeParse(value);
  return result.success ? result.data : null;
}

/** Precio en pesos enteros; usado por el futuro panel /admin */
export const priceSchema = z.number().int().min(0).max(10_000_000);
