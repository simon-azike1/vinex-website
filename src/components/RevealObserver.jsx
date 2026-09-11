"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.revealDelay || "0";
            el.style.setProperty("--reveal-delay", `${delay}ms`);
            el.classList.add("in-view");

            const stagger = el.dataset.revealStagger;
            if (stagger) {
              const children = el.querySelectorAll(":scope > *");
              children.forEach((child, i) => {
                child.style.setProperty("--reveal-delay", `${Number(delay) + i * Number(stagger)}ms`);
                child.classList.add("reveal-child");
              });
            }

            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => observer.observe(el));
    };

    observeAll();

    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}