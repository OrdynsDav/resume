import { Link } from "../../atoms/components/link/Link";
import { Tag } from "../../atoms/components/tag/Tag";
import { Text } from "../../atoms/components/text/Text";
import { ArrowIcon } from "../../atoms/icons/ArrowIcon";
import type { ProjectProps } from "../types/inertfaces";
import "./Project.css";

export function Project({ orderNum, title, description, tags, reposHref }: ProjectProps) {
  return (
    <article className="project">
      <Text className="project__comment" text={`// ${orderNum}`} />
      <Text className="project__title" tag="h3" text={title} />
      <Text className="project__description" text={description} />
      <div className="project__tags">
        {tags.map(({ text }) => {
          return <Tag key={text} text={text} />;
        })}
      </div>
      <Link
        className="project__link"
        href={reposHref}
        variant="casual"
        text="Репозиторий"
        iconRight={<ArrowIcon width={22} height={12} />}
      />
    </article>
  );
}
