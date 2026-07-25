import { Link } from "../../atoms/components/link/Link";

import { contacts } from "../../config/contacts.config.tsx";
import "./Contacts.css"

export function Contacts() {
  return (
    <div className="contacts">
      {contacts.map(({id, href, icon, ariaLabel}) => {
        return (
          <Link key={id} href={href} iconLeft={icon} aria-label={ariaLabel} variant="casual"/>
        )
      })}
    </div>
  );
}
