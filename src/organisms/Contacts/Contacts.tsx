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
          <Link
            href="mailto:dav.frontend.developer@gmail.com"
            text="dav.frontend.developer@gmail.com"
            target="_blank"
          />
          <Link href={social.github.href} text="GitHub" variant="secondary" target="_blank" />
          <Link href={social.linkedin.href} text="LinkedIn" variant="secondary" target="_blank" />
        </div>
      </div>
    </Section>
  );
}
