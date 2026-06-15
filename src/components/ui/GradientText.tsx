"use client";

import { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
};

export function GradientText({ children, className = "", pauseOnHover = true }: GradientTextProps) {
  return (
    <span className={`gradient-text ${pauseOnHover ? "gradient-text-pause" : ""} ${className}`}>
      {children}
    </span>
  );
}
