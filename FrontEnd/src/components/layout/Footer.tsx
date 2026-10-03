import Link from "next/link";
import type { ReactNode } from "react";
import { CelestialBackground } from "@/components/ornaments/CelestialBackground";
import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { StarSparkle } from "@/components/ornaments/StarSparkle";
import { BrandMark } from "@/components/ui/BrandMark";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { reveal } from "@/lib/reveal";

type Props = {
  whatsappUrl: string;
};

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center justify-center gap-3 font-display text-base tracking-label text-champagne uppercase md:justify-start lg:text-lg">
      <StarSparkle className="size-3 shrink-0 text-violet" />
      {children}
    </h2>
  );
}

const linkClass =
  "inline-flex min-h-12 items-center gap-3 text-lg text-cream/85 transition-colors duration-300 hover:text-lilac lg:text-xl";

/** Cierre de la página: marca, navegación y contacto, sobre un cielo tenue. */
export function Footer({ whatsappUrl }: Props) {
  const year = new Date().getFullYear();
  const { instagram, tiktok } = siteConfig.social;

  const contacts = [
    { href: whatsappUrl, label: "WhatsApp", icon: WhatsAppIcon },
    { href: instagram.url, label: `@${instagram.handle}`, icon: InstagramIcon, srLabel: "Instagram" },
    { href: tiktok.url, label: `@${tiktok.handle}`, icon: TikTokIcon, srLabel: "TikTok" },
  ];

  return (
    <footer className="relative isolate overflow-clip border-t border-line/40 bg-void">
      <CelestialBackground seed={77} density="low" constellations={1} />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-12 sm:px-8 lg:pt-24">
        <div className="grid gap-16 md:grid-cols-[1.3fr_1fr_1fr] md:gap-10 lg:gap-16">
          {/* Marca */}
          <div {...reveal("up")} className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="font-display text-2xl tracking-[0.2em] text-cream uppercase lg:text-[1.75rem]">
              {siteConfig.name}
            </p>
            <BrandMark size={128} decorative className="mt-6 size-28 shadow-glow lg:size-32" />
            <p className="mt-6 flex items-center gap-3 font-display text-label tracking-label text-champagne uppercase sm:text-button">
              <StarSparkle className="size-3 shrink-0 text-violet" />
              Turnos con reserva previa
            </p>
          </div>

          {/* Navegación */}
          <nav {...reveal("up", 120)} aria-label="Pie de página" className="text-center md:border-l md:border-line/40 md:pl-10 md:text-left lg:pl-14">
            <ColumnTitle>Navegación</ColumnTitle>
            <ul className="mt-6 space-y-1">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div {...reveal("up", 240)} className="text-center md:border-l md:border-line/40 md:pl-10 md:text-left lg:pl-14">
            <ColumnTitle>Contacto</ColumnTitle>
            <ul className="mt-6 space-y-1">
              {contacts.map(({ href, label, icon: Icon, srLabel }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <Icon className="size-6 shrink-0 text-lilac" />
                    {srLabel && <span className="sr-only">{srLabel}: </span>}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-5 border-t border-line/30 pt-10">
          <OrnamentDivider className="h-5 w-48 text-gold/60" />
          <p className="text-base text-muted">
            © {year} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
