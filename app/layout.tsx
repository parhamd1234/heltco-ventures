import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://heltcoventures.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Heltco Ventures — Hands-on Investors in Health Care",
    template: "%s — Heltco Ventures",
  },
  description:
    "Canadian investment company partnering with innovative healthcare companies across North America. Healthcare services, medical technology, and real estate.",
  keywords: [
    "healthcare investment",
    "medical technology investment",
    "private equity healthcare",
    "Canadian healthcare investors",
    "virtual care investment",
    "Toronto private equity",
  ],
  authors: [{ name: "Heltco Ventures" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Heltco Ventures",
    title: "Heltco Ventures — Hands-on Investors in Health Care",
    description:
      "Canadian investment company partnering with innovative healthcare companies across North America.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heltco Ventures — Hands-on Investors in Health Care",
    description:
      "Canadian investment company partnering with innovative healthcare companies across North America.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Heltco Ventures",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-transparent.jpg`,
  description:
    "Canadian investment company partnering with innovative healthcare companies across North America.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: ["CA", "US"],
  knowsAbout: [
    "Healthcare Services",
    "Medical Technology",
    "Healthcare Real Estate",
    "Virtual Care",
    "Multidisciplinary Medical Offices",
    "Research Facilities",
    "Health Food and Supplements",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black">
        <Nav />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
