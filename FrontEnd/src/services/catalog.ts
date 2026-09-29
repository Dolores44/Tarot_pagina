import "server-only";
import { mockCatalogRepository } from "@/services/catalog.mock";
import type { CatalogRepository } from "@/services/catalog.repository";

/**
 * Repositorio activo del catálogo. Las páginas importan solo `catalog`.
 * En la Fase 6 se reemplaza por la implementación de Supabase acá mismo.
 */
export const catalog: CatalogRepository = mockCatalogRepository;
