export const navigationConfig = {
  about: { id: 1, href: "#about" },
  skills: { id: 2, href: "#skills" },
  projects: { id: 3, href: "#projects" },
  experience: { id: 4, href: "#experience" },
} as const;

export const sectionIds = ["about", "skills", "projects", "experience", "contacts"] as const;
