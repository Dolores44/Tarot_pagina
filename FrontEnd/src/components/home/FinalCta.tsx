import { SideRails } from "@/components/ornaments/SideRails";
import { StarField } from "@/components/ornaments/StarField";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/content/home";

type Props = {
  whatsappUrl: string;
};

export function FinalCta({ whatsappUrl }: Props) {
  const { finalCta } = homeContent;

  return (
    <section aria-labelledby="final-cta-title" className="hero-sky relative isolate overflow-hidden px-4 py-24 sm:px-8 lg:py-32">
      <StarField seed={23} count={60} sparkles={4} />
      <SideRails />

      <div className="reveal relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <SectionTitle
          id="final-cta-title"
          eyebrow={finalCta.eyebrow}
          titleTop={finalCta.titleTop}
          titleBottom={finalCta.titleBottom}
        />
        <p className="mt-8 max-w-md text-[1.1rem]">{finalCta.text}</p>
        <ButtonLink
          href={whatsappUrl}
          variant="whatsapp"
          className="mt-10 w-full max-w-xs sm:w-auto sm:px-10"
          ariaLabel={`${finalCta.cta} (abre WhatsApp)`}
        >
          {finalCta.cta}
        </ButtonLink>
      </div>
    </section>
  );
}
