"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavOrb } from "@/components/layout/NavOrb";
import { useNavOrb } from "@/components/layout/useNavOrb";
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

  const activeIndex = siteConfig.nav.findIndex((item) => isActivePath(pathname, item.href));
  const { pos, itemProps, containerProps } = useNavOrb(activeIndex);

  // El menú se renderiza fuera del <header>: el backdrop-blur del header
  // crearía un contexto que recorta los elementos `fixed` hijos.
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/35 bg-night/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8 lg:h-22">
          <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} — Inicio`}>
            <BrandMark size={56} priority decorative className="size-11 shadow-glow-sm lg:size-14" />
            <span className="font-display text-base tracking-[0.18em] text-cream uppercase lg:text-lg">
              {siteConfig.name}
            </span>
          </Link>

          <nav aria-label="Principal" className="hidden md:block">
            <ul {...containerProps} className="relative flex items-center gap-8 lg:gap-10">
              {siteConfig.nav.map((item, index) => {
                const active = index === activeIndex;
                return (
                  <li key={item.href}>
                    <Link
                      {...itemProps(index)}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block py-2 font-display text-nav tracking-[0.12em] uppercase transition-colors duration-300 ${
                        active ? "text-lilac" : "text-muted hover:text-cream"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <NavOrb {...pos} offset={2} />
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

      <MobileMenu open={menuOpen} onClose={closeMenu} pathname={pathname} whatsappUrl={whatsappUrl} />
    </>
  );
}
