import Image from "next/image";

const ACCENT = "#6D28D9";

const focusAreas = [
  {
    title: "Healthcare Services",
    description:
      "Clinical practices, multidisciplinary care delivery, and patient-facing services that scale with operational rigor.",
    size: "large",
  },
  {
    title: "Medical Technology",
    description:
      "Devices, software, and platforms that improve outcomes and reduce cost.",
    size: "medium",
  },
  {
    title: "Healthcare Real Estate",
    description: "Purpose-built clinical spaces and medical buildings.",
    size: "medium",
  },
];

const specialInterests = [
  "Virtual Care",
  "Multidisciplinary Medical Offices",
  "Research Facilities / CROs",
  "Health Food & Supplements",
];

const strategyPoints = [
  {
    title: "Long-term view",
    body: "Three to five years per investment. Time and capital, applied with discipline.",
  },
  {
    title: "Hands-on investor",
    body: "Beyond capital — medical knowledge, brand building, and operational expertise.",
  },
];

const processSteps = [
  { n: "01", label: "Partnership or acquisition" },
  { n: "02", label: "Human resources" },
  { n: "03", label: "Operational optimization" },
  { n: "04", label: "Revenue growth" },
  { n: "05", label: "Exit" },
];

const nav = [
  { label: "Focus", href: "#focus" },
  { label: "Strategy", href: "#strategy" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans bg-white text-black">
      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 h-20">
          <a href="#top" className="flex items-center" aria-label="Heltco Ventures">
            <Image
              src="/logo-transparent.jpg"
              alt="Heltco Ventures"
              width={210}
              height={70}
              priority
              className="h-11 w-auto"
            />
          </a>
          <nav className="flex gap-9 text-sm text-black/70">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1 pt-20">
        {/* Hero */}
        <section className="mx-auto max-w-7xl w-full px-6 pt-16 pb-28 sm:pt-20 sm:pb-36">
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
            Hands-on investors
            <br />
            in <span style={{ color: ACCENT }}>health&nbsp;care.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-black/60 max-w-xl leading-relaxed">
            A Canadian investment company partnering with the companies
            reshaping North American healthcare.
          </p>
          <div className="mt-10">
            <a
              href="#focus"
              className="inline-flex items-center rounded-full px-7 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              Explore our approach
            </a>
          </div>
        </section>

        {/* Manifesto — full-bleed black */}
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

        {/* Focus — Bento grid */}
        <section id="focus" className="mx-auto max-w-7xl px-6 py-32 sm:py-48">
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
              We invest in innovative and transformative companies across the
              healthcare value chain.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:h-[560px]">
            <div className="md:col-span-2 md:row-span-2 bg-black text-white rounded-3xl p-10 sm:p-14 flex flex-col justify-between">
              <div
                className="text-sm font-medium tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}
              >
                {focusAreas[0].title}
              </div>
              <div>
                <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
                  Care delivery,
                  <br />
                  built to scale.
                </h3>
                <p className="mt-6 text-lg text-white/70 max-w-md leading-relaxed">
                  {focusAreas[0].description}
                </p>
              </div>
            </div>
            <div className="rounded-3xl p-10 flex flex-col justify-between" style={{ backgroundColor: ACCENT }}>
              <div className="text-sm font-medium tracking-[0.2em] uppercase text-white/80">
                {focusAreas[1].title}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-tight">
                  Software, devices, and platforms.
                </h3>
                <p className="mt-4 text-white/80 leading-relaxed">
                  {focusAreas[1].description}
                </p>
              </div>
            </div>
            <div className="rounded-3xl p-10 flex flex-col justify-between bg-black/[0.04]">
              <div
                className="text-sm font-medium tracking-[0.2em] uppercase"
                style={{ color: ACCENT }}
              >
                {focusAreas[2].title}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
                  Purpose-built
                  <br />
                  clinical space.
                </h3>
                <p className="mt-4 text-black/60 leading-relaxed">
                  {focusAreas[2].description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-black/50">
              Special interests
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {specialInterests.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-5 py-2 text-base text-black bg-black/[0.04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy — split layout, no cards */}
        <section id="strategy" className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48">
            <p
              className="text-sm font-medium tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
              Strategy
            </p>
            <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight max-w-3xl">
              Patient capital.
              <br />
              <span style={{ color: ACCENT }}>Operational depth.</span>
            </h2>
            <div className="mt-20 grid gap-16 md:grid-cols-2 max-w-5xl">
              {strategyPoints.map((p) => (
                <div key={p.title}>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-lg text-white/60 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process — vertical timeline */}
        <section id="process" className="mx-auto max-w-7xl px-6 py-32 sm:py-48">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-black/50">
            Process
          </p>
          <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight max-w-3xl">
            From partnership
            <br />
            to exit.
          </h2>
          <ol className="mt-20 max-w-4xl">
            {processSteps.map((step, i) => (
              <li
                key={step.n}
                className="grid grid-cols-[5rem_1fr] gap-8 items-baseline py-8 border-t border-black/10"
                style={i === processSteps.length - 1 ? { borderBottom: "1px solid rgba(0,0,0,0.1)" } : undefined}
              >
                <span
                  className="text-base font-medium tracking-[0.15em]"
                  style={{ color: ACCENT }}
                >
                  {step.n}
                </span>
                <span className="text-2xl sm:text-4xl font-semibold tracking-tight">
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* About */}
        <section id="about" className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48">
            <p
              className="text-sm font-medium tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
              Who we are
            </p>
            <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
              Based in Toronto.
              <br />
              <span className="text-white/50">
                Investing across North America.
              </span>
            </h2>
            <p className="mt-12 text-xl text-white/70 max-w-2xl leading-relaxed">
              Heltco Ventures is a Canadian investment company focused on
              private-equity investment in healthcare.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/logo-transparent.jpg"
            alt="Heltco Ventures"
            width={180}
            height={60}
            className="h-10 w-auto opacity-60"
          />
          <p className="text-sm text-black/50">
            © {new Date().getFullYear()} Heltco Ventures. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
