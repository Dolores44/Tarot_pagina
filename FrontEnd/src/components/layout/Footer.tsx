import Link from "next/link";
import { OrnamentDivider } from "@/components/ornaments/OrnamentDivider";
import { BrandMark } from "@/components/ui/BrandMark";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

type Props = {
  whatsappUrl: string;
};

export function Footer({ whatsappUrl }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/35 bg-void">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-8 md:grid-cols-3 md:gap-8">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <BrandMark size={84} decorative className="shadow-glow-sm" />
          <p className="font-display text-xl tracking-[0.18em] text-cream uppercase">{siteConfig.name}</p>
          <p className="font-display text-label tracking-label text-champagne/90 uppercase">
            Turnos con reserva previa
          </p>
        </div>

        <nav aria-label="Pie de página" className="text-center md:text-left">
          <h2 className="font-display text-label tracking-label text-champagne uppercase">Navegación</h2>
          <ul className="mt-4 space-y-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block py-1.5 text-muted transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center md:text-left">
          <h2 className="font-display text-label tracking-label text-champagne uppercase">Contacto</h2>
          <ul className="mt-4 space-y-1">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2.5 text-muted transition-colors hover:text-cream"
              >
                <WhatsAppIcon className="size-5 text-lilac" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2.5 text-muted transition-colors hover:text-cream"
              >
                <InstagramIcon className="size-5 text-lilac" />@{siteConfig.social.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 pb-10 sm:px-8">
        <OrnamentDivider className="h-5 w-44 text-gold/50" />
        <p className="text-base text-muted/80">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
