import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Focus", href: "/focus" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Link href="/" className="inline-block" aria-label="Heltco Ventures">
            <Image
              src="/logo-transparent.jpg"
              alt="Heltco Ventures"
              width={240}
              height={80}
              className="h-14 w-auto opacity-70"
            />
          </Link>
          <p className="mt-6 text-sm text-black/60 max-w-xs leading-relaxed">
            Hands-on investors in North American healthcare.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-black/50">
            Navigate
          </p>
          <ul className="mt-4 space-y-3">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-black/70 hover:text-black transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-black/50">
            Based in
          </p>
          <p className="mt-4 text-sm text-black/70 leading-relaxed">
            Toronto, Ontario, Canada
          </p>
        </div>
      </div>
      <div className="border-t border-black/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-black/40">
          © {new Date().getFullYear()} Heltco Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
