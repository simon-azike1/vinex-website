"use client";
import { useRouter } from "next/navigation";
import MagneticButton from "@/components/ui/magnetic-button";

export default function FinalCTA() {
  const router = useRouter();

  return (
    <section className="reveal relative overflow-hidden border-t border-white/[0.06] bg-[#0A0A0B] text-[#F5F3EF]">
      {/* Premium orbs */}
      <div className="pointer-events-none absolute left-1/2 top-0 h- w- -translate-x-1/2 rounded-full bg-[#8B5CF6]/[0.14] blur-" />
      <div className="pointer-events-none absolute bottom-0 right-[10%] h- w- rounded-full bg-[#D6FF57]/[0.08] blur-" />

      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative mx-auto max-w- px-6 md:px-10 py-24 md:py-36">
        {/* Top meta */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D6FF57]" />
            <span className="text- uppercase tracking-[0.16em] text-white/50">2 spots left for Q2 2026 • Avg reply 2h</span>
          </div>

          <h2 className="mt-8 font-syne text-[clamp(40px,6vw,86px)] font-[800] leading-[0.88] tracking-[-0.05em]">
            Let&apos;s get your
            <br />
            business <span className="relative inline-block"><span className="relative z-10 text-[#D6FF57]">online</span><span className="absolute bottom-[0.12em] left-0 h-[0.28em] w-full bg-[#D6FF57]/20 -rotate-" /></span>
            <br />
            <span className="italic font-[500] text-white/30">properly.</span>
          </h2>

          <p className="mx-auto mt-6 max-w- text- leading-[1.6] text-white/60">
            Tell us where things stand today — we&apos;ll tell you exactly what it takes to fix it.
            <span className="text-white/90"> No pitch. Just a plan.</span>
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton variant="primary" className="w-full sm:w-auto!px-8!py-4!text-" onClick={() => router.push("/contact")}>
              Start a project
            </MagneticButton>
            <button onClick={() => router.push("/work")} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text- font-medium text-white/70 backdrop-blur transition-colors hover:bg-white/[0.06] hover:text-white">
              See 50+ launches <span className="text-white/30">→</span>
            </button>
          </div>

          <div className="mt-14 flex items-center justify-center gap-8 border-t border-white/[0.06] pt-8">
            <div className="text-left">
              <div className="font-syne text- font-[700] leading-none">6 weeks</div>
              <div className="mt-1 text- uppercase tracking-wide text-white/30">Avg. to launch</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-left">
              <div className="font-syne text- font-[700] leading-none">100%</div>
              <div className="mt-1 text- uppercase tracking-wide text-white/30">Delivered</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-left">
              <div className="font-syne text- font-[700] leading-none">4.9/5</div>
              <div className="mt-1 text- uppercase tracking-wide text-white/30">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Big background type - premium agencies */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] select-none">
          <span className="font-syne text- font-[900] leading-none tracking-[-0.08em] text-white/[0.02]">VNEX</span>
        </div>
      </div>
    </section>
  );
}