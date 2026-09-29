/** Link activo: "/" solo en Inicio; el resto también en sus subrutas. */
export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
