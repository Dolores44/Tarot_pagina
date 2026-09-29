import { CrescentMoon, SunLine } from "@/components/ornaments/CelestialLines";
import { PeekingCat } from "@/components/ornaments/PeekingCat";
import { SideRails } from "@/components/ornaments/SideRails";
import { StarField } from "@/components/ornaments/StarField";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { BrandMark } from "@/components/ui/BrandMark";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeContent } from "@/content/home";

type Props = {
  whatsappUrl: string;
};

/**
 * Recrea la composición del arte de la marca: cielo nocturno, nebulosa
 * violeta en los laterales, emblema al centro y el gato asomándose abajo.
 */
export function Hero({ whatsappUrl }: Props) {
  const { hero } = homeContent;

  return (
    <section
      aria-labelledby="hero-title"
      className="hero-sky relative isolate overflow-hidden"
    >
      <StarField seed={7} count={90} sparkles={7} />
      <SideRails />
      <SunLine className="absolute top-8 left-6 hidden size-24 text-violet/45 sm:block lg:left-20 lg:size-32" />
      <CrescentMoon className="absolute top-10 right-8 size-16 text-lilac/40 sm:size-20 lg:right-24 lg:size-24" />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-3xl flex-col items-center justify-center px-4 pt-14 pb-40 text-center sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:pb-44">
        <div className="animate-rise">
          <BrandMark
            size={320}
            priority
            className="size-56 shadow-glow sm:size-72 lg:size-80"
          />
        </div>

        <p className="animate-rise mt-9 flex items-center gap-3 font-display text-xs tracking-label text-champagne uppercase [animation-delay:120ms] sm:text-[0.8rem]">
          <StarSparkle className="size-3 text-violet" />
          {hero.eyebrow}
          <StarSparkle className="size-3 text-violet" />
        </p>

        <h1
          id="hero-title"
          className="animate-rise mt-4 text-[2.1rem] uppercase [animation-delay:200ms] sm:text-5xl lg:text-6xl"
        >
          {hero.titleTop}
          <span className="block text-lilac text-glow">{hero.titleBottom}</span>
        </h1>

        <div className="animate-rise mt-10 flex w-full flex-col items-center justify-center gap-4 [animation-delay:300ms] sm:flex-row">
          <ButtonLink href="/catalogo" className="w-full max-w-xs sm:w-auto">
            {hero.primaryCta}
          </ButtonLink>
          <ButtonLink
            href={whatsappUrl}
            variant="whatsapp"
            className="w-full max-w-xs sm:w-auto"
            ariaLabel={`${hero.secondaryCta} (abre WhatsApp)`}
          >
            {hero.secondaryCta}
          </ButtonLink>
        </div>

        <p className="animate-rise mt-7 font-display text-[0.7rem] tracking-label text-muted/80 uppercase [animation-delay:380ms]">
          {hero.note}
        </p>
      </div>

      {/* Suelo negro + gato */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0">
        <PeekingCat className="relative mx-auto -mb-px block w-40 sm:w-48 lg:mr-[14%] lg:w-52" />
        <div className="h-5 bg-void" />
      </div>
    </section>
  );
}
