import { Tag } from "../../atoms/components/tag/Tag";
import { Section } from "../../molecules/Section/Section";
import "./Skills.scss";

export default function Skills() {
  const groups = [
    { id: "languages", title: "Языки", items: ["JavaScript", "TypeScript", "Go"] },
    { id: "frameworks", title: "Фреймворки", items: ["React", "Next.js", "Nest.js"] },
    { id: "intsruments", title: "Инструменты", items: ["Git", "Docker", "Figma", "Postman"] },
  ];

  return (
    <Section className="skills" orderNum="02" title="Навыки">
      <div className="skills__groups">
        {groups.map(({ id, title, items }) => (
          <div className="skills__group" key={id}>
            <p className="skills__group-title">{title}</p>
            <div className="skills__list">
              {items.map((item) => (
                <Tag key={item} text={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
