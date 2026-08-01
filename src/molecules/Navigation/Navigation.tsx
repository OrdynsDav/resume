import { Link } from "../../atoms/components/link/Link";
import { navigationList } from "../../config/navigation.config";
import "./Navigation.scss";

export function Navigation() {
  return (
    <nav className="nav" role="navigation">
      <ul className="nav__list">
        {navigationList.map(({ id, href, text }) => {
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
