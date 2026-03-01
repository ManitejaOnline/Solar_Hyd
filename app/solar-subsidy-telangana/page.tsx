export default function SubsidyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-slate-900">
          Solar Subsidy in Telangana — How Much You Can Save
        </h1>

        <p className="text-lg text-slate-700">
          Residential rooftop solar systems qualify for central government
          subsidy under the PM Surya Ghar scheme. This can significantly
          reduce upfront installation cost.
        </p>

        {/* SUBSIDY STRUCTURE */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">
            Subsidy Structure (Residential)
          </h2>

          <ul className="text-slate-700 space-y-1">
            <li>• Up to 3 kW: ~40% subsidy</li>
            <li>• 3–10 kW: ~20% subsidy on additional capacity</li>
            <li>• Only for grid-connected residential systems</li>
          </ul>

          <p className="text-sm text-slate-600">
            Final subsidy is released after installation inspection
            and DISCOM approval.
          </p>
        </div>

        {/* SAVINGS TABLE */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Estimated Subsidy & Final Cost
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">

              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 border">System Size</th>
                  <th className="p-3 border">Typical Cost</th>
                  <th className="p-3 border">Subsidy</th>
                  <th className="p-3 border">Final Cost</th>
                  <th className="p-3 border">Monthly Bill Offset</th>
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
            Subsidy benefits are capped after 3 kW capacity. Larger systems
            still reduce bills significantly but receive lower percentage support.
          </p>
        </div>

        {/* POLICY DISCLAIMER — TRUST BUILDER */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-slate-700">
          ⚠ Subsidy policies may change based on government updates.
          Approval depends on eligibility, roof conditions, and DISCOM rules.
        </div>

        {/* 🔥 PRIMARY CTA — CALCULATOR */}
        <div className="text-center pt-8 space-y-4">

          <p className="text-slate-700 font-medium">
            Want an exact subsidy and payback estimate for your home?
          </p>

          <a
            href="/solar-calculator"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 shadow"
          >
            Calculate Your Solar Savings
          </a>

          {/* Secondary CTA */}
          <a
            href="/#lead-form"
            className="block text-orange-600 font-semibold hover:underline"
          >
            Or get quotes from installers →
          </a>

        </div>

      </div>
    </div>
  );
}