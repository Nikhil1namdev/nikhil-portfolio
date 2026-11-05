"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  layout?: "grid" | "featured";
};

export function ProjectCard({ project, layout = "grid" }: ProjectCardProps) {
  const isFeatured = layout === "featured" || project.featured;

  if (isFeatured) {
    return (
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111114] shadow-2xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 items-center p-6 sm:p-8 lg:p-10">
          {/* Prominent Visual Preview */}
          <div className="space-y-4">
            <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/70 shadow-2xl">
              {/* Window Bar */}
              <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between border-b border-white/[0.08] bg-[#141418]/90 px-4 py-2.5 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-xs font-mono text-zinc-400 bg-black/40 px-3 py-0.5 rounded border border-white/5">
                  job-pilot-dashboard.vercel.app
                </div>
                <div className="w-8" />
              </div>

              {project.image && (
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  priority
                  className="object-cover object-top pt-8 transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 60vw, 95vw"
                />
              )}
            </div>

            {/* Highlights List */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              {project.highlights.map((h) => (
                <span
                  key={h}
                  className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{h}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Narrative & Contribution */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Featured Project</span>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-zinc-400">{project.category}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100 mt-2">
                {project.name}
              </h3>
              <p className="mt-1 text-sm font-mono text-zinc-400">{project.tagline}</p>
            </div>

            <p className="text-base leading-relaxed text-zinc-300 font-normal">
              {project.description}
            </p>

            {/* Engineering Contribution */}
            <div className="rounded-xl border border-white/[0.08] bg-[#16161a] p-4 text-xs space-y-1.5">
              <span className="font-mono uppercase tracking-wider text-sky-400 font-medium block">
                Engineering Contribution:
              </span>
              <p className="text-zinc-300 leading-relaxed font-sans text-sm">
                {project.contribution}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => (
                <span key={t} className="mono-badge text-xs">
                  {t}
                </span>
              ))}
            </div>

            {/* Prominent CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-xs font-mono font-medium text-zinc-950 uppercase tracking-wider transition hover:bg-white hover:shadow-lg active:scale-95"
                >
                  <span>Live Platform</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-mono font-medium text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  <span>View Repository</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Secondary Project Card (Spacious, Image-Led, 16:9 Widescreen)
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#111114] p-5 sm:p-6 transition-all duration-300 hover:border-white/20">
      <div className="space-y-5">
        {/* Large 16:9 Cinematic Image Viewport */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-md">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-cover object-top transition duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          ) : (
            /* Bespoke SaaS Visual */
            <div className="h-full w-full p-5 flex flex-col justify-between bg-gradient-to-br from-zinc-900 to-black text-zinc-400 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
                <span className="text-zinc-200 font-medium text-sm">Production SaaS Architecture</span>
                <span className="text-xs text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                  40+ Screens
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 my-auto">
                <div className="border border-white/10 rounded-lg p-2.5 text-center bg-white/[0.02]">
                  <p className="text-[10px] text-zinc-500">AUTH</p>
                  <p className="text-xs text-zinc-200 mt-1">Google OAuth</p>
                </div>
                <div className="border border-white/10 rounded-lg p-2.5 text-center bg-white/[0.02]">
                  <p className="text-[10px] text-zinc-500">STATE</p>
                  <p className="text-xs text-zinc-200 mt-1">Context API</p>
                </div>
                <div className="border border-white/10 rounded-lg p-2.5 text-center bg-white/[0.02]">
                  <p className="text-[10px] text-zinc-500">PIPELINE</p>
                  <p className="text-xs text-zinc-200 mt-1">Webhooks</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs text-zinc-500 pt-2 border-t border-white/[0.04]">
                <span>Lazy-Loaded Routes</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          )}
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-sky-400">
            {project.category}
          </span>
          <h3 className="text-2xl font-medium tracking-tight text-zinc-100 mt-1 group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <p className="mt-1 text-xs font-mono text-zinc-400">{project.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-zinc-300 font-normal line-clamp-2">
          {project.description}
        </p>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span key={t} className="mono-badge">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-4">
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-100 hover:text-sky-400 transition-colors"
            >
              <span>Live Site</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Source</span>
            </Link>
          )}
        </div>

        {!project.live && !project.github && (
          <span className="font-mono text-xs text-zinc-500">Commercial Work</span>
        )}
      </div>
    </article>
  );
}
