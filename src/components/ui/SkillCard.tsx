"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";

type SkillCardProps = {
  title: string;
  description: string;
  skills: string[];
};

const cardMeta = {
  Frontend: {
    meta: "Interface Layer",
    icon: Monitor,
  },
  Backend: {
    meta: "API & Data Layer",
    icon: Server,
  },
  Tools: {
    meta: "Workflow Layer",
    icon: Wrench,
  },
} as const;

export function SkillCard({ title, description, skills }: SkillCardProps) {
  const metaInfo = cardMeta[title as keyof typeof cardMeta] || {
    meta: "Skill Set",
    icon: Monitor,
  };
  const Icon = metaInfo.icon;

  return (
    <motion.article
      data-animate-card
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-[#08080a]/60 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.1)]"
    >
      {/* Subtle top edge glow border and blur */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-16 w-32 rounded-full bg-cyan-500/[0.04] blur-xl pointer-events-none" />

      {/* Meta Label */}
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/90 select-none">
        {metaInfo.meta}
      </span>

      {/* Title & Icon */}
      <div className="mt-1.5 flex items-center gap-2.5">
        <Icon className="h-5 w-5 text-gray-400 group-hover/card:text-cyan-300 transition-colors duration-300" />
        <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-gray-400 group-hover/card:text-gray-300 transition-colors duration-300">
        {description}
      </p>

      {/* Badges */}
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="relative overflow-hidden rounded-full border border-white/5 bg-white/[0.02] px-3.5 py-1.5 text-[13px] font-medium text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-cyan-500/[0.06] hover:text-white hover:shadow-[0_2px_10px_rgba(6,182,212,0.1)] select-none"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

