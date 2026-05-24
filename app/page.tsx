import Link from "next/link";
import HeroMark from "./_components/HeroMark";
import Reveal from "./_components/Reveal";

const ACCENT = "#6D28D9";

const pillars = [
  {
    title: "Healthcare Services",
    description: "Clinical practices and patient-facing care delivery, built to scale with operational discipline.",
    href: "/focus#services",
  },
  {
    title: "Medical Technology",
    description: "Devices, software, and platforms that measurably improve accuracy and reduce cost.",
    href: "/focus#medtech",
  },
  {
    title: "Healthcare Real Estate",
    description: "Purpose-built clinical spaces and medical buildings.",
    href: "/focus#realestate",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroMark />
        <div className="relative mx-auto max-w-7xl w-full px-6 pt-16 pb-28 sm:pt-20 sm:pb-36">
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
            Hands-on investors
            <br />
            in <span style={{ color: ACCENT }}>health&nbsp;care.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-black/60 max-w-xl leading-relaxed">
            A Canadian investment company partnering with the companies
            reshaping North American healthcare.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/approach"
              className="inline-flex items-center rounded-full px-7 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              Our approach
            </Link>
            <Link
              href="/focus"
              className="inline-flex items-center rounded-full px-7 py-3 text-base font-medium text-black/80 hover:text-black border border-black/15 hover:border-black/40 transition-colors"
            >
              Where we invest →
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto — black */}
      <Reveal>
        <section className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48">
            <p
              className="text-sm font-medium tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
              Our thesis
            </p>
            <p className="mt-8 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.15] max-w-5xl">
              The next era of healthcare is built on{" "}
              <span style={{ color: ACCENT }}>technology</span> that increases
              accuracy and reduces cost — and on operators who know the
              difference.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Three pillars */}
      <section className="mx-auto max-w-7xl px-6 py-32 sm:py-48">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-black/50">
                Focus
              </p>
              <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
                Three areas.
                <br />
                One mission.
              </h2>
            </div>
            <p className="text-lg text-black/60 max-w-md">
              We invest across the healthcare value chain — from care delivery
              to the technology that powers it.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delayMs={i * 100}>
              <Link
                href={p.href}
                className="group block rounded-3xl border border-black/[0.08] p-10 bg-white hover:border-black/30 transition-colors h-full"
              >
                <h3
                  className="text-xl font-semibold"
                  style={{ color: ACCENT }}
                >
                  {p.title}
                </h3>
                <p className="mt-4 text-black/70 leading-relaxed">
                  {p.description}
                </p>
                <p className="mt-6 text-sm font-medium text-black/60 group-hover:text-black transition-colors">
                  Learn more →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <Reveal>
        <section className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 text-center">
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight max-w-3xl mx-auto">
              Building something we should
              <br />
              <span style={{ color: ACCENT }}>know about?</span>
            </h2>
            <p className="mt-8 text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
              We respond to every serious inquiry within two business days.
            </p>
            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full px-7 py-3 text-base font-medium text-white border border-white/30 hover:border-white transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
