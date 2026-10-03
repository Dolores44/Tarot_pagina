import type { CSSProperties } from "react";

type Props = {
  x: number;
  y: number;
  visible: boolean;
  animate: boolean;
  /** Distancia bajo el texto del link */
  offset?: number;
};

/**
 * Pequeño orbe dorado con halo violeta. Solo se anima transform y opacity.
 * El ancho del orbe es 10px: se resta la mitad para centrarlo.
 */
export function NavOrb({ x, y, visible, animate, offset = 6 }: Props) {
  return (
    <span
      aria-hidden="true"
      className="nav-orb pointer-events-none absolute top-0 left-0 block size-2.5"
      style={
        {
          transform: `translate3d(${x - 5}px, ${y + offset}px, 0)`,
          opacity: visible ? 1 : 0,
          transition: animate
            ? "transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.4s ease"
            : "opacity 0.4s ease",
        } as CSSProperties
      }
    />
  );
}
