import { publicEnv } from "@/lib/env";

/**
 * Configuración central del sitio. Todo dato de la marca que aparezca en
 * más de un lugar (nombre, redes, navegación) se edita únicamente aquí.
 */
export const siteConfig = {
  name: "Paola Tarot",
  shortName: "Paola Tarot",
  description:
    "Lecturas de tarot personalizadas: pareja, relaciones y sesiones de preguntas libres. Consultá y reservá tu turno por WhatsApp.",
  locale: "es_AR",
  url: publicEnv.NEXT_PUBLIC_SITE_URL,

  whatsappNumber: publicEnv.NEXT_PUBLIC_WHATSAPP_NUMBER,
  /** Mensaje por defecto cuando se consulta sin un producto puntual */
  whatsappDefaultMessage: "Hola! Quisiera hacer una consulta sobre las lecturas.",

  social: {
    instagram: {
      handle: "tarotpaola25",
      url: "https://www.instagram.com/tarotpaola25/",
    },
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  ],

  logo: {
    alt: "Paola Tarot — emblema con las cartas El Sol, La Luna y La Estrella",
    src: {
      sm: "/brand/logo-circular-96.webp",
      md: "/brand/logo-circular-192.webp",
      lg: "/brand/logo-circular-384.webp",
      xl: "/brand/logo-circular-768.webp",
    },
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
