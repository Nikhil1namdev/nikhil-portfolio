import React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-4",
        isCenter ? "mx-auto max-w-3xl text-center" : "max-w-4xl",
        className
      )}
    >
      <div className={cn("flex", isCenter ? "justify-center" : "justify-start")}>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400 font-medium flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
        {title}
      </h2>

      {description && (
        <p className="text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-8 max-w-2xl font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
