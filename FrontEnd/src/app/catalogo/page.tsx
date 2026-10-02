import type { Metadata } from "next";
import { CatalogView } from "@/components/catalog/CatalogView";
import { catalogTexts } from "@/content/catalog-texts";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getAllProducts, getCategoryProducts, getVisibleCategories } from "@/services/catalog.service";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Lecturas de tarot, velas hechas con intención y combos de Paola Tarot. Consultá cada uno por WhatsApp.",
  alternates: { canonical: "/catalogo" },
};

export default function CatalogPage() {
  const categories = getVisibleCategories();
  const groups = categories.map((category) => ({ category, products: getCategoryProducts(category.slug) }));

  return (
    <CatalogView
      title={catalogTexts.header}
      categories={categories}
      activeSlug={null}
      totalCount={getAllProducts().length}
      groups={groups}
      whatsappUrl={buildWhatsAppUrl()}
    />
  );
}
