import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { Experience } from "@/data/experience";

type TimelineItemProps = {
  item: Experience;
  isLast?: boolean;
};

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <article className="pt-8 pb-10 border-t border-white/[0.08] grid gap-6 md:grid-cols-[1.1fr_2.9fr] items-start">
      {/* Left Column: Timeline Metadata (Duration, Company, Location) */}
      <div className="space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-medium">
          {item.type}
        </span>
        <h4 className="text-xl font-medium tracking-tight text-zinc-100">
          {item.company}
        </h4>
        <div className="flex flex-col gap-1 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <Calendar className="h-3.5 w-3.5 text-zinc-500" />
            {item.duration}
          </span>
          <span className="flex items-center gap-1.5 text-zinc-500">
            <MapPin className="h-3.5 w-3.5" />
            {item.location}
          </span>
        </div>
      </div>

      {/* Right Column: Role Title, Narrative & Impact Deliverables */}
      <div className="space-y-4">
        <h3 className="text-2xl font-medium tracking-tight text-white">
          {item.role}
        </h3>

        <p className="text-base leading-relaxed text-zinc-300 font-normal">
          {item.description}
        </p>

        {/* Deliverable Bullets */}
        <ul className="space-y-2 pt-1 text-sm text-zinc-400 font-normal">
          {item.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Technology Pills */}
        <div className="pt-3 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 text-xs font-mono text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
