"use client";

import { SplitText } from "@/components/ui/SplitText";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <SplitText
        text={title}
        tag="h2"
        splitType="words"
        delay={70}
        duration={0.65}
        from={{ opacity: 0, y: 26 }}
        to={{ opacity: 1, y: 0 }}
        rootMargin="-80px"
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
      />
      <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">{description}</p>
    </div>
  );
}
