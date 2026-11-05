import React from "react";
import { LucideIcon } from "lucide-react";

type SkillCardProps = {
  categoryNumber: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
};

export function SkillCard({
  categoryNumber,
  title,
  tagline,
  description,
  skills,
  icon: Icon
}: SkillCardProps) {
  return (
    <article className="editorial-card p-6 flex flex-col justify-between">
      <div>
        {/* Header with Monospace Index */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
          <span className="font-mono text-xs text-zinc-500">{categoryNumber}</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-sky-400 uppercase tracking-wider">
              {tagline}
            </span>
            <Icon className="h-4 w-4 text-zinc-400" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">{description}</p>
        </div>
      </div>

      {/* Tech Stack Chips */}
      <div className="mt-6 pt-4 border-t border-white/[0.04]">
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="mono-badge transition-all duration-200 hover:border-white/20 hover:text-zinc-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
