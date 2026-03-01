import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Net Metering in Telangana — Complete Guide for Home Solar",
  description:
    "Learn how net metering works in Telangana, how much money you can save, and how excess solar power is credited to your electricity bill.",
  openGraph: {
    type: "article",
    title: "Net Metering Telangana — How It Works",
    description:
      "Understand export credits, savings and rules for rooftop solar in Telangana.",
    url: `${SITE_URL}/net-metering-telangana`,
    locale: "en_IN",
  },
};

export default function NetMeteringPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-slate-900">
          Net Metering in Telangana — How Solar Saves You Money
        </h1>

        <p className="text-lg text-slate-700">
          Net metering allows your solar system to export excess electricity
          to the grid. The energy you send is credited against the energy
          you consume — reducing your electricity bill dramatically.
        </p>

        {/* HOW IT WORKS */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">How Net Metering Works</h2>

          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Solar panels generate electricity during the day</li>
            <li>Your home uses solar power first</li>
            <li>Extra power flows to the grid</li>
            <li>You receive credits on your electricity bill</li>
            <li>At night, you draw power using those credits</li>
          </ol>

          <p className="text-sm text-slate-600">
            Think of the grid as a giant battery — but without buying batteries.
          </p>
        </div>

        {/* DAY VS NIGHT */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Day vs Night Energy Flow
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">

              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 border">Time</th>
                  <th className="p-3 border">What Happens</th>
                  <th className="p-3 border">Bill Impact</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr>
                  <td className="p-3 border font-medium">Morning</td>
                  <td className="p-3 border">
                    Solar powers home appliances
                  </td>
                  <td className="p-3 border">Lower grid usage</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">Afternoon</td>
                  <td className="p-3 border">
                    Excess electricity exported
                  </td>
                  <td className="p-3 border">Credits earned</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">Evening/Night</td>
                  <td className="p-3 border">
                    Grid power used
                  </td>
                  <td className="p-3 border">Credits applied</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* SAVINGS ESTIMATE */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Typical Savings with Net Metering
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">

              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 border">System Size</th>
                  <th className="p-3 border">Monthly Bill Before</th>
                  <th className="p-3 border">After Solar</th>
                  <th className="p-3 border">Savings</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr>
                  <td className="p-3 border font-medium">2 kW</td>
                  <td className="p-3 border">₹2,000 – ₹3,000</td>
                  <td className="p-3 border">₹300 – ₹800</td>
                  <td className="p-3 border">70–85%</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">3 kW</td>
                  <td className="p-3 border">₹3,000 – ₹5,000</td>
                  <td className="p-3 border">₹200 – ₹700</td>
                  <td className="p-3 border">80–90%</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">5 kW</td>
                  <td className="p-3 border">₹5,000 – ₹8,000</td>
                  <td className="p-3 border">₹0 – ₹500</td>
                  <td className="p-3 border">Up to 95%</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* REQUIREMENTS */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">
            Requirements in Telangana
          </h2>

          <ul className="text-slate-700 space-y-2">
            <li>✔ Grid-connected solar system</li>
            <li>✔ Bi-directional meter installed by DISCOM</li>
            <li>✔ Approved system capacity</li>
            <li>✔ Installation by registered vendor</li>
          </ul>

          <p className="text-sm text-slate-600">
            Net metering policies can change, so installers handle approvals.
          </p>
        </div>

        {/* BATTERY VS NET METERING */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Net Metering vs Battery Storage
          </h2>

          <p className="text-slate-700">
            Most homes choose net metering instead of batteries because
            batteries are expensive. The grid effectively acts as free storage
            for daytime solar energy.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-6">

          <h2 className="text-2xl font-bold text-slate-900">
            See How Much You Can Save
          </h2>

          <p className="text-slate-600">
            Installers can estimate savings based on your bill and roof size.
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
              Use Savings Calculator
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}