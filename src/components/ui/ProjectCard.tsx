"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: {
    name: string;
    tagline: string;
    description: string;
    tech: string[];
    highlights: string[];
    image?: string;
    gradient: string;
    github?: string;
    live?: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      data-animate-card
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#08080a]/65 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.1)] h-full flex flex-col"
    >
      <div className={cn("relative h-[200px] sm:h-[220px] lg:h-[250px] overflow-hidden bg-gradient-to-br border-b border-white/10", project.gradient)}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            fill
            className="object-cover object-top brightness-[0.92] contrast-[1.03] transition duration-500 group-hover:scale-[1.02] group-hover:brightness-100"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        ) : (
          <div className="absolute inset-5 rounded-2xl border border-white/15 bg-black/35 p-4 shadow-glow backdrop-blur">
            <div className="mb-3 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
            <div className="space-y-3.5">
              <div className="h-2.5 w-2/3 rounded-full bg-white/50" />
              <div className="h-14 rounded-2xl border border-white/10 bg-white/10" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-7 rounded-xl bg-white/10" />
                <div className="h-7 rounded-xl bg-white/10" />
                <div className="h-7 rounded-xl bg-white/10" />
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400/90">{project.tagline}</p>
          <h3 className="mt-1 text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300">{project.name}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-gray-300 line-clamp-2">{project.description}</p>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-0.5 text-[11px] font-medium text-gray-300 select-none">
                {tech}
              </span>
            ))}
          </div>

          <ul className="mt-4 grid gap-1.5 text-[12px] text-gray-300 sm:grid-cols-2">
            {project.highlights.slice(0, 4).map((highlight) => (
              <motion.li
                key={highlight}
                whileHover={{ x: 3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group/item flex cursor-default items-center gap-2 rounded-full border border-white/5 bg-white/[0.01] px-2.5 py-1 transition duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/[0.03] hover:text-cyan-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80 transition duration-300 group-hover/item:scale-125" />
                <span className="truncate">{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-5 pt-3 border-t border-white/[0.04] flex flex-wrap gap-2.5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              Live Demo <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:border-white/20 hover:bg-white/5"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
          {!project.live && !project.github && (
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              Discuss Project <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
