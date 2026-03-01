import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Solar for Apartments in Hyderabad — Is It Possible?",
  description:
    "Learn how apartment residents in Hyderabad can install solar panels, reduce electricity bills, and use shared rooftop systems.",
  openGraph: {
    type: "article",
    title: "Solar for Apartments Hyderabad",
    description:
      "Options for apartment solar including common systems and individual solutions.",
    url: `${SITE_URL}/solar-for-apartments-hyderabad`,
    locale: "en_IN",
  },
};

export default function ApartmentSolarPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-slate-900">
          Solar Panels for Apartments in Hyderabad — What You Can Actually Do
        </h1>

        <p className="text-lg text-slate-700">
          Living in an apartment doesn’t automatically disqualify you from
          using solar. However, solutions differ from independent houses.
          Most systems are installed at the building level rather than
          individual flats.
        </p>

        {/* WHY DIFFICULT */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">
            Why Solar Is Harder for Apartments
          </h2>

          <ul className="text-slate-700 space-y-2">
            <li>✔ Limited rooftop space shared by many residents</li>
            <li>✔ Ownership and society approval required</li>
            <li>✔ Net metering usually applies to common meter</li>
            <li>✔ Individual flat installations are rarely feasible</li>
          </ul>
        </div>

        {/* OPTIONS */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Realistic Solar Options for Apartments
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">

              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 border">Option</th>
                  <th className="p-3 border">How It Works</th>
                  <th className="p-3 border">Best For</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr>
                  <td className="p-3 border font-medium">
                    Common Area Solar
                  </td>
                  <td className="p-3 border">
                    Powers lifts, lighting, pumps
                  </td>
                  <td className="p-3 border">
                    Reducing maintenance charges
                  </td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">
                    Society-Level System
                  </td>
                  <td className="p-3 border">
                    Shared installation for entire building
                  </td>
                  <td className="p-3 border">
                    Large apartments with association approval
                  </td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">
                    Individual Connection (Rare)
                  </td>
                  <td className="p-3 border">
                    Dedicated rooftop allocation
                  </td>
                  <td className="p-3 border">
                    Top-floor owners or small buildings
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* COST SAVINGS */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            How Apartments Typically Save Money
          </h2>

          <p className="text-slate-700 mb-4">
            Most apartment solar systems reduce common electricity expenses,
            which lowers monthly maintenance fees for residents.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">

              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 border">System Size</th>
                  <th className="p-3 border">Typical Use</th>
                  <th className="p-3 border">Savings</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr>
                  <td className="p-3 border font-medium">10–20 kW</td>
                  <td className="p-3 border">Small apartment block</td>
                  <td className="p-3 border">20–40% common bill reduction</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">20–50 kW</td>
                  <td className="p-3 border">Medium society</td>
                  <td className="p-3 border">30–60% reduction</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">50+ kW</td>
                  <td className="p-3 border">Large gated community</td>
                  <td className="p-3 border">Up to 70% reduction</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* APPROVAL PROCESS */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">
            What You Need to Get Started
          </h2>

          <ul className="text-slate-700 space-y-2">
            <li>✔ Approval from apartment association</li>
            <li>✔ Rooftop structural assessment</li>
            <li>✔ DISCOM permissions</li>
            <li>✔ Professional installation vendor</li>
          </ul>
        </div>

        {/* MYTH BUSTER */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Myth: Apartments Cannot Use Solar
          </h2>

          <p className="text-slate-700">
            Apartments absolutely can use solar — but the system usually benefits
            the entire building rather than individual flats.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-6">

          <h2 className="text-2xl font-bold text-slate-900">
            Want to Explore Solar for Your Apartment?
          </h2>

          <p className="text-slate-600">
            Installers can evaluate your building’s rooftop and estimate savings.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/#lead-form"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600"
            >
              Request Apartment Solar Assessment
            </a>

            <Link
              href="/solar-calculator"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800"
            >
              Estimate Potential Savings
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}