import { SideRails } from "@/components/ornaments/SideRails";
import { CelestialBackground } from "@/components/ornaments/CelestialBackground";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/content/home";
import { reveal } from "@/lib/reveal";

type CtaContent = {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  text: string;
  cta: string;
};

type Props = {
  whatsappUrl: string;
  /** Textos opcionales (por defecto, los de Inicio) */
  content?: CtaContent;
};

export function FinalCta({ whatsappUrl, content }: Props) {
  const finalCta = content ?? homeContent.finalCta;

  return (
    <section aria-labelledby="final-cta-title" className="hero-sky relative isolate overflow-hidden px-4 py-24 sm:px-8 lg:py-32">
      <CelestialBackground seed={23} density="normal" constellations={2} />
      <SideRails />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <SectionTitle
          id="final-cta-title"
          eyebrow={finalCta.eyebrow}
          titleTop={finalCta.titleTop}
          titleBottom={finalCta.titleBottom}
        />
        <p {...reveal("up", 140)} className="mt-8 max-w-lg text-[1.2rem] sm:text-[1.3rem]">
          {finalCta.text}
        </p>
        <div {...reveal("scale", 260)} className="mt-10 flex w-full justify-center">
        <ButtonLink
          href={whatsappUrl}
          variant="whatsapp"
          className="w-full max-w-sm sm:w-auto sm:max-w-none sm:px-10"
          ariaLabel={`${finalCta.cta} (abre WhatsApp)`}
        >
          {finalCta.cta}
        </ButtonLink>
        </div>
      </div>
    </section>
  );
}
