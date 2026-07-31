import { Section } from "../../molecules/Section/Section";
import { TimelineExperience } from "../../molecules/TimelineExperience/TimelineExperience";
import type { TimelineExperienceProps } from "../../molecules/types/inertfaces";
import "./Experience.css";

export default function Experience() {
  const timelineExperience: TimelineExperienceProps[] = [
    {
      start: 2024,
      end: "present",
      title: "Frontend-стажёр, NoName Studio",
      description:
        "Разрабатываю компоненты интерфейса на React, участвую в код-ревью, чиню баги в проде.",
    },
    {
      start: 2023,
      end: 2023,
      title: "2 место на хакатоне HackNight",
      description: "За 24 часа собрали с командой MVP сервиса для поиска попутчиков.",
    },
    {
      start: 2021,
      end: 2025,
      title: "Университет, «Программная инженерия»",
      description: "Бакалавриат, специализация — разработка веб-приложений.",
    },
  ];
  return (
    <Section className="experience" orderNum="04" title="Опыт и образование">
      <div className="experience__timeline">
        {timelineExperience.map((item) => {
          return <TimelineExperience key={item.description} {...item} />;
        })}
      </div>
    </Section>
  );
}
