"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { NavOrb } from "@/components/layout/NavOrb";
import { useNavOrb } from "@/components/layout/useNavOrb";
import { CelestialBackground } from "@/components/ornaments/CelestialBackground";
import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { BrandMark } from "@/components/ui/BrandMark";
import { CloseIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { isActivePath } from "@/lib/nav";

type Props = {
  open: boolean;
  onClose: () => void;
  pathname: string;
  whatsappUrl: string;
};

/**
 * Menú mobile a pantalla completa.
 * - Cierra con Escape, con el botón o al elegir un link.
 * - Mueve el foco al abrir y lo mantiene dentro del panel (Tab / Shift+Tab).
 * - Bloquea el scroll del fondo mientras está abierto.
 */
export function MobileMenu({ open, onClose, pathname, whatsappUrl }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const activeIndex = siteConfig.nav.findIndex((item) => isActivePath(pathname, item.href));
  // Mismo orbe que el header, en vertical: viaja al link tocado/enfocado
  const { pos, itemProps, containerProps } = useNavOrb(activeIndex, open);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      id="menu-mobile"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menú"
      hidden={!open}
      className="fixed inset-0 z-50 overflow-y-auto bg-night md:hidden"
    >
      <div className="hero-sky absolute inset-0" aria-hidden="true" />
      <CelestialBackground seed={11} density="low" constellations={0} />

      <div className="relative flex min-h-full flex-col px-6 pt-[env(safe-area-inset-top)] pb-10">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={onClose} className="flex items-center gap-3" aria-label={`${siteConfig.name} — Inicio`}>
            <BrandMark size={44} decorative />
            <span className="font-display text-base tracking-[0.18em] text-cream uppercase">
              {siteConfig.name}
            </span>
          </Link>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="-mr-2 inline-flex size-12 items-center justify-center text-cream"
          >
            <CloseIcon />
            <span className="sr-only">Cerrar menú</span>
          </button>
        </div>

        <nav aria-label="Principal (mobile)" className="mt-14 flex-1">
          <ul {...containerProps} className="relative flex flex-col items-center gap-2">
            {siteConfig.nav.map((item, index) => {
              const active = index === activeIndex;
              return (
                <li key={item.href}>
                  <Link
                    {...itemProps(index)}
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`block px-2 py-4 text-center font-display text-[1.3rem] tracking-[0.05em] uppercase transition-colors min-[400px]:text-2xl ${
                      active ? "text-lilac text-glow" : "text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <NavOrb {...pos} offset={-10} />
          </ul>
          <OrnamentDivider className="mx-auto mt-10 h-5 w-44 text-gold/70" />
        </nav>

        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-13 w-full max-w-sm items-center justify-center gap-2.5 rounded-sm border border-champagne/80 font-display text-button tracking-[0.12em] text-champagne uppercase"
          >
            <WhatsAppIcon />
            Consultar por WhatsApp
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-6">
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-muted"
            >
              <InstagramIcon className="size-5" />@{siteConfig.social.instagram.handle}
            </a>
            <a
              href={siteConfig.social.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-muted"
            >
              <TikTokIcon className="size-5" />@{siteConfig.social.tiktok.handle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
