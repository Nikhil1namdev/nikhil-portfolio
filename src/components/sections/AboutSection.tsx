import { Code2, Layers3, MonitorCheck, Rocket } from "lucide-react";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "1+ Year", label: "Professional Experience", icon: Rocket },
  { value: "40+", label: "Production Screens Built", icon: MonitorCheck },
  { value: "Full Stack", label: "Project Architecture", icon: Layers3 },
  { value: "SaaS UI", label: "Production UI Experience", icon: Code2 }
];

export function AboutSection() {
  return (
    <section id="about" data-animate-section className="section-container py-20 lg:py-28">
      <SectionHeading
        eyebrow="About"
        title="A developer who cares about interface quality and real product flow."
        description="I am a React / Full Stack Developer from Indore with experience building production-level frontend screens, SaaS dashboards, authentication flows, automation dashboards, and interactive user interfaces."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <ProfileCard />

        <div className="flex flex-col justify-center">
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
            I enjoy turning ideas into smooth, responsive, real-world web applications. My work blends clean React components, strong UI craft, practical backend logic, and careful attention to how people actually move through a product.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-animate-card
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10 transition-colors">
                    <stat.icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                </div>
                <p className="mt-4 text-2xl font-extrabold text-white tracking-tight">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
