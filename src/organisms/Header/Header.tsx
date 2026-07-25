import { Container } from "../../atoms/components/container/Container";
import { Contacts } from "../../molecules/Contacts/Contacts";
import { Navigation } from "../../molecules/Navigation/Navigation";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Navigation />
          <Contacts />
        </div>
      </Container>
    </header>
  );
}
