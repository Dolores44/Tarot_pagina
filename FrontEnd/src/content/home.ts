/**
 * Textos de la página de Inicio.
 *
 * Las frases provienen del material real de la marca (banners, flyers,
 * títulos de reels y respuestas de la FAQ). Lo marcado con [COMPLETAR: ...]
 * todavía no fue provisto y debe reemplazarse por texto real.
 */
export const homeContent = {
  hero: {
    eyebrow: "Lecturas de tarot y velas",
    // Flyer "Sesión de tarot 1 hora"
    titleTop: "Abrí las puertas",
    titleBottom: "a las respuestas",
    // FAQ: todas las lecturas son virtuales por WhatsApp
    note: "Consultas virtuales por WhatsApp",
    primaryCta: "Ver catálogo",
    secondaryCta: "Consultar por WhatsApp",
  },

  intro: {
    eyebrow: "Sobre Paola Tarot",
    // Título de reel
    titleTop: "Las cartas te cuentan",
    titleBottom: "una historia",
    paragraphs: [
      "[COMPLETAR: presentación personal de Paola — quién es y cómo llegó al tarot.]",
      // FAQ "¿Cómo se realiza una lectura?"
      "Las lecturas son virtuales, por WhatsApp. Hacés tus preguntas y recibís un audio con lo que muestran las cartas y una foto de la tirada, para volver a escucharlo cuando lo necesites.",
      // Banners de velas: "Hechas con intención", "Una vela preparada para acompañar tu proceso"
      "Además de las lecturas, hay velas hechas con intención para acompañar cada proceso.",
    ],
  },

  /** Temas o formas de consulta (no son productos del catálogo) */
  readingTypes: {
    eyebrow: "Temas de consulta",
    titleTop: "¿Qué querés",
    titleBottom: "preguntarle a las cartas?",
    items: [
      {
        icon: "rings",
        title: "Amor y pareja",
        // Banner "Amor en Conexión"
        text: "Lo que tu corazón necesita saber… las cartas lo revelan. Para eso está Amor en Conexión, una lectura especial de nueve cartas.",
      },
      {
        icon: "moon",
        title: "Expareja",
        // Las sesiones son de preguntas libres sobre cualquier tema (flyer 1 hora)
        text: "Si una relación pasada todavía te genera preguntas, podés consultarla en una sesión de preguntas libres.",
      },
      {
        icon: "hourglass",
        title: "Sesiones por tiempo",
        // Banner "Lectura de tarot 30 minutos" y flyer "Sesión de tarot 1 hora"
        text: "Preguntas libres sobre amor, trabajo, dinero, familia y decisiones. Sesiones de 30 minutos o de 1 hora.",
      },
    ],
  },

  featured: {
    eyebrow: "Destacados",
    titleTop: "Lecturas y velas",
    titleBottom: "para este momento",
    cta: "Ver todo el catálogo",
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
    text: "Escribí por WhatsApp para consultar por lecturas, velas y combos, y reservar tu turno.",
    cta: "Consultar por WhatsApp",
  },
} as const;

export type ReadingTypeIcon = (typeof homeContent.readingTypes.items)[number]["icon"];
