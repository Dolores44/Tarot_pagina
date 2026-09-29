const wholeFormatter = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 });
const centsFormatter = new Intl.NumberFormat("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/**
 * 5000 → "$5.000" · 5000.5 → "$5.000,50"
 * El precio es numeric(12,2) en la base: los centavos se muestran solo si existen.
 */
export function formatPrice(price: number): string {
  const formatter = Number.isInteger(price) ? wholeFormatter : centsFormatter;
  return `$${formatter.format(price)}`;
}
