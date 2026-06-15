import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" data-animate-section className="section-container py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work built around product thinking and strong UI execution."
        description="Real portfolio projects covering automation dashboards, video commerce, collaboration platforms, and production SaaS frontend work."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
