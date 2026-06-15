import { SkillCard } from "@/components/ui/SkillCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" data-animate-section className="section-container py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Modern stack for frontend, MERN, and scalable product work."
        description="A focused toolkit for building polished interfaces, reliable APIs, authentication flows, and automation-friendly dashboards."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </div>
    </section>
  );
}
