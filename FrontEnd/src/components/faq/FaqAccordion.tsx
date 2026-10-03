import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { ContentText } from "@/components/ui/ContentText";
import type { FaqItem } from "@/content/faq";
import { reveal, stagger } from "@/lib/reveal";

type Props = {
  items: FaqItem[];
};

/**
 * Acordeón de preguntas frecuentes (Inicio y /preguntas-frecuentes).
 * <details>/<summary> nativos: accesible por teclado y lector de pantalla sin JavaScript.
 * Preguntas en Crimson Pro sin mayúsculas forzadas (legibilidad), indicador circular
 * y apertura/cierre suave por CSS (.faq-item en globals.css).
 */
export function FaqAccordion({ items }: Props) {
  return (
    <div className="divide-y divide-dashed divide-line/60 border-y border-dashed border-line/60">
      {items.map((item, index) => (
        <details key={item.id} id={item.id} {...reveal("up", stagger(index, 100))} className="faq-item group">
          <summary className="flex min-h-18 cursor-pointer list-none items-center gap-4 py-6 text-left transition-colors duration-300 hover:text-lilac sm:gap-5 [&::-webkit-details-marker]:hidden">
            <StarSparkle className="size-3.5 shrink-0 text-violet transition-transform duration-500 group-open:rotate-45 group-open:text-lilac" />
            <span className="min-w-0 flex-1 font-body text-[1.3rem] leading-snug font-medium text-cream transition-colors duration-300 group-open:text-lilac sm:text-[1.5rem]">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-champagne/50 font-display text-xl text-champagne transition duration-500 group-open:rotate-45 group-open:border-lilac group-open:text-lilac"
            >
              +
            </span>
          </summary>
          <div className="faq-answer pr-2 pb-8 pl-8 sm:pr-16 sm:pl-9">
            <ContentText text={item.answer} className="text-[1.15rem] leading-relaxed sm:text-[1.25rem]" />
          </div>
        </details>
      ))}
    </div>
  );
}
