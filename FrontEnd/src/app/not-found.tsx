import { CelestialBackground } from "@/components/ornaments/CelestialBackground";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function NotFound() {
  return (
    <section className="hero-sky relative isolate flex flex-1 items-center overflow-hidden px-4 py-28 sm:px-8">
      <CelestialBackground seed={404} density="low" constellations={1} />
      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        <SectionTitle as="h1" eyebrow="Página no encontrada" titleTop="Las cartas" titleBottom="no muestran este camino" />
        <p className="mt-8">La página que buscás no existe o todavía está en preparación.</p>
        <ButtonLink href="/" className="mt-10">
          Volver al inicio
        </ButtonLink>
      </div>
    </section>
  );
}
