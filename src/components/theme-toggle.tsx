"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  if (!mounted) {
    return <div className="h-9 w-9 rounded-full border border-nexus-border" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark"? "light" : "dark")}
      className="grid h-9 w-9 place-items-center rounded-full border border-foreground/[0.04] dark:border-foreground/[0.04] bg-foreground/[0.04] dark:bg-foreground/[0.04] text-black/60 dark:text-nexus-text-secondary hover:bg-foreground/[0.04] dark:hover:bg-foreground/[0.04] hover:text-black dark:hover:text-foreground transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark"? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}