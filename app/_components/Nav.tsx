"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Focus", href: "/focus" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.05]">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 h-24">
        <Link href="/" className="flex items-center" aria-label="Heltco Ventures">
          <Image
            src="/logo-transparent.jpg"
            alt="Heltco Ventures"
            width={300}
            height={100}
            priority
            className="h-16 w-auto"
          />
        </Link>
        <nav className="hidden sm:flex gap-6 md:gap-9 text-sm">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-black font-medium"
                    : "text-black/60 hover:text-black transition-colors"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <details className="sm:hidden relative">
          <summary className="list-none cursor-pointer p-2 -mr-2" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </summary>
          <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl bg-white border border-black/10 shadow-lg p-2">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "block px-4 py-3 rounded-xl text-base transition-colors " +
                    (active
                      ? "text-black font-medium bg-black/[0.04]"
                      : "text-black/70 hover:text-black hover:bg-black/[0.03]")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </details>
      </div>
    </header>
  );
}
