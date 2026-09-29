"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { StarField } from "@/components/ornaments/StarField";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { BrandMark } from "@/components/ui/BrandMark";
import { CloseIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
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
      <StarField seed={11} count={45} sparkles={3} />

      <div className="relative flex min-h-full flex-col px-6 pt-[env(safe-area-inset-top)] pb-10">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={onClose} className="flex items-center gap-3" aria-label={`${siteConfig.name} — Inicio`}>
            <BrandMark size={44} decorative />
            <span className="font-display text-[0.95rem] tracking-[0.18em] text-cream uppercase">
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
          <ul className="flex flex-col items-center gap-2">
            {siteConfig.nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`relative block px-2 py-4 text-center font-display text-[1.3rem] tracking-[0.05em] uppercase min-[400px]:text-2xl ${
                      active ? "text-lilac text-glow" : "text-cream"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <StarSparkle className="absolute bottom-1 left-1/2 size-3 -translate-x-1/2 text-lilac" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <OrnamentDivider className="mx-auto mt-10 h-5 w-44 text-gold/70" />
        </nav>

        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-13 w-full max-w-xs items-center justify-center gap-2.5 rounded-sm border border-champagne/80 font-display text-sm tracking-label text-champagne uppercase"
          >
            <WhatsAppIcon />
            Consultar por WhatsApp
          </a>
          <a
            href={siteConfig.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2 text-muted"
          >
            <InstagramIcon className="size-5" />@{siteConfig.social.instagram.handle}
          </a>
        </div>
      </div>
    </div>
  );
}
