// FadeIn.tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import "./FadeIn.css";

interface FadeInProps {
  children: ReactNode;
  onSettled?: () => void; // вызывается ПОСЛЕ анимации, а не на mount
}

export function FadeIn({ children, onSettled }: FadeInProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? "fade-in--visible" : ""}`}
      onTransitionEnd={(e) => {
        if (e.propertyName === "opacity") onSettled?.();
      }}
    >
      {children}
    </div>
  );
}
