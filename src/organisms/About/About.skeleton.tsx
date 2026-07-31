import { Skeleton } from "../../atoms/components/skeleton/Skeleton";
import { Section } from "../../molecules/Section/Section";
import { SkeletonTitle } from "../../molecules/SkeletonTitle/SkeletonTitle";
import "./About.skeleton.css";

export function AboutSkeleton() {
  return (
    <Section className="about-skeleton" ariaLabel="Загрузка секции с информацией обо мне">
      <SkeletonTitle />
      <div className="about-skeleton__wrapper">
        <div className="about-skeleton__content">
          <div className="about-skeleton__text">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} width={520} />
            ))}
          </div>
          <div className="about-skeleton__text">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} width={520} />
            ))}
          </div>
        </div>
        <div className="about-skeleton__stats">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="about-skeleton-stat">
              <Skeleton width={160} />
              <Skeleton width={30} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
