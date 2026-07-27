import { Link } from "../../atoms/components/link/Link";
import { navigation } from "../../config/navigation.config";
import "./Navigation.css";

export function Navigation() {
  return (
    <nav className="nav" role="navigation">
      <ul className="nav__list">
        {navigation.map(({ id, href, text }) => {
          return (
            <li key={id} className="nav__item">
              <Link className="nav__link" href={href} text={text} variant="casual" />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
