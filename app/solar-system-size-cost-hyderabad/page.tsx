import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../../lib/seo";

export const metadata: Metadata = {
  title: "3kW, 5kW, 10kW Solar Cost in Hyderabad (2026 Guide)",
  description:
    "Compare 3kW, 5kW and 10kW solar system prices in Hyderabad. See savings, subsidy, roof space and appliance coverage.",
  openGraph: {
    type: "article",
    title: "3kW, 5kW, 10kW Solar Cost in Hyderabad",
    description: "Detailed pricing and savings comparison for rooftop solar systems.",
    url: `${SITE_URL}/solar-system-size-cost-hyderabad`,
    locale: "en_IN",
  },
};

export default function SolarSystemCostPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-slate-900">
          3kW vs 5kW vs 10kW Solar System Cost in Hyderabad
        </h1>

        <p className="text-lg text-slate-700">
          Choosing the right system size depends on your electricity bill,
          roof space, and future usage. Below is a realistic comparison
          for Hyderabad homes.
        </p>

        {/* COMPARISON TABLE */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">

          <h2 className="text-2xl font-semibold mb-4">
            System Size Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">

              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 border">System Size</th>
                  <th className="p-3 border">Typical Cost</th>
                  <th className="p-3 border">After Subsidy</th>
                  <th className="p-3 border">Monthly Bill Offset</th>
                  <th className="p-3 border">Roof Area Needed</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr>
                  <td className="p-3 border font-medium">3 kW</td>
                  <td className="p-3 border">₹1.6L – ₹2.2L</td>
                  <td className="p-3 border">₹1L – ₹1.4L</td>
                  <td className="p-3 border">₹2,500 – ₹3,500</td>
                  <td className="p-3 border">250–300 sq.ft.</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">5 kW</td>
                  <td className="p-3 border">₹2.5L – ₹3.2L</td>
                  <td className="p-3 border">₹1.7L – ₹2.3L</td>
                  <td className="p-3 border">₹4,000 – ₹6,000</td>
                  <td className="p-3 border">400–500 sq.ft.</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">10 kW</td>
                  <td className="p-3 border">₹4.5L – ₹6L+</td>
                  <td className="p-3 border">₹3.5L – ₹5L</td>
                  <td className="p-3 border">₹8,000 – ₹14,000</td>
                  <td className="p-3 border">800–1000 sq.ft.</td>
                </tr>

              </tbody>

            </table>
          </div>
        </div>


        {/* WHAT EACH SIZE CAN RUN */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-4">

          <h2 className="text-2xl font-semibold">
            What Each System Size Can Power
          </h2>

          <ul className="space-y-3 text-slate-700">

            <li>
              <strong>3 kW:</strong> Ideal for small homes. Runs lights, fans,
              refrigerator, TV, and light appliances.
            </li>

            <li>
              <strong>5 kW:</strong> Most common choice for Hyderabad.
              Can handle AC usage plus full household load.
            </li>

            <li>
              <strong>10 kW:</strong> Suitable for large villas,
              heavy AC usage, EV charging, or commercial loads.
            </li>

          </ul>
        </div>


        {/* RECOMMENDATION */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">

          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Which Size Is Best for Most Homes?
          </h2>

          <p className="text-slate-700">
            For typical Hyderabad households with ₹3,000–₹8,000 monthly bills,
            a <strong>5 kW system</strong> provides the best balance of cost,
            savings, and future-proofing.
          </p>

        </div>


        {/* CTA SECTION */}
        <div className="text-center space-y-4 pt-6">

          <h2 className="text-2xl font-bold text-slate-900">
            Get Exact System Recommendation for Your Home
          </h2>

          <p className="text-slate-600">
            Installers will suggest optimal size based on roof layout and usage.
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