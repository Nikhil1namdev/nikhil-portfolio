import { AppWindow, Bot, Code2, DatabaseZap, LockKeyhole, PanelsTopLeft } from "lucide-react";

export const services = [
  {
    icon: Code2,
    serviceNumber: "01",
    title: "Frontend Engineering",
    description:
      "Modern React and Next.js interfaces with strict type-safety, clean component boundaries, fluid typography, and snappy ergonomics."
  },
  {
    icon: DatabaseZap,
    serviceNumber: "02",
    title: "Full-Stack Web Applications",
    description:
      "End-to-end MERN stack architectures from database schemas and Express routes to reactive frontends and production deployment."
  },
  {
    icon: PanelsTopLeft,
    serviceNumber: "03",
    title: "SaaS & Product Dashboards",
    description:
      "High-density data tables, filtering systems, interactive analytics, and multi-tenant workflows built for daily operational clarity."
  },
  {
    icon: AppWindow,
    serviceNumber: "04",
    title: "API & Webhook Integrations",
    description:
      "Reliable client-server data synchronization, external REST API consumption, webhook event listeners, and background task processing."
  },
  {
    icon: LockKeyhole,
    serviceNumber: "05",
    title: "Auth & Access Control",
    description:
      "Secure Google/GitHub OAuth 2.0 authentication, JSON Web Tokens (JWT), session cookies, and role-based route guard architectures."
  },
  {
    icon: Bot,
    serviceNumber: "06",
    title: "Workflow Automation & AI",
    description:
      "Automating repetitive workflows using n8n orchestration, SerpAPI web gathering, and Google Gemini AI content scoring pipelines."
  }
];
