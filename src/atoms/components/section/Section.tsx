import type { SectionProps } from "../../types/inertfaces";
import { Container } from "../container/Container";
import { Text } from "../text/Text";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\wа-яё\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function Section({
  title,
  headingLevel = 2,
  ariaLabel,
  id,
  className,
  children,
}: SectionProps) {
  if (!title && !ariaLabel) {
    console.warn(
      "Section: укажи `title` или `ariaLabel` — у секции должно быть доступное имя для скринридеров.",
    );
  }

  const sectionId = id ?? (title ? slugify(title) : undefined);
  const headingId = title && sectionId ? `${sectionId}-heading` : undefined;
  const HeadingTag = `h${headingLevel}` as const;

  return (
    <section
      id={sectionId}
      className={className}
      aria-label={!title ? ariaLabel : undefined}
      aria-labelledby={title ? headingId : undefined}
    >
      <Container>
        {title && <Text tag={HeadingTag} id={headingId} text={title} />}
        {children}
      </Container>
    </section>
  );
}
