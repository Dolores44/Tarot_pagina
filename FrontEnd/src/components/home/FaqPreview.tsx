import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqItems } from "@/content/faq";
import { homeContent } from "@/content/home";

export function FaqPreview() {
  const { faq } = homeContent;
  const items = faqItems.filter((item) => item.showOnHome);

  return (
    <section aria-labelledby="faq-title" className="section-nebula px-4 py-20 sm:px-8 lg:py-28">
      <div className="reveal mx-auto max-w-3xl">
        <SectionTitle id="faq-title" eyebrow={faq.eyebrow} titleTop={faq.titleTop} titleBottom={faq.titleBottom} />
        <div className="mt-12">
          <FaqAccordion items={items} />
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/preguntas-frecuentes" variant="text">
            {faq.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
