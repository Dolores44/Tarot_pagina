import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { reveal } from "@/lib/reveal";

type Props = {
  eyebrow: string;
  titleTop: string;
  titleBottom?: string;
  as?: "h1" | "h2";
  id?: string;
  divider?: boolean;
  /**
   * "bottom": la primera línea ~3px más chica para que la segunda
   * (la frase principal, en lila) tenga más protagonismo.
   */
  emphasis?: "bottom";
  /** false para títulos que ya están visibles al cargar (no animar) */
  animate?: boolean;
  className?: string;
};

/**
 * Patrón de título de los flyers:
 *   ✦ SUBTÍTULO CHAMPAGNE ✦
 *   TÍTULO EN CREMA
 *   SEGUNDA LÍNEA LILA
 *   ——— ☾ ———
 * Entrada escalonada: subtítulo → título (blur → nítido) → ornamento.
 */
export function SectionTitle({
  eyebrow,
  titleTop,
  titleBottom,
  as: Heading = "h2",
  id,
  divider = true,
  emphasis,
  animate = true,
  className,
}: Props) {
  const rv = (variant: Parameters<typeof reveal>[0], delay: number) => (animate ? reveal(variant, delay) : {});

  return (
    <div className={`flex flex-col items-center text-center ${className ?? ""}`}>
      <p
        {...rv("up", 0)}
        className="flex items-center gap-3 font-display text-label tracking-label text-champagne uppercase sm:text-button"
      >
        <StarSparkle className="size-3.5 shrink-0 text-violet" />
        {eyebrow}
        <StarSparkle className="size-3.5 shrink-0 text-violet" />
      </p>
      <Heading {...rv("blur", 120)} id={id} className="mt-4 text-[2.125rem] uppercase sm:text-5xl lg:text-[3.4rem]">
        <span className={emphasis === "bottom" ? "block text-[1.94rem] sm:text-[2.82rem] lg:text-[3.21rem]" : undefined}>
          {titleTop}
        </span>
        {titleBottom && <span className="block text-lilac text-glow">{titleBottom}</span>}
      </Heading>
      {divider && <OrnamentDivider {...rv("scale", 260)} className="mt-6 h-5 w-44 text-gold/80 sm:w-52" />}
    </div>
  );
}
