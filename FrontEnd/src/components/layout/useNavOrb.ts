"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type OrbPosition = { x: number; y: number; visible: boolean; animate: boolean };

/**
 * Orbe luminoso que viaja por debajo de los links del menú.
 * - Se ubica bajo el link activo y viaja (transform) al cambiar de página.
 * - Con hover/foco se desplaza temporalmente a ese link y vuelve al activo.
 * - Mide posiciones solo cuando hace falta (cambio de destino, resize, carga de fuentes).
 *
 * @param activeIndex índice del link activo (-1 = ninguno: el orbe se oculta)
 * @param enabled para el menú mobile: medir solo cuando está abierto
 */
export function useNavOrb(activeIndex: number, enabled = true) {
  const containerRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [pos, setPos] = useState<OrbPosition>({ x: 0, y: 0, visible: false, animate: false });

  const target = hoverIndex ?? activeIndex;

  const measure = useCallback(() => {
    const container = containerRef.current;
    const item = target >= 0 ? itemRefs.current[target] : null;
    if (!container || !item || !enabled) {
      setPos((p) => ({ ...p, visible: false }));
      return;
    }
    const c = container.getBoundingClientRect();
    const r = item.getBoundingClientRect();
    if (r.width === 0) return;
    setPos((p) => ({
      x: r.left - c.left + r.width / 2,
      y: r.bottom - c.top,
      visible: true,
      // la primera vez se ubica sin animar (no "vuela" desde la esquina)
      animate: p.visible,
    }));
  }, [target, enabled]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    const observer = new ResizeObserver(() => measure());
    if (container) observer.observe(container);
    document.fonts?.ready.then(() => measure());
    return () => observer.disconnect();
  }, [measure, enabled]);

  const itemProps = (index: number) => ({
    ref: (el: HTMLElement | null) => {
      itemRefs.current[index] = el;
    },
    onMouseEnter: () => setHoverIndex(index),
    onFocus: () => setHoverIndex(index),
    onBlur: () => setHoverIndex(null),
  });

  const containerProps = {
    ref: containerRef,
    onMouseLeave: () => setHoverIndex(null),
  };

  return { pos, itemProps, containerProps };
}
