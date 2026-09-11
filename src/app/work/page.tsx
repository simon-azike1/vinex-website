"use client";
import { FadeUp, StaggerFadeUp } from "@/components/motion.utils";
import TiltCard from "@/components/ui/tilt-card";

const cases = [
  {
    name: "Sahel Furniture Co.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#0A0A0B] via-[#151517] to-[#8B5CF6]",
    challenge: "No online presence, relying solely on walk-ins",
    solution: "E-commerce + catalog + delivery tracking",
    result: "40% of sales online in 2 months",
    stats: ["+40% sales", "2mo launch", "100% mobile"],
    href: "/work/sahel-furniture",
  },
  {
    name: "Bristol Prep Academy",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#8B5CF6] via-[#7c3aed] to-[#FF7A45]",
    challenge: "Paper enrollment, lost applications",
    solution: "Parent portal + docs upload + tracking",
    result: "Processing 14 days → 2 days",
    stats: ["-86% time", "0 lost apps", "200+ parents"],
    href: "/work/bristol-prep",
  },
  {
    name: "Kaduna Fresh Market",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#0A0A0B] via-[#1a1a18] to-[#D6FF57]",
    challenge: "No advance orders for pickup/delivery",
    solution: "Order system + SMS + tracking",
    result: "Advance orders +60%, less waste",
    stats: ["+60% orders", "-30% waste", "SMS live"],
    href: "/work/kaduna-fresh",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span className="font-mono text- uppercase tracking-[0.16em] text-white/50">Our work • 3 launches • You own 100%</span>
            </div>
            <h1 className="mt-6 font-syne text-[clamp(36px,6vw,72px)] font-[800] leading-[0.9] tracking-[-0.04em] text-[#F5F3EF]">
              A few businesses we&apos;ve helped launch <span className="text-white/20">online.</span>
            </h1>
          </div>
        </FadeUp>

        {/* FIXED: gap-6 not gap-px, rounded individually */}
        <StaggerFadeUp staggerChildren={0.12} delayChildren={0.2} className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <TiltCard key={c.name} className="group flex flex-col overflow-hidden rounded- border border-white/[0.06] bg-[#101011]">
              <a href={c.href} className="flex flex-col h-full">
                <div className="relative h- overflow-hidden bg-[#0A0A0B]">
                  <img src={c.image} alt={c.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-50 mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-syne text- font-[600] tracking-[-0.02em] text-white">{c.name}</h3>

                  <div className="mt-4 space-y-2 text- leading-[1.5]">
                    <p className="text-white/30"><span className="font-medium text-white/60">Challenge:</span> {c.challenge}</p>
                    <p className="text-white/30"><span className="font-medium text-white/60">Solution:</span> {c.solution}</p>
                    <p className="text-white/50"><span className="font-medium text-[#D6FF57]">Result:</span> {c.result}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.stats.map((s) => (
                      <span key={s} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text- text-white/40">{s}</span>
                    ))}
                  </div>

                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text- font-semibold text-[#8B5CF6] group-hover:gap-3 transition-all">
                    View project <span>→</span>
                  </span>
                </div>
              </a>
            </TiltCard>
          ))}
        </StaggerFadeUp>

        <FadeUp className="mt-12 flex justify-center">
          <a href="/contact" className="rounded-full bg-[#F5F3EF] px-7 py-3.5 text- font-semibold text-black hover:bg-white">Start your project →</a>
        </FadeUp>
      </div>
    </main>
  );
}