import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-28 border-t border-white/[0.08] bg-transparent">
      <div className="section-container">
        <SectionHeading
          eyebrow="04 / Career & Experience"
          title="Practical experience building production software."
          description="A chronological record of full-time frontend roles, agency internship work, and independent engineering projects."
        />

        {/* Open Editorial Career Ledger (No Dense Cards!) */}
        <div className="mt-16 space-y-2">
          {experiences.map((item, index) => (
            <TimelineItem
              key={`${item.role}-${item.company}`}
              item={item}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
