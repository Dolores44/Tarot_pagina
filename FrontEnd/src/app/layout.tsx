import type { Metadata, Viewport } from "next";
import { Cinzel, Cinzel_Decorative, Crimson_Pro } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/motion/RevealObserver";
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
  // Valores por defecto al compartir cualquier página (las de producto definen los suyos).
  // Las URLs relativas se resuelven con metadataBase (NEXT_PUBLIC_SITE_URL).
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.share.title,
    description: siteConfig.share.description,
    images: [siteConfig.share.image],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.share.title,
    description: siteConfig.share.description,
    images: [siteConfig.share.image],
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
      // El script de abajo agrega la clase "js" antes de hidratar
      suppressHydrationWarning
    >
      <head>
        {/*
          Activa el revelado al hacer scroll solo si hay JavaScript (sin parpadeo inicial).
          Red de seguridad: si la app no llega a iniciar en 3 s (JS bloqueado, conexión que
          corta el bundle, navegador viejo), se muestra todo el contenido sin animación.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.add('reveal-fallback')},3000)",
          }}
        />
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}"}</style>
        </noscript>
      </head>
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
        <RevealObserver />
      </body>
    </html>
  );
}
