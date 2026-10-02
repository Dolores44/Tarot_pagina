"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { BrandMark } from "@/components/ui/BrandMark";
import { MenuIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { isActivePath } from "@/lib/nav";

type Props = {
  whatsappUrl: string;
};

export function Header({ whatsappUrl }: Props) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // El menú se renderiza fuera del <header>: el backdrop-blur del header
  // crearía un contexto que recorta los elementos `fixed` hijos.
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/35 bg-night/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8 lg:h-22">
          <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} — Inicio`}>
            <BrandMark size={48} priority decorative className="size-11 shadow-glow-sm lg:size-13" />
            <span className="font-display text-base tracking-[0.18em] text-cream uppercase lg:text-lg">
              {siteConfig.name}
            </span>
          </Link>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-10">
              {siteConfig.nav.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative block py-2 font-display text-nav tracking-[0.12em] uppercase transition-colors duration-300 ${
                        active ? "text-lilac" : "text-muted hover:text-cream"
                      }`}
                    >
                      {item.label}
                      <StarSparkle
                        className={`absolute -bottom-1.5 left-1/2 size-2.5 -translate-x-1/2 text-lilac transition-opacity duration-300 ${
                          active ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="-mr-2 inline-flex size-12 items-center justify-center text-cream md:hidden"
          >
            <MenuIcon />
            <span className="sr-only">Abrir menú</span>
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        pathname={pathname}
        whatsappUrl={whatsappUrl}
      />
    </>
  );
}
