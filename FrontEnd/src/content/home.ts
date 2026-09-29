/**
 * Textos de la página de Inicio.
 *
 * Las frases que no son placeholder provienen del material real de la marca
 * (flyers del catálogo de WhatsApp y títulos de los reels de Instagram).
 * Todo lo marcado con [COMPLETAR: ...] debe reemplazarse por texto real.
 */
export const homeContent = {
  hero: {
    eyebrow: "Lecturas de tarot",
    // Flyer "Sesión de tarot 1 hora"
    titleTop: "Abrí las puertas",
    titleBottom: "a las respuestas",
    // Flyers del catálogo
    note: "Turnos con reserva previa",
    primaryCta: "Ver lecturas",
    secondaryCta: "Consultar por WhatsApp",
  },

  intro: {
    eyebrow: "Sobre Paola Tarot",
    // Título de reel
    titleTop: "Las cartas te cuentan",
    titleBottom: "una historia",
    paragraphs: [
      "[COMPLETAR: presentación de Paola — quién es, cómo llegó al tarot y cómo trabaja.]",
      "[COMPLETAR: qué puede esperar una persona de una lectura y cómo se siente la experiencia.]",
    ],
  },

  readingTypes: {
    eyebrow: "Lecturas",
    titleTop: "¿Qué querés",
    titleBottom: "preguntarle a las cartas?",
    items: [
      {
        icon: "rings",
        title: "Amor y pareja",
        // Preguntas del flyer "5 preguntas para tu relación"
        text: "Lecturas enfocadas en tu pareja actual: qué siente, qué piensa de la relación y hacia dónde quiere llevarla.",
      },
      {
        icon: "moon",
        title: "Expareja",
        text: "[COMPLETAR: breve descripción de la lectura de la expareja.]",
      },
      {
        icon: "hourglass",
        title: "Sesiones por tiempo",
        // Flyer "Sesión de tarot 1 hora"
        text: "Preguntas libres, mensajes y orientación para tu camino. Sesiones de 30 minutos o de 1 hora.",
      },
    ],
  },

  featured: {
    eyebrow: "Destacadas",
    titleTop: "Lecturas",
    titleBottom: "para este momento",
    cta: "Ver todas las lecturas",
  },

  faq: {
    eyebrow: "Dudas",
    titleTop: "Preguntas",
    titleBottom: "frecuentes",
    cta: "Ver todas las preguntas",
  },

  finalCta: {
    eyebrow: "Turnos con reserva previa",
    // Título de reel
    titleTop: "El universo",
    titleBottom: "te habla",
    text: "Escribí por WhatsApp para consultar disponibilidad y reservar tu lectura.",
    cta: "Reservar por WhatsApp",
  },
} as const;

export type ReadingTypeIcon = (typeof homeContent.readingTypes.items)[number]["icon"];
