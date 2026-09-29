import type { CatalogRepository } from "@/services/catalog.repository";
import type { CategoryWithCount, Product } from "@/types/catalog";

/**
 * Datos mock con la misma forma que tendrá la base de datos (Fase 5).
 * Nombres y precios son los reales; las descripciones que no fueron
 * provistas quedan como [COMPLETAR: ...].
 * `featured` y `sortOrder` son editables: definen qué se destaca en Inicio.
 */

type MockCategory = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  active: boolean;
  sortOrder: number;
};

type MockProduct = Omit<Product, "categorySlug" | "categoryName"> & {
  active: boolean;
  sortOrder: number;
};

const RESERVA = { label: "Reserva", value: "Turnos con reserva previa" };

const categories: MockCategory[] = [
  { id: "cat-lecturas", name: "Lecturas", slug: "lecturas", description: null, active: true, sortOrder: 1 },
  { id: "cat-velas", name: "Velas", slug: "velas", description: null, active: true, sortOrder: 2 },
];

const products: MockProduct[] = [
  {
    id: "prod-pareja",
    categoryId: "cat-lecturas",
    name: "Lectura de pareja",
    slug: "lectura-de-pareja",
    shortDescription: "[COMPLETAR: descripción corta de la lectura de pareja.]",
    description: "[COMPLETAR: descripción completa de la lectura de pareja.]",
    price: 5000,
    imageUrl: null,
    imageAlt: "Lectura de pareja",
    featured: true,
    details: [RESERVA],
    active: true,
    sortOrder: 1,
  },
  {
    id: "prod-relacion",
    categoryId: "cat-lecturas",
    name: "Lectura sobre tu relación",
    slug: "lectura-sobre-tu-relacion",
    // Flyer "5 preguntas para tu relación"
    shortDescription: "5 preguntas enfocadas en tu pareja actual.",
    description:
      "Una sesión de 5 preguntas enfocadas en tu pareja actual: qué siente realmente por vos en este momento, qué piensa de la relación y hacia dónde quiere llevarla, cuáles son sus intenciones a corto y mediano plazo, qué pueden mejorar juntos y qué consejo tienen las cartas para la relación.",
    price: 8000,
    imageUrl: null,
    imageAlt: "Lectura sobre tu relación",
    featured: true,
    details: [{ label: "Sesión", value: "5 preguntas" }, RESERVA],
    active: true,
    sortOrder: 2,
  },
  {
    id: "prod-30min",
    categoryId: "cat-lecturas",
    name: "Lectura de 30 minutos",
    slug: "lectura-de-30-minutos",
    shortDescription: "[COMPLETAR: descripción corta de la lectura de 30 minutos.]",
    description: "[COMPLETAR: descripción completa de la lectura de 30 minutos.]",
    price: 8000,
    imageUrl: null,
    imageAlt: "Lectura de 30 minutos",
    featured: false,
    details: [{ label: "Duración", value: "30 minutos" }, RESERVA],
    active: true,
    sortOrder: 3,
  },
  {
    id: "prod-1hora",
    categoryId: "cat-lecturas",
    name: "Lectura de 1 hora",
    slug: "lectura-de-1-hora",
    // Flyer "Sesión de tarot 1 hora"
    shortDescription: "Preguntas libres, mensajes y orientación para tu camino.",
    description:
      "Una sesión de preguntas libres: mensajes y orientación para tu camino, descubrí qué energías te rodean y consultá sobre cualquier tema que necesites aclarar.",
    price: 18000,
    imageUrl: null,
    imageAlt: "Lectura de 1 hora",
    featured: true,
    details: [{ label: "Duración", value: "1 hora" }, RESERVA],
    active: true,
    sortOrder: 4,
  },
  {
    id: "prod-expareja",
    categoryId: "cat-lecturas",
    name: "Lectura de la expareja",
    slug: "lectura-de-la-expareja",
    shortDescription: "[COMPLETAR: descripción corta de la lectura de la expareja.]",
    description: "[COMPLETAR: descripción completa de la lectura de la expareja.]",
    price: 10000,
    imageUrl: null,
    imageAlt: "Lectura de la expareja",
    featured: false,
    details: [RESERVA],
    active: true,
    sortOrder: 5,
  },
];

const bySortOrder = (a: { sortOrder: number }, b: { sortOrder: number }) => a.sortOrder - b.sortOrder;

function activeCategories(): MockCategory[] {
  return categories.filter((c) => c.active).sort(bySortOrder);
}

function toProduct(p: MockProduct): Product | null {
  const category = categories.find((c) => c.id === p.categoryId && c.active);
  if (!category) return null;
  // Se arma el DTO campo por campo: los internos (active, sortOrder) no salen
  return {
    id: p.id,
    categoryId: p.categoryId,
    categorySlug: category.slug,
    categoryName: category.name,
    name: p.name,
    slug: p.slug,
    shortDescription: p.shortDescription,
    description: p.description,
    price: p.price,
    imageUrl: p.imageUrl,
    imageAlt: p.imageAlt,
    featured: p.featured,
    details: p.details,
  };
}

function activeProducts(): Product[] {
  return products
    .filter((p) => p.active)
    .sort(bySortOrder)
    .map(toProduct)
    .filter((p): p is Product => p !== null);
}

export const mockCatalogRepository: CatalogRepository = {
  async getCategories(): Promise<CategoryWithCount[]> {
    const visible = activeProducts();
    return activeCategories().map(({ id, name, slug, description }) => ({
      id,
      name,
      slug,
      description,
      productCount: visible.filter((p) => p.categoryId === id).length,
    }));
  },

  async getProducts(options) {
    const all = activeProducts();
    return options?.categorySlug ? all.filter((p) => p.categorySlug === options.categorySlug) : all;
  },

  async getFeaturedProducts(limit = 3) {
    return activeProducts()
      .filter((p) => p.featured)
      .slice(0, limit);
  },

  async getProductBySlug(categorySlug, productSlug) {
    return (
      activeProducts().find((p) => p.categorySlug === categorySlug && p.slug === productSlug) ?? null
    );
  },
};
