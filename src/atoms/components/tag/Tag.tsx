import type { TagProps } from "../../types/inertfaces";
import "./Tag.css";

export function Tag({ text }: TagProps) {
  return <span className="tag">{text}</span>;
}
