/**
 * Convención de contenido pendiente:
 * todo texto que todavía no fue provisto por la marca se escribe como
 *   "[COMPLETAR: qué va acá]"
 * El componente <ContentText> lo muestra resaltado para que sea fácil de
 * encontrar en la web, y se puede buscar en el código con "[COMPLETAR".
 */
export const PLACEHOLDER_PATTERN = /(\[COMPLETAR[^\]]*\])/g;

export function hasPlaceholder(text: string): boolean {
  return text.includes("[COMPLETAR");
}
