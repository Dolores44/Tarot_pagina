import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { ContentText } from "@/components/ui/ContentText";
import type { FaqItem } from "@/content/faq";

type Props = {
  items: FaqItem[];
};

/**
 * Acordeón con <details>/<summary> nativos: accesible por teclado y
 * lector de pantalla sin JavaScript. Se reutiliza en la página de FAQ.
 */
export function FaqAccordion({ items }: Props) {
  return (
    <div className="divide-y divide-dashed divide-line/60 border-y border-dashed border-line/60">
      {items.map((item) => (
        <details key={item.id} id={item.id} className="group">
          <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 py-5 text-left transition-colors hover:text-lilac [&::-webkit-details-marker]:hidden">
            <StarSparkle className="size-3.5 shrink-0 text-violet transition-transform duration-300 group-open:rotate-45 group-open:text-lilac" />
            <span className="flex-1 font-display text-[1.0625rem] tracking-[0.03em] text-cream sm:text-xl">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="font-display text-xl text-champagne transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <ContentText text={item.answer} className="pr-2 pb-6 pl-7.5 sm:pl-8" />
        </details>
      ))}
    </div>
  );
}
