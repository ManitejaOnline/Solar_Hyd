import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL, BUSINESS_WHATSAPP } from "../lib/seo";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Home Solar Installation in Hyderabad | Hyderabad Solar Quotes",
    template: "%s | Hyderabad Solar Quotes",
  },
  description:
    "Compare vetted home solar installers in Hyderabad and get a free solar quote tailored to your roof and electricity bill.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Home Solar Installation in Hyderabad",
    description: "Get quotes from trusted solar installers in Hyderabad.",
    url: SITE_URL,
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-slate-50 text-slate-900`}
      >
        {/* ================= HEADER ================= */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-slate-900">
                Solar<span className="text-blue-700">Quote</span>
              </span>
            </Link>

            {/* NAV */}
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">

              <Link href="/">Home</Link>

              <Link href="/solar-installation-hyderabad">
                Service Areas
              </Link>

              <Link href="/solar-cost-hyderabad">
                Cost
              </Link>

              <Link href="/solar-subsidy-telangana">
                Subsidy
              </Link>

              <Link href="/solar-calculator">Calculator</Link>

              {/* 🔥 NEW — INSTALLER LINK */}
              <Link
                href="/installer-partners"
                className="text-slate-700 hover:text-blue-700"
              >
                For Installers
              </Link>

              {/* CTA */}
              <a
                href="/#lead-form"
                className="rounded-full bg-orange-500 px-4 py-2 text-white font-semibold shadow hover:bg-orange-600"
              >
                Get Free Quote
              </a>

            </nav>
          </div>
        </header>

        {/* ================= MAIN ================= */}
        <main className="pb-16">{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-slate-200 bg-white py-12 text-sm text-slate-500">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">

            {/* BRAND */}
            <div className="space-y-3">
              <p className="font-semibold text-slate-900">
                Hyderabad Solar Quotes
              </p>
              <p>
                Independent platform connecting homeowners with vetted solar
                installers.
              </p>
              <p className="text-xs text-slate-500">
                Not affiliated with any government agency.
              </p>
            </div>

            {/* SERVICES */}
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Services</p>
              <div className="flex flex-col gap-1">
                <Link href="/solar-installation-hyderabad">
                  Installation
                </Link>
                <Link href="/solar-cost-hyderabad">
                  Cost Guide
                </Link>
                <Link href="/solar-subsidy-telangana">
                  Subsidy Info
                </Link>

                {/* 🔥 INSTALLERS LINK HERE TOO */}
                <Link href="/installer-partners">
                  For Installers
                </Link>
              </div>
            </div>

            {/* LEGAL */}
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Legal</p>
              <div className="flex flex-col gap-1">
                <Link href="/about">About</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/data-disclosure">Data Usage</Link>
                <Link href="/cookies">Cookie Policy</Link>
              </div>
            </div>

            {/* CONTACT + GOVT HELPLINE */}
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Contact</p>
              <p>WhatsApp: {BUSINESS_WHATSAPP}</p>
              <p>Hyderabad, Telangana</p>

              <div className="pt-3 mt-3 border-t border-slate-200">
                <p className="font-medium text-slate-900">
                  Govt Solar Helpline
                </p>
                <p>PM Surya Ghar Scheme: 15555</p>
                <p>MNRE Helpline: 1800-180-3333</p>
              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 pt-6 px-6 text-xs text-center">
            © {new Date().getFullYear()} Hyderabad Solar Quotes. All rights reserved.
          </div>
        </footer>

        {/* ================= FLOATING CONTACT BUTTONS ================= */}
        <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">

          {/* CALL */}
          <a
            href={`tel:${BUSINESS_WHATSAPP.replace("+", "")}`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800"
            aria-label="Call"
          >
            📞
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${BUSINESS_WHATSAPP.replace("+", "")}`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600"
            aria-label="WhatsApp"
          >
            💬
          </a>

        </div>

      </body>
    </html>
  );
}