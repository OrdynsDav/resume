import { clsx } from "../../atoms/helpers/clsx";
import { slugify } from "../../atoms/helpers/slugify";
import type { SectionProps } from "../types/inertfaces";
import { Container } from "../../atoms/components/container/Container";
import { Text } from "../../atoms/components/text/Text";
import "./Section.css";

export function Section({
  title,
  headingLevel = 2,
  ariaLabel,
  id,
  className,
  children,
  orderNum,
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
      className={clsx("section", className)}
      aria-label={!title ? ariaLabel : undefined}
      aria-labelledby={title ? headingId : undefined}
    >
      <Container>
        {title && orderNum ? (
          <div className="section-title-wrap">
            <Text className="section-title-wrap__num" tag={"span"} text={orderNum} />
            <Text tag={HeadingTag} id={headingId} text={title} />
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
