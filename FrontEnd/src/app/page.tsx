import { FaqPreview } from "@/components/home/FaqPreview";
import { FeaturedReadings } from "@/components/home/FeaturedReadings";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ReadingTypes } from "@/components/home/ReadingTypes";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { getFeaturedProducts } from "@/services/catalog.service";

export default async function HomePage() {
  const featured = await getFeaturedProducts(3);
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
