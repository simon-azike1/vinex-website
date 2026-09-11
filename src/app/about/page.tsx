"use client";
import { FadeUp, StaggerFadeUp } from "@/components/motion.utils";
import TiltCard from "@/components/ui/tilt-card";

const principles = [
  {
    k: "01",
    title: "Function over fashion",
    desc: "A website must work first and look good second. We prioritize speed, usability, and conversion over trends that don't serve revenue.",
  },
  {
    k: "02",
    title: "Built for real business",
    desc: "Every feature serves a business purpose — more leads, less admin, better trust. If it doesn't move a metric, we don't build it.",
  },
  {
    k: "03",
    title: "You own 100%",
    desc: "No lock-in, no retainer trap. Code, domain, CMS, analytics — yours after launch. We stay only if you want us to.",
  },
  {
    k: "04",
    title: "Long-term partnership",
    desc: "We don't disappear after launch. Support, updates, and strategy as you grow. 90% of clients come from referrals.",
  },
];

const team = [
  {
    name: "Simon Azike",
    role: "Founder — Product & Engineering",
    bio: "Ex-lead building booking and e-commerce systems for SMEs across NG & MA. Ships fast, owns quality.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    location: "Rabat • Lagos",
  },
  {
    name: "Design Partner",
    role: "Design & UX",
    bio: "Brand and product designer focused on conversion-first interfaces. Mobile-first, not desktop-down.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
    location: "Paris • Remote",
  },
  {
    name: "Growth Partner",
    role: "Integrations & Ops",
    bio: "Systems engineer — WhatsApp, SMS, Paystack, automation. Turns manual ops into flows that run themselves.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    location: "Lagos • Remote",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        {/* Story */}
        <FadeUp>
          <div className="max-w-">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span className="font-mono text- uppercase tracking-[0.16em] text-white/50">Our story • Est. 2024 • Rabat + Lagos + Paris</span>
            </div>

            <div className="mt-8 grid md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                <h1 className="font-syne text-[clamp(36px,6vw,84px)] font-[800] leading-[0.88] tracking-[-0.05em] text-[#F5F3EF]">
                  Why VNex <span className="text-white/20">exists.</span>
                </h1>
                <div className="mt-8 space-y-5 text- leading-[1.7] text-white/50">
                  <p>
                    Too many businesses lose customers simply because they have no working online presence. Great products going unnoticed because potential customers can&apos;t find them, or don&apos;t trust what they find.
                  </p>
                  <p>
                    We saw this every day in markets, hotels, schools, studios — founders relying on Instagram DMs and word-of-mouth, losing 40-60% of potential revenue to businesses that simply looked more professional online.
                  </p>
                  <p className="text-white/80 font-medium">
                    VNex was founded to fix this gap. We don&apos;t just build websites — we build online presences that get you found, trusted, and chosen. In 3-6 weeks, fixed price, you own everything after.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5">
                <TiltCard className="rounded- border border-white/[0.06] bg-[#101011] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80" alt="Team working" className="h- w-full object-cover" />
                  <div className="p-7">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded- bg-[#0A0A0B] border border-white/[0.06] p-4 text-center">
                        <div className="font-syne text- font-bold text-white">27</div>
                        <div className="font-mono text- uppercase text-white/30">Projects shipped</div>
                      </div>
                      <div className="rounded- bg-[#0A0A0B] border border-white/[0.06] p-4 text-center">
                        <div className="font-syne text- font-bold text-white">100%</div>
                        <div className="font-mono text- uppercase text-white/30">Owned by client</div>
                      </div>
                      <div className="rounded- bg-[#0A0A0B] border border-white/[0.06] p-4 text-center">
                        <div className="font-syne text- font-bold text-white">3.2wk</div>
                        <div className="font-mono text- uppercase text-white/30">Avg to launch</div>
                      </div>
                    </div>
                    <p className="mt-4 font-mono text- leading-[1.5] text-white/20">Built for businesses without web presence • No templates • Next.js + CMS • Rabat → Lagos remote delivery</p>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Principles */}
        <div className="mt-24">
          <FadeUp>
            <p className="font-mono text- uppercase tracking-[0.16em] text-white/30">What we believe</p>
            <h2 className="mt-3 max-w- font-syne text-[clamp(32px,5vw,64px)] font-[700] leading-[0.9] tracking-[-0.04em] text-[#F5F3EF]">Principles that guide our work.</h2>
          </FadeUp>

          <StaggerFadeUp staggerChildren={0.08} delayChildren={0.1} className="mt-10 grid gap-px overflow-hidden rounded- border border-white/[0.06] bg-white/[0.06] p-px md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.k} className="bg-[#101011] p-8 md:p-10 flex gap-5">
                <span className="font-mono text- text-[#8B5CF6] mt-1">{p.k}</span>
                <div>
                  <h3 className="font-syne text- font-[600] text-white">{p.title}</h3>
                  <p className="mt-2 text- leading-[1.6] text-white/40">{p.desc}</p>
                </div>
              </div>
            ))}
          </StaggerFadeUp>
        </div>

        {/* Team with image cards */}
        <div className="mt-24">
          <FadeUp>
            <p className="font-mono text- uppercase tracking-[0.16em] text-white/30">Our team</p>
            <h2 className="mt-3 font-syne text-[clamp(32px,5vw,64px)] font-[700] tracking-[-0.04em] text-[#F5F3EF]">The people who ship.</h2>
            <p className="mt-3 max-w- text- leading-[1.6] text-white/40">Small team, senior only. No juniors, no outsourcing. You work directly with builders.</p>
          </FadeUp>

          <StaggerFadeUp staggerChildren={0.12} delayChildren={0.15} className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((m) => (
              <TiltCard key={m.name} className="overflow-hidden rounded- border border-white/[0.06] bg-[#101011] group">
                <div className="relative h- overflow-hidden bg-[#0A0A0B]">
                  <img src={m.image} alt={m.name} className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text- font-medium text-black">{m.location}</div>
                </div>
                <div className="p-7">
                  <h3 className="font-syne text- font-[600] text-white">{m.name}</h3>
                  <p className="font-mono text- uppercase tracking-[0.12em] text-[#8B5CF6] mt-1">{m.role}</p>
                  <p className="mt-3 text- leading-[1.5] text-white/40">{m.bio}</p>
                </div>
              </TiltCard>
            ))}
          </StaggerFadeUp>
        </div>

        <FadeUp className="mt-20 rounded- bg-[#F5F3EF] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-black">
          <h3 className="max-w- font-syne text- font-[800] leading-[0.9] tracking-[-0.03em]">We take 2 new projects per month. Want in?</h3>
          <a href="/contact" className="whitespace-nowrap rounded-full bg-black px-7 py-3.5 text- font-semibold text-white hover:bg-[#101011]">Start your project →</a>
        </FadeUp>
      </div>
    </main>
  );
}