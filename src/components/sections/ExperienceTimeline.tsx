import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" data-animate-section className="section-container py-24">
      <SectionHeading
        eyebrow="Experience"
        title="A focused timeline of React, SaaS, and full-stack growth."
        description="From internship UI work to production SaaS screens and independent full-stack projects."
      />
      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="absolute left-[7px] top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-cyan-300 via-white/20 to-transparent" />
        <div className="grid gap-7">
          {experiences.map((item) => (
            <TimelineItem key={`${item.role}-${item.duration}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
