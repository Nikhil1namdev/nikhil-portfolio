import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-28 border-t border-white/[0.08] bg-transparent">
      <div className="section-container">
        <SectionHeading
          eyebrow="05 / Capabilities & Deliverables"
          title="Engineered solutions for modern web teams."
          description="High-leverage engineering services tailored for tech startups, product agencies, and scaling engineering teams."
        />

        {/* Refined Open Grid with Minimal Hairline Separators (No Nested Floating Cards!) */}
        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="pt-6 border-t border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4">
                  <span className="font-mono text-xs text-zinc-500">
                    {service.serviceNumber}
                  </span>
                  <div className="h-9 w-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-sky-400">
                    <service.icon className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="text-xl font-medium tracking-tight text-zinc-100 mt-2">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400 font-normal">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04]">
                <span className="font-mono text-xs text-zinc-500">
                  Production-Ready &bull; Scalable
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
