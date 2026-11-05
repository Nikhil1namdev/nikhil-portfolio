import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-28 border-t border-white/[0.08] bg-transparent">
      <div className="section-container">
        <SectionHeading
          eyebrow="03 / Selected Works"
          title="Digital products built with intention."
          description="High-craft engineering across automation pipelines, real-time collaboration engines, and production SaaS applications."
        />

        {/* Master Flagship Showcase */}
        <div className="mt-16">
          <ProjectCard project={featuredProject} layout="featured" />
        </div>

        {/* Secondary Image-Led Projects Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.name} project={project} layout="grid" />
          ))}
        </div>
      </div>
    </section>
  );
}
