import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../_components/Reveal";

const ACCENT = "#6D28D9";

export const metadata: Metadata = {
  title: "Investment Focus",
  description:
    "Healthcare Services, Medical Technology, and Healthcare Real Estate. Plus special interests in virtual care, multidisciplinary offices, CROs, and health supplements.",
  alternates: { canonical: "https://heltcoventures.com/focus" },
  openGraph: {
    title: "Investment Focus — Heltco Ventures",
    description: "Healthcare services, medical technology, real estate.",
    url: "https://heltcoventures.com/focus",
  },
};

const areas = [
  {
    id: "services",
    eyebrow: "Healthcare Services",
    title: "Care delivery, built to scale.",
    body: "Clinical practices, multidisciplinary care models, and patient-facing services where operational rigor unlocks outcomes and growth.",
    items: ["Multidisciplinary medical offices", "Specialty practice groups", "Care navigation and coordination"],
  },
  {
    id: "medtech",
    eyebrow: "Medical Technology",
    title: "Software, devices, platforms.",
    body: "Technology that measurably improves clinical accuracy or reduces the cost of delivering care.",
    items: ["Clinical decision support", "Diagnostic devices", "Practice management platforms"],
  },
  {
    id: "realestate",
    eyebrow: "Healthcare Real Estate",
    title: "Purpose-built clinical space.",
    body: "Medical buildings and clinical real estate designed around the way modern care actually gets delivered.",
    items: ["Medical office buildings", "Diagnostic and imaging facilities", "Multidisciplinary care centres"],
  },
];

const specialInterests = [
  "Virtual Care",
  "Multidisciplinary Medical Offices",
  "Research Facilities / CROs",
  "Health Food & Supplements",
];

export default function Focus() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-20">
        <Reveal>
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase"
            style={{ color: ACCENT }}
          >
            Investment focus
          </p>
          <h1 className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-[-0.03em] leading-[1.05] max-w-4xl">
            Three areas.
            <br />
            One <span style={{ color: ACCENT }}>mission.</span>
          </h1>
          <p className="mt-10 text-xl text-black/60 max-w-2xl leading-relaxed">
            We invest across the healthcare value chain — from the people
            delivering care to the technology and physical spaces that make
            modern care possible.
          </p>
        </Reveal>
      </section>

      {areas.map((area, i) => (
        <section
          key={area.id}
          id={area.id}
          className={i % 2 === 0 ? "bg-black text-white" : "bg-white text-black"}
        >
          <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
            <Reveal>
              <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] items-start">
                <div>
                  <p
                    className="text-sm font-medium tracking-[0.2em] uppercase"
                    style={{ color: ACCENT }}
                  >
                    {area.eyebrow}
                  </p>
                  <h2
                    className={`mt-6 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-md`}
                  >
                    {area.title}
                  </h2>
                </div>
                <div>
                  <p
                    className={`text-lg leading-relaxed ${
                      i % 2 === 0 ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    {area.body}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-3 text-base ${
                          i % 2 === 0 ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        <span
                          className="mt-2 inline-block w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: ACCENT }}
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <Reveal>
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase text-black/50"
          >
            Special interests
          </p>
          <h2 className="mt-6 text-3xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Where the field is moving.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {specialInterests.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-5 py-2 text-base text-black bg-black/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 pb-32">
          <div className="rounded-3xl bg-black text-white p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Aligned with where we&apos;re going?
            </h2>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              We&apos;d like to hear from you.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full px-6 py-3 text-base font-medium text-white"
                style={{ backgroundColor: ACCENT }}
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
