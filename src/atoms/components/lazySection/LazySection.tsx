import { Suspense, useEffect, useRef, useState } from "react";
import type { LazySectionProps } from "../../types/inertfaces";
import "./LazySection.scss";

export function LazySection({
  children,
  rootMargin = "100px",
  minHeight = 300,
  skeleton,
  id,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  useEffect(() => {
    const handler = (e: Event) => {
      if ((e as CustomEvent).detail === id) setIsVisible(true);
    };
    window.addEventListener("force-visible", handler);
    return () => window.removeEventListener("force-visible", handler);
  }, [id]);

  return (
    <div
      id={id}
      ref={ref}
      className="lazy-section"
      style={{ "--min-h": `${minHeight}px` } as React.CSSProperties}
    >
      {isVisible && <Suspense fallback={skeleton}>{children}</Suspense>}
    </div>
  );
}
