import { PLACEHOLDER_PATTERN } from "@/content/placeholder";

type Props = {
  text: string;
  className?: string;
  as?: "p" | "span";
};

/**
 * Renderiza texto editable. Las partes "[COMPLETAR: ...]" se muestran
 * resaltadas para que el contenido pendiente sea evidente en la web.
 */
export function ContentText({ text, className, as: Tag = "p" }: Props) {
  const parts = text.split(PLACEHOLDER_PATTERN);

  return (
    <Tag className={className}>
      {parts.map((part, i) =>
        part.startsWith("[COMPLETAR") ? (
          <mark
            key={i}
            data-placeholder
            className="rounded-sm border border-dashed border-magenta/60 bg-magenta/10 px-1.5 py-0.5 text-[0.9em] text-rose not-italic box-decoration-clone"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </Tag>
  );
}
