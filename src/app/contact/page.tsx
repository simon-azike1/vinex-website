"use client";
import { FadeUp } from "@/components/motion.utils";
import MagneticButton from "@/components/ui/magnetic-button";
import TiltCard from "@/components/ui/tilt-card";
import { Mail, Phone, MapPin, Clock, Check } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#D6FF57] animate-pulse" />
              <span className="font-mono text- uppercase tracking-[0.16em] text-white/50">Response within 1 business day • 2 slots left this month</span>
            </div>
            <h1 className="mt-6 font-syne text-[clamp(48px,8vw,112px)] font-[800] tracking-[-0.06em] leading-[0.85] text-[#F5F3EF]">
              Ready to start <span className="text-white/20">your project?</span>
            </h1>
            <p className="mx-auto mt-6 max-w- text- leading-[1.6] text-white/40">
              Tell us where things stand today — we&apos;ll tell you exactly what it takes to get online properly. Fixed price, you own 100%.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-16 grid gap-6 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-7">
            <TiltCard className="rounded- border border-white/[0.06] bg-[#101011] p-8 md:p-10">
              {!sent? (
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="font-mono text- uppercase tracking-[0.12em] text-white/30">Name</label>
                      <input required placeholder="James Roberts" className="mt-2 w-full rounded- border border-white/[0.08] bg-[#0A0A0B] px-4 py-3 text- text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-2 focus:ring-[#8B5CF6]/20" />
                    </div>
                    <div>
                      <label className="font-mono text- uppercase tracking-[0.12em] text-white/30">Work email</label>
                      <input required type="email" placeholder="you@company.com" className="mt-2 w-full rounded- border border-white/[0.08] bg-[#0A0A0B] px-4 py-3 text- text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-2 focus:ring-[#8B5CF6]/20" />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="font-mono text- uppercase tracking-[0.12em] text-white/30">Phone / WhatsApp</label>
                      <input required type="tel" placeholder="+234 801 234 5678" className="mt-2 w-full rounded- border border-white/[0.08] bg-[#0A0A0B] px-4 py-3 text- text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-2 focus:ring-[#8B5CF6]/20" />
                    </div>
                    <div>
                      <label className="font-mono text- uppercase tracking-[0.12em] text-white/30">Service interest</label>
                      <select defaultValue="" required className="mt-2 w-full rounded- border border-white/[0.08] bg-[#0A0A0B] px-4 py-3 text- text-white/70 focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-2 focus:ring-[#8B5CF6]/20">
                        <option value="" disabled className="text-white/30">Select a service</option>
                        <option value="website-design">Website Design & Build</option>
                        <option value="custom-builds">Custom Builds</option>
                        <option value="digital-systems">Digital Systems</option>
                        <option value="ongoing-support">Ongoing Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text- uppercase tracking-[0.12em] text-white/30">Project details</label>
                    <textarea required rows={5} placeholder="What do you do today, what do you need online, and what's your timeline?" className="mt-2 w-full rounded- border border-white/[0.08] bg-[#0A0A0B] px-4 py-3 text- leading-[1.6] text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-2 focus:ring-[#8B5CF6]/20" />
                    <p className="mt-2 font-mono text- text-white/20">Tip: include budget range + deadline — we reply with fixed price.</p>
                  </div>

                  <MagneticButton variant="primary" className="w-full mt-2 py-4 text- font-semibold" type="submit">
                    Send message — we reply in 24h →
                  </MagneticButton>

                  <p className="text-center font-mono text- text-white/20">No spam. Your info stays private. Rabat • Paris • Remote</p>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#D6FF57] text-black"><Check className="h-7 w-7" /></div>
                  <h3 className="mt-6 font-syne text- font-bold">Message sent.</h3>
                  <p className="mt-2 text- text-white/40">We&apos;ll review and get back within 1 business day with next steps.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text- text-white/50 underline">Send another</button>
                </div>
              )}
            </TiltCard>
          </div>

          {/* Info */}
          <div className="md:col-span-5 space-y-6">
            <TiltCard className="rounded- border border-white/[0.06] bg-[#101011] p-8">
              <p className="font-mono text- uppercase tracking-[0.16em] text-white/30">Contact info</p>
              <div className="mt-6 space-y-4">
                <a href="mailto:hello@vnex.co" className="flex items-center gap-3 text- text-white/70 hover:text-white"><div className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.04] border border-white/[0.06]"><Mail className="h-4 w-4" /></div> hello@vnex.co</a>
                <a href="tel:+212600000000" className="flex items-center gap-3 text- text-white/70 hover:text-white"><div className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.04] border border-white/[0.06]"><Phone className="h-4 w-4" /></div> +212 6 00 00 00 00 / +234 XXX</a>
                <div className="flex items-center gap-3 text- text-white/40"><div className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.04] border border-white/[0.06]"><MapPin className="h-4 w-4" /></div> Rabat, Morocco — Lagos, Nigeria — Remote</div>
                <div className="flex items-center gap-3 text- text-white/40"><div className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.04] border border-white/[0.06]"><Clock className="h-4 w-4" /></div> Mon—Fri, 9am—6pm GMT+1</div>
              </div>
            </TiltCard>

            <TiltCard className="rounded- border border-[#8B5CF6]/20 bg-[#101011] p-8">
              <p className="font-mono text- uppercase tracking-[0.16em] text-[#8B5CF6]">What happens next</p>
              <div className="mt-6 space-y-5">
                {[
                  { n: "01", t: "You submit", d: "We review within 1 business day, check fit." },
                  { n: "02", t: "We call — 20 min", d: "Scope, timeline, budget. No pitch." },
                  { n: "03", t: "We propose", d: "Fixed price, timeline, what you own. You decide." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#8B5CF6]/15 text- font-bold text-[#8B5CF6] border border-[#8B5CF6]/20">{s.n}</div>
                    <div><div className="text- font-semibold text-white">{s.t}</div><div className="text- text-white/40">{s.d}</div></div>
                  </div>
                ))}
              </div>
            </TiltCard>

            <div className="rounded- bg-[#D6FF57] p-6 text-black">
              <p className="font-syne text- font-[700] leading-[1.1]">2 slots left for August.</p>
              <p className="mt-2 text- leading-[1.5] text-black/60">We take only 2 new builds per month to keep quality high. Reserve with 50% deposit, rest on launch.</p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.3} className="mt-20 rounded- border border-white/[0.06] bg-[#101011] p-8 md:p-10 text-center">
          <h2 className="mx-auto max-w- font-syne text-[clamp(28px,4vw,44px)] font-[700] leading-[0.9] tracking-[-0.03em]">Let&apos;s get your business online properly.</h2>
          <p className="mx-auto mt-3 max-w- text- text-white/40">Prefer WhatsApp? Message us and we&apos;ll scope via voice notes if that&apos;s easier.</p>
          <a href="/" className="mt-6 inline-block rounded-full border border-white/10 px-6 py-3 text- font-semibold text-white/70 hover:bg-white/[0.04]">Back to home</a>
        </FadeUp>
      </div>
    </main>
  );
}