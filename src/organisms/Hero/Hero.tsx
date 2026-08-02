import { useTranslation } from "react-i18next";
import { Link } from "../../atoms/components/link/Link";
import { Text } from "../../atoms/components/text/Text";
import { social } from "../../config/contacts.config";
import { Section } from "../../molecules/Section/Section";
import "./Hero.scss";

export default function Hero() {
  const { t } = useTranslation("hero");
  return (
    <Section className="hero" ariaLabel={t("sectionLabel")}>
      <div className="hero__wrapper">
        <div className="hero__content">
          <Text className="hero__title" tag="h1" text={t("fullname")} />
          <Text className="hero__accent" variant="secondary" text={t("role")} />
          <Text className="hero__text" text={t("description")} />
          <div className="hero__cta">
            <Link className="hero__link" href="#projects" text={t("buttons.projects")} />
            <Link
              className="hero__link"
              href={social.telegram.href}
              text={t("buttons.contact")}
              variant="secondary"
            />
          </div>
        </div>
        <picture className="hero__picture">
          <img src="hero.jpeg" alt={t("imgAlt")} fetchPriority="high" />
        </picture>
      </div>
    </Section>
  );
}
