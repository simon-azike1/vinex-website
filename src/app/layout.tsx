import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500","600","700","800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400","500","600"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400","500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VNEX We build websites that work",
    template: "%s | VNEX",
  },
  description: "We help businesses without web presence get professional websites and digital systems built and launched in 3-6 weeks. Rabat • Paris • Remote.",
  metadataBase: new URL("https://vnex.co"),
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "VNEX",
    description: "Websites and systems for businesses ready to be found online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[#D6FF57] selection:text-black transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <div className="noise" aria-hidden="true" />
          <RevealObserver />
        </ThemeProvider>
      </body>
    </html>
  );
}