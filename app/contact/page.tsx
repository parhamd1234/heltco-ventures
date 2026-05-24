import type { Metadata } from "next";
import ContactForm from "../_components/ContactForm";
import Reveal from "../_components/Reveal";

const ACCENT = "#6D28D9";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Heltco Ventures about partnership, acquisition, or investment opportunities in North American healthcare.",
  alternates: { canonical: "https://heltcoventures.com/contact" },
  openGraph: {
    title: "Contact — Heltco Ventures",
    description: "Get in touch about partnership or investment.",
    url: "https://heltcoventures.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-20">
        <Reveal>
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase"
            style={{ color: ACCENT }}
          >
            Contact
          </p>
          <h1 className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-[-0.03em] leading-[1.05] max-w-3xl">
            Let&apos;s <span style={{ color: ACCENT }}>talk.</span>
          </h1>
          <p className="mt-8 text-xl text-black/60 max-w-2xl leading-relaxed">
            Whether you&apos;re building, investing, or considering a partnership
            — we read everything that comes through this form and respond
            within two business days.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <Reveal>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
