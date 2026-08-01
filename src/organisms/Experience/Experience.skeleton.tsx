import { Skeleton } from "../../atoms/components/skeleton/Skeleton";
import { Section } from "../../molecules/Section/Section";
import { SkeletonTitle } from "../../molecules/SkeletonTitle/SkeletonTitle";
import "./Experience.skeleton.scss";

export default function ExperienceSkeleton() {
  return (
    <Section id="experiencce-skeleton" ariaLabel="Загрузка секции с опытом">
      <SkeletonTitle />
      <div className="experience-skeleton-timeline">
        <Skeleton width={5} height={404} variant="rectangular" />
        <div className="experience-skeleton-timeline__wrapper">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="experience-skeleton-timeline__content" key={i}>
              <Skeleton
                className="experience-skeleton-timeline__dot"
                variant="circular"
                width={12}
                height={12}
              />
              <div className="experience-skeleton-timeline__text">
                <Skeleton height={20} width={90} />
                <Skeleton height={31} width={310} />
                <Skeleton width={560} />
                <Skeleton width={560} />
                <Skeleton width={560} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
