import type { ReactElement } from "react";

export interface Contact {
  id: number;
  href: string;
  icon: ReactElement;
  ariaLabel: string;
}

export interface Navigation {
  id: number;
  text: string;
  href: string;
}
