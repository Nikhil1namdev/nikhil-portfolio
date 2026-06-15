"use client";

import { ReactNode, useRef } from "react";

type BorderGlowProps = {
  children: ReactNode;
  className?: string;
};

export function BorderGlow({ children, className = "" }: BorderGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`border-glow-card ${className}`}
      onPointerMove={(event) => {
        const card = ref.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
      }}
    >
      {children}
    </div>
  );
}
