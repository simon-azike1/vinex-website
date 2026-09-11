"use client";
import TiltCard from "@/components/ui/tilt-card";
import { Globe, Code2, Workflow, LifeBuoy } from "lucide-react";

const services = [
  {
    id: "01",
    name: "Website design",
    detail: "A site built around what your customers actually need to see.",
    icon: Globe,
    points: ["Figma to Next.js", "Mobile-first", "CMS editable"],
    accent: "#8B5CF6",
  },
  {
    id: "02",
    name: "Custom builds",
    detail: "Booking systems, dashboards, or anything off-the-shelf can't do.",
    icon: Code2,
    points: ["Booking engines", "Dashboards", "APIs & automations"],
    accent: "#D6FF57",
  },
  {
    id: "03",
    name: "Digital systems",
    detail: "The backend work that keeps a business running without you babysitting it.",
    icon: Workflow,
    points: ["CRMs & invoicing", "WhatsApp / Email flows", "Analytics"],
    accent: "#FF6B6B",
  },
  {
    id: "04",
    name: "Ongoing support",
    detail: "Someone to call when something breaks or needs to change.",
    icon: LifeBuoy,
    points: ["24h response", "Edits & fixes", "Hosting & domain"],
    accent: "#F5F3EF",
  },
];

export default function ServicesPillars() {
  return (
    <section className="reveal relative border-t border-white/[0.06] bg-[#0A0A0B] text-[#F5F3EF]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#8B5CF6]" />
              <p className="font-mono text- uppercase tracking-[0.18em] text-[#8B5CF6]">What we do • 04 pillars</p>
            </div>
            <h2 className="mt-4 max-w- font-syne text-[clamp(36px,5vw,64px)] font-[700] leading-[0.9] tracking-[-0.04em]">
              Four ways we get you from <span className="text-white/20">invisible to online.</span>
            </h2>
          </div>
          <p className="max-w- text- leading-[1.6] text-white/40">
            No retainers. No 12-month contracts. Pick a pillar, ship in weeks, own everything after.
          </p>
        </div>

        {/* Bento */}
        <div className="mt-14 grid gap-px overflow-hidden rounded- border border-white/[0.06] bg-white/[0.06] p-px md:grid-cols-12">
          {services.map((service) => {
            const Icon = service.icon;
            const isLarge = service.id === "01" || service.id === "02"; // first row 2-col
            return (
              <TiltCard
                key={service.name}
                className={`group relative bg-[#101011] p- transition-all duration-500 hover:bg-[#151517] md:col-span-6 ${service.id === "03"? "md:col-span-5" : ""} ${service.id === "04"? "md:col-span-7" : ""}`}
              >
                <div className="h-full rounded- bg-[#101011] p-7 md:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03]">
                        <Icon className="h-4 w-4 text-white/70 group-hover:text-white" />
                      </div>
                      <span className="font-mono text- text-white/20">({service.id})</span>
                    </div>
                    <div className="h-2 w-2 rounded-full" style={{ background: service.accent, boxShadow: `0 0 10px ${service.accent}60` }} />
                  </div>

                  <h3 className="mt-8 font-syne text- font-[600] tracking-[-0.02em]">{service.name}</h3>
                  <p className="mt-2 max-w- text- leading-[1.6] text-white/50 group-hover:text-white/60">
                    {service.detail}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.points.map((p) => (
                      <span key={p} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text- text-white/40 group-hover:text-white/60 group-hover:border-white/15 transition-colors">
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text- uppercase tracking-wide text-white/20 group-hover:text-white/40">
                    <span>Starts at week 1</span>
                    <span className="h-px w-6 bg-white/10 group-hover:w-10 group-hover:bg-white/20 transition-all" />
                  </div>

                  {/* Hover gradient */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded- bg-[radial-gradient(600px_at_0%_0%,rgba(139,92,246,0.08),transparent_60%)]" />
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="mt-6 grid rounded- border border-dashed border-white/10 bg-white/[0.02] px-5 py-4 md:grid-cols-3 gap-4">
          <div className="text- text-white/40"><span className="text-white/80 font-medium">Timeline:</span> 3-6 weeks avg</div>
          <div className="text- text-white/40"><span className="text-white/80 font-medium">Ownership:</span> You own code + domain + design</div>
          <div className="text- text-white/40"><span className="text-white/80 font-medium">Stack:</span> Next.js, Sanity, Stripe, Vercel</div>
        </div>
      </div>
    </section>
  );
}