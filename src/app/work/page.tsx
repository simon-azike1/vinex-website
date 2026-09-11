"use client";
import { FadeUp, StaggerFadeUp } from "@/components/motion.utils";
import TiltCard from "@/components/ui/tilt-card";

const cases = [
  {
    name: "Watermelon Hub",
    image: "https://res.cloudinary.com/djizgbimn/image/upload/v1789149345/WhatsApp_Image_2026-09-11_at_18.55.21_vc5cra.jpg",
    gradient: "from-[#0A0A0B] via-[#0B3D0B] to-[#16A34A]",
    challenge: "Businesses need scalable sales and support teams without the overhead.",
    solution: "We built a conversion-focused website showcasing their team-building and campaign management services.",
    result: "A professional online presence that helps attract clients seeking outsourced sales and support.",
    stats: ["B2B Service Design", "Responsive Website", "Conversion-Focused Layout"],
    href: "https://water-melon-hub.vercel.app/",
  },
  {
    name: "Mouad.Icap",
    image: "https://res.cloudinary.com/djizgbimn/image/upload/v1773315241/Screenshot_2026-03-12_113345_kek7go.png",
    gradient: "from-[#0A0A0B] via-[#6B2108] to-[#D97706]",
    challenge: "Barber shops need a strong online presence to showcase their services and attract clients.",
    solution: "We created a premium, dark-themed website with service discovery and appointment-oriented contact flows.",
    result: "A grooming brand website that combines classic barbering with contemporary style.",
    stats: ["Barber Shop Branding", "Service Discovery", "Appointment UX"],
    href: "https://barber-shop-web-app-mhma.vercel.app/",
  },
  {
    name: "Mercel Life",
    image: "https://res.cloudinary.com/djizgbimn/image/upload/v1773315106/Screenshot_2026-03-12_113130_pnvmqv.png",
    gradient: "from-[#0A0A0B] via-[#0B3D0B] to-[#10B981]",
    challenge: "Designers need a portfolio that effectively displays their skills and attracts clients.",
    solution: "We developed a clean, editorial personal-brand portfolio with clear social proof and a direct call-to-action.",
    result: "A personal portfolio that positions the designer as a graphic and UI/UX expert.",
    stats: ["Graphic Design Portfolio", "UI/UX Case Studies", "Personal Branding"],
    href: "https://mercel-life.vercel.app/",
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
              <span className="font-mono text- uppercase tracking-[0.16em] text-white/50">Digital Experiences We’ve Built • 3 projects • You own 100%</span>
            </div>
            <h1 className="mt-6 font-syne text-[clamp(36px,6vw,72px)] font-[800] leading-[0.9] tracking-[-0.04em] text-[#F5F3EF]">
              Digital Experiences We’ve Built
            </h1>
            <p className="mt-4 max-w- text- leading-[1.6] text-white/40">
              We design and build modern digital experiences for businesses, professionals, and growing brands. Explore selected projects spanning B2B operations, local-service branding, appointment journeys, personal portfolios, and user-centered interface design.
            </p>
          </div>
        </FadeUp>

        {/* FIXED: gap-6 not gap-px, rounded individually */}
        <StaggerFadeUp staggerChildren={0.12} delayChildren={0.2} className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <TiltCard key={c.name} className="group flex flex-col overflow-hidden rounded- border border-white/[0.06] bg-[#101011]">
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                <div className="relative h-48 md:h-64 overflow-hidden bg-[#0A0A0B]">
                  <img src={c.image} alt={c.name === "Watermelon Hub" ? "Watermelon Hub B2B sales and support operations website" : c.name === "Mouad.Icap" ? "Mouad.Icap barber shop and grooming website" : "Mercel Life graphic and UI/UX designer portfolio website"} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" crossOrigin="anonymous" />
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