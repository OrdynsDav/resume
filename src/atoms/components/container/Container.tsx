import { clsx } from "../../helpers/clsx";
import type { ContainerProps } from "../../types/inertfaces";
import "./Container.css";

export function Container({ className, children }: ContainerProps) {
  return <div className={clsx("container", className ?? "")}>{children}</div>;
}
