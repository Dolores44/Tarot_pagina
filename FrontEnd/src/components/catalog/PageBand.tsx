import type { ReactNode } from "react";
import { CelestialBackground } from "@/components/ornaments/CelestialBackground";

type Props = {
  children: ReactNode;
  seed?: number;
  nebula?: "fuchsia";
  className?: string;
};

/**
 * Franja de cielo para encabezar páginas internas (versión compacta del hero).
 * overflow-clip (no hidden) para no romper elementos sticky dentro.
 */
export function PageBand({ children, seed = 31, nebula, className }: Props) {
  return (
    <div className={`hero-sky relative isolate overflow-clip px-4 sm:px-8 ${className ?? ""}`}>
      <CelestialBackground seed={seed} density="normal" constellations={1} nebula={nebula} />
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </div>
  );
}
