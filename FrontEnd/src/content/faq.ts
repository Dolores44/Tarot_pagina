/**
 * Preguntas frecuentes. Editar las respuestas acá.
 * Respuestas provistas por Paola (redacción corregida, mismo significado).
 * Lo marcado con [COMPLETAR: ...] todavía no fue confirmado.
 *
 * `showOnHome` define cuáles aparecen resumidas en la página de Inicio.
 */
export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  showOnHome: boolean;
};

export const faqItems: FaqItem[] = [
  {
    id: "como-se-realiza",
    question: "¿Cómo se realiza una lectura?",
    answer:
      "Las lecturas se realizan por audios y fotos. Hacés tus preguntas y luego recibís un audio con lo que veo en las cartas, junto con una foto de la tirada, para que tengas todo disponible en el chat y puedas volver a escucharlo cuando lo necesites.",
    showOnHome: true,
  },
  {
    id: "como-reservar",
    question: "¿Cómo puedo reservar?",
    answer:
      "Las reservas se hacen por WhatsApp. Ahí te ofrezco los días y horarios disponibles para que elijas el que te resulte más conveniente.",
    showOnHome: true,
  },
  {
    id: "como-se-paga",
    question: "¿Cómo se paga?",
    answer:
      "El pago se realiza 5 minutos antes de comenzar la sesión, por Mercado Pago, transferencia bancaria o tarjeta de crédito.",
    showOnHome: true,
  },
  {
    id: "presencial-virtual",
    question: "¿Las lecturas son presenciales o virtuales?",
    answer: "Todas las lecturas son virtuales, por WhatsApp, mediante audios y fotos.",
    showOnHome: true,
  },
  {
    id: "duracion",
    question: "¿Cuánto dura una lectura?",
    answer: "Las sesiones por tiempo duran 30 minutos o 1 hora.",
    showOnHome: false,
  },
  {
    id: "como-recibo",
    question: "¿Cómo recibo mi lectura?",
    answer:
      "Por WhatsApp: recibís un audio con lo que muestran las cartas y una foto de la tirada. Quedan guardados en el chat para que puedas volver a escucharlos cuando quieras.",
    showOnHome: false,
  },
  {
    id: "consulta-previa",
    question: "¿Puedo consultar por WhatsApp antes de reservar?",
    answer: "[COMPLETAR: si se pueden hacer consultas previas y cómo.]",
    showOnHome: false,
  },
];
