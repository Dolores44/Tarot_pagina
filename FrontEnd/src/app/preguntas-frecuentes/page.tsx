import type { Metadata } from "next";
import { PageBand } from "@/components/catalog/PageBand";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { FinalCta } from "@/components/home/FinalCta";
import { CelestialBackground } from "@/components/ornaments/CelestialBackground";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqGroups, faqItems, faqPageContent } from "@/content/faq";
import { reveal } from "@/lib/reveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Cómo se realizan las lecturas de Paola Tarot, cómo reservar, cómo se paga y cuánto dura cada sesión. Lecturas virtuales por WhatsApp.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

export default function FaqPage() {
  const groups = faqGroups
    .map((group) => ({ ...group, items: faqItems.filter((item) => item.group === group.id) }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <PageBand seed={61} className="pt-16 pb-14 lg:pt-20 lg:pb-16">
        <SectionTitle as="h1" id="faq-page-title" emphasis="bottom" {...faqPageContent.header} />
        <p {...reveal("up", 200)} className="mx-auto mt-6 max-w-xl text-center text-[1.15rem] sm:text-[1.25rem]">
          {faqPageContent.intro}
        </p>
      </PageBand>

      <section
        aria-labelledby="faq-page-title"
        className="relative isolate overflow-clip bg-night px-4 pt-14 pb-24 sm:px-8 lg:pt-20 lg:pb-28"
      >
        <CelestialBackground seed={67} density="low" constellations={1} />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl space-y-16 lg:space-y-20">
            {groups.map((group) => (
              <section key={group.id} aria-labelledby={`faq-grupo-${group.id}`}>
                <h2
                  id={`faq-grupo-${group.id}`}
                  {...reveal("blur")}
                  className="mb-6 flex items-center gap-3 font-display text-label tracking-label text-champagne uppercase sm:text-button"
                >
                  <StarSparkle className="size-3.5 shrink-0 text-violet" />
                  {group.title}
                </h2>
                <FaqAccordion items={group.items} />
              </section>
            ))}
          </div>
        </div>
      </section>

      <FinalCta whatsappUrl={buildWhatsAppUrl()} content={faqPageContent.finalCta} />
    </>
  );
}
