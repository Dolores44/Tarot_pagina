import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { CelestialBackground } from "@/components/ornaments/CelestialBackground";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqItems } from "@/content/faq";
import { homeContent } from "@/content/home";
import { reveal } from "@/lib/reveal";

export function FaqPreview() {
  const { faq } = homeContent;
  const items = faqItems.filter((item) => item.showOnHome);

  return (
    <section aria-labelledby="faq-title" className="section-nebula relative isolate overflow-clip px-4 py-20 sm:px-8 lg:py-28">
      <CelestialBackground seed={43} density="low" constellations={1} />
      <div className="relative mx-auto max-w-3xl">
        <SectionTitle
          id="faq-title"
          eyebrow={faq.eyebrow}
          titleTop={faq.titleTop}
          titleBottom={faq.titleBottom}
          emphasis="bottom"
        />
        <div className="mt-12">
          <FaqAccordion items={items} />
        </div>
        <div {...reveal("up")} className="mt-10 flex justify-center">
          <ButtonLink href="/preguntas-frecuentes" variant="text">
            {faq.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
