"use client";
import { FadeUp, StaggerFadeUp } from "@/components/motion.utils";
import TiltCard from "@/components/ui/tilt-card";
import { Layout, Code2, Database, Headset, ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Design & Build",
    tag: "(01) Design to launch",
    headline: "Websites that convert, not just look good.",
    desc: "We research your customers, map their journey, then design and ship a fast, mobile-first site that turns visitors into bookings, orders, and enquiries.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80",
    includes: ["User research & IA", "Custom UI/UX (mobile + desktop)", "Next.js performance build", "CMS + owner training", "SEO + analytics"],
    best: "Businesses needing a professional presence that brings customers",
    stats: ["< 0.8s LCP", "100 Lighthouse", "3-4 weeks"],
  },
  {
    icon: Code2,
    title: "Custom Builds",
    tag: "(02) Tailored software",
    headline: "When off-the-shelf doesn't fit your operation.",
    desc: "Booking systems, quoting engines, parent portals, inventory tools. We analyse your workflow and build software that removes manual work.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
    includes: ["Process mapping & specs", "Custom architecture", "Agile sprints + demos", "Testing, deploy, docs", "Post-launch support"],
    best: "Businesses with unique operations needing specialized tools",
    stats: ["2 week sprints", "Figma → Live", "You own code"],
  },
  {
    icon: Database,
    title: "Digital Systems & Automation",
    tag: "(03) Systems that run themselves",
    headline: "Stop copy-pasting. Systems that talk to each other.",
    desc: "We integrate your tools — website, WhatsApp, SMS, payments, sheets — so orders, bookings and updates flow automatically.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    includes: ["API & integration layer", "WhatsApp / SMS automation", "Payment + order flow", "Dashboard & reports", "Zero manual double-entry"],
    best: "Businesses seeking efficiency through integrated operations",
    stats: ["-70% manual tasks", "24/7 uptime", "API-first"],
  },
  {
    icon: Headset,
    title: "Ongoing Growth & Support",
    tag: "(04) After launch",
    headline: "We stay. No retainer trap, just real support.",
    desc: "Security, updates, content changes, new features. We monitor performance and help you grow — you choose when you need us.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
    includes: ["Security + uptime monitoring", "Content & feature updates", "Technical support < 4h", "Quarterly growth review"],
    best: "Founders who want a long-term tech partner, not a freelancer",
    stats: ["< 4h response", "99.9% uptime", "No lock-in"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        {/* Intro */}
        <FadeUp>
          <div className="max-w-">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span className="font-mono text- uppercase tracking-[0.16em] text-white/50">What we do • 4 pillars • Ship in 3-6 weeks</span>
            </div>
            <h1 className="mt-6 font-syne text-[clamp(40px,6vw,84px)] font-[800] leading-[0.88] tracking-[-0.04em] text-[#F5F3EF]">
              We build websites and systems <span className="text-white/20">that actually work for your business.</span>
            </h1>
            <p className="mt-6 max-w- text- leading-[1.6] text-white/40">
              We partner from discovery through launch — handling research, design, build, content, training and handover. You get a professional online presence that brings customers, not just a pretty page.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/contact" className="rounded-full bg-[#D6FF57] px-6 py-3 text- font-semibold text-black hover:bg-[#e2ff85]">Start your project</a>
              <a href="/work" className="rounded-full border border-white/10 px-6 py-3 text- font-semibold text-white/70 hover:bg-white/[0.04]">See our work</a>
            </div>
          </div>
        </FadeUp>

        {/* Service pillars with image cards */}
        <StaggerFadeUp staggerChildren={0.12} delayChildren={0.2} className="mt-20 grid gap-6">
          {services.map((s) => (
            <TiltCard key={s.title} className="overflow-hidden rounded- border border-white/[0.06] bg-[#101011]">
              <div className="grid md:grid-cols-12">
                {/* Content */}
                <div className="md:col-span-7 p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white">
                      <s.icon className="h-5 w-5 text-[#8B5CF6]" />
                    </div>
                    <span className="font-mono text- uppercase tracking-[0.16em] text-white/30">{s.tag}</span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-white/20" />
                  </div>

                  <h3 className="mt-6 font-syne text- font-[700] leading-[0.95] tracking-[-0.02em] text-[#F5F3EF]">{s.title}</h3>
                  <p className="mt-2 font-syne text- font-[500] leading-[1.2] text-white/60">{s.headline}</p>
                  <p className="mt-4 max-w- text- leading-[1.6] text-white/40">{s.desc}</p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-mono text- uppercase tracking-[0.14em] text-white/20 mb-3">What&apos;s included</h4>
                      <ul className="space-y-2">
                        {s.includes.map((i) => (
                          <li key={i} className="flex gap-2 text- text-white/60">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D6FF57]" /> {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text- uppercase tracking-[0.14em] text-white/20 mb-3">Best for</h4>
                      <p className="rounded- border border-white/[0.06] bg-[#0A0A0B] p-3 text- leading-[1.5] text-white/40">{s.best}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.stats.map((stat) => (
                          <span key={stat} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text- text-white/40">{stat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image card */}
                <div className="relative md:col-span-5 min-h- border-t md:border-t-0 md:border-l border-white/[0.06] bg-[#0A0A0B]">
                  <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/90 px-3 py-1 text- font-semibold text-black backdrop-blur">Example build • Live in 3 weeks</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#D6FF57] text-black"><ArrowUpRight className="h-4 w-4" /></span>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </StaggerFadeUp>

        {/* Process + CTA */}
        <div className="mt-20 grid gap-6 md:grid-cols-12">
          <FadeUp className="md:col-span-5 rounded- border border-white/[0.06] bg-[#101011] p-8">
            <h3 className="font-syne text- font-[700]">How we ship in 3-6 weeks</h3>
            <div className="mt-6 space-y-4">
              {[
                { k: "01", t: "Discovery", d: "We learn your business, customers, and goals in 1 call." },
                { k: "02", t: "Design", d: "Wireframes → Hi-fi in Figma. You approve on mobile." },
                { k: "03", t: "Build", d: "Next.js, performance, CMS, integrations. Weekly demos." },
                { k: "04", t: "Launch & train", d: "Deploy, content, analytics, handover. You own 100%." },
              ].map((p) => (
                <div key={p.k} className="flex gap-4">
                  <span className="font-mono text- text-[#8B5CF6] mt-1">{p.k}</span>
                  <div><div className="text- font-semibold text-white">{p.t}</div><div className="text- text-white/40">{p.d}</div></div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="md:col-span-7 rounded- bg-[#F5F3EF] p-8 md:p-10 text-black flex flex-col justify-between">
            <div>
              <h3 className="font-syne text- font-[800] leading-[0.9] tracking-[-0.03em] max-w-">Have an idea? We&apos;ll turn it into something live.</h3>
              <p className="mt-4 max-w- text- leading-[1.6] text-black/60">Fixed price, clear timeline, you own the code. No templates. Built for your customers, not our portfolio.</p>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="/contact" className="rounded-full bg-black px-6 py-3 text- font-semibold text-white hover:bg-[#101011]">Start your project →</a>
              <span className="self-center font-mono text- text-black/40">Rabat • Paris • Remote</span>
            </div>
          </FadeUp>
        </div>
      </div>
    </main>
  );
}