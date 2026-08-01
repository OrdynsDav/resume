import type { TagProps } from "../../types/inertfaces";
import "./Tag.scss";

export function Tag({ text }: TagProps) {
  return <span className="tag">{text}</span>;
}
