import { Stat } from "../../atoms/components/stat/Stat";
import { Text } from "../../atoms/components/text/Text";
import type { StatProps } from "../../atoms/types/inertfaces";
import { Section } from "../../molecules/Section/Section";
import "./About.scss";

export default function About() {
  const stats: StatProps[] = [
    { label: "Коммерческий опыт", value: "1 год" },
    { label: "Коммерческий опыт", value: "1 год" },
    { label: "Коммерческий опыт", value: "1 год" },
    { label: "Коммерческий опыт", value: "1 год" },
  ];
  return (
    <Section className="about" orderNum={"01"} title="Обо мне">
      <div className="about__wrapper">
        <div className="about__description">
          <Text text="Мне 22, я заканчиваю обучение по специальности «Программная инженерия» и последний год пишу production-код на стажировке. Начинал с вёрстки — сейчас собираю интерфейсы на React, подключаю их к API и слежу, чтобы всё работало быстро и без сюрпризов." />
          <Text text="Мне интересно не просто закрывать тикеты, а понимать, зачем нужна фича и как сделать её проще для пользователя. Учусь быстро, задаю вопросы, когда не знаю — и довожу задачи до конца." />
        </div>
        <div className="about__stats">
          {stats.map(({ label, value }, index) => {
            return <Stat key={index} label={label} value={value} />;
          })}
        </div>
      </div>
    </Section>
  );
}
