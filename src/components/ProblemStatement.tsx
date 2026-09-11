export default function ProblemStatement() {
  const statements = [
    {
      id: "01",
      stat: "No site",
      detail: "A customer searches for you and finds nothing — or a competitor.",
      metric: "68%",
      metricLabel: "of buying decisions start with search",
    },
    {
      id: "02",
      stat: "Broken trust",
      detail: "An outdated site tells people you might not still be in business.",
      metric: "75%",
      metricLabel: "judge credibility by website",
    },
    {
      id: "03",
      stat: "Lost calls",
      detail: "No online way to reach you means every lead has to get lucky.",
      metric: "0",
      metricLabel: "leads captured after hours",
    },
  ];

  return (
    <section className="reveal relative overflow-hidden bg-[#0A0A0B] text-[#F5F3EF] border-t border-white/[0.06]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-32">
        {/* Header with big editorial */}
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 text- uppercase tracking-[0.16em] text-white/30">
              <span className="h-px w-6 bg-white/20" /> The real problem
            </div>
            <h2 className="mt-6 max-w- font-syne text-[clamp(32px,4.5vw,56px)] font-[600] leading-[0.95] tracking-[-0.04em]">
              Most businesses don&apos;t lose customers because the product is wrong.
              <span className="text-white/20"> They lose them before the customer ever gets that far.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-10">
            <p className="text- leading-[1.6] text-white/40 border-l border-white/10 pl-5">
              We audit 50+ small businesses monthly. Same 3 patterns kill trust before the first call. Fixing them is the fastest ROI you&apos;ll get.
            </p>
          </div>
        </div>

        {/* Premium cards - not just border-t */}
        <div className="mt-16 grid gap-px bg-white/[0.06] rounded- overflow-hidden p-px md:grid-cols-3">
          {statements.map((item) => (
            <div key={item.stat} className="group relative bg-[#0F0F10] p-8 md:p-9 hover:bg-[#151517] transition-colors duration-500">
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="font-mono text- text-white/20 group-hover:text-white/40 transition-colors">({item.id})</span>
                <div className="text-right">
                  <div className="font-syne text- font-[700] leading-none text-white/10 group-hover:text-[#D6FF57]/30 transition-colors">{item.metric}</div>
                  <div className="mt-1 max-w- text- leading-[1.2] uppercase tracking-wide text-white/20">{item.metricLabel}</div>
                </div>
              </div>

              <h3 className="mt-10 font-syne text- font-[600] tracking-[-0.02em] text-[#F5F3EF] group-hover:text-white">
                {item.stat}
              </h3>
              <p className="mt-3 text- leading-[1.6] text-white/50 group-hover:text-white/60 transition-colors">
                {item.detail}
              </p>

              {/* Bottom accent */}
              <div className="mt-8 flex items-center gap-2">
                <div className="h-px w-8 bg-[#8B5CF6]/50 group-hover:w-12 group-hover:bg-[#8B5CF6] transition-all duration-500" />
                <span className="text- text-white/20 group-hover:text-white/40">Fixable in week 1</span>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_at_50%_0%,rgba(139,92,246,0.08),transparent)]" />
            </div>
          ))}
        </div>

        {/* Transition line */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          <span className="text- uppercase tracking-[0.16em] text-white/20">We built VNex to fix exactly that</span>
          <div className="h-px w-12 bg-white/10" />
        </div>
      </div>
    </section>
  );
}