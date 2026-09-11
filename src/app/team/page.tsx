export default function TeamPage() {
  const team = [
    {
      name: "Sadiq Sayyadi Ubawaru",
      role: "Founder & CEO",
      image: "/team/sadiq.jpeg",
      location: "Kano • Nigeria",
      bio: "Leads vision, partnerships & growth. Former VC scout, 12 products shipped in 18 months.",
      x: "#", linkedin: "www.linkedin.com/in/sadiqwaru"
    },
    {
      name: "Azike Simon",
      role: "Co-Founder & CTO",
      image: "/team/simon.PNG",
      location: "Rabat • Lagos",
      bio: "Owns product & engineering. Next.js, automations, infra — from 0 → revenue in 3-6 weeks.",
      x: "https://x.com/azikeshinye", linkedin: "https://www.linkedin.com/in/simonzik/"
    },
{
       name: "Muhammad Mukaram Abdullahi",
       role: "Co-Founder & MD",
       image: "/team/mukaram.jpeg",
       location: "Abuja • Nigeria",
       bio: "Operations, delivery & client success. Ensures every launch scales without chaos.",
       x: "#", linkedin: "https://www.linkedin.com/in/mukarram-abdullahi-b23b07281/"
     },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0B] relative overflow-hidden">
      {/* subtle glow */}
      <div className="pointer-events-none absolute -top- left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(214,255,87,0.08),_transparent_70%)]" />

      <div className="relative mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#D6FF57]" />
          <span className="font-mono text- uppercase tracking-[0.16em] text-white/50">NEX TEAM • 3 FOUNDERS • KANO / RABAT / ABUJA</span>
        </div>

        <h1 className="mt-8 max-w- font-syne text-[clamp(42px,7.5vw,88px)] font-[800] leading-[0.88] tracking-[-0.05em] text-[#F5F3EF]">
          Three founders who <span className="text-white/20">actually ship.</span>
        </h1>
        <p className="mt-6 max-w- text- leading-[1.6] text-white/40">
          We don&apos;t sell dreams or decks. We ship products that print. No managers. No hand-offs. Just 3 builders who code, launch, and scale.
        </p>

        {/* cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="group relative overflow-hidden rounded- border border-white/[0.07] bg-[#111113] transition-all duration-500 hover:border-white/[0.14] hover:bg-[#151517]">
              {/* image */}
<div className="relative h-64 w-full overflow-hidden bg-[#0F0F10]">
                 <img src={m.image} alt={m.name} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.06]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/20 to-transparent" />
                 <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_50%_120%,_rgba(214,255,87,0.15),_transparent)]" />

                <div className="absolute left-4 top-4 flex gap-2">
                  <div className="rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 text- font-medium text-white/80">{m.location}</div>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a href={m.x} className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text- font-bold text-black backdrop-blur transition hover:bg-white">𝕏</a>
                  <a href={m.linkedin} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text- font-bold text-white backdrop-blur border border-white/10 transition hover:bg-white hover:text-black">in</a>
                </div>
              </div>

              {/* text */}
              <div className="p-7">
                <h3 className="font-syne text- font-[700] tracking-[-0.02em] text-white">{m.name}</h3>
                <p className="mt-1.5 font-mono text- uppercase tracking-[0.14em] text-[#D6FF57]">{m.role}</p>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-white/40">{m.bio}</p>
              </div>

              {/* bottom line */}
              <div className="h- w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text- font-mono text-white/20">
          <span className="h-px w-12 bg-white/10" /> Available for new projects Q1 2026 <span className="h-px w-12 bg-white/10" />
        </div>
      </div>
    </main>
  );
}