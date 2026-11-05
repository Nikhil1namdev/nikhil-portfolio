export type Experience = {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    role: "React Developer",
    company: "Softinator Techlabs",
    location: "Indore, India",
    duration: "Dec 2024 — Present",
    type: "Full-Time",
    description:
      "Leading frontend feature execution for an enterprise SaaS product. Developing scalable component libraries, integrating critical third-party APIs, and enhancing page rendering speeds.",
    highlights: [
      "Engineered 40+ responsive production SaaS screens from complex Figma specifications.",
      "Integrated secure Google OAuth flows and bidirectional webhook data listeners.",
      "Optimized client-side bundle size and routing latency using dynamic imports and Next.js code splitting.",
      "Collaborated closely with backend engineers to define REST endpoints and error boundaries."
    ],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Context API", "OAuth 2.0", "Webhooks"]
  },
  {
    role: "React Developer Intern",
    company: "Codes For Tomorrow",
    location: "Indore, India",
    duration: "Oct 2024 — Dec 2024",
    type: "Internship",
    description:
      "Collaborated with senior designers and developers to transform high-fidelity UI/UX concepts into responsive, cross-browser compatible frontend code.",
    highlights: [
      "Translated Figma prototypes into clean, modular React component trees.",
      "Ensured pixel-accurate responsiveness across mobile, tablet, and desktop viewports.",
      "Refactored legacy UI components to improve reusability and CSS maintainability."
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git"]
  },
  {
    role: "Full Stack Engineer (Independent)",
    company: "Product Engineering Projects",
    location: "Indore, India",
    duration: "2024 — Present",
    type: "Independent Work",
    description:
      "Designed and shipped independent full-stack web platforms exploring real-time collaboration, video streaming feeds, and automated artificial intelligence pipelines.",
    highlights: [
      "Shipped Job Pilot: an automated multi-source job filtering engine with Google Gemini scoring.",
      "Built ByteBite: a vertical video-commerce application with zero-lag IntersectionObserver autoplay.",
      "Developed Project Sync: real-time collaborative boards powered by Socket.io WebSockets."
    ],
    technologies: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "n8n", "Gemini AI"]
  }
];
