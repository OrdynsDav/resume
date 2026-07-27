import type { StatProps } from "../../types/inertfaces";
import { Text } from "../text/Text";
import "./Stat.css";

export function Stat({ label, value }: StatProps) {
  return (
    <div className="stat">
      <Text className="stat-label" text={label} />
      <Text className="stat-value" text={value} variant="secondary" />
    </div>
  );
}
