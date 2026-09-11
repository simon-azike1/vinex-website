"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouse = { x: -1000, y: -1000 };
    const spacing = 28;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * window.devicePixelRatio;
      mouse.y = (e.clientY - rect.top) * window.devicePixelRatio;
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let x = 0; x < canvas.width; x += spacing * 2) {
        for (let y = 0; y < canvas.height; y += spacing * 2) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          const max = 260;
          if (dist < max) {
            const alpha = (1 - dist / max) * 0.9;
            const size = 1 + (1 - dist / max) * 3.2;
            ctx.fillStyle = `rgba(214,255,87,${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = "rgba(255,255,255,0.10)";
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="relative min-h- bg-[#0A0A0B] px-6 md:px-10 py-10 md:py-16 overflow-hidden">
      {/* intentional dark */}
      {/* Outer rounded container like screenshot */}
      <div className="relative mx-auto max-w- rounded- border border-white/[0.06] bg-[#080808] overflow-hidden">
        {/* Shader Grid Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ width: "100%", height: "100%" }}
        />

        {/* Content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center p-8 md:p-12 lg:p-14">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6FF57] animate-pulse" />
              <span className="font-mono text- tracking-wide text-white/60">
                Trusted by 400+ teams shipping at lightspeed
              </span>
            </div>

            <h1 className="mt-8 font-syne text-[clamp(42px,6vw,84px)] font-[800] leading-[0.86] tracking-[-0.05em] text-white">
              Build<br />
              products<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6FF57] to-[#B8E24A]">that</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8A8C2] to-[#8B5CF6]">scale</span>
              <br />
              at will.
            </h1>

            <div className="mt-7 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-[#1E1E1E] border-2 border-[#080808] grid place-items-center text- font-bold text-white/70">SC</div>
                <div className="h-8 w-8 rounded-full bg-[#252525] border-2 border-[#080808] grid place-items-center text- font-bold text-white/70">ML</div>
                <div className="h-8 w-8 rounded-full bg-[#1E1E1E] border-2 border-[#080808] grid place-items-center text- font-bold text-white/70">AN</div>
                <div className="h-8 w-8 rounded-full bg-[#2A2A2A] border-2 border-[#080808] grid place-items-center text- font-bold text-white/70">ER</div>
              </div>
              <div className="flex items-center gap-1.5 text- text-white/50">
                <span className="text-[#D6FF57]">★</span>
                <span className="font-bold text-white">4.9/5</span>
                <span>from 1.2k reviews</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text- font-semibold text-black hover:bg-white/90 transition"
              >
                Start building <span className="ml-2">↗</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur px-7 py-3.5 text- font-medium text-white/80 hover:bg-white/[0.08] hover:text-white transition"
              >
                Watch demo
              </Link>
            </div>
          </div>

          {/* RIGHT - Live Product Window */}
          <div className="relative">
            <div className="overflow-hidden rounded- border border-white/10 bg-[#121214]/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              {/* Window Top */}
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#0F0F11] px-4 py-3.5">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-white/[0.04] border border-white/[0.06] p-1">
                  <span className="rounded-full bg-white px-3.5 py-1 text- font-semibold text-black">Dashboard</span>
                  <span className="rounded-full px-3 py-1 text- text-white/40">Analytics</span>
                  <span className="rounded-full px-3 py-1 text- text-white/40">Agents</span>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-3 space-y-3">
                <div className="rounded- border border-white/[0.06] bg-gradient-to-br from-[#D6FF57]/[0.08] via-[#1A1A1E] to-[#8B5CF6]/[0.15] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text- font-mono text-white/40">Total Revenue</span>
                    <span className="text- text-[#D6FF57]">↗ 12%</span>
                  </div>
                  <div className="mt-2 text- font-bold tracking-tight text-white">$248,560</div>
                  <div className="mt-4 h- w-full rounded- bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/[0.04]" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded- border border-white/[0.06] bg-white/[0.03] p-3.5">
                    <div className="text- font-mono uppercase tracking-wide text-white/30">Active users</div>
                    <div className="mt-1 text- font-bold text-white">12.4k</div>
                  </div>
                  <div className="rounded- border border-white/[0.06] bg-white/[0.03] p-3.5">
                    <div className="text- font-mono uppercase tracking-wide text-white/30">Agents running</div>
                    <div className="mt-1 text- font-bold text-white">342</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow behind card */}
            <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(600px_circle_at_60%_50%,_rgba(139,92,246,0.15),_transparent)]" />
          </div>
        </div>
      </div>
    </section>
  );
}