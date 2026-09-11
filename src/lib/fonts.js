import { Space_Grotesk, Inter } from "next/font/google";

// Bold geometric display face — headlines only, used with restraint
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

// Clean humanist body face — everything else
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

// In app/layout.jsx:
// <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
//   <body className="font-body bg-paper text-ink">{children}</body>
// </html>
