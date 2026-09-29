import type { ReactNode } from "react";
import { StarField } from "@/components/ornaments/StarField";

type Props = {
  children: ReactNode;
  seed?: number;
  className?: string;
};

/**
 * Franja de cielo para encabezar páginas internas (versión compacta del hero).
 * overflow-clip (no hidden) para no romper elementos sticky dentro.
 */
export function PageBand({ children, seed = 31, className }: Props) {
  return (
    <div className={`hero-sky relative isolate overflow-clip px-4 sm:px-8 ${className ?? ""}`}>
      <StarField seed={seed} count={55} sparkles={4} />
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </div>
  );
}
