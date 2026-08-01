import { Tag } from "../../atoms/components/tag/Tag";
import { Section } from "../../molecules/Section/Section";
import "./Skills.scss";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation(["skills", "navigation"]);
  const skills = t("skills", { returnObjects: true });

  return (
    <Section className="skills" orderNum="02" title={t("navigation:skills")}>
      <div className="skills__groups">
        {skills.map(({ id, title, items }) => (
          <div className="skills__group" key={id}>
            <p className="skills__group-title">{title}</p>
            <div className="skills__list">
              {items.map((item) => (
                <Tag key={item} text={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
