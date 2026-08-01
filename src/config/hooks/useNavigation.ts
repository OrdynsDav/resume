import { useTranslation } from "react-i18next";
import { navigationConfig } from "../navigation.config";

export function useNavigation() {
  const { t } = useTranslation("navigation");
  const navigation = {
    about: { ...navigationConfig.about, text: t("about") },
    skills: { ...navigationConfig.skills, text: t("skills") },
    projects: { ...navigationConfig.projects, text: t("projects") },
    experience: { ...navigationConfig.experience, text: t("experience") },
  };

  return {
    navigation,
    navigationList: Object.values(navigation),
  };
}
