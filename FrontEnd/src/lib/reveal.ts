import type { CSSProperties } from "react";

export type RevealVariant = "up" | "scale" | "blur" | "left" | "right";

/**
 * Props para que un elemento aparezca al entrar al viewport:
 *   <h2 {...reveal("blur", 120)}>…</h2>
 * Funciona en Server Components: solo agrega atributos. El trabajo lo hace
 * <RevealObserver /> (montado una vez en el layout) y la CSS de globals.css.
 */
export function reveal(variant: RevealVariant = "up", delayMs = 0) {
  return {
    "data-reveal": variant,
    style: (delayMs ? { "--rv-delay": `${delayMs}ms` } : undefined) as CSSProperties | undefined,
  };
}

/** Delay escalonado para grupos (cards, ítems): 0, 110, 220… */
export function stagger(index: number, stepMs = 110, baseMs = 0) {
  return baseMs + index * stepMs;
}
