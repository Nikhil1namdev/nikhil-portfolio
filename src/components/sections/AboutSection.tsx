import { Cpu, Layout, Terminal } from "lucide-react";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: Layout,
    number: "01",
    title: "Interface Precision & Craft",
    description:
      "Crafting pixel-accurate layouts with fluid typography, responsive ergonomics, and zero layout shift. Every button, interaction, and transition is built to feel snappy, natural, and intentional."
  },
  {
    icon: Cpu,
    number: "02",
    title: "Production Architecture",
    description:
      "Shipped 40+ production SaaS screens at Softinator Techlabs. Experienced with OAuth authentication flows, bidirectional webhook integration, client-side route code splitting, and predictable state management."
  },
  {
    icon: Terminal,
    number: "03",
    title: "Full-Stack Autonomy",
    description:
      "End-to-end fluency across the MERN stack: designing RESTful endpoints, modeling MongoDB schemas, building real-time WebSocket rooms, and orchestrating automated n8n & Gemini AI pipelines."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-28 border-t border-white/[0.08] bg-transparent">
      <div className="section-container">
        <SectionHeading
          eyebrow="01 / Background & Philosophy"
          title="Bridging design sensibility with production engineering."
          description="A developer focused on real-world product flow, performance, and maintainable frontend systems."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] items-start">
          {/* Left Column: Portrait Presentation */}
          <ProfileCard />

          {/* Right Column: Open Editorial Composition (No nested card boxes!) */}
          <div className="space-y-10">
            <div className="space-y-5 text-lg leading-relaxed text-zinc-300 font-normal">
              <p>
                I approach frontend engineering not just as implementing layouts, but as crafting an intuitive, reliable digital product. When users interact with a button, form, or dashboard, every micro-interaction should feel snappy and deliberate.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed">
                Currently at <span className="text-zinc-100 font-medium">Softinator Techlabs</span>, I build production-ready SaaS modules, integrate third-party webhooks, configure OAuth flows, and continually optimize React and Next.js applications for render speed and accessibility.
              </p>
            </div>

            {/* Editorial Dividers & Pillars */}
            <div className="space-y-8 pt-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="pt-6 border-t border-white/[0.08] grid gap-4 sm:grid-cols-[1.5fr_2.5fr] items-start"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-sky-400 shrink-0">
                      <pillar.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-zinc-500 block">
                        {pillar.number}
                      </span>
                      <h4 className="text-base font-medium text-zinc-100 mt-0.5">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-400 font-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
