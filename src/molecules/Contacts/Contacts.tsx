import { Link } from "../../atoms/components/link/Link";

import { contactsList } from "../../config/contacts.config.tsx";
import "./Contacts.css";

export function Contacts() {
  return (
    <div className="contacts">
      {contactsList.map(({ id, href, icon, ariaLabel }) => {
        return (
          <Link key={id} href={href} iconLeft={icon} aria-label={ariaLabel} variant="casual" />
        );
      })}
    </div>
  );
}
