import { useTranslation } from "react-i18next";
import { Stat } from "../../atoms/components/stat/Stat";
import { Text } from "../../atoms/components/text/Text";
import { Section } from "../../molecules/Section/Section";
import "./About.scss";

export default function About() {
  const { t } = useTranslation(["about", "navigation"]);
  const description = t("description", { returnObjects: true });
  const bullets = t("bullets", { returnObjects: true });

  return (
    <Section className="about" orderNum={"01"} title={t("navigation:about")}>
      <div className="about__wrapper">
        <div className="about__description">
          {description.map((paragraph, index) => (
            <Text key={index} text={paragraph} />
          ))}
        </div>
        <div className="about__stats">
          {bullets.map(({ label, value }, index) => (
            <Stat key={index} label={label} value={value} />
          ))}
        </div>
      </div>
    </Section>
  );
}
