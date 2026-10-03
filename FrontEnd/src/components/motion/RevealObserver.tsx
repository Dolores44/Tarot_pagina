"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Un único observador para todo el sitio:
 * - [data-reveal]: se marca data-revealed una sola vez al entrar al viewport.
 * - [data-celestial]: se marca data-active mientras el fondo está visible,
 *   así las animaciones del cielo se pausan fuera de pantalla (menos CPU/GPU).
 *
 * Se vuelve a escanear al cambiar de ruta y cuando aparece contenido nuevo.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          revealObserver.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    const skyObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) entry.target.toggleAttribute("data-active", entry.isIntersecting);
      },
      { rootMargin: "120px 0px" },
    );

    const scan = () => {
      document.querySelectorAll("[data-reveal]:not([data-revealed])").forEach((el) => revealObserver.observe(el));
      document.querySelectorAll("[data-celestial]").forEach((el) => skyObserver.observe(el));
    };
    scan();

    // Contenido que se monta después (menú mobile, navegación del cliente)
    let frame = 0;
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      revealObserver.disconnect();
      skyObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
