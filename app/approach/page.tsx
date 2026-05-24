import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../_components/Reveal";

const ACCENT = "#6D28D9";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Long-term capital. Operational depth. Our five-step process for partnering with healthcare operators from acquisition through exit.",
  alternates: { canonical: "https://heltcoventures.com/approach" },
  openGraph: {
    title: "Approach — Heltco Ventures",
    description: "Long-term capital. Operational depth.",
    url: "https://heltcoventures.com/approach",
  },
};

const strategy = [
  {
    title: "Long-term view",
    body: "Three to five years per investment. Time and capital, applied with discipline.",
  },
  {
    title: "Hands-on investor",
    body: "Beyond capital — medical knowledge, brand building, and operational expertise.",
  },
];

const process = [
  { n: "01", title: "Partnership or acquisition", body: "Identify the right operator and the right structure." },
  { n: "02", title: "Human resources", body: "Build the team that will execute the next chapter." },
  { n: "03", title: "Operational optimization", body: "Process, systems, and discipline across the business." },
  { n: "04", title: "Revenue growth", body: "Channels, pricing, and product expansion." },
  { n: "05", title: "Exit", body: "A clean handoff to the next stage of ownership." },
];

export default function Approach() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-20">
        <Reveal>
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase"
            style={{ color: ACCENT }}
          >
            Approach
          </p>
          <h1 className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-[-0.03em] leading-[1.05] max-w-4xl">
            Patient capital.
            <br />
            <span style={{ color: ACCENT }}>Operational depth.</span>
          </h1>
          <p className="mt-10 text-xl text-black/60 max-w-2xl leading-relaxed">
            We&apos;re here to help startups and small businesses grow through
            technology-based healthcare innovations designed to improve
            accuracy and reduce costs.
          </p>
        </Reveal>
      </section>

      <Reveal>
        <section className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
            <p
              className="text-sm font-medium tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
              Strategy
            </p>
            <h2 className="mt-6 text-3xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
              How we partner.
            </h2>
            <div className="mt-16 grid gap-12 md:grid-cols-2 max-w-5xl">
              {strategy.map((s) => (
                <div key={s.title}>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-lg text-white/70 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-40">
        <Reveal>
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase text-black/50"
          >
            Process
          </p>
          <h2 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight max-w-3xl">
            From partnership
            <br />
            to exit.
          </h2>
        </Reveal>

        <ol className="mt-16 max-w-4xl">
          {process.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 80}>
              <li
                className="grid grid-cols-[4rem_1fr] sm:grid-cols-[6rem_1fr] gap-6 sm:gap-10 items-baseline py-10 border-t border-black/10 last:border-b"
              >
                <span
                  className="text-base font-medium tracking-[0.15em]"
                  style={{ color: ACCENT }}
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base sm:text-lg text-black/60 max-w-2xl leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 pb-32">
          <div className="rounded-3xl bg-black text-white p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
              See where we&apos;re investing.
            </h2>
            <div className="mt-8">
              <Link
                href="/focus"
                className="inline-flex items-center rounded-full px-6 py-3 text-base font-medium text-white"
                style={{ backgroundColor: ACCENT }}
              >
                Our focus areas
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
