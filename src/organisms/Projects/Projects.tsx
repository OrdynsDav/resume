import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Section } from "../../molecules/Section/Section";
import type { ProjectProps } from "../../molecules/types/inertfaces";
import { Project } from "../../molecules/Project/Project";
import { splideSLiderOptions } from "../../lib/splidejs/splideSliderOptions";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation(["projects", "navigation"]);
  const projects: ProjectProps[] = t("projects", { returnObjects: true });
  return (
    <Section className="projects" orderNum="03" title={t("navigation:projects")}>
      <Splide options={splideSLiderOptions.options}>
        {projects.map(({ orderNum, title, description, tags, reposHref, siteHref }, index) => {
          return (
            <SplideSlide key={index + orderNum}>
              <Project
                orderNum={orderNum}
                title={title}
                description={description}
                tags={tags}
                reposHref={reposHref}
                siteHref={siteHref}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </Section>
  );
}
