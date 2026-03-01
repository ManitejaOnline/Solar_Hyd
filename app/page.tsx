import type { Metadata } from "next";
import { LeadForm } from "../components/LeadForm";
import { SITE_URL } from "../lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cut Electricity Bills by 80% | Solar Quotes Hyderabad",
  description:
    "Compare verified solar installer quotes in Hyderabad. Free consultation. No obligation.",
  openGraph: {
    type: "website",
    title: "Cut Your Electricity Bill by Up to 80%",
    description: "Compare quotes from verified Hyderabad installers.",
    url: SITE_URL,
    locale: "en_IN",
  },
};

export default function HomePage() {
  return (
    <div className="bg-slate-50">

      {/* HERO */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
              Cut Your Electricity Bill by Up to 80%
            </h1>

            <p className="text-xl text-slate-700 max-w-xl">
              Compare quotes from verified Hyderabad installers.
              Free consultation. No obligation.
            </p>

            <ul className="space-y-3 pt-4 text-slate-700">
              <li>✓ Compare multiple installers</li>
              <li>✓ Government subsidy guidance</li>
              <li>✓ Local Hyderabad experts</li>
              <li>✓ No spam or sales pressure</li>
            </ul>

            {/* SOCIAL PROOF */}
            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-slate-200">
              <div>
                <p className="text-3xl font-bold text-blue-700">1000+</p>
                <p className="text-sm text-slate-600">Homes Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">25 Yrs</p>
                <p className="text-sm text-slate-600">Panel Life</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">4.8★</p>
                <p className="text-sm text-slate-600">Installer Ratings</p>
              </div>
            </div>

            <Link
              href="/solar-calculator"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800"
            >
              Estimate Savings with Calculator
            </Link>

          </div>

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Get Your Free Solar Quotes
            </h2>

            <p className="text-sm text-slate-600 mb-4">
              Takes less than a minute.
              Installers may contact you within 24 hours.
            </p>

            <LeadForm />

            <p className="text-xs text-center text-slate-500 mt-4">
              🔒 Your details are secure • No obligation • Free service
            </p>

          </div>

        </div>
      </section>


      {/* QUICK NAV */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          <h2 className="text-3xl font-bold text-slate-900">
            Explore Solar Options
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">

            <Link href="/solar-installation-hyderabad"
              className="bg-slate-100 p-5 rounded-lg hover:bg-slate-200 font-medium">
              Service Areas
            </Link>

            <Link href="/solar-cost-hyderabad"
              className="bg-slate-100 p-5 rounded-lg hover:bg-slate-200 font-medium">
              Cost Guide
            </Link>

            <Link href="/solar-subsidy-telangana"
              className="bg-slate-100 p-5 rounded-lg hover:bg-slate-200 font-medium">
              Subsidy Info
            </Link>

            <Link href="/solar-calculator"
              className="bg-slate-100 p-5 rounded-lg hover:bg-slate-200 font-medium">
              Savings Calculator
            </Link>

          </div>

        </div>
      </section>


      {/* 🔥 TOPICS SCROLL — HIGH INTENT SEO */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">

          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold text-slate-900">
              Solar Guides for Hyderabad Homes
            </h2>
            <span className="text-sm text-slate-500">Scroll →</span>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">

            {[
              {
                title: "Solar for ₹3k–₹8k Electricity Bill",
                desc: "Ideal system size and savings estimates",
                link: "/solar-for-3000-8000-bill-hyderabad"
              },
              {
                title: "3kW / 5kW / 10kW Cost Guide",
                desc: "Compare system sizes and pricing",
                link: "/solar-system-size-cost-hyderabad"
              },
              {
                title: "Telangana Subsidy Guide",
                desc: "How much subsidy you can get",
                link: "/solar-subsidy-telangana-guide"
              },
              {
                title: "Net Metering Explained",
                desc: "How export credits reduce bills",
                link: "/net-metering-telangana"
              },
              {
                title: "Solar for Apartments",
                desc: "Options for flat owners",
                link: "/solar-for-apartments-hyderabad"
              }
            ].map((t) => (
              <Link
                key={t.title}
                href={t.link}
                className="min-w-[280px] max-w-[280px] bg-slate-50 rounded-xl border p-5 shadow-sm hover:shadow-lg transition snap-start flex-shrink-0"
              >
                <h3 className="font-bold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{t.desc}</p>
                <span className="text-blue-700 font-semibold text-sm">
                  Read Guide →
                </span>
              </Link>
            ))}

          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center space-y-16">

          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 mt-2">
              Simple process to get the right solar installer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">1</div>
              <h3 className="font-bold text-slate-900">Share Details</h3>
              <p className="text-slate-600">Tell us about your home and usage</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">2</div>
              <h3 className="font-bold text-slate-900">Get Matched</h3>
              <p className="text-slate-600">We connect you with installers</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">3</div>
              <h3 className="font-bold text-slate-900">Compare & Save</h3>
              <p className="text-slate-600">Choose the best quote</p>
            </div>

          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">

          <h2 className="text-4xl font-bold">
            Ready to Explore Solar for Your Home?
          </h2>

          <p className="text-lg text-blue-100">
            Get free quotes instantly from verified installers.
          </p>

          <a
            href="/#lead-form"
            className="inline-block bg-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-orange-600"
          >
            Get Your Free Quote
          </a>

        </div>
      </section>

    </div>
  );
}