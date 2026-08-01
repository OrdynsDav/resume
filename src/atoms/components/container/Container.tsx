import { clsx } from "../../helpers/clsx";
import type { ContainerProps } from "../../types/inertfaces";
import "./Container.scss";

export function Container({ className, children }: ContainerProps) {
  return <div className={clsx("container", className ?? "")}>{children}</div>;
}
