/**
 * Configuración central del sitio. Todo dato de la marca que aparezca en
 * más de un lugar (nombre, redes, navegación) se edita únicamente aquí.
 *
 * Este archivo no depende de variables de entorno para poder importarse
 * también desde componentes de cliente (header, menú mobile).
 * El número de WhatsApp y la URL del sitio viven en `lib/env.ts`.
 */
export const siteConfig = {
  name: "Paola Tarot",
  shortName: "Paola Tarot",
  description:
    "Lecturas de tarot, velas hechas con intención y combos. Consultas virtuales por WhatsApp, con audios y fotos.",
  locale: "es_AR",

  /** Mensaje por defecto cuando se consulta sin un producto puntual */
  whatsappDefaultMessage: "Hola! Quisiera hacer una consulta.",

  social: {
    instagram: {
      handle: "tarotpaola25",
      url: "https://www.instagram.com/tarotpaola25/",
    },
    tiktok: {
      handle: "tarotpaola",
      url: "https://www.tiktok.com/@tarotpaola",
    },
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  ],

  /**
   * Vista previa al compartir (WhatsApp, Facebook, Telegram, Discord, X…).
   * Imagen PROVISORIA: el emblema cuadrado de 768 px. Lo ideal es una imagen
   * de 1200×630 px (JPG/PNG): cuando exista, reemplazar url/width/height acá.
   */
  share: {
    title: "Paola Tarot",
    description: "Abrí las puertas a las respuestas",
    image: {
      url: "/brand/logo-circular-768.webp",
      width: 768,
      height: 768,
      alt: "Paola Tarot — emblema con las cartas El Sol, La Luna y La Estrella",
    },
  },

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
