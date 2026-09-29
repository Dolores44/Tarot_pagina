const priceFormatter = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 0,
});

/** 5000 → "$5.000" (precios en pesos enteros, como en el catálogo de WhatsApp) */
export function formatPrice(price: number): string {
  return `$${priceFormatter.format(price)}`;
}
