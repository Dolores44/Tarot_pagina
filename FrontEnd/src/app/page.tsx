import Image from "next/image";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/*
 * FASE 2 — Página temporal para verificar tokens, tipografías y logo.
 * Se reemplaza por la Home real en la Fase 3.
 */

const swatches = [
  ["night", "bg-night"],
  ["surface", "bg-surface"],
  ["raised", "bg-raised"],
  ["line", "bg-line"],
  ["nebula", "bg-nebula"],
  ["violet", "bg-violet"],
  ["violet-deep", "bg-violet-deep"],
  ["lilac", "bg-lilac"],
  ["champagne", "bg-champagne"],
  ["gold", "bg-gold"],
  ["rose", "bg-rose"],
  ["magenta", "bg-magenta"],
  ["cat-eye", "bg-cat-eye"],
  ["cream", "bg-cream"],
  ["muted", "bg-muted"],
] as const;

export default function Home() {
  const sampleProduct = { name: "Lectura de pareja", price: 5000 };

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-16 sm:px-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <Image
          src={siteConfig.logo.src.lg}
          alt={siteConfig.logo.alt}
          width={240}
          height={240}
          priority
          className="rounded-full shadow-glow"
        />
        <p className="font-display text-sm tracking-label text-champagne uppercase">
          ✦ Guía de estilo — Fase 2 ✦
        </p>
        <h1 className="text-4xl uppercase sm:text-6xl">
          Abrí las puertas
          <span className="block text-lilac">a las respuestas</span>
        </h1>
        <p className="font-decorative text-2xl text-cream">Cinzel Decorative</p>
        <p className="max-w-prose">
          Texto de cuerpo en Crimson Pro. Así se van a leer las descripciones de las lecturas y
          las respuestas de preguntas frecuentes, pensado para leerse cómodo en el celular.
        </p>
        <p className="font-display text-2xl text-champagne">$5.000 · $8.000 · $18.000</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-sm border border-lilac bg-violet-deep px-6 py-3 font-display text-sm tracking-label text-cream uppercase transition hover:shadow-glow"
          >
            Ver lecturas
          </a>
          <a
            href={buildWhatsAppUrl(sampleProduct)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-champagne px-6 py-3 font-display text-sm tracking-label text-champagne uppercase transition hover:bg-champagne hover:text-night"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>

      <ul className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {swatches.map(([name, bg]) => (
          <li key={name} className="rounded-sm border border-line/60 bg-surface p-2 text-sm">
            <div className={`${bg} h-14 rounded-sm border border-white/10`} />
            <span className="mt-2 block font-display text-xs tracking-label text-cream uppercase">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
