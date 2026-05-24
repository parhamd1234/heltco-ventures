"use client";

import { useState } from "react";

const ACCENT = "#6D28D9";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Wire to Supabase / Resend later. For now, simulate.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-black/10 p-10 text-center">
        <p className="text-sm font-medium tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
          Received
        </p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight">Thanks for reaching out.</h3>
        <p className="mt-4 text-black/60 max-w-md mx-auto">
          We&apos;ll review your inquiry and respond within two business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm text-black/60 hover:text-black underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 max-w-2xl">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
      </div>
      <Field label="Email" name="email" type="email" required />
      <Field label="Subject" name="subject" />
      <div>
        <label className="block text-xs font-medium tracking-[0.15em] uppercase text-black/60 mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-base text-black placeholder:text-black/30 focus:outline-none focus:border-black/40 transition-colors"
          placeholder="Tell us about your company or inquiry."
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center rounded-full px-7 py-3 text-base font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ backgroundColor: ACCENT }}
        >
          {status === "submitting" ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-[0.15em] uppercase text-black/60 mb-2">
        {label}
        {required && <span className="text-black/30"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-base text-black placeholder:text-black/30 focus:outline-none focus:border-black/40 transition-colors"
      />
    </div>
  );
}
