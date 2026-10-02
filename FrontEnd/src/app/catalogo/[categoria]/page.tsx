import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogView } from "@/components/catalog/CatalogView";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  getAllProducts,
  getCategory,
  getCategoryProducts,
  getVisibleCategories,
} from "@/services/catalog.service";

export function generateStaticParams() {
  return getVisibleCategories().map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata(props: PageProps<"/catalogo/[categoria]">): Promise<Metadata> {
  const { categoria } = await props.params;
  const category = getCategory(categoria);
  if (!category) return {};

  return {
    title: `${category.name} — Catálogo`,
    description:
      category.description ?? `${category.name} de ${siteConfig.name}. Consultá cada una por WhatsApp.`,
    alternates: { canonical: `/catalogo/${category.slug}` },
  };
}

export default async function CategoryPage(props: PageProps<"/catalogo/[categoria]">) {
  const { categoria } = await props.params;

  // Validación del slug + búsqueda: un valor inválido o inexistente es 404
  const category = getCategory(categoria);
  if (!category) notFound();

  const categories = getVisibleCategories();
  const current = categories.find((c) => c.slug === category.slug)!;

  return (
    <CatalogView
      title={{ eyebrow: "Catálogo", titleTop: category.name }}
      description={category.description}
      categories={categories}
      activeSlug={category.slug}
      totalCount={getAllProducts().length}
      groups={[{ category: current, products: getCategoryProducts(category.slug) }]}
      whatsappUrl={buildWhatsAppUrl()}
    />
  );
}
