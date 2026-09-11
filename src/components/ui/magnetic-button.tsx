'use client';
import { useRef, useState, useCallback } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "dark";
  strength?: number;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function MagneticButton({ children, className = "", variant = "primary", strength = 0.35, disabled,...props }: Props) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isHover, setIsHover] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (window.innerWidth < 768) return; // no magnet on mobile
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btnRef.current.style.transform = `translate(${x * strength}px, ${y * (strength + 0.15)}px)`;
    // move inner text slightly more for depth
    const text = btnRef.current.querySelector('[data-mag-text]') as HTMLElement;
    if (text) text.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  }, [strength]);

  const handleLeave = useCallback(() => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = 'translate(0px,0px)';
    const text = btnRef.current.querySelector('[data-mag-text]') as HTMLElement;
    if (text) text.style.transform = 'translate(0px,0px)';
    setIsHover(false);
  }, []);

  const base =
    variant === "primary"
     ? "bg-[#D6FF57] text-black hover:bg-[#e2ff85] shadow-[0_0_0_1px_rgba(214,255,87,0.2),0_4px_20px_rgba(214,255,87,0.15)] hover:shadow-[0_0_0_1px_rgba(214,255,87,0.3),0_8px_32px_rgba(214,255,87,0.25)]"
      : variant === "dark"
     ? "bg-[#F5F3EF] text-black hover:bg-white"
      : "bg-transparent border border-white/14 text-[#F5F3EF] hover:bg-white/[0.06] hover:border-white/20 backdrop-blur";

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={() => setIsHover(true)}
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text- font-semibold uppercase tracking-[0.04em] transition-[transform,background,border,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${base} ${disabled? "opacity-50 pointer-events-none" : ""} ${className}`}
      {...props}
    >
      <span data-mag-text className="relative z-10 inline-flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform">
        {children}
      </span>

      {/* Hover shine */}
      <span className={`pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${variant === "primary"? "bg-[radial-gradient(120px_at_50%_-20%,rgba(0,0,0,0.15),transparent)]" : "bg-[radial-gradient(120px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]"}`} />

      {/* Magnetic ring on hover */}
      <span className={`pointer-events-none absolute -inset-1 rounded-full border border-[#D6FF57]/0 transition-all duration-500 ${isHover && variant === "primary"? "border-[#D6FF57]/30 scale-[1.04]" : ""}`} />
    </button>
  );
}