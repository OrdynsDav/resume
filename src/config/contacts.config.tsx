import { TelegramIcon } from "../atoms/icons/TelegramIcon";
import { WhatsAppIcon } from "../atoms/icons/WhatsAppIcon";
import LinkedInIcon from "../atoms/icons/LinkedInIcon";
import { GitHubIcon } from "../atoms/icons/GitHubIcon";
import type { Contact } from "./types/interfaces";
import GmailIcon from "../atoms/icons/GmailIcon";

export const social = {
  telegram: {
    id: 1,
    href: "https://t.me/davohakk",
    icon: <TelegramIcon />,
    ariaLabel: "Ссылка на Telegram",
  },
  github: {
    id: 2,
    href: "https://github.com/OrdynsDav",
    icon: <GitHubIcon />,
    ariaLabel: "Ссылка на GitHub",
  },
  gmail: {
    id: 3,
    href: "mailto:dav.frontend.developer@gmail.com",
    icon: <GmailIcon />,
    ariaLabel: "Ссылка на почту",
  },
  whatsapp: {
    id: 4,
    href: "https://wa.me/79113720788",
    icon: <WhatsAppIcon />,
    ariaLabel: "Ссылка на WhatsApp",
  },
  linkedin: {
    id: 5,
    href: "https://www.linkedin.com/in/david-hakobyan-795754424",
    icon: <LinkedInIcon />,
    ariaLabel: "Ссылка на LinkedIn",
  },
} as const satisfies Record<string, Contact>;

export const socialList = Object.values(social);
