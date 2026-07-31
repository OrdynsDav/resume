import type { Navigation } from "./types/interfaces";

export const navigation = {
  about: { id: 1, text: "Обо мне", href: "#about" },
  skills: { id: 2, text: "Навыки", href: "#skills" },
  projects: { id: 3, text: "Проекты", href: "#projects" },
  experience: { id: 4, text: "Опыт", href: "#experience" },
} as const satisfies Record<string, Navigation>;
export const navigationList = Object.values(navigation);

export const sectionIds = [
  navigation.about.href.slice(1),
  navigation.skills.href.slice(1),
  navigation.projects.href.slice(1),
  navigation.experience.href.slice(1),
  "contacts",
] as const;
