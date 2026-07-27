import { Link } from "../../atoms/components/link/Link";
import { Text } from "../../atoms/components/text/Text";
import { contacts } from "../../config/contacts.config";
import { Section } from "../../molecules/Section/Section";
import "./Hero.css";

export default function Hero() {
  return (
    <Section className="hero" ariaLabel="Главная секция">
      <div className="hero__wrapper">
        <div className="hero__content">
          <Text className="hero__title" tag="h1" text="Давит Акобян" />
          <Text className="hero__accent" variant="secondary" text="Junior+ Frontend Developer" />
          <Text
            className="hero__text"
            text="Пишу интерфейсы на React и TypeScript, разбираюсь, как всё устроено под капотом, и не боюсь брать задачи, которых раньше не делал."
          />
          <div className="hero__cta">
            <Link className="hero__link" href="" text="Смотреть проекты" />
            <Link
              className="hero__link"
              href={contacts.telegram.href}
              text="Написать мне"
              variant="secondary"
            />
          </div>
        </div>
        <picture className="hero__picture">
          <img src="/hero.jpeg" alt="Фото" />
        </picture>
      </div>
    </Section>
  );
}
