"use client";
import { useEffect, useRef, useState } from "react";
import TiltCard from "@/components/ui/tilt-card";

const steps = [
  { index: "01", name: "Discover", detail: "We learn the business before we design anything.", time: "Week 1", deliverable: "Audit + sitemap + wireframes" },
  { index: "02", name: "Design", detail: "Mock-ups you review and shape before a line of code is written.", time: "Week 2-3", deliverable: "Figma + prototype + copy" },
  { index: "03", name: "Build", detail: "The real thing gets built, tested, and made to work on every device.", time: "Week 3-5", deliverable: "Next.js + CMS + payments" },
  { index: "04", name: "Launch", detail: "It goes live, and we stay reachable after it does.", time: "Week 6", deliverable: "Domain + analytics + support" },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative border-t border-white/[0.06] bg-[#0A0A0B] text-[#F5F3EF]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Left - sticky */}
          <div className="md:col-span-5 md:sticky md:top-28 self-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6FF57] animate-pulse" />
              <span className="text- uppercase tracking-[0.16em] text-white/40">How we work • 4 steps</span>
            </div>

            <h2 className="mt-6 max-w- font-syne text-[clamp(36px,5vw,64px)] font-[700] leading-[0.9] tracking-[-0.04em]">
              Four steps. No mystery about where your project stands.
            </h2>

            <div className="mt-8 hidden md:block">
              <div className="relative h- w- bg-white/[0.08] ml-3">
                <div className="absolute top-0 w-full bg-[#D6FF57] transition-all duration-700" style={{ height: `${((active + 1) / steps.length) * 100}%` }} />
                {steps.map((_, i) => (
                  <div key={i} className={`absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full border transition-all duration-500 ${i <= active? "bg-[#D6FF57] border-[#D6FF57] shadow-[0_0_10px_#D6FF57]" : "bg-[#0A0A0B] border-white/20"}`} style={{ top: `${(i / (steps.length - 1)) * 100}%` }} />
                ))}
              </div>
              <div className="mt-4 ml-8 space-y-6">
                {steps.map((s, i) => (
                  <div key={s.index} className={`transition-all duration-300 ${i === active? "opacity-100 translate-x-0" : "opacity-30 translate-x-1"}`}>
                    <div className="text- font-mono text-white/30">{s.index}</div>
                    <div className="font-syne text- font-[600]">{s.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 hidden md:flex items-center gap-3 rounded- border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#D6FF57] text-black text- font-bold">✓</div>
              <div>
                <div className="text- font-semibold">You always know what&apos;s next</div>
                <div className="text- text-white/40">Weekly Loom + Figma link</div>
              </div>
            </div>
          </div>

          {/* Right - stacking cards */}
          <div className="md:col-span-7 space-y-6 md:space-y-8">
            {steps.map((step, i) => (
              <div key={step.index} ref={(el) => { refs.current[i] = el; }} data-idx={i} className="group">
                <TiltCard className={`p- rounded- bg-gradient-to-b from-white/[0.08] to-white/[0.02] transition-all duration-500 ${i === active? "shadow-[0_20px_60px_rgba(0,0,0,0.4)]" : "opacity-80"}`}>
                  <div className="rounded- bg-[#151517] p-7 md:p-8">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text- tracking-[0.14em] text-white/20 group-[.in-view]:text-white/40">{step.index} • {step.time}</span>
                      <span className={`rounded-full px-2.5 py-1 text- font-medium border transition-colors ${i === active? "bg-[#D6FF57] text-black border-[#D6FF57]" : "bg-white/[0.04] text-white/30 border-white/10"}`}>{i === active? "Active" : "Up next"}</span>
                    </div>

                    <h3 className="mt-6 font-syne text- font-[700] tracking-[-0.02em]">{step.name}</h3>
                    <p className="mt-3 max-w- text- leading-[1.6] text-white/60">{step.detail}</p>

                    <div className="mt-6 flex items-center gap-3 rounded- border border-white/[0.06] bg-[#0A0A0B] px-3 py-2.5">
                      <div className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                      <span className="text- text-white/50">Deliverable: </span>
                      <span className="text- font-medium text-white/80">{step.deliverable}</span>
                    </div>

                    {/* Progress bar inside card */}
                    <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D6FF57] transition-all duration-1000" style={{ width: i <= active? "100%" : "0%" }} />
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}