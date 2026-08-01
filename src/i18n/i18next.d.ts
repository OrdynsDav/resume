import "i18next";
import hero from "./locales/ru/hero.json";
import navigation from "./locales/ru/navigation.json";
import about from "./locales/ru/about.json";
import skills from "./locales/ru/skills.json";
import projects from "./locales/ru/projects.json";
import experience from "./locales/ru/experience.json";
import contacts from "./locales/ru/contacts.json";

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
