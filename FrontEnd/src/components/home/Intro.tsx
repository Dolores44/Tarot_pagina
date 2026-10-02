import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { ContentText } from "@/components/ui/ContentText";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/content/home";

/** Presentación: caja estilo flyer (borde violeta fino, esquinas con estrellas). */
export function Intro() {
  const { intro } = homeContent;

  return (
    <section aria-labelledby="intro-title" className="bg-night px-4 pt-24 pb-20 sm:px-8 lg:pt-32">
      <div className="reveal mx-auto max-w-3xl">
        <SectionTitle id="intro-title" eyebrow={intro.eyebrow} titleTop={intro.titleTop} titleBottom={intro.titleBottom} />

        <div className="flyer-box relative mt-12 px-6 py-10 sm:px-12 sm:py-12">
          <StarSparkle className="absolute -top-2 -left-2 size-4 text-lilac" />
          <StarSparkle className="absolute -right-2 -bottom-2 size-4 text-lilac" />
          <div className="space-y-5 text-center text-[1.2rem] leading-relaxed sm:text-[1.35rem]">
            {intro.paragraphs.map((paragraph) => (
              <ContentText key={paragraph} text={paragraph} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
