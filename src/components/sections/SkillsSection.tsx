"use client";

import { Code2, Cpu, Database, Palette, Workflow, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";

const marqueeSkillsTop = [
  "React.js",
  "Next.js 14",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Socket.io",
  "Framer Motion",
  "GSAP"
];

const marqueeSkillsBottom = [
  "Gemini AI",
  "n8n Automation",
  "REST APIs",
  "OAuth 2.0",
  "JWT Auth",
  "Docker",
  "Git & GitHub",
  "Vercel",
  "Postman",
  "Resend API"
];

const skillCategories = [
  {
    number: "01",
    title: "Core Frontend & Frameworks",
    tag: "UI Architecture",
    description:
      "Component-driven development with React 18 and Next.js 14 App Router, building modular UI systems with strict TypeScript type-safety.",
    skills: ["React.js", "Next.js 14", "TypeScript", "JavaScript (ES6+)", "HTML5 Semantic", "CSS3 Architecture"],
    icon: Code2
  },
  {
    number: "02",
    title: "Styling & Motion Systems",
    tag: "Visual Ergonomics",
    description:
      "Crafting polished responsive interfaces with Tailwind CSS, tactile Framer Motion physics, and smooth GSAP transitions.",
    skills: ["Tailwind CSS", "Framer Motion", "GSAP", "Responsive Layouts", "Component Design Tokens", "Dark Mode Ergonomics"],
    icon: Palette
  },
  {
    number: "03",
    title: "Backend & Real-Time APIs",
    tag: "Application Layer",
    description:
      "Designing secure Node.js and Express REST endpoints, bidirectional Socket.io WebSocket rooms, and OAuth 2.0 / JWT session authentication.",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.io (WebSockets)", "OAuth 2.0", "JWT Auth", "Resend API"],
    icon: Cpu
  },
  {
    number: "04",
    title: "Database, Tools & Automation",
    tag: "Workflow & Cloud",
    description:
      "Managing data persistence in MongoDB, orchestrating automated workflows with n8n & Gemini AI, and handling Git CI/CD deployments.",
    skills: ["MongoDB", "Mongoose", "n8n Automation", "Gemini AI API", "Git / GitHub", "Docker (Basics)", "Vercel", "Postman"],
    icon: Database
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 border-t border-white/[0.08] bg-transparent">
      <div className="section-container">
        <SectionHeading
          eyebrow="02 / Technical Competence"
          title="A modern stack engineered for production."
          description="A balanced toolkit for high-fidelity frontend systems, real-time collaboration, and automated pipelines."
        />

        {/* Dual Infinite Smooth Marquee */}
        <div className="mt-12 space-y-3 py-2">
          <Marquee speed={28}>
            {marqueeSkillsTop.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-mono text-zinc-300 backdrop-blur transition hover:border-sky-400/40 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                {skill}
              </span>
            ))}
          </Marquee>

          <Marquee speed={32} direction="right">
            {marqueeSkillsBottom.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-mono text-zinc-300 backdrop-blur transition hover:border-sky-400/40 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {skill}
              </span>
            ))}
          </Marquee>
        </div>

        {/* Open Categorized Editorial Grid (No Boxy Card Clutter!) */}
        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="pt-6 border-t border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-zinc-500">{cat.number}</span>
                    <span className="text-zinc-600">&bull;</span>
                    <span className="font-mono text-xs text-sky-400 uppercase tracking-wider">
                      {cat.tag}
                    </span>
                  </div>
                  <cat.icon className="h-4 w-4 text-zinc-400" />
                </div>

                <h3 className="text-xl font-medium tracking-tight text-zinc-100 mt-2">
                  {cat.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400 font-normal">
                  {cat.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs font-mono text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
