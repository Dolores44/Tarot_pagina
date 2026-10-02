import type { Category, Product } from "@/types/catalog";

/**
 * CATÁLOGO — fuente única de verdad.
 *
 * Para agregar, quitar o editar un producto se modifica solo este archivo.
 * - El orden de los arrays es el orden en la web.
 * - Las categorías sin productos no se muestran.
 * - No hay precios: cada producto se consulta por WhatsApp.
 * - Los textos salen del material real de Paola (banners y flyers).
 *   No agregar información que no haya sido confirmada.
 *
 * Imágenes: /public/catalog/*.webp (exportadas desde "IMAGEN GUIA").
 * Los banners que tenían el precio impreso se recortaron para no mostrarlo.
 */

export const categories: Category[] = [
  { slug: "lecturas", name: "Lecturas" },
  { slug: "velas", name: "Velas" },
  { slug: "combos", name: "Combos" },
];

/** Las lecturas son virtuales (respuesta de FAQ) */
const MODALIDAD = { label: "Modalidad", value: "Virtual por WhatsApp, con audios y fotos" };

/** Puntos de la vela abre caminos / velas llaves (mismos en sus banners) */
const ABRE_CAMINOS = [
  "Abre oportunidades",
  "Desbloquea lo que está detenido",
  "Canaliza tu intención",
  "Hechas con intención",
];

export const products: Product[] = [
  // ─────────────────────────────── LECTURAS ───────────────────────────────
  {
    slug: "amor-en-conexion",
    categorySlug: "lecturas",
    name: "Amor en Conexión",
    subtitle: "Lo que tu corazón necesita saber… las cartas lo revelan",
    shortDescription: "Una lectura especial de nueve cartas para tu historia de amor.",
    highlights: [],
    quote: "Tu historia de amor también se lee en las cartas",
    sections: [
      {
        title: "Las nueve posiciones de la tirada",
        style: "spread",
        items: [
          "La conexión",
          "El consultante",
          "La otra persona",
          "Deseos del consultante",
          "Deseos de la otra persona",
          "Potencial",
          "Percepción de la otra persona",
          "Percepción del consultante",
          "Consejo",
        ],
      },
    ],
    details: [MODALIDAD],
    image: {
      src: "/catalog/amor-en-conexion.webp",
      alt: "Banner de Amor en Conexión: tirada de nueve cartas sobre un corazón fucsia, con el logo de Paola Tarot",
      width: 1024,
      height: 1536,
    },
    featured: true,
    whatsappSubject: "Amor en Conexión",
  },
  {
    slug: "lectura-de-30-minutos",
    categorySlug: "lecturas",
    name: "Lectura de 30 minutos",
    // Banner "Lectura de tarot 30 minutos + Vela abre caminos"
    shortDescription: "Preguntas libres sobre amor, trabajo, dinero, familia y decisiones.",
    highlights: [
      "Preguntas libres",
      "Amor, trabajo, dinero, familia y decisiones",
      "Espacio para resolver tus dudas con claridad",
      "Atención personalizada por turno",
    ],
    details: [{ label: "Duración", value: "30 minutos" }, MODALIDAD],
    whatsappSubject: "la Lectura de 30 minutos",
  },
  {
    slug: "lectura-de-1-hora",
    categorySlug: "lecturas",
    name: "Lectura de 1 hora",
    // Flyer "Sesión de tarot 1 hora"
    shortDescription: "Preguntas libres, mensajes y orientación para tu camino.",
    highlights: [
      "Preguntas libres",
      "Mensajes y orientación para tu camino",
      "Descubrí qué energías te rodean",
      "Consultá sobre cualquier tema que necesites aclarar",
    ],
    details: [{ label: "Duración", value: "1 hora" }, MODALIDAD],
    whatsappSubject: "la Lectura de 1 hora",
  },

  // ──────────────────────────────── VELAS ─────────────────────────────────
  {
    slug: "velas-de-union-amor-y-pareja",
    categorySlug: "velas",
    name: "Velas de unión — Amor y pareja",
    subtitle: "Juntos es mejor…",
    shortDescription: "Para atraer el amor, fortalecer la relación y unir corazones.",
    highlights: [
      "Atrae el amor",
      "Fortalece la relación",
      "Une corazones",
      "Abre caminos para el amor",
      "Armonía y confianza",
    ],
    image: {
      src: "/catalog/velas-de-union-amor-y-pareja.webp",
      alt: "Velas de unión rojas, una con forma de corazón y otra trenzada, entre pétalos de rosa",
      width: 1066,
      height: 1280,
    },
    featured: true,
    whatsappSubject: "la vela de unión Amor y pareja",
  },
  {
    slug: "vela-de-limpieza-de-3-dias",
    categorySlug: "velas",
    name: "Vela de limpieza de 3 días",
    shortDescription: "Una vela preparada para acompañar tu proceso de limpieza y renovación.",
    highlights: [
      "Cortar energías o situaciones que ya no querés sostener",
      "Recuperar fuerza personal y confianza",
      "Revisar vínculos donde estás dando demasiado o perdiendo tu individualidad",
      "Mover proyectos que estaban estancados",
      "Limpieza energética y protección",
      "Declarar una nueva intención para la etapa que comienza",
    ],
    quote: "Una vela preparada para acompañar tu proceso de limpieza y renovación",
    image: {
      src: "/catalog/vela-de-limpieza-de-3-dias.webp",
      alt: "Vela de limpieza de 3 días, negra con hierbas y un pentáculo, bajo una luna violeta",
      width: 1024,
      height: 1536,
    },
    whatsappSubject: "la Vela de limpieza de 3 días",
  },
  {
    slug: "velas-llaves",
    categorySlug: "velas",
    name: "Velas Llaves",
    subtitle: "Abren caminos, desbloquean destinos",
    shortDescription: "Velas con forma de llave para abrir oportunidades y canalizar tu intención.",
    highlights: ABRE_CAMINOS,
    quote: "Tu intención es la llave, la vela, el portal",
    image: {
      src: "/catalog/velas-llaves.webp",
      alt: "Dos velas rojas con forma de llave sobre un paño violeta con un círculo astral",
      width: 1086,
      height: 1448,
    },
    whatsappSubject: "las Velas Llaves",
  },

  // ──────────────────────────────── COMBOS ────────────────────────────────
  {
    slug: "combo-vela-de-limpieza-y-tarot-7-chakras",
    categorySlug: "combos",
    name: "Combo especial — Vela de limpieza & Tarot 7 Chakras",
    subtitle: "Libera · Equilibra · Armoniza",
    shortDescription: "Limpieza energética profunda y lectura de tarot personalizada, todo en un solo ritual.",
    description: "Conectá con tu energía y abrí el camino a lo que merecés.",
    highlights: [
      "Limpieza energética profunda",
      "Equilibrio de tus 7 chakras",
      "Corte de energías negativas",
      "Protección y buena vibración",
      "Lectura de tarot personalizada",
    ],
    quote: "Todo en un solo ritual",
    sections: [
      {
        title: "Los 7 chakras",
        style: "list",
        items: ["Sahasrara", "Ajna", "Vishuddha", "Anahata", "Manipura", "Svadhisthana", "Muladhara"],
      },
    ],
    // Se usa la foto de la vela 7 Chakras: el banner del combo tiene el precio impreso
    image: {
      src: "/catalog/vela-limpieza-7-chakras.webp",
      alt: "Vela de limpieza 7 Chakras con los colores de los siete chakras, encendida entre cristales",
      width: 1086,
      height: 1448,
    },
    isCombo: true,
    featured: true,
    whatsappSubject: "el Combo especial Vela de limpieza & Tarot 7 Chakras",
  },
  {
    slug: "lectura-de-30-minutos-y-vela-abre-caminos",
    categorySlug: "combos",
    name: "Lectura de tarot 30 minutos + Vela abre caminos",
    shortDescription: "Una lectura de tarot de 30 minutos junto con la vela abre caminos.",
    highlights: [],
    quote: "Tu camino, tu decisión, tu transformación",
    includes: [
      { productSlug: "lectura-de-30-minutos" },
      { title: "Vela abre caminos", subtitle: "Abren caminos, desbloquean destinos", highlights: ABRE_CAMINOS },
    ],
    // Paola grabó un video sobre la vela: pegar acá el enlace cuando esté disponible
    videoUrl: undefined,
    image: {
      src: "/catalog/lectura-30-minutos-y-vela-abre-caminos.webp",
      alt: "Banner Lectura de tarot 30 minutos más Vela abre caminos, con dos velas doradas encendidas",
      width: 1024,
      height: 1040,
    },
    isCombo: true,
    whatsappSubject: "la Lectura de tarot 30 minutos + Vela abre caminos",
  },
  {
    slug: "combo-velas-llave-y-lectura-de-30-minutos",
    categorySlug: "combos",
    name: "Combo de Velas Llave + Lectura de 30 minutos",
    shortDescription: "Velas Llaves y una lectura de tarot de 30 minutos, en un mismo combo.",
    highlights: [],
    quote: "Tu camino, tu decisión, tu transformación",
    includes: [{ productSlug: "velas-llaves" }, { productSlug: "lectura-de-30-minutos" }],
    image: {
      src: "/catalog/combo-velas-llave-y-lectura.webp",
      alt: "Vela roja con forma de llave encendida junto a un búho dorado",
      width: 495,
      height: 775,
    },
    isCombo: true,
    whatsappSubject: "el Combo de Velas Llave + Lectura de 30 minutos",
  },
];
