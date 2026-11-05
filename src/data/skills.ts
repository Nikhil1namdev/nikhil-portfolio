import { Code2, Cpu, Database, Palette } from "lucide-react";

export const skillCategories = [
  {
    categoryNumber: "01",
    title: "Frontend Engineering",
    tagline: "Core UI Systems",
    description:
      "Building fast, accessible, component-driven client applications with strict type safety and modular architectures.",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 Semantic",
      "CSS3 Architecture"
    ],
    icon: Code2
  },
  {
    categoryNumber: "02",
    title: "Styling & Motion",
    tagline: "Visual Ergonomics",
    description:
      "Crafting polished responsive designs, fluid layouts, tactile micro-interactions, and high-framerate transitions.",
    skills: [
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Responsive Layouts",
      "Component Design Tokens",
      "Dark Theme Ergonomics"
    ],
    icon: Palette
  },
  {
    categoryNumber: "03",
    title: "Backend & APIs",
    tagline: "Application Layer",
    description:
      "Developing secure server-side logic, real-time communication channels, authentication sessions, and webhooks.",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Socket.io (WebSockets)",
      "OAuth 2.0",
      "JWT Auth",
      "Resend API"
    ],
    icon: Cpu
  },
  {
    categoryNumber: "04",
    title: "Database & Tooling",
    tagline: "Workflow & Cloud",
    description:
      "Managing data persistence, automated processing pipelines, version control workflows, and CI/CD hosting.",
    skills: [
      "MongoDB",
      "Mongoose",
      "n8n Automation",
      "Git / GitHub",
      "Docker (Basics)",
      "Vercel",
      "Postman"
    ],
    icon: Database
  }
];
