import type { Metadata } from "next";
import { CatalogView } from "@/components/catalog/CatalogView";
import { catalogContent } from "@/content/catalog";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getAllProducts, getVisibleCategories } from "@/services/catalog.service";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Catálogo de lecturas de tarot de Paola Tarot: precios, detalles y consultas por WhatsApp.",
  alternates: { canonical: "/catalogo" },
};

export default async function CatalogPage() {
  const [categories, products] = await Promise.all([getVisibleCategories(), getAllProducts()]);

  return (
    <CatalogView
      title={catalogContent.header}
      categories={categories}
      activeSlug={null}
      totalCount={products.length}
      products={products}
      whatsappUrl={buildWhatsAppUrl()}
    />
  );
}
