"use client";

import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";

export default function Home() {
  useGsapAnimation();

  return (
    <main className="relative overflow-hidden">
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
