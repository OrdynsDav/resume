import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Section } from "../../molecules/Section/Section";
import type { ProjectProps } from "../../molecules/types/inertfaces";
import { Project } from "../../molecules/Project/Project";
import { splideSLiderOptions } from "../../lib/splidejs/splideSliderOptions";

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      orderNum: "01",
      title: "TaskFlow",
      description:
        "Трекер задач для небольших команд с досками в стиле канбан и общими дедлайнами.",
      tags: [{ text: "React" }, { text: "Node.js" }, { text: "PostgreSQL" }],
      reposHref: "#",
    },
    {
      orderNum: "02",
      title: "WeatherNow",
      description:
        "PWA-приложение погоды с офлайн-режимом и уведомлениями о резкой смене температуры.",
      tags: [{ text: "TypeScript" }, { text: "Next.js" }, { text: "REST API" }],
      reposHref: "#",
    },
    {
      orderNum: "03",
      title: "DevPortfolio",
      description:
        "Конструктор портфолио для разработчиков: JSON на входе — готовая статическая страница на выходе.",
      tags: [{ text: "React" }, { text: "Vite" }, { text: "Tailwind" }],
      reposHref: "#",
    },
    {
      orderNum: "04",
      title: "NoteSync",
      description:
        "Заметки с офлайн-редактированием и синхронизацией между устройствами через WebSocket.",
      tags: [{ text: "React" }, { text: "WebSocket" }, { text: "IndexedDB" }],
      reposHref: "#",
    },
    {
      orderNum: "05",
      title: "ExpenseLens",
      description: "Трекер расходов с распознаванием чеков через OCR и авто-категоризацией трат.",
      tags: [{ text: "TypeScript" }, { text: "Tesseract.js" }, { text: "Chart.js" }],
      reposHref: "#",
    },
  ];
  return (
    <Section className="projects" orderNum="03" title="Проекты" id="projects">
      <Splide options={splideSLiderOptions.options}>
        {projects.map(({ orderNum, title, description, tags, reposHref }, index) => {
          return (
            <SplideSlide key={index + orderNum}>
              <Project
                orderNum={orderNum}
                title={title}
                description={description}
                tags={tags}
                reposHref={reposHref}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </Section>
  );
}
