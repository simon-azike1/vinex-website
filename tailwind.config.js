/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        nexus: {
          bg: '#0A0A0B',
          bgSecondary: '#151517',
          lime: '#D6FF57',
          limeHover: '#e2ff85',
          violet: '#8B5CF6',
          paper: '#F5F3EF',
          border: 'rgba(255,255,255,0.08)',
          borderMedium: 'rgba(255,255,255,0.14)',
          textPrimary: '#F5F3EF',
          textSecondary: 'rgba(245,243,239,0.6)',
          textMuted: 'rgba(245,243,239,0.3)',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        nexus: {
          lg: '24px',
          md: '18px',
          full: '9999px',
        },
      },
    },
  },
  plugins: [],
};