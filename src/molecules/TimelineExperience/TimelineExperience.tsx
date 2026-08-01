import { Text } from "../../atoms/components/text/Text";
import type { TimelineExperienceProps } from "../types/inertfaces";
import "./TimelineExperience.scss";

export function TimelineExperience({ start, end, title, description }: TimelineExperienceProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-item__dot"></div>
      <time className="timeline-item__date">
        {start}&nbsp;&mdash; {end}
      </time>
      <Text className="timeline-item__title" tag="h3" text={title} />
      <Text className="timeline-item__desc" text={description} />
    </div>
  );
}
