import { TelegramIcon } from "../atoms/icons/TelegramIcon";
import { WhatsAppIcon } from "../atoms/icons/WhatsAppIcon";
import LinkedInIcon from "../atoms/icons/LinkedInIcon";
import { GitHubIcon } from "../atoms/icons/GitHubIcon";
import type { Contact } from "./interfaces";

export const contacts: Contact[] = [
  { id: 1, href: "https://t.me/davohakk", icon: <TelegramIcon />, ariaLabel: "Ссылка на Telegram" },
  { id: 2, href: "https://github.com/OrdynsDav", icon: <GitHubIcon />, ariaLabel: "Ссылка на GitHub"  },
  { id: 3, href: "https://wa.me/79113720788", icon: <WhatsAppIcon />, ariaLabel: "Ссылка на WhatsApp"  },
  { id: 4, href: "https://www.linkedin.com/in/david-hakobyan-795754424", icon: <LinkedInIcon />, ariaLabel: "Ссылка на LinkedIn"  },
];