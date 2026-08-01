import { Container } from "../../atoms/components/container/Container";
import { Social } from "../../molecules/Social/Social";
import { Navigation } from "../../molecules/Navigation/Navigation";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Navigation />
          <Social />
        </div>
      </Container>
    </header>
  );
}
