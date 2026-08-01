import { useTranslation } from "react-i18next";
import { Link } from "../../atoms/components/link/Link";
import { Text } from "../../atoms/components/text/Text";
import { social } from "../../config/contacts.config";
import { Section } from "../../molecules/Section/Section";
import "./Contacts.scss";

export default function Contacts() {
  const { t } = useTranslation("contacts");
  return (
    <Section className="contacts" ariaLabel={t("sectionLabel")} id="contacts">
      <div className="contacts-box">
        <Text className="contacts-box__title" tag="h2" text={t("title")} />
        <Text className="contacts-box__subtitle" text={t("subTitle")} />
        <div className="contacts-box__cta">
          <Link href="mailto:davohak2009@gmail.com" text="davohak2009@gmail.com" />
          <Link href={social.github.href} text="GitHub" variant="secondary" />
          <Link href={social.linkedin.href} text="LinkedIn" variant="secondary" />
        </div>
      </div>
    </Section>
  );
}
