import { Skeleton } from "../../atoms/components/skeleton/Skeleton";
import "./SkeletonTitle.css";

export function SkeletonTitle() {
  return (
    <div className="skeleton-title">
      <Skeleton width={40} height={54} variant="text" />
      <Skeleton width={160} height={54} variant="text" />
    </div>
  );
}
