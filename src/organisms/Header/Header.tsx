import { Container } from "../../atoms/components/container/Container";
import { Social } from "../../molecules/Social/Social";
import { Navigation } from "../../molecules/Navigation/Navigation";
import "./Header.scss";
import { LanguageSwitcher } from "../../molecules/LanguageSwitcher/LanguageSwitcher";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Navigation />
          <div className="header__right">
            <Social />
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}
