/**
 * Preguntas frecuentes. Editar las respuestas acá.
 * Lo único confirmado por el material de la marca es que los turnos son con
 * reserva previa; el resto queda como [COMPLETAR: ...] hasta tener la información real.
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
    answer: "[COMPLETAR: cómo es una lectura paso a paso.]",
    showOnHome: true,
  },
  {
    id: "como-reservar",
    question: "¿Cómo puedo reservar?",
    answer:
      "Los turnos son con reserva previa. [COMPLETAR: pasos para reservar — por ejemplo, escribir por WhatsApp, elegir la lectura y confirmar día y horario.]",
    showOnHome: true,
  },
  {
    id: "como-se-paga",
    question: "¿Cómo se paga?",
    answer: "[COMPLETAR: medios de pago aceptados y cuándo se abona.]",
    showOnHome: true,
  },
  {
    id: "duracion",
    question: "¿Cuánto dura una lectura?",
    answer:
      "Hay sesiones de 30 minutos y de 1 hora. [COMPLETAR: duración de las demás lecturas.]",
    showOnHome: false,
  },
  {
    id: "presencial-virtual",
    question: "¿Las lecturas son presenciales o virtuales?",
    answer: "[COMPLETAR: modalidad de las lecturas.]",
    showOnHome: true,
  },
  {
    id: "como-recibo",
    question: "¿Cómo recibo mi lectura?",
    answer: "[COMPLETAR: formato de entrega — videollamada, audio, texto, etc.]",
    showOnHome: false,
  },
  {
    id: "consulta-previa",
    question: "¿Puedo consultar por WhatsApp antes de reservar?",
    answer: "[COMPLETAR: si se pueden hacer consultas previas y cómo.]",
    showOnHome: false,
  },
];
