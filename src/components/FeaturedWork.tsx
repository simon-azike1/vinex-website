"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/ui/tilt-card";

// Better content structure - premium agency spec
const projects = [
  {
    id: "01",
    client: "Sahel Furniture Co.",
    industry: "E-commerce • Retail",
    result: "From no website to online orders in three weeks.",
    metric: { value: "+240%", label: "online orders" },
    stack: ["Next.js", "Stripe", "CMS"],
    year: "2025",
    tone: "from-[#0A0A0B] via-[#1A1625] to-[#8B5CF6]",
    accent: "#8B5CF6",
  },
  {
    id: "02",
    client: "Bristol Prep Academy",
    industry: "EdTech • Portal",
    result: "A parent portal replaced a paper enrollment process.",
    metric: { value: "-80%", label: "admin time" },
    stack: ["Portal", "Auth", "Payments"],
    year: "2025",
    tone: "from-[#8B5CF6] via-[#7C3AED] to-[#FF7A45]",
    accent: "#FF7A45",
  },
  {
    id: "03",
    client: "Kaduna Fresh Market",
    industry: "Marketplace • Delivery",
    result: "A delivery request form that actually gets checked.",
    metric: { value: "3.2x", label: "conversion" },
    stack: ["Forms", "WhatsApp", "Maps"],
    year: "2024",
    tone: "from-[#0A0A0B] via-[#2A1810] to-[#FF7A45]",
    accent: "#D6FF57",
  },
];

export default function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative bg-[#0A0A0B] text-[#F5F3EF] border-t border-white/[0.06]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6FF57]" />
              <span className="text- uppercase tracking-[0.16em] text-white/40">Featured work • {projects.length} shipped</span>
            </div>
            <h2 className="mt-5 max-w- font-syne text-[clamp(36px,5.5vw,72px)] font-[700] leading-[0.9] tracking-[-0.04em]">
              A few businesses we&apos;ve taken from <span className="text-white/20">nothing to launched.</span>
            </h2>
          </div>
          <Link href="/work" className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text- font-medium hover:bg-white/[0.06]">
            Work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cursor Preview - follows mouse */}
        <div className="pointer-events-none fixed z-50 hidden md:block" style={{ left: mousePos.x + 20, top: mousePos.y + 20, opacity: hoveredId? 1 : 0, transform: `scale(${hoveredId? 1 : 0.9})`, transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)" }}>
          {hoveredId && (
            <div className="h- w- overflow-hidden rounded- border border-white/10 bg-[#151517] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className={`h-full w-full bg-gradient-to-br ${projects.find(p => p.id === hoveredId)?.tone} p-4 flex flex-col justify-end`}>
                <div className="h-2 w-12 rounded-full bg-white/20" />
                <div className="mt-2 h-3 w-24 rounded-full bg-white/30" />
              </div>
            </div>
          )}
        </div>

        {/* Projects - Premium List + Bento hybrid */}
        <div className="mt-14">
          {/* Desktop: Hover list */}
          <div className="hidden md:block border-t border-white/[0.06]">
            {projects.map((project) => (
              <Link
                key={project.client}
                href="/work"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group flex items-center justify-between border-b border-white/[0.06] py-8 transition-all hover:bg-white/[0.02] px-4 -mx-4"
              >
                <div className="flex items-center gap-8">
                  <span className="font-mono text- text-white/20 group-hover:text-white/40">({project.id})</span>
                  <div>
                    <h3 className="font-syne text- font-[600] tracking-[-0.02em] group-hover:text-[#D6FF57] transition-colors">{project.client}</h3>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="text- text-white/30">{project.industry} • {project.year}</span>
                      <span className="flex gap-1.5">
                        {project.stack.map(s => <span key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text- text-white/40">{s}</span>)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  <div className="text-right max-w-">
                    <p className="text- leading-[1.4] text-white/60 group-hover:text-white/80">{project.result}</p>
                  </div>
                  <div className="text-right min-w-">
                    <div className="font-syne text- font-[700] leading-none" style={{ color: project.accent }}>{project.metric.value}</div>
                    <div className="mt-1 text- uppercase tracking-wide text-white/30">{project.metric.label}</div>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile: Cards */}
          <div className="grid gap-4 md:hidden">
            {projects.map((project) => (
              <TiltCard key={project.client} className="overflow-hidden p-0">
                <Link href="/work" className="block">
                  <div className={`h- bg-gradient-to-br ${project.tone} relative p-4`}>
                    <div className="absolute top-4 left-4 flex gap-1.5">
                      <span className="rounded-full bg-black/30 backdrop-blur px-2.5 py-1 text- text-white/60">{project.year}</span>
                      <span className="rounded-full bg-black/30 backdrop-blur px-2.5 py-1 text- text-white/60">{project.industry}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="h-2 w-12 rounded-full bg-white/20" />
                      <div className="text-right">
                        <div className="font-syne text- font-bold text-white" style={{ color: project.accent }}>{project.metric.value}</div>
                        <div className="text- text-white/50">{project.metric.label}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-syne text- font-semibold">{project.client}</h3>
                    <p className="mt-2 text- leading-[1.5] text-white/60">{project.result}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map(s => <span key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text- text-white/40">{s}</span>)}
                    </div>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/work" className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-3.5 text- font-medium">View all work <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}