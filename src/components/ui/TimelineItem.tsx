type TimelineItemProps = {
  item: {
    role: string;
    company: string;
    duration: string;
    description: string;
  };
};

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <article data-animate-card className="relative pl-10">
      <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-[#050505] bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.75)]" />
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-cyan-300/30 hover:bg-white/[0.07]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">{item.role}</h3>
            <p className="mt-1 text-sm text-cyan-200">{item.company}</p>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">{item.duration}</span>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-400">{item.description}</p>
      </div>
    </article>
  );
}
