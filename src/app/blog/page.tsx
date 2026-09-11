"use client";
import { FadeUp, StaggerFadeUp } from "@/components/motion.utils";
import TiltCard from "@/components/ui/tilt-card";

const posts = [
  {
    featured: true,
    category: "Business Strategy",
    title: "How to Choose the Right Technology Stack for Your Business",
    excerpt: "Choosing the right stack is crucial for long-term growth. Here's how we decide platforms, frameworks, and tools that scale with you — not against you.",
    date: "Jan 15, 2026",
    read: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop&q=80",
    gradient: "from-[#0A0A0B] to-[#8B5CF6]",
    href: "/blog/choosing-tech-stack",
  },
  {
    category: "Web Development",
    title: "Mobile-First Design: Why It Matters for Nigerian Businesses",
    excerpt: "80%+ of users in NG access web via mobile. Mobile-first isn't optional — it's how you reach customers where they are.",
    date: "Jan 10, 2026",
    read: "7 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#8B5CF6] to-[#FF7A45]",
    href: "/blog/mobile-first-nigeria",
  },
  {
    category: "Business Advice",
    title: "The Cost of Not Having a Website in 2026",
    excerpt: "In today's economy, businesses without online presence miss significant revenue. Let's look at numbers why online is no longer a luxury.",
    date: "Jan 05, 2026",
    read: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#0A0A0B] to-[#FF7A45]",
    href: "/blog/cost-no-website-2026",
  },
  {
    category: "Process",
    title: "How We Ship a Website in 3 Weeks (Without Cutting Corners)",
    excerpt: "Our exact 4-step process: Discovery → Figma → Build → Launch & train. Fixed price, you own 100%.",
    date: "Dec 28, 2025",
    read: "4 min read",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#101011] to-[#D6FF57]",
    href: "/blog/how-we-ship-3-weeks",
  },
  {
    category: "Case Study",
    title: "Sahel Furniture: 0 to 40% Online Sales in 60 Days",
    excerpt: "Walk-in only to e-commerce + delivery tracking. Breakdown of stack, decisions, and results.",
    date: "Dec 20, 2025",
    read: "8 min read",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#1a1a18] to-[#D6FF57]",
    href: "/blog/sahel-furniture-case-study",
  },
  {
    category: "Growth",
    title: "From WhatsApp to Website: Converting Chats to Checkout",
    excerpt: "How we integrate WhatsApp, SMS, and Paystack so you stop copy-pasting orders.",
    date: "Dec 15, 2025",
    read: "5 min read",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80",
    gradient: "from-[#0A0A0B] via-[#8B5CF6]/20 to-[#101011]",
    href: "/blog/whatsapp-to-checkout",
  },
];

export default function BlogPage() {
  const featured = posts[0];
  const grid = posts.slice(1);

  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span className="font-mono text- uppercase tracking-[0.16em] text-white/50">Latest insights • 6 articles • Updated weekly</span>
            </div>
            <h1 className="mt-6 font-syne text-[clamp(48px,8vw,112px)] font-[800] tracking-[-0.06em] leading-[0.85] text-[#F5F3EF]">
              From our <span className="text-white/20">blog.</span>
            </h1>
            <p className="mx-auto mt-6 max-w- text- leading-[1.6] text-white/40">
              Practical playbooks for businesses going online — not fluff. Stack decisions, pricing, case studies.
            </p>
          </div>
        </FadeUp>

        {/* Featured */}
        <FadeUp delay={0.15} className="mt-16">
          <TiltCard className="overflow-hidden rounded- border border-white/[0.06] bg-[#101011]">
            <a href={featured.href} className="grid md:grid-cols-12 group">
              <div className="relative md:col-span-7 h- md:h- overflow-hidden bg-[#0A0A0B]">
                <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-40 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden" />
                <span className="absolute left-5 top-5 rounded-full bg-[#F5F3EF] px-3 py-1 text- font-semibold text-black">{featured.category}</span>
              </div>
              <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 font-mono text- text-white/30"><span>{featured.date}</span><span>•</span><span>{featured.read}</span></div>
                <h2 className="mt-4 font-syne text-[clamp(22px,2.5vw,30px)] font-[700] leading-[1.05] tracking-[-0.02em] text-white group-hover:text-white">{featured.title}</h2>
                <p className="mt-4 text- leading-[1.6] text-white/40">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text- font-semibold text-[#8B5CF6] group-hover:gap-3 transition-all">Read more <span>→</span></span>
              </div>
            </a>
          </TiltCard>
        </FadeUp>

        {/* Grid */}
        <StaggerFadeUp staggerChildren={0.08} delayChildren={0.2} className="mt-6 grid gap-6 md:grid-cols-3">
          {grid.map((p) => (
            <TiltCard key={p.title} className="group overflow-hidden rounded- border border-white/[0.06] bg-[#101011] flex flex-col">
              <a href={p.href} className="flex flex-col h-full">
                <div className="relative h- overflow-hidden bg-[#0A0A0B]">
                  <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-30 mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/50 backdrop-blur border border-white/10 px-2.5 py-1 text- font-medium text-white/70">{p.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-mono text- text-white/30">{p.date} • {p.read}</div>
                  <h3 className="mt-3 font-syne text- font-[600] leading-[1.15] tracking-[-0.01em] text-[#F5F3EF] group-hover:text-white line-clamp-2">{p.title}</h3>
                  <p className="mt-2 text- leading-[1.5] text-white/40 line-clamp-2">{p.excerpt}</p>
                  <span className="mt-auto pt-5 text- font-semibold text-[#8B5CF6] group-hover:underline">Read more →</span>
                </div>
              </a>
            </TiltCard>
          ))}
        </StaggerFadeUp>

        <FadeUp className="mt-16 rounded- border border-white/[0.06] bg-[#101011] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div><h3 className="font-syne text- font-[700] text-white">Get new playbooks in your inbox</h3><p className="mt-1 text- text-white/40">1 email/month, no spam. Case studies + stack decisions.</p></div>
          <div className="flex gap-2 w-full md:w-auto">
            <input placeholder="you@company.com" className="w-full md:w- rounded-full border border-white/10 bg-[#0A0A0B] px-5 py-3 text- text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B5CF6]/30" />
            <button className="whitespace-nowrap rounded-full bg-[#F5F3EF] px-6 py-3 text- font-semibold text-black hover:bg-white">Subscribe</button>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}