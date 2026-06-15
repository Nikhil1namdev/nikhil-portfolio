"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" data-animate-section className="section-container py-24">
      <SectionHeading
        eyebrow="What I Can Build"
        title="Useful engineering for teams that need polished web products."
        description="I can help with frontend execution, full-stack products, integrations, auth systems, and automation-oriented dashboards."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <motion.article
            key={service.title}
            data-animate-card
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition-all duration-300 hover:border-cyan-300/35 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] flex flex-col h-full"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300 flex-1">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
