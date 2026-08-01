import { Link } from "../../atoms/components/link/Link.tsx";
import { socialList } from "../../config/contacts.config.tsx";
import "./Social.scss";

export function Social() {
  return (
    <div className="social">
      {socialList.map(({ id, href, icon, ariaLabel }) => {
        return (
          <Link key={id} href={href} iconLeft={icon} aria-label={ariaLabel} variant="casual" />
        );
      })}
    </div>
  );
}
