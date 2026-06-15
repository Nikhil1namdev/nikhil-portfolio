"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowDown, Sparkles } from "lucide-react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Particles } from "@/components/ui/Particles";

const roles = ["Full Stack Developer", "Frontend Engineer", "React Developer", "MERN Stack Developer", "Next.js Developer"];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-reveal]",
        { autoAlpha: 0, y: 34 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" }
      );

      gsap.to("[data-float-card]", {
        y: -12,
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.25
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!roleRef.current) return;
      gsap.to(roleRef.current, {
        y: -14,
        autoAlpha: 0,
        duration: 0.28,
        ease: "power2.in",
        onComplete: () => {
          setRoleIndex((current) => (current + 1) % roles.length);
          gsap.fromTo(roleRef.current, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.38, ease: "power2.out" });
        }
      });
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 -z-20 bg-[#050505]" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute left-[-10%] top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-[-8%] top-40 -z-10 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-80 w-[70vw] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <Particles />

      <div className="section-container grid items-center gap-8 pb-12 pt-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-16">
        <div>
          <div data-hero-reveal className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-medium text-cyan-100">
            <Sparkles className="h-3.5 w-3.5" />
            Available for opportunities
          </div>

          <p data-hero-reveal className="mt-6 text-sm font-semibold uppercase tracking-[0.32em] text-gray-400">
            Nikhil Namdev
          </p>
          <h1
            data-hero-reveal
            className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]"
          >
            Building modern web experiences with clean UI and scalable code.
          </h1>
          <p data-hero-reveal className="mt-6 text-lg font-medium text-gray-300 sm:text-xl">
            I am a{" "}
            <span className="inline-flex min-w-[240px] overflow-hidden align-bottom sm:min-w-[280px]">
              <span
                ref={roleRef}
                className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 bg-clip-text font-bold text-transparent"
              >
                {roles[roleIndex]}
              </span>
            </span>
          </p>
          <p data-hero-reveal className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
            Modern React, Next.js, MERN dashboards, auth flows, automation panels, and interactive interfaces built with a product-first mindset.
          </p>

          <div data-hero-reveal className="mt-8 flex flex-wrap gap-4">
            <MagneticButton>
              <AnimatedButton href="#projects">View Projects</AnimatedButton>
            </MagneticButton>
            <MagneticButton>
              <AnimatedButton href="/resume/Nikhil_Namdev_Resume.pdf" download variant="secondary">
                Download Resume
              </AnimatedButton>
            </MagneticButton>
            <MagneticButton>
              <AnimatedButton href="#contact" variant="secondary">
                Contact Me
              </AnimatedButton>
            </MagneticButton>
          </div>
        </div>

        <div data-hero-reveal className="relative">
          <div className="absolute -inset-8 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="relative mx-auto max-w-[520px]">
            <div className="absolute -right-4 top-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl" />
            <div className="absolute -bottom-8 left-8 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="group relative min-h-[460px] sm:min-h-[500px] lg:min-h-[480px] xl:min-h-[560px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#08080b]/30 shadow-[0_0_50px_rgba(34,211,238,0.12)] group-hover:shadow-[0_0_60px_rgba(34,211,238,0.22)] group-hover:border-cyan-500/30 transition duration-500 backdrop-blur">
              {/* Browser Top Bar */}
              <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#050507]/90 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="h-5 w-44 rounded bg-white/5 border border-white/5 text-[9px] text-gray-400 flex items-center justify-center font-mono select-none">
                  nikhilnamdev.dev/projects
                </div>
                <div className="w-12" />
              </div>

              {/* Project Screenshots Collage */}
              <div className="relative w-full h-full pt-16 pb-24 px-6 flex flex-col gap-6 select-none">
                {/* Card 1: Job Pilot */}
                <div className="absolute top-18 left-6 w-[78%] rounded-xl border border-white/10 bg-[#0a0a0c] shadow-2xl overflow-hidden transform -rotate-2 group-hover:rotate-[-1deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-500">
                  <div className="bg-[#121214] px-2 py-1 border-b border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-semibold text-gray-400">Job-Pilot</span>
                    <div className="h-1.5 w-8 rounded bg-white/10" />
                  </div>
                  <Image
                    src="/images/projects/job-pilot.png"
                    alt="Job Pilot"
                    width={380}
                    height={190}
                    className="w-full h-auto object-cover opacity-93 brightness-[0.96] contrast-[1.03] group-hover:opacity-100 group-hover:brightness-100 transition duration-500"
                  />
                </div>

                {/* Card 2: ByteBite */}
                <div className="absolute top-36 right-6 w-[78%] rounded-xl border border-white/10 bg-[#0a0a0c] shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-[1deg] group-hover:-translate-x-1 group-hover:translate-y-1 transition duration-500 z-10">
                  <div className="bg-[#121214] px-2 py-1 border-b border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-semibold text-gray-400">ByteBite</span>
                    <div className="h-1.5 w-8 rounded bg-white/10" />
                  </div>
                  <Image
                    src="/images/projects/bytebite.png"
                    alt="ByteBite"
                    width={380}
                    height={180}
                    className="w-full h-auto object-cover opacity-93 brightness-[0.96] contrast-[1.03] group-hover:opacity-100 group-hover:brightness-100 transition duration-500"
                  />
                </div>

                {/* Card 3: Project Sync */}
                <div className="absolute top-[236px] left-8 w-[78%] rounded-xl border border-white/10 bg-[#0a0a0c] shadow-2xl overflow-hidden transform -rotate-1 group-hover:rotate-0 group-hover:translate-x-1.5 transition duration-500">
                  <div className="bg-[#121214] px-2 py-1 border-b border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-semibold text-gray-400">Project-Sync</span>
                    <div className="h-1.5 w-8 rounded bg-white/10" />
                  </div>
                  <Image
                    src="/images/projects/project-sync.png"
                    alt="Project Sync"
                    width={380}
                    height={180}
                    className="w-full h-auto object-cover opacity-93 brightness-[0.96] contrast-[1.03] group-hover:opacity-100 group-hover:brightness-100 transition duration-500"
                  />
                </div>
              </div>

              {/* Dark subtle overlay for extra contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Compact bottom overlay */}
              <div className="absolute inset-x-4 bottom-4 z-20 rounded-xl border border-cyan-500/30 bg-[#08080a]/90 px-4 py-3 shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition duration-300 group-hover:border-cyan-400/50 sm:inset-x-5 sm:bottom-5">
                <div className="relative text-center">
                  <p className="text-sm font-semibold tracking-wide text-white">
                    Real projects. Real product flows.
                  </p>
                  <p className="mt-1 text-[11px] font-medium tracking-wider text-cyan-400">
                    React <span className="text-cyan-300">&bull;</span> Next.js <span className="text-cyan-300">&bull;</span> Node.js{" "}
                    <span className="text-cyan-300">&bull;</span> MongoDB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-cyan-300/40 hover:text-cyan-200 lg:block">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
