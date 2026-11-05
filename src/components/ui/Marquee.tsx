"use client";

import React from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  speed?: number;
};

export function Marquee({
  children,
  direction = "left",
  pauseOnHover = true,
  className,
  speed = 30
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-4 py-2",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex shrink-0 gap-4 py-2",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}

