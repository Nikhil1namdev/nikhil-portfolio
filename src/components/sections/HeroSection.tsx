"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

const showcaseProjects = [
  {
    id: "job-pilot",
    title: "Job Pilot",
    category: "AI Automation Platform",
    image: "/images/projects/job-pilot.png",
    stack: ["Next.js 14", "MongoDB", "n8n", "Gemini AI"],
    metrics: "Automated scoring & deduplication",
    live: "https://job-pilot-dashboard-peach.vercel.app/"
  },
  {
    id: "bytebite",
    title: "ByteBite",
    category: "Video-Commerce Engine",
    image: "/images/projects/bytebite.png",
    stack: ["React.js", "Node.js", "Express", "ImageKit"],
    metrics: "Autoplay feed & smooth interaction",
    live: "https://food-view-project.vercel.app/"
  },
  {
    id: "project-sync",
    title: "Project Sync",
    category: "Real-time Collaboration",
    image: "/images/projects/project-sync.png",
    stack: ["React.js", "Socket.io", "OAuth 2.0", "MongoDB"],
    metrics: "Live drag-and-drop workspace",
    live: "https://project-sync-lac.vercel.app/"
  }
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeProject = showcaseProjects[activeTab];

  return (
    <section id="home" className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          {/* Left Column: Authoritative Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-mono text-zinc-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Full-time Roles & Contracts</span>
            </div>

            {/* Dominant Editorial Display Typography */}
            <h1 className="text-4xl font-normal tracking-[-0.035em] text-zinc-100 sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.06]">
              Engineering digital products with{" "}
              <span className="font-semibold text-white">
                uncompromising craft
              </span>{" "}
              & clean architecture.
            </h1>

            {/* Sub-statement */}
            <p className="max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-400 font-normal">
              I am <span className="text-zinc-100 font-medium">Nikhil Namdev</span>, a Frontend Engineer & Full Stack Developer from Indore. I build production-ready SaaS dashboards, AI automation pipelines, and modern web applications with React, Next.js, and TypeScript.
            </p>

            {/* Primary & Secondary Actions with Magnetic Physics */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Magnetic strength={0.25}>
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-zinc-100 px-7 py-3.5 text-xs font-mono font-medium text-zinc-950 uppercase tracking-wider transition-all duration-200 hover:bg-white hover:shadow-lg active:scale-95"
                >
                  <span>Explore Selected Work</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.25}>
                <Link
                  href="/resume/Nikhil_Namdev_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-xs font-mono font-medium text-zinc-300 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <span>View Resume</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </Link>
              </Magnetic>

              {/* Direct Quick Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <Link
                  href="https://github.com/nikhilnamdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition hover:border-white/25 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nikhilnamdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition hover:border-white/25 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:nikhilnamdev31@gmail.com"
                  aria-label="Send Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition hover:border-white/25 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Clean Metrics Ledger Strip */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08] text-xs font-mono">
              <div>
                <p className="text-zinc-100 font-medium text-base">40+ Screens</p>
                <p className="text-xs text-zinc-500 mt-1">Production UI Built</p>
              </div>
              <div>
                <p className="text-zinc-100 font-medium text-base">Full-Stack</p>
                <p className="text-xs text-zinc-500 mt-1">Next.js & MERN</p>
              </div>
              <div>
                <p className="text-zinc-100 font-medium text-base">Indore, IN</p>
                <p className="text-xs text-zinc-500 mt-1">Remote / Relocate</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Prominent Widescreen Showcase Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121215] shadow-2xl">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#16161a] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>

                <div className="flex items-center gap-1.5 rounded-md bg-black/40 px-3 py-1 text-xs font-mono text-zinc-400 border border-white/[0.05]">
                  <span>nikhil.dev / {activeProject.id}</span>
                </div>

                <Link
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Live</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Tab Navigation */}
              <div className="flex items-center border-b border-white/[0.06] bg-[#101014] px-3 overflow-x-auto">
                {showcaseProjects.map((project, idx) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveTab(idx)}
                    className={`relative flex items-center gap-2 px-4 py-3 text-xs font-mono transition-all whitespace-nowrap ${
                      activeTab === idx
                        ? "text-zinc-100 font-medium"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <span>0{idx + 1}.</span>
                    <span>{project.title}</span>
                    {activeTab === idx && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 inset-x-2 h-[2px] bg-sky-400"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Prominent Screenshot Viewport */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/80">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={activeProject.image}
                      alt={`${activeProject.title} interface preview`}
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 45vw, 95vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Showcase Caption Footer */}
              <div className="p-5 bg-[#121215] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400">
                      {activeProject.category}
                    </span>
                    <h3 className="text-lg font-medium text-zinc-100 mt-0.5">
                      {activeProject.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 bg-white/[0.04] px-3 py-1 rounded border border-white/[0.06] w-fit">
                    {activeProject.metrics}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeProject.stack.map((t) => (
                    <span key={t} className="mono-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
