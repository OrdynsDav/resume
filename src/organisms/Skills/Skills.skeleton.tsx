import { Skeleton } from "../../atoms/components/skeleton/Skeleton";
import { Section } from "../../molecules/Section/Section";
import { SkeletonTitle } from "../../molecules/SkeletonTitle/SkeletonTitle";
import "./Skills.skeleton.css";

export function SkillsSkeleton() {
  const groups = [
    { id: "languages", itemsLength: 3 },
    { id: "frameworks", itemsLength: 3 },
    { id: "intsruments", itemsLength: 4 },
  ];
  return (
    <Section className="skills-skeleton" ariaLabel="Загрузка секции с навыками">
      <SkeletonTitle />
      <div className="skills-skeleton__wrapper">
        {groups.map(({ id, itemsLength }) => (
          <div className="skills-skeleton__group" key={id}>
            <Skeleton className="skills-skeleton__group-title" width={85} height={20} />
            <div className="skills-skeleton__list">
              {Array.from({ length: itemsLength }).map((_, i) => (
                <Skeleton key={i} width={72} height={37} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
