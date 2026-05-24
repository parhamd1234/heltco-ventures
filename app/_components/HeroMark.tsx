"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle Apple-style geometric mark for the hero.
 * Concentric purple rings with slow rotation and parallax-on-scroll.
 * Restrained on purpose — supports the headline, doesn't compete with it.
 */
export default function HeroMark() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translateY(${y * 0.18}px) rotate(${y * 0.04}deg)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="absolute right-0 top-0 w-[min(60vw,640px)] h-auto opacity-90 pointer-events-none translate-x-1/4 -translate-y-1/4 sm:translate-x-1/3 sm:-translate-y-1/4"
    >
      <defs>
        <radialGradient id="hm-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#6D28D9" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#hm-grad)" />
      <circle cx="200" cy="200" r="160" fill="none" stroke="#6D28D9" strokeOpacity="0.15" strokeWidth="1" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="#6D28D9" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="200" cy="200" r="80" fill="none" stroke="#6D28D9" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="200" cy="200" r="40" fill="none" stroke="#6D28D9" strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="6" fill="#6D28D9" />
    </svg>
  );
}
