import { CelestialBackground } from "@/components/ornaments/CelestialBackground";
import { ContentText } from "@/components/ui/ContentText";
import { HourglassIcon, RingsIcon, WaningMoonIcon } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent, type ReadingTypeIcon } from "@/content/home";
import { reveal, stagger } from "@/lib/reveal";

const icons: Record<ReadingTypeIcon, typeof RingsIcon> = {
  rings: RingsIcon,
  moon: WaningMoonIcon,
  hourglass: HourglassIcon,
};

/** Tipos de lectura con badges circulares, como los íconos de los flyers. */
export function ReadingTypes() {
  const { readingTypes } = homeContent;

  return (
    <section aria-labelledby="reading-types-title" className="section-nebula relative isolate overflow-clip px-4 py-20 sm:px-8 lg:py-28">
      <CelestialBackground seed={19} density="low" constellations={0} />
      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          id="reading-types-title"
          eyebrow={readingTypes.eyebrow}
          titleTop={readingTypes.titleTop}
          titleBottom={readingTypes.titleBottom}
          emphasis="bottom"
        />

        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-14">
          {readingTypes.items.map((item, index) => {
            const Icon = icons[item.icon];
            const delay = stagger(index, 130);
            return (
              <li key={item.title} {...reveal("up", delay)} className="flex flex-col items-center text-center">
                <span
                  {...reveal("scale", delay + 120)}
                  className="flex size-20 items-center justify-center rounded-full border border-line bg-surface shadow-glow-sm"
                >
                  <span className="flex size-16 items-center justify-center rounded-full border border-dashed border-gold/50">
                    <Icon className="size-8 text-lilac" />
                  </span>
                </span>
                <h3 className="mt-6 text-xl uppercase sm:text-2xl">{item.title}</h3>
                <ContentText text={item.text} className="mt-3 max-w-sm" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
