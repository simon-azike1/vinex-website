"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Boxes, Bot, TrendingUp, Code2, Cloud } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  // { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "/team" },
];

const servicesMega = [
  { icon: Boxes, title: "SaaS Product", desc: "0 → 1 in 6 weeks", href: "/work" },
  { icon: Bot, title: "AI Automation", desc: "Agents that save 40h/week", href: "/work" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Scale without chaos", href: "/work" },
  { icon: Code2, title: "UX Engineering", desc: "Framer-grade motion", href: "/work" },
  { icon: TrendingUp, title: "Growth Systems", desc: "Turn product to revenue", href: "/work" },
  { icon: Code2, title: "Web3 & Agents", desc: "Next-gen orchestration", href: "/projects" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContactClick = () => {
    setOpen(false);
    router.push("/contact");
  };

  return (
    <>
      <div className={`sticky top-0 z-[60] w-full px-3 md:px-6 pt-3 transition-all duration-500 ${scrolled? "md:pt-3" : "md:pt-5"}`}>
        <header ref={navRef} className={`mx-auto flex max-w-7xl items-center justify-between rounded-none glass transition-all duration-500 ${scrolled? "border-black/10 dark:border-white/[0.12] shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] px-5 py-3" : "border-black/10 dark:border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] px-6 py-4"}`}>
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="VNEX" className="h-8 w-8 rounded-full object-contain bg-background p-1" />
            <span className="font-syne text-base font-[800] tracking-[-0.03em] text-foreground">VNEX</span>
          </Link>

          <ul className="hidden items-center gap-1 rounded-none border border-foreground/[0.06] dark:border-foreground/[0.06] bg-foreground/[0.15] dark:bg-foreground/[0.25] p-1 backdrop-blur md:flex">
            {links.map((link) => (
              <li key={link.href} className="relative" onMouseEnter={() => link.mega && setMegaOpen(true)} onMouseLeave={() => link.mega && setMegaOpen(false)}>
                <Link href={link.href} className={`relative flex items-center gap-1 rounded-none px-4 py-1.5 text-[13.5px] font-[500] transition-all ${pathname === link.href? "bg-foreground text-background shadow" : "text-foreground hover:text-foreground hover:bg-foreground/[0.06]"}`}>
                  {link.label}
                  {link.mega && <span className="ml-0.5 text-sm opacity-50">↗</span>}
                </Link>

                {link.mega && (
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.98 }} transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }} className="absolute left-1/2 top-[calc(100%+14px)] z-50 -translate-x-1/2 pt-2" style={{ width: '560px' }}>
                        <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/[0.08] bg-nexus-bg-secondary dark:bg-nexus-bg-secondary shadow-[0_30px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.6)]" style={{ width: '560px' }}>
                          <div className="grid grid-cols-2">
                            {servicesMega.map((s) => (
                              <Link key={s.title} href={s.href} onClick={() => setMegaOpen(false)} className="group flex gap-3 border border-black/[0.04] dark:border-white/[0.04] bg-nexus-bg-secondary dark:bg-nexus-bg-secondary p-5 hover:bg-foreground/[0.02] dark:hover:bg-nexus-bg-tertiary transition-colors">
                                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-foreground/[0.06] border border-nexus-border text-foreground/60 group-hover:bg-[#D6FF57] group-hover:text-black">
                                  <s.icon className="h-4 w-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="whitespace-nowrap text-sm font-[600] text-foreground">{s.title}</div>
                                  <div className="mt-1 text-xs leading-[1.4] text-foreground/40">{s.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="flex items-center justify-between border-t border-black/10 dark:border-white/[0.06] bg-foreground/[0.02] dark:bg-background px-5 py-3.5">
                            <span className="text-xs font-mono uppercase tracking-[0.08em] text-foreground/30">Premium • 150+ shipped</span>
                            <Link href="/services" className="text-sm font-[600] text-foreground dark:text-[#D6FF57]">View all →</Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <div className="hidden h-6 w-px bg-foreground/10 dark:bg-white/10 lg:block" />
            <button onClick={handleContactClick} className="group inline-flex items-center gap-1.5 rounded-none bg-[#D6FF57] px-5 py-2.5 text-[13.5px] font-[600] text-black shadow-[0_0_20px_rgba(214,255,87,0.2)] transition-all hover:bg-[#e2ff85]">
              Start a project <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <button type="button" onClick={() => setOpen(v =>!v)} aria-label={open? "Close menu" : "Open menu"} aria-expanded={open} className="flex h-10 w-10 items-center justify-center rounded-none border border-nexus-border bg-foreground/[0.04] text-foreground/70 md:hidden">
            {open? <X size={18} /> : <Menu size={18} />}
          </button>
        </header>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-40 glass md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.div className="fixed right-0 top-0 z-[70] flex h-full w-[84%] max-w-md flex-col bg-nexus-bg-secondary dark:bg-nexus-bg-secondary shadow-[-20px_0_60px_rgba(0,0,0,0.2)] dark:shadow-[-20px_0_60px_rgba(0,0,0,0.6)] md:hidden" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.32, ease: [0.16, 1, 0.3, 1] }}>
              <div className="flex items-center justify-between border-b border-black/10 dark:border-white/[0.06] px-6 py-5">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 font-syne text-base font-[800] text-foreground">
                  <img src="/logo.png" alt="VNEX" className="h-7 w-7 rounded-full bg-foreground p-1" /> VNEX
                </Link>
                <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-none border border-black/10 dark:border-white/10 bg-foreground/[0.04] dark:bg-foreground/[0.04]"><X size={18} /></button>
              </div>

              <div className="flex-1 overflow-y-auto px-3 py-6">
                <div className="space-y-1">
                  {links.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`flex items-center justify-between rounded-none px-4 py-3.5 text-base font-[500] transition-colors ${pathname === link.href? "bg-foreground text-background" : "text-foreground/70 hover:bg-foreground/[0.06] hover:text-foreground"}`}>
                      {link.label}<span className="text-black/20 dark:text-foreground/20">→</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 rounded-xl border border-black/10 dark:border-white/[0.06] bg-foreground/[0.03] dark:bg-foreground/[0.04] p-4">
                  <div className="text-xs uppercase tracking-[0.14em] text-black/30 dark:text-foreground/30">Services</div>
                  <div className="mt-3 grid grid-cols-1 gap-2">
                    {servicesMega.slice(0, 4).map(s => (
                      <Link key={s.title} href={s.href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-none bg-foreground/[0.03] dark:bg-foreground/[0.04] px-3 py-2.5 hover:bg-foreground/[0.06] dark:hover:bg-foreground/[0.04]">
                        <s.icon className="h-4 w-4 text-black/40 dark:text-foreground/40" /><span className="text-sm text-black/80 dark:text-foreground/80">{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-4">
                  <span className="text-sm text-black/50 dark:text-foreground/50">Theme</span>
                  <ThemeToggle />
                </div>
              </div>

              <div className="border-t border-black/10 dark:border-white/[0.06] p-6">
                <button onClick={handleContactClick} className="flex w-full items-center justify-center gap-2 rounded-none bg-[#D6FF57] px-5 py-3.5 text-sm font-[700] text-black hover:bg-[#e2ff85]">
                  Start a project <ArrowUpRight className="h-4 w-4" />
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-black/30 dark:text-foreground/30"><span className="h-1.5 w-1.5 rounded-full bg-[#D6FF57] animate-pulse" /> Available for Q2 2026 • Avg reply 2h</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}