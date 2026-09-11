"use client";
import { FadeUp, StaggerFadeUp } from "@/components/motion.utils";
import TiltCard from "@/components/ui/tilt-card";
import { Play } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    featured: true,
    quote: "VNex transformed our business from having no online presence to a professional website that actually brings us customers.",
    body: "Our online bookings have increased by 40% since launch. What impressed us most was how they handled everything — we just answered a few questions.",
    name: "James Roberts",
    role: "Owner, Lagos Boutique Hotel",
    initials: "JR",
    metric: "+40% bookings",
    location: "Lagos, NG",
  },
  {
    quote: "We had an outdated website that wasn't mobile-friendly. VNex rebuilt it from scratch and now our online sales have doubled.",
    body: "Mobile checkout is now 70% of our orders.",
    name: "Adeola Mohammed",
    role: "Manager, Abuja Fashion Store",
    initials: "AM",
    metric: "2x sales",
    location: "Abuja, NG",
  },
  {
    quote: "The team at VNex exceeded our expectations. They understood our business goals and delivered a solution that works.",
    body: "As a tech startup, we needed a partner who could build scalable solutions quickly. They shipped in 3 weeks.",
    name: "Samuel Thompson",
    role: "Director, Kaduna Tech Solutions",
    initials: "ST",
    metric: "3 week ship",
    location: "Kaduna, NG",
  },
  {
    quote: "We were losing customers because we had no way to take orders online. Now 60% comes from the website.",
    body: "The SMS notifications and order tracking they built reduced our waste and support calls overnight.",
    name: "Fatima Bello",
    role: "Founder, Kaduna Fresh Market",
    initials: "FB",
    metric: "+60% orders",
    location: "Kaduna, NG",
  },
  {
    quote: "Professional, fast, and they actually taught us how to manage it after. We own everything.",
    body: "No retainer trap. They built it, trained us, and we run it. That's rare.",
    name: "Olivier Dupont",
    role: "Founder, Atelier Rabat",
    initials: "OD",
    metric: "100% owned",
    location: "Rabat, MA",
  },
  {
    quote: "Our enrollment went from 2 weeks to 2 days. Parents love the portal.",
    body: "We used to lose paper forms. Now everything is tracked and parents get status updates automatically.",
    name: "Dr. Sarah Allen",
    role: "Head, Bristol Prep Academy",
    initials: "SA",
    metric: "-86% time",
    location: "Bristol, UK",
  },
];

// ---- CLOUDINARY VIDEO LINKS - REPLACE THESE ----
const videoTestimonials = [
  {
    id: 1,
    name: "James Roberts",
    role: "Lagos Boutique Hotel",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=640&h=360&fit=crop",
    // Replace with your Cloudinary URL: https://res.cloudinary.com/YOUR_CLOUD/video/upload/v.../testimonial-1.mp4
    src: "https://res.cloudinary.com/demo/video/upload/q_auto/v1/dog.mp4",
    duration: "0:47",
  },
  {
    id: 2,
    name: "Adeola Mohammed",
    role: "Abuja Fashion Store",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&h=360&fit=crop",
    src: "https://res.cloudinary.com/demo/video/upload/q_auto/v1/elephants.mp4",
    duration: "1:12",
  },
  {
    id: 3,
    name: "Fatima Bello",
    role: "Kaduna Fresh Market",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=640&h=360&fit=crop",
    src: "https://res.cloudinary.com/demo/video/upload/q_auto/v1/sea_turtle.mp4",
    duration: "0:58",
  },
  {
    id: 4,
    name: "Olivier Dupont",
    role: "Atelier Rabat",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=360&fit=crop",
    src: "https://res.cloudinary.com/demo/video/upload/q_auto/v1/cld-sample-video.mp4",
    duration: "1:05",
  },
];

function VideoCard({ video }: { video: (typeof videoTestimonials)[0] }) {
  const [playing, setPlaying] = useState(false);
  return (
    <TiltCard className="group overflow-hidden rounded- border border-white/[0.06] bg-[#101011]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0B]">
        {!playing? (
          <>
            <img src={video.thumbnail} alt={video.name} className="h-full w-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <button
              onClick={() => setPlaying(true)}
              className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#F5F3EF] text-black shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform group-hover:scale-110"
            >
              <Play className="h-5 w-5 fill-black ml-0.5" />
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2 py-1 font-mono text- text-white/70 backdrop-blur border border-white/10">{video.duration}</span>
            <div className="absolute bottom-3 left-3">
              <div className="font-syne text- font-semibold text-white">{video.name}</div>
              <div className="font-mono text- text-white/50">{video.role}</div>
            </div>
          </>
        ) : (
          <video
            src={video.src}
            autoPlay
            controls
            playsInline
            className="h-full w-full object-cover"
            onEnded={() => setPlaying(false)}
          />
        )}
      </div>
    </TiltCard>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <div className="mx-auto max-w- px-6 md:px-10 py-20 md:py-28">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <span className="flex gap-0.5 text-[#D6FF57]">★★★★★</span>
              <span className="font-mono text- uppercase tracking-[0.16em] text-white/50">5.0 average • 27 projects • Video reviews</span>
            </div>
            <h1 className="mt-6 font-syne text-[clamp(48px,8vw,112px)] font-[800] tracking-[-0.06em] leading-[0.85] text-[#F5F3EF]">
              Client <span className="text-white/20">stories.</span>
            </h1>
            <p className="mx-auto mt-6 max-w- text- leading-[1.6] text-white/40">
              Hear from founders who went from no online presence to booked out. Real metrics, real owners.
            </p>
          </div>
        </FadeUp>

        {/* Featured */}
        <FadeUp delay={0.15} className="mt-16">
          <TiltCard className="overflow-hidden rounded- border-[#8B5CF6]/20! bg-[#101011]">
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-7 p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#8B5CF6]/15 text-[#8B5CF6] font-syne font-bold text- border border-[#8B5CF6]/20">{testimonials[0].initials}</div>
                  <div>
                    <div className="font-syne text- font-semibold text-white">{testimonials[0].name}</div>
                    <div className="font-mono text- text-white/40">{testimonials[0].role} • {testimonials[0].location}</div>
                  </div>
                  <span className="ml-auto rounded-full bg-[#D6FF57] px-2.5 py-1 text- font-bold text-black">{testimonials[0].metric}</span>
                </div>
                <p className="mt-8 font-syne text-[clamp(20px,2.5vw,28px)] font-[500] leading-[1.15] tracking-[-0.02em] text-[#F5F3EF]">&ldquo;{testimonials[0].quote}&rdquo;</p>
                <p className="mt-4 text- leading-[1.7] text-white/40">{testimonials[0].body}</p>
              </div>
              <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-white/[0.06] bg-[#0A0A0B] p-8 flex flex-col justify-center gap-6">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded- border border-white/[0.06] bg-white/[0.02] p-4 text-center"><div className="font-syne text- font-bold text-white">40%</div><div className="font-mono text- text-white/30 uppercase">Bookings</div></div>
                  <div className="rounded- border border-white/[0.06] bg-white/[0.02] p-4 text-center"><div className="font-syne text- font-bold text-white">14d</div><div className="font-mono text- text-white/30 uppercase">To live</div></div>
                  <div className="rounded- border border-white/[0.06] bg-white/[0.02] p-4 text-center"><div className="font-syne text- font-bold text-white">100%</div><div className="font-mono text- text-white/30 uppercase">Owned</div></div>
                </div>
                <p className="font-mono text- leading-[1.5] text-white/20">Verified • Launched Jan 2025 • Next.js + SMS • Rabat → Lagos</p>
              </div>
            </div>
          </TiltCard>
        </FadeUp>

        {/* VIDEO SECTION */}
        <FadeUp className="mt-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text- uppercase tracking-[0.16em] text-white/30">Video testimonials</p>
              <h2 className="mt-2 font-syne text- font-[700] tracking-[-0.02em] text-white">Watch them say it</h2>
            </div>
            <p className="hidden md:block font-mono text- text-white/30">Cloudinary optimized • Auto q_auto</p>
          </div>
        </FadeUp>

        <StaggerFadeUp staggerChildren={0.08} delayChildren={0.1} className="mt-8 grid gap-6 md:grid-cols-2">
          {videoTestimonials.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </StaggerFadeUp>

        {/* Text Grid - FIXED SPACING */}
        <StaggerFadeUp staggerChildren={0.08} delayChildren={0.25} className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(1).map((t) => (
            <TiltCard key={t.name} className="flex flex-col rounded- border border-white/[0.06] bg-[#101011] p-7">
              <div className="flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-full border border-white/[0.06] bg-white/[0.06] font-syne text- font-bold text-white/70">{t.initials}</div>
                <div><div className="text- font-semibold text-white">{t.name}</div><div className="font-mono text- text-white/30">{t.role}</div></div>
                <span className="ml-auto whitespace-nowrap rounded-full border border-[#D6FF57]/20 bg-[#D6FF57]/10 px-2.5 py-1 text- font-medium text-[#D6FF57]">{t.metric}</span>
              </div>
              <p className="mt-5 font-syne text- font-[500] leading-[1.3] tracking-[-0.01em] text-[#F5F3EF]">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-3 text- leading-[1.6] text-white/40">{t.body}</p>
              <div className="mt-auto flex items-center gap-2 pt-6 font-mono text- uppercase tracking-[0.12em] text-white/20"><span className="h-px w-6 bg-white/10" />{t.location}</div>
            </TiltCard>
          ))}
        </StaggerFadeUp>

        <FadeUp className="mt-16 flex flex-col items-center justify-between gap-6 rounded- border border-white/[0.06] bg-[#101011] p-8 md:flex-row md:p-10">
          <p className="font-syne text- font-[600] leading-[1.1] max-w-">Ready to become the next story we feature?</p>
          <a href="/contact" className="whitespace-nowrap rounded-full bg-[#F5F3EF] px-7 py-3.5 text- font-semibold text-black hover:bg-white">Start your project →</a>
        </FadeUp>
      </div>
    </main>
  );
}