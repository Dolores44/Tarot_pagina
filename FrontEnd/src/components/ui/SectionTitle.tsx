import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { StarSparkle } from "@/components/ornaments/StarSparkle";

type Props = {
  eyebrow: string;
  titleTop: string;
  titleBottom?: string;
  as?: "h1" | "h2";
  id?: string;
  divider?: boolean;
  className?: string;
};

/**
 * Patrón de título de los flyers:
 *   ✦ SUBTÍTULO CHAMPAGNE ✦
 *   TÍTULO EN CREMA
 *   SEGUNDA LÍNEA LILA
 *   ——— ☾ ———
 */
export function SectionTitle({
  eyebrow,
  titleTop,
  titleBottom,
  as: Heading = "h2",
  id,
  divider = true,
  className,
}: Props) {
  return (
    <div className={`flex flex-col items-center text-center ${className ?? ""}`}>
      <p className="flex items-center gap-3 font-display text-xs tracking-label text-champagne uppercase sm:text-[0.8rem]">
        <StarSparkle className="size-3 text-violet" />
        {eyebrow}
        <StarSparkle className="size-3 text-violet" />
      </p>
      <Heading id={id} className="mt-4 text-3xl uppercase sm:text-4xl lg:text-[2.75rem]">
        {titleTop}
        {titleBottom && <span className="block text-lilac text-glow">{titleBottom}</span>}
      </Heading>
      {divider && <OrnamentDivider className="mt-6 h-5 w-44 text-gold/80 sm:w-52" />}
    </div>
  );
}
