export default function SocialProof() {
  return (
    <section className="reveal relative overflow-hidden border-y border-white/[0.06] bg-[#0A0A0B] text-[#F5F3EF]">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w- px-6 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left meta */}
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="h-3 w-3 text-[#D6FF57]">★</span>
                ))}
              </span>
              <span className="text- text-white/50">5.0 avg • 27 projects</span>
            </div>

            <div className="mt-8 hidden md:block">
              <div className="rounded- border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-[#0A0A0B] bg-gradient-to-br from-violet-400 to-indigo-600" />
                  <div className="h-8 w-8 rounded-full border-2 border-[#0A0A0B] bg-gradient-to-br from-lime-300 to-emerald-500" />
                  <div className="h-8 w-8 rounded-full border-2 border-[#0A0A0B] bg-[#151517] grid place-items-center text- text-white/60">+25</div>
                </div>
                <div className="mt-3 text- leading-[1.4] text-white/40">
                  Trusted by founders in Rabat, Casa, Paris. Real businesses, not decks.
                </div>
              </div>

              <div className="mt-6 text- uppercase tracking-[0.16em] text-white/20">
                Latest review • 2 days ago
              </div>
            </div>
          </div>

          {/* Big quote */}
          <div className="md:col-span-8">
            <div className="relative">
              <span className="pointer-events-none absolute -top-10 -left-6 font-syne text- font-[900] leading-none text-white/[0.04]">“</span>
              <p className="relative font-syne text-[clamp(28px,4vw,48px)] font-[500] leading-[1.05] tracking-[-0.03em] text-[#F5F3EF]">
                We had no idea how much business we were <span className="text-white/30">losing until we saw it in writing.</span> VNex handled everything — we just answered a few questions.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-px">
                  <div className="h-full w-full rounded-full bg-[#151517] grid place-items-center font-syne text- font-bold">PC</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text- font-semibold">Placeholder client</span>
                    <span className="rounded-full bg-[#D6FF57] px-2 py-0.5 text- font-bold text-black">VERIFIED</span>
                  </div>
                  <div className="text- text-white/40">placeholder business • went live in 5 weeks</div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded- border border-white/10 bg-white/10 p-px">
                <div className="bg-[#101011] p-4 text-center">
                  <div className="font-syne text- font-bold">3.2x</div>
                  <div className="text- text-white/30">inquiries</div>
                </div>
                <div className="bg-[#101011] p-4 text-center">
                  <div className="font-syne text- font-bold">14 days</div>
                  <div className="text- text-white/30">to first lead</div>
                </div>
                <div className="bg-[#101011] p-4 text-center">
                  <div className="font-syne text- font-bold">100%</div>
                  <div className="text- text-white/30">mobile-ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}