import type { Metadata, Viewport } from "next";
import { Cinzel, Cinzel_Decorative, Crimson_Pro } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";
import { publicEnv } from "@/lib/env";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(publicEnv.NEXT_PUBLIC_SITE_URL),
  title: {
    default: `${siteConfig.name} — Lecturas de tarot y velas`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Lecturas de tarot y velas`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#06020e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <html
      lang="es-AR"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${crimsonPro.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenido"
          className="sr-only z-50 bg-champagne px-4 py-2 font-display text-sm text-night focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Saltar al contenido
        </a>
        <Header whatsappUrl={whatsappUrl} />
        <main id="contenido" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer whatsappUrl={whatsappUrl} />
      </body>
    </html>
  );
}
