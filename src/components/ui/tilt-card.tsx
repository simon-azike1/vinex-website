'use client';
import { useRef, useCallback } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // degrees
  glare?: boolean;
  scale?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export default function TiltCard({ children, className = "", maxTilt = 8, glare = true, scale = 1.02,...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    if (window.innerWidth < 768) return;
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -maxTilt;
    const ry = ((x / r.width) - 0.5) * maxTilt;

    ref.current.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${scale},${scale},${scale})`;

    if (glare && glareRef.current) {
      const gx = (x / r.width) * 100;
      const gy = (y / r.height) * 100;
      glareRef.current.style.background = `radial-gradient(400px at ${gx}% ${gy}%, rgba(255,255,255,0.12), transparent 80%)`;
      glareRef.current.style.opacity = "1";
    }
  }, [maxTilt, scale, glare]);

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    if (glareRef.current) glareRef.current.style.opacity = "0";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform rounded- border border-white/[0.08] bg-[#101011] hover:border-white/[0.12] hover:bg-[#151517] [transform-style:preserve-3d] ${className}`}
      {...props}
    >
      {/* Content with z lift */}
      <div className="relative [transform:translateZ(30px)]">
        {children}
      </div>

      {/* Glare layer */}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded- opacity-0 transition-opacity duration-500 mix-blend-soft-light"
        />
      )}

      {/* Subtle edge glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded- opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(100deg,transparent_20%,rgba(139,92,246,0.12)_50%,transparent_80%)]" />
    </div>
  );
}