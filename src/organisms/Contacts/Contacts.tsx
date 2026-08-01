import { Link } from "../../atoms/components/link/Link";
import { Text } from "../../atoms/components/text/Text";
import { social } from "../../config/contacts.config";
import { Section } from "../../molecules/Section/Section";
import "./Contacts.scss";

export default function Contacts() {
  return (
    <Section className="contacts" ariaLabel="Мои контакты" id="contacts">
      <div className="contacts-box">
        <Text className="contacts-box__title" tag="h2" text="Готов присоединиться к команде" />
        <Text
          className="contacts-box__subtitle"
          text="Ищу первую полноценную позицию frontend-разработчика — открыт к обсуждению любых форматов."
        />
        <div className="contacts-box__cta">
          <Link href="mailto:davohak2009@gmail.com" text="davohak2009@gmail.com" />
          <Link href={social.github.href} text="GitHub" variant="secondary" />
          <Link href={social.linkedin.href} text="LinkedIn" variant="secondary" />
        </div>
      </div>
    </Section>
  );
}
