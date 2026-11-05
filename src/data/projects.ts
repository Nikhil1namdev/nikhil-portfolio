export type Project = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  contribution: string;
  tech: string[];
  highlights: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "job-pilot",
    name: "Job Pilot",
    category: "Full Stack & AI Automation",
    tagline: "AI-Powered Job Automation & Scoring Dashboard",
    description:
      "A complete automated intelligence dashboard that aggregates job opportunities from multiple sources via SerpAPI, eliminates redundant duplicates with database checks, and scores each posting using Google Gemini AI before presenting candidates with high-confidence matches in a focused dashboard.",
    contribution:
      "Architected the full-stack system, wrote deduplication queries in MongoDB, designed n8n automated trigger workflows, and engineered the high-performance Next.js dashboard UI.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "n8n", "Gemini AI", "SerpAPI"],
    highlights: ["Automated AI Job Scoring", "Duplicate Removal Pipeline", "Multi-Source Job Aggregator", "Status Tracking Dashboard"],
    image: "/images/projects/job-pilot.png",
    github: "https://github.com/Nikhil1namdev/job-pilot-dashboard",
    live: "https://job-pilot-dashboard-peach.vercel.app/",
    featured: true
  },
  {
    id: "bytebite",
    name: "ByteBite",
    category: "Full Stack Engineering",
    tagline: "Vertical Video-Commerce & Discovery Engine",
    description:
      "A fast, responsive vertical short-video commerce platform inspired by modern mobile-first feed experiences, built to explore product discovery through video engagement.",
    contribution:
      "Engineered the zero-lag autoplay/pause feed using IntersectionObserver, set up cloud media processing with ImageKit, created secure JWT auth endpoints, and handled real-time engagement state.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "ImageKit", "GSAP"],
    highlights: ["Vertical Video Feed", "IntersectionObserver Autoplay", "Media Upload Pipeline", "JWT Authentication"],
    image: "/images/projects/bytebite.png",
    github: "https://github.com/Nikhil1namdev/food-view-project",
    live: "https://food-view-project.vercel.app/"
  },
  {
    id: "project-sync",
    name: "Project Sync",
    category: "Real-Time Collaboration",
    tagline: "Collaborative Team Workspace Platform",
    description:
      "A synchronized multi-user project management application enabling distributed engineering teams to track sprints, organize cards, and receive real-time board updates.",
    contribution:
      "Built real-time WebSocket communication rooms using Socket.io, integrated Google and GitHub OAuth 2.0 flows, and engineered an intuitive drag-and-drop Kanban interface.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT", "OAuth 2.0"],
    highlights: ["Real-time Kanban Sync", "Google & GitHub OAuth", "Dynamic Team Workspaces", "WebSocket Room Broadcasting"],
    image: "/images/projects/project-sync.png",
    github: "https://github.com/Nikhil1namdev/project-sync",
    live: "https://project-sync-lac.vercel.app/"
  },
  {
    id: "outliny",
    name: "Outliny",
    category: "Production SaaS Frontend",
    tagline: "High-Volume Production SaaS Interface",
    description:
      "A commercial-grade software platform where I developed extensive frontend modules, complex configuration views, data tables, and onboarding flows with a heavy emphasis on design consistency.",
    contribution:
      "Engineered 40+ responsive production screens, integrated Google OAuth and webhook notification channels, modularized reusable design components, and improved bundle loading speeds with lazy loading.",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Context API", "OAuth", "Webhooks"],
    highlights: ["40+ Production Screens", "Webhook Integrations", "Optimized Component Tree", "Modular Design System"]
  }
];
