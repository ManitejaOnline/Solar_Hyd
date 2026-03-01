import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Solar Subsidy Telangana 2026 — Full Guide (PM Surya Ghar Scheme)",
  description:
    "Complete guide to rooftop solar subsidy in Telangana. Eligibility, subsidy amount, application process and savings for Hyderabad homes.",
  openGraph: {
    type: "article",
    title: "Solar Subsidy Telangana — Full Guide",
    description:
      "Learn how much subsidy you can get and how to apply under the PM Surya Ghar scheme.",
    url: `${SITE_URL}/solar-subsidy-telangana-guide`,
    locale: "en_IN",
  },
};

export default function TelanganaSubsidyGuidePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-slate-900">
          Solar Subsidy in Telangana — Complete 2026 Guide
        </h1>

        <p className="text-lg text-slate-700">
          Residential rooftop solar systems in Telangana qualify for central
          government subsidy under the <strong>PM Surya Ghar: Muft Bijli Yojana</strong>.
          This can reduce your installation cost dramatically.
        </p>

        {/* WHO CAN APPLY */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">Who Is Eligible?</h2>

          <ul className="text-slate-700 space-y-2">
            <li>✔ Residential property owners</li>
            <li>✔ Grid-connected homes</li>
            <li>✔ Valid electricity connection in applicant’s name</li>
            <li>✔ Approved installer through national portal</li>
          </ul>

          <p className="text-sm text-slate-600">
            Apartments may qualify only if individual rooftop rights exist.
          </p>
        </div>

        {/* SUBSIDY STRUCTURE */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Subsidy Amount by System Size
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">

              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 border">System Size</th>
                  <th className="p-3 border">Typical Cost</th>
                  <th className="p-3 border">Subsidy</th>
                  <th className="p-3 border">Final Cost</th>
                  <th className="p-3 border">Monthly Savings</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr>
                  <td className="p-3 border font-medium">1 kW</td>
                  <td className="p-3 border">₹70k – ₹90k</td>
                  <td className="p-3 border">₹25k – ₹35k</td>
                  <td className="p-3 border">₹45k – ₹60k</td>
                  <td className="p-3 border">₹800 – ₹1,200</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">2 kW</td>
                  <td className="p-3 border">₹1.2L – ₹1.6L</td>
                  <td className="p-3 border">₹45k – ₹60k</td>
                  <td className="p-3 border">₹70k – ₹1L</td>
                  <td className="p-3 border">₹1,500 – ₹2,200</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">3 kW</td>
                  <td className="p-3 border">₹1.6L – ₹2.2L</td>
                  <td className="p-3 border">₹65k – ₹78k</td>
                  <td className="p-3 border">₹1L – ₹1.4L</td>
                  <td className="p-3 border">₹2,500 – ₹3,500</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">5 kW</td>
                  <td className="p-3 border">₹2.5L – ₹3.2L</td>
                  <td className="p-3 border">₹78k – ₹1L</td>
                  <td className="p-3 border">₹1.7L – ₹2.3L</td>
                  <td className="p-3 border">₹4,000 – ₹6,000</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">8–10 kW</td>
                  <td className="p-3 border">₹3.5L – ₹5L+</td>
                  <td className="p-3 border">₹1L – ₹1.2L</td>
                  <td className="p-3 border">₹2.5L – ₹3.8L</td>
                  <td className="p-3 border">₹7,000 – ₹12,000</td>
                </tr>

              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-600 mt-4">
            Subsidy is capped after 3 kW for most residential installations.
          </p>
        </div>

        {/* APPLICATION PROCESS */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">
            How to Apply for Solar Subsidy
          </h2>

          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Register on the national solar portal</li>
            <li>Select a registered installer</li>
            <li>System installation and inspection</li>
            <li>DISCOM approval and net-metering</li>
            <li>Subsidy credited to bank account</li>
          </ol>

          <p className="text-sm text-slate-600">
            The process typically takes 1–3 months after installation.
          </p>
        </div>

        {/* WHY INSTALL NOW */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Why Many Hyderabad Homes Are Installing Now
          </h2>

          <p className="text-slate-700">
            Electricity tariffs are rising while subsidy programs may change
            over time. Early adopters lock in long-term savings for 20–25 years.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-6">

          <h2 className="text-2xl font-bold text-slate-900">
            Check Your Exact Subsidy & Savings
          </h2>

          <p className="text-slate-600">
            Installers will estimate subsidy based on your roof and electricity bill.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/#lead-form"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600"
            >
              Get Free Quote
            </a>

            <Link
              href="/solar-calculator"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800"
            >
              Estimate Savings
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}