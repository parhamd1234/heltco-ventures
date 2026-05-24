import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../_components/Reveal";

const ACCENT = "#6D28D9";

export const metadata: Metadata = {
  title: "About",
  description:
    "Heltco Ventures is a Toronto-based healthcare investment company partnering with the operators reshaping North American care delivery.",
  alternates: { canonical: "https://heltcoventures.com/about" },
  openGraph: {
    title: "About — Heltco Ventures",
    description: "Toronto-based healthcare investment company.",
    url: "https://heltcoventures.com/about",
  },
};

export default function About() {
  return (
    <>
      <section className="border-b border-black/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p
              className="text-sm font-medium tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              About
            </p>
            <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
              Canadian investors
              <br />
              with a <span style={{ color: ACCENT }}>medical lens.</span>
            </h1>
            <p className="mt-8 text-lg text-black/65 max-w-xl leading-relaxed">
              Heltco Ventures is a Toronto-based investment company focused on
              private-equity investment in North American healthcare. We back
              operators building better care delivery, smarter medical
              technology, and the spaces where both come together.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-black/[0.04]">
            <Image
              src="/toronto.jpg"
              alt="Toronto skyline"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Reveal>
        <section className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-28 sm:py-40">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <p
                  className="text-sm font-medium tracking-[0.25em] uppercase"
                  style={{ color: ACCENT }}
                >
                  Where we come from
                </p>
                <h2 className="mt-6 text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
                  Built by operators,
                  <br />
                  not bankers.
                </h2>
              </div>
              <div className="text-lg text-white/70 leading-relaxed space-y-6">
                <p>
                  We don&apos;t arrive with a spreadsheet and a deadline. Our
                  team has built and operated healthcare businesses — and that
                  shows up in how we partner.
                </p>
                <p>
                  When we invest, we work alongside founders on the things that
                  actually move outcomes: clinical operations, payer
                  relationships, product, talent, and growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-40">
        <Reveal>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p
                className="text-sm font-medium tracking-[0.25em] uppercase"
                style={{ color: ACCENT }}
              >
                Where we work
              </p>
              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                Toronto, North America.
              </h2>
              <p className="mt-6 text-lg text-black/65 leading-relaxed max-w-md">
                Headquartered in Toronto, Ontario. Active across Canada and
                the United States.
              </p>
            </div>
            <div>
              <p
                className="text-sm font-medium tracking-[0.25em] uppercase"
                style={{ color: ACCENT }}
              >
                What we do
              </p>
              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                Private equity in healthcare.
              </h2>
              <p className="mt-6 text-lg text-black/65 leading-relaxed max-w-md">
                Long-term capital, hands-on partnership, and a clear exit
                strategy from day one.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 pb-32">
          <div className="rounded-3xl bg-black text-white p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Want to know more?
            </h2>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              See our investment focus areas or get in touch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                href="/focus"
                className="inline-flex items-center rounded-full px-6 py-3 text-base font-medium text-white"
                style={{ backgroundColor: ACCENT }}
              >
                Investment focus
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full px-6 py-3 text-base font-medium text-white border border-white/30 hover:border-white transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
