"use client";
import { useState } from "react";
import { FadeUp, StaggerFadeUp } from "@/components/motion.utils";
import TiltCard from "@/components/ui/tilt-card";

type Project = {
  name: string;
  category: "Websites" | "Apps" | "Systems";
  tag: string;
  image: string;
  gradient: string;
  desc: string;
  result: string;
  stack: string[];
  metrics: string[];
  href: string;
};

const projects: Project[] = [
  {
    name: "Sahel Furniture Co.",
    category: "Websites",
    tag: "E-commerce",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#0A0A0B] via-[#151517] to-[#8B5CF6]",
    desc: "Product catalog, online ordering, delivery tracking for a Lagos-based furniture retailer going online for the first time.",
    result: "40% of sales from online in 2 months",
    stack: ["Next.js", "Stripe", "CMS"],
    metrics: ["+40% sales", "2mo launch"],
    href: "/work/sahel-furniture",
  },
  {
    name: "Bristol Prep Academy",
    category: "Apps",
    tag: "Parent portal",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#8B5CF6] via-[#7c3aed] to-[#FF7A45]",
    desc: "Online enrollment, document upload, status tracking for a private school — replacing paper forms that got lost.",
    result: "14 days → 2 days enrollment",
    stack: ["Next.js", "Upload", "SMS"],
    metrics: ["-86% time", "0 lost apps"],
    href: "/work/bristol-prep",
  },
  {
    name: "Kaduna Fresh Market",
    category: "Systems",
    tag: "Order system",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#0A0A0B] via-[#1a1a18] to-[#D6FF57]",
    desc: "Delivery request system with SMS notifications and order tracking — reducing waste and support calls.",
    result: "+60% advance orders, -30% waste",
    stack: ["Forms", "SMS", "Dashboard"],
    metrics: ["+60% orders", "SMS live"],
    href: "/work/kaduna-fresh",
  },
  {
    name: "Atelier Rabat",
    category: "Websites",
    tag: "Showcase",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#101011] to-[#F5F3EF]",
    desc: "Minimal portfolio + inquiry system for a design studio. Owner manages collections without dev.",
    result: "Enquiries +120% in 6 weeks",
    stack: ["Next.js", "Cloudinary", "CMS"],
    metrics: ["+120% leads", "Own CMS"],
    href: "/work/atelier-rabat",
  },
  {
    name: "Lagos Boutique Hotel",
    category: "Systems",
    tag: "Booking",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#1a1a18] to-[#D6FF57]",
    desc: "Direct booking website bypassing OTAs + WhatsApp concierge automation.",
    result: "+40% direct bookings",
    stack: ["Booking", "WhatsApp", "Paystack"],
    metrics: ["-18% OTA fees", "WA auto"],
    href: "/work/lagos-boutique",
  },
  {
    name: "Bristol Tech CRM",
    category: "Apps",
    tag: "Internal tool",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#0A0A0B] to-[#8B5CF6]",
    desc: "Custom pipeline + invoicing built in 3 weeks for a small agency. No more spreadsheets.",
    result: "Invoicing time -70%",
    stack: ["Dashboard", "PDF", "Auth"],
    metrics: ["-70% admin", "3 week ship"],
    href: "/work/bristol-crm",
  },
];

const filters = ["All", "Websites", "Apps", "Systems"] as const;

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = active === "All"? projects : projects.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        {/* Hero */}
        <FadeUp>
          <div className="max-w-">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#D6FF57]" />
              <span className="font-mono text- uppercase tracking-[0.16em] text-white/50">Our work • {projects.length} launches • All owned by clients</span>
            </div>
            <h1 className="mt-6 font-syne text-[clamp(36px,6vw,84px)] font-[800] leading-[0.88] tracking-[-0.05em] text-[#F5F3EF]">
              Explore our <span className="text-white/20">featured work.</span>
            </h1>
            <p className="mt-4 max-w- text- leading-[1.6] text-white/40">
              From nothing to online in 3-6 weeks. Real businesses, not concepts. Each project includes strategy, design, build, and handover — you keep everything.
            </p>
          </div>
        </FadeUp>

        {/* Filters */}
        <FadeUp delay={0.15} className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text- font-medium transition-all ${
                active === f
                 ? "border-[#F5F3EF] bg-[#F5F3EF] text-black"
                  : "border-white/10 bg-white/[0.03] text-white/50 hover:bg-white/[0.06] hover:text-white/80"
              }`}
            >
              {f}
            </button>
          ))}
        </FadeUp>

        {/* Grid - image cards */}
        <StaggerFadeUp staggerChildren={0.08} delayChildren={0.2} className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <TiltCard key={p.name} className="group overflow-hidden rounded- border border-white/[0.06] bg-[#101011]">
              <a href={p.href} className="block">
                <div className="relative h- overflow-hidden bg-[#0A0A0B]">
                  <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-40 mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text- font-medium text-white/70 backdrop-blur border border-white/10">{p.category} • {p.tag}</span>
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#D6FF57] px-2.5 py-1 text- font-bold text-black">{p.result}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-syne text- font-[600] leading-[1.1] tracking-[-0.02em] text-[#F5F3EF] group-hover:text-white">{p.name}</h3>
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/40 group-hover:bg-white group-hover:text-black transition-colors">→</span>
                  </div>
                  <p className="mt-3 text- leading-[1.5] text-white/40 line-clamp-2">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text- text-white/30">{s}</span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    {p.metrics.map((m) => (
                      <span key={m} className="text- font-medium text-white/50">• {m}</span>
                    ))}
                  </div>
                </div>
              </a>
            </TiltCard>
          ))}
        </StaggerFadeUp>

        <FadeUp className="mt-16 flex flex-col items-center justify-between gap-6 rounded- border border-white/[0.06] bg-[#101011] p-8 md:flex-row md:p-10">
          <div>
            <h3 className="font-syne text- font-[700] text-white">Want your project here next?</h3>
            <p className="mt-1 text- text-white/40">We take 2 new builds per month. Fixed price, you own 100%.</p>
          </div>
          <a href="/contact" className="whitespace-nowrap rounded-full bg-[#F5F3EF] px-7 py-3.5 text- font-semibold text-black hover:bg-white">Start your project →</a>
        </FadeUp>
      </div>
    </main>
  );
}