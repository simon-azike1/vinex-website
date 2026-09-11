"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-background text-foreground border-t border-nexus-border">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
        <div className="font-syne text- leading-[0.8] font-[900] tracking-[-0.06em] text-nexus-text-muted translate-y-[12%] text-center">
          VNEX
        </div>
      </div>

      <div className="relative mx-auto max-w- px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 border-b border-nexus-border">
          <p className="font-syne text-[clamp(20px,2.5vw,28px)] font-[600] tracking-[-0.02em] max-w- leading-[1.1]">
            Have an idea? <span className="text-nexus-text-muted">We&apos;ll build the system around it.</span>
          </p>
          <div className="flex gap-3">
            <a href="/contact" className="rounded-full bg-nexus-bg-secondary px-6 py-3 text- font-semibold text-foreground hover:bg-nexus-bg-secondary transition-colors">
              Start a project →
            </a>
            <a href="mailto:hello@vnex.co" className="rounded-full border border-nexus-border bg-foreground/[0.04] px-6 py-3 text- font-medium text-nexus-text-secondary hover:text-foreground hover:bg-foreground/[0.04] transition-colors">
              hello@vnex.co
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-12">
          <div className="col-span-2 md:col-span-5">
            <a href="/" className="flex items-center gap-0.5 font-syne text- font-[800] tracking-[-0.02em]">
              <span className="text-[#8B5CF6]">V</span><span>Ne</span><span className="text-[#8B5CF6]">x</span>
            </a>
            <p className="mt-4 max-w- text- leading-[1.6] text-nexus-text-muted">
              Digital ventures — websites and systems for businesses ready to be found online. Rabat • Paris • Remote.
            </p>
            <div className="mt-6 flex gap-2 items-center">
              <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
              <span className="text- uppercase tracking-[0.14em] text-nexus-text-muted">Available for new projects</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text- uppercase tracking-[0.16em] text-nexus-text-muted">Company</p>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Services", href: "/services" },
                { label: "Work", href: "/work" },
                { label: "Projects", href: "/projects" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
              ].map((l) => (
                <li key={l.label}><a href={l.href} className="text- text-nexus-text-muted hover:text-foreground transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text- uppercase tracking-[0.16em] text-nexus-text-muted">Contact</p>
            <ul className="mt-4 space-y-3">
              <li><a href="/contact" className="text- text-nexus-text-secondary hover:text-foreground">Start a project</a></li>
              <li><a href="mailto:hello@vnex.co" className="text- text-nexus-text-muted hover:text-foreground">hello@vnex.co</a></li>
              <li><a href="tel:+212XXXXXXXXX" className="text- text-nexus-text-muted hover:text-nexus-text-secondary">+212 6 XX XX XX XX</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text- uppercase tracking-[0.16em] text-nexus-text-muted">Newsletter • no spam</p>
            <div className="mt-4 flex gap-2">
              <input placeholder="your@email.com" className="w-full rounded-full border border-nexus-border bg-foreground/[0.04] px-4 py-2.5 text- placeholder:text-nexus-text-muted focus:outline-none focus:border-nexus-border" />
              <button className="rounded-full bg-foreground/[0.04] px-4 text- font-medium hover:bg-foreground/[0.04]">→</button>
            </div>
            <p className="mt-2 text- text-nexus-text-muted">Monthly build notes + teardown.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-nexus-border py-6 text- text-nexus-text-muted">
          <p>© {year} VNEX. Built in Rabat. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-nexus-text-muted">Privacy</a>
            <a href="/terms" className="hover:text-nexus-text-muted">Terms</a>
            <a href="https://twitter.com" className="hover:text-nexus-text-muted">X / Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}