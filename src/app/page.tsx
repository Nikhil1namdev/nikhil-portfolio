import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { BackgroundAurora } from "@/components/ui/BackgroundAurora";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07070a] text-[#f4f4f5] overflow-x-hidden selection:bg-sky-500/30 selection:text-white">
      {/* Dynamic Parallax Aurora Mesh Background */}
      <BackgroundAurora />

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceTimeline />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
