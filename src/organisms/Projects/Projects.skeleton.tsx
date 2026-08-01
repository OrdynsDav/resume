import { Skeleton } from "../../atoms/components/skeleton/Skeleton";
import { Section } from "../../molecules/Section/Section";
import { SkeletonTitle } from "../../molecules/SkeletonTitle/SkeletonTitle";
import "./Projects.skeleton.scss";

export function ProjectsSkeleton() {
  return (
    <Section className="projects-skeleton" ariaLabel="Загрузка секции с проектами">
      <SkeletonTitle />
      <div className="projects-skeleton__wrapper">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} width={"100%"} height={274} variant="rectangular" />
        ))}
      </div>
    </Section>
  );
}
