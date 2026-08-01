import { useTranslation } from "react-i18next";
import { Section } from "../../molecules/Section/Section";
import { TimelineExperience } from "../../molecules/TimelineExperience/TimelineExperience";
import type { TimelineExperienceProps } from "../../molecules/types/inertfaces";
import "./Experience.scss";

export default function Experience() {
  const { t } = useTranslation(["experience", "navigation"]);
  const timelineExperience: TimelineExperienceProps[] = t("experience", { returnObjects: true });
  return (
    <Section className="experience" orderNum="04" title={t("navigation:experience")}>
      <div className="experience__timeline">
        {timelineExperience.map((item) => {
          return <TimelineExperience key={`${item.title}-${item.start}`} {...item} />;
        })}
      </div>
    </Section>
  );
}
