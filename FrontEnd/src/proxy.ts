import { NextResponse, type NextRequest } from "next/server";

/**
 * Las URLs del catálogo son siempre en minúsculas (los slugs se validan así).
 * Si alguien escribe o comparte una URL con mayúsculas
 * (ej. /catalogo/Lecturas/Lectura-De-Pareja), se redirige a la versión canónica.
 * Además evita que un servidor con sistema de archivos que ignora mayúsculas
 * (Windows) sirva páginas pre-generadas con URLs no canónicas.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Solo letras reales: los escapes %XX se dejan igual (si no, "%3C" → "%3c"
  // se vuelve a normalizar a "%3C" y la redirección entra en bucle)
  const lower = pathname.replace(/%[0-9A-Fa-f]{2}|[A-Z]+/g, (m) => (m.startsWith("%") ? m : m.toLowerCase()));
  if (pathname === lower || !lower.startsWith("/catalogo")) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = lower;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Todo excepto archivos internos de Next y estáticos (el filtro de /catalogo va en el código)
  matcher: ["/((?!_next/|brand/|favicon.ico|icon.png|apple-icon.png).*)"],
};
