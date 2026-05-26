import Image from "next/image";
import Link from "next/link";
import KineticHeading from "./_components/KineticHeading";
import Marquee from "./_components/Marquee";
import Reveal from "./_components/Reveal";

const ACCENT = "#6D28D9";

const stats = [
  { value: "Toronto", label: "Headquartered" },
  { value: "North America", label: "Geographic focus" },
  { value: "3–5 yrs", label: "Investment horizon" },
  { value: "Healthcare", label: "Exclusive sector" },
];

const tickerKeywords = [
  "Healthcare Services",
  "Medical Technology",
  "Healthcare Real Estate",
  "Virtual Care",
  "CROs",
  "Multidisciplinary Offices",
  "Clinical Operations",
];

const pillars = [
  {
    title: "Healthcare Services",
    description: "Clinical practices and patient-facing care delivery, built to scale with operational discipline.",
    href: "/focus#services",
    image: "/focus-services.jpg",
  },
  {
    title: "Medical Technology",
    description: "Devices, software, and platforms that measurably improve accuracy and reduce cost.",
    href: "/focus#medtech",
    image: "/focus-medtech.jpg",
  },
  {
    title: "Healthcare Real Estate",
    description: "Purpose-built clinical spaces and medical buildings.",
    href: "/focus#realestate",
    image: "/focus-realestate.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — split layout, photo on right with Ken Burns */}
      <section className="border-b border-black/[0.06]">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 px-6 py-16 lg:py-24 items-center">
          <div>
            <p
              className="text-sm font-medium tracking-[0.25em] uppercase"
              style={{ color: ACCENT }}
            >
              Heltco Ventures
            </p>
            <KineticHeading
              as="h1"
              className="mt-6 text-[clamp(2.5rem,5.5vw,5rem)] font-semibold tracking-[-0.03em] leading-[1.05]"
              stagger={70}
              duration={650}
            >
              {"Hands-on investors in "}
              <span style={{ color: ACCENT }}>health&nbsp;care.</span>
            </KineticHeading>
            <p className="mt-8 text-lg sm:text-xl text-black/65 max-w-xl leading-relaxed">
              A Canadian investment company partnering with the operators
              reshaping North American healthcare. Long-term capital, deep
              operational involvement.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/approach"
                className="inline-flex items-center rounded-full px-7 py-3.5 text-base font-medium text-white transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: ACCENT }}
              >
                Our approach
              </Link>
              <Link
                href="/focus"
                className="inline-flex items-center rounded-full px-7 py-3.5 text-base font-medium text-black/80 hover:text-black border border-black/15 hover:border-black/40 transition-all hover:-translate-y-0.5"
              >
                Where we invest →
              </Link>
            </div>
          </div>
          <div className="relative aspect-[5/6] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-black/[0.04]">
            <video
              src="/hero.mp4"
              poster="/hero.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-b border-black/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Reveal>
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs font-medium tracking-[0.18em] uppercase text-black/50">
                    {s.label}
                  </dt>
                  <dd className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Marquee ticker — focus keywords */}
      <Marquee items={tickerKeywords} />

      {/* Manifesto — black */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-44">
          <p
            className="text-sm font-medium tracking-[0.25em] uppercase"
            style={{ color: ACCENT }}
          >
            Our thesis
          </p>
          <KineticHeading
            as="p"
            className="mt-8 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.18] max-w-5xl"
            stagger={50}
            duration={700}
          >
            {"The next era of healthcare is built on "}
            <span style={{ color: ACCENT }}>technology</span>
            {" that increases accuracy and reduces cost — and on the operators who know the difference."}
          </KineticHeading>
        </div>
      </section>

      {/* Three pillars with cinematic hover */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-40">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-sm font-medium tracking-[0.25em] uppercase text-black/50">
                Focus
              </p>
              <KineticHeading
                as="h2"
                className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight max-w-2xl"
                stagger={80}
              >
                {"Three areas. One mission."}
              </KineticHeading>
            </div>
            <p className="text-lg text-black/65 max-w-md">
              We invest across the healthcare value chain — from care delivery
              to the technology and infrastructure that powers it.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delayMs={i * 80}>
              <Link
                href={p.href}
                className="group block h-full"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black/[0.04]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/85" />
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                    <h3 className="text-2xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/0 group-hover:text-white/80 transition-colors duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
                      Tap to explore →
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-black/70 leading-relaxed">
                  {p.description}
                </p>
                <p className="mt-4 text-sm font-medium text-black/60 group-hover:text-black transition-colors">
                  Learn more →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 text-center">
          <KineticHeading
            as="h2"
            className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight max-w-3xl mx-auto"
            stagger={70}
          >
            {"Building something we should "}
            <span style={{ color: ACCENT }}>know about?</span>
          </KineticHeading>
          <p className="mt-8 text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            We respond to every serious inquiry within two business days.
          </p>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full px-7 py-3.5 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: ACCENT }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
