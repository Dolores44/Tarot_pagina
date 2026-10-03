/**
 * Preguntas frecuentes. Editar las respuestas acá.
 * Respuestas provistas por Paola (solo se corrigió gramática, mismo significado).
 * No agregar preguntas sin una respuesta confirmada por Paola.
 *
 * - `group`: sección de la página /preguntas-frecuentes.
 * - `showOnHome`: cuáles aparecen resumidas en la página de Inicio.
 */
export type FaqGroup = "lecturas" | "reservas";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  group: FaqGroup;
  showOnHome: boolean;
};

export const faqGroups: { id: FaqGroup; title: string }[] = [
  { id: "lecturas", title: "Sobre las lecturas" },
  { id: "reservas", title: "Reservas y pagos" },
];

export const faqItems: FaqItem[] = [
  {
    id: "como-se-realiza",
    question: "¿Cómo se realiza una lectura?",
    answer:
      "Las lecturas se realizan por audios y fotos. La persona hace sus preguntas y recibe un audio con lo que muestran las cartas y, luego, una foto de las cartas, para tener todo disponible en el chat y poder volver a escucharlo cuando lo necesite.",
    group: "lecturas",
    showOnHome: true,
  },
  {
    id: "como-reservar",
    question: "¿Cómo puedo reservar?",
    answer:
      "Las reservas se hacen a través de WhatsApp, donde se le ofrecen al cliente los días y horarios disponibles para que pueda elegir el más conveniente.",
    group: "reservas",
    showOnHome: true,
  },
  {
    id: "como-se-paga",
    question: "¿Cómo se paga?",
    answer:
      "Se abona 5 minutos antes de comenzar la sesión, por Mercado Pago, transferencia bancaria o tarjeta de crédito.",
    group: "reservas",
    showOnHome: true,
  },
  {
    id: "presencial-virtual",
    question: "¿Las lecturas son presenciales o virtuales?",
    answer: "Todas las lecturas son en forma virtual por WhatsApp, con audios y fotos.",
    group: "lecturas",
    showOnHome: true,
  },
  {
    id: "duracion",
    question: "¿Cuánto dura una lectura?",
    answer: "Las lecturas disponibles actualmente tienen una duración de 30 minutos o 1 hora.",
    group: "lecturas",
    showOnHome: false,
  },
  {
    id: "como-recibo",
    question: "¿Cómo recibo mi lectura?",
    answer:
      "La lectura se recibe por WhatsApp mediante audios y fotos de las cartas, para que puedas conservarla en el chat y volver a escucharla cuando lo necesites.",
    group: "lecturas",
    showOnHome: false,
  },
];

/** Textos de interfaz de la página /preguntas-frecuentes */
export const faqPageContent = {
  header: {
    eyebrow: "Dudas",
    titleTop: "Preguntas",
    titleBottom: "frecuentes",
  },
  intro: "Respuestas a las dudas más comunes sobre las lecturas: cómo se realizan, cómo reservar y cómo se paga.",
  finalCta: {
    eyebrow: "¿Te quedó alguna duda?",
    titleTop: "Escribí",
    titleBottom: "por WhatsApp",
    text: "Para cualquier otra consulta, escribí por WhatsApp.",
    cta: "Consultar por WhatsApp",
  },
} as const;
