import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogView } from "@/components/catalog/CatalogView";
import { hasPlaceholder } from "@/content/placeholder";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  getAllProducts,
  getCategory,
  getCategoryProducts,
  getVisibleCategories,
} from "@/services/catalog.service";

export async function generateStaticParams() {
  const categories = await getVisibleCategories();
  return categories.map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata(props: PageProps<"/catalogo/[categoria]">): Promise<Metadata> {
  const { categoria } = await props.params;
  const category = await getCategory(categoria);
  if (!category) return {};

  const description =
    category.description && !hasPlaceholder(category.description)
      ? category.description
      : `${category.name} de Paola Tarot: precios, detalles y consultas por WhatsApp.`;

  return {
    title: `${category.name} — Catálogo`,
    description,
    alternates: { canonical: `/catalogo/${category.slug}` },
  };
}

export default async function CategoryPage(props: PageProps<"/catalogo/[categoria]">) {
  const { categoria } = await props.params;

  // Validación del slug + búsqueda: un valor inválido o inexistente es 404
  const category = await getCategory(categoria);
  if (!category) notFound();

  const [categories, products, all] = await Promise.all([
    getVisibleCategories(),
    getCategoryProducts(category.slug),
    getAllProducts(),
  ]);

  return (
    <CatalogView
      title={{ eyebrow: "Catálogo", titleTop: category.name }}
      description={category.description}
      categories={categories}
      activeSlug={category.slug}
      totalCount={all.length}
      products={products}
      whatsappUrl={buildWhatsAppUrl()}
    />
  );
}
