import { CrescentMoon } from "@/components/ornaments/CelestialLines";
import { CelestialBackground } from "@/components/ornaments/CelestialBackground";
import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/content/home";
import { reveal } from "@/lib/reveal";

/**
 * Presentación narrativa: la historia de Paola en primera persona,
 * su bienvenida en Cinzel Decorative y, aparte, cómo funcionan las lecturas.
 */
export function Intro() {
  const { intro } = homeContent;

  return (
    <section aria-labelledby="intro-title" className="relative isolate overflow-clip bg-night px-4 pt-24 pb-24 sm:px-8 lg:pt-32 lg:pb-28">
      <CelestialBackground seed={3} density="low" constellations={1} />
      <CrescentMoon className="absolute top-24 right-[8%] hidden size-16 text-lilac/25 lg:block" />

      <div className="relative mx-auto max-w-3xl">
        <SectionTitle
          id="intro-title"
          eyebrow={intro.eyebrow}
          titleTop={intro.titleTop}
          titleBottom={intro.titleBottom}
          emphasis="bottom"
        />

        <div className="mt-12 space-y-6 text-center text-[1.2rem] leading-relaxed text-cream/90 sm:text-[1.4rem]">
          {intro.story.map((paragraph, i) => (
            <p key={i} {...reveal("up", i * 140)}>
              {paragraph}
            </p>
          ))}
        </div>

        <p
          {...reveal("blur", 120)}
          className="mt-10 text-center font-decorative text-2xl text-champagne sm:text-[1.9rem]"
        >
          {intro.welcome}
        </p>
        <OrnamentDivider {...reveal("scale", 220)} className="mx-auto mt-6 h-5 w-44 text-gold/70" />

        <div {...reveal("scale", 120)} className="flyer-box relative mt-12 px-6 py-9 sm:px-12 sm:py-10">
          <StarSparkle className="absolute -top-2 -left-2 size-4 text-lilac" />
          <StarSparkle className="absolute -right-2 -bottom-2 size-4 text-lilac" />
          <div className="space-y-4 text-center sm:text-[1.25rem]">
            {intro.practical.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
