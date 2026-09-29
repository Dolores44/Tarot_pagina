import { StarSparkle } from "@/components/ornaments/StarSparkle";

type Props = {
  className?: string;
};

function Rail({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`absolute inset-y-10 ${side === "left" ? "left-6 xl:left-10" : "right-6 xl:right-10"} flex flex-col items-center`}
    >
      <StarSparkle className="size-4 text-violet" />
      <span className="w-px flex-1 border-l border-dotted border-violet/40" />
      <span className="my-3 size-1.5 rotate-45 bg-violet/60" />
      <span className="w-px flex-1 border-l border-dotted border-violet/40" />
      <StarSparkle className="size-4 text-violet" />
    </div>
  );
}

/**
 * Rieles verticales punteados de los bordes de los flyers.
 * Solo en pantallas grandes: en mobile quitarían ancho útil.
 */
export function SideRails({ className }: Props) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 hidden lg:block ${className ?? ""}`}>
      <Rail side="left" />
      <Rail side="right" />
    </div>
  );
}
