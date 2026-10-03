/**
 * Textos de la página de Inicio.
 *
 * Las frases provienen del material real de la marca (banners, flyers,
 * títulos de reels, respuestas de la FAQ y la presentación escrita por Paola).
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
    /** Presentación en primera persona, resumida del texto de Paola */
    story: [
      "Soy Paola, creadora de Paola Tarot. Desde hace años, el Tarot forma parte de mi camino personal y espiritual: lo que comenzó como una búsqueda personal se convirtió con el tiempo en una pasión y en una forma de acompañar a otras personas.",
      "Para mí, el Tarot es una herramienta para mirar una situación desde otra perspectiva, encontrar claridad y conectar con aquello que muchas veces sentimos pero nos cuesta expresar. Cada persona llega con su propia historia, y cada lectura es un espacio pensado para vos.",
    ],
    // Frase del texto de Paola
    welcome: "Bienvenidos a Paola Tarot",
    /** Cómo funciona (FAQ y banners de velas) */
    practical: [
      "Las lecturas son virtuales, por WhatsApp. Hacés tus preguntas y recibís un audio con lo que muestran las cartas y una foto de la tirada, para volver a escucharlo cuando lo necesites.",
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
