import { FaqPreview } from "@/components/home/FaqPreview";
import { FeaturedReadings } from "@/components/home/FeaturedReadings";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ReadingTypes } from "@/components/home/ReadingTypes";
import { catalog } from "@/services/catalog";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default async function HomePage() {
  const featured = await catalog.getFeaturedProducts(3);
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
