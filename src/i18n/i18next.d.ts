import "i18next";
import hero from "./locales/en/hero.json";
import navigation from "./locales/en/navigation.json";
import about from "./locales/en/about.json";
import skills from "./locales/en/skills.json";
import projects from "./locales/en/projects.json";
import experience from "./locales/en/experience.json";
import contacts from "./locales/en/contacts.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      navigation: typeof navigation;
      hero: typeof hero;
      about: typeof about;
      skills: typeof skills;
      projects: typeof projects;
      experience: typeof experience;
      contacts: typeof contacts;
    };
  }
}
