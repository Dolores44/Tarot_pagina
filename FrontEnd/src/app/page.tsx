import type { Metadata } from "next";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FeaturedReadings } from "@/components/home/FeaturedReadings";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ReadingTypes } from "@/components/home/ReadingTypes";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getFeaturedProducts } from "@/services/catalog.service";
import { siteConfig } from "@/config/site";

// og:url solo en Inicio: si estuviera en el layout, todas las páginas heredarían la URL de Inicio
export const metadata: Metadata = {
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: "/",
    title: siteConfig.share.title,
    description: siteConfig.share.description,
    images: [siteConfig.share.image],
  },
};

export default function HomePage() {
  const featured = getFeaturedProducts(3);
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <>
      <Hero whatsappUrl={whatsappUrl} />
      <Intro />
      <ReadingTypes />
      <FeaturedReadings products={featured} />
      <FaqPreview />
      <FinalCta whatsappUrl={whatsappUrl} />
    </>
  );
}
