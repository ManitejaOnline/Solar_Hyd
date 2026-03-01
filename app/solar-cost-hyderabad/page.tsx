export default function SolarCostPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-slate-900">
          Solar Panel Cost & Home Appliance Coverage
        </h1>

        <p className="text-lg text-slate-700">
          A properly sized rooftop solar system can power most household
          appliances — including refrigerators, ACs, TVs, lighting, and more.
        </p>

        {/* COST SECTION */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">Estimated System Costs</h2>

          <ul className="text-slate-700 space-y-1">
            <li>• 1–3 kW system: ₹70,000 – ₹1.5 lakh</li>
            <li>• 3–5 kW system: ₹1.5 – ₹2.5 lakh</li>
            <li>• 5–10 kW system: ₹2.5 – ₹4+ lakh</li>
          </ul>

          <p className="text-sm text-slate-600">
            Government subsidies can significantly reduce the upfront investment.
          </p>
        </div>

        {/* APPLIANCE TABLE */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            What Appliances Can Solar Run?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">

              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 border">Appliance</th>
                  <th className="p-3 border">Typical Power</th>
                  <th className="p-3 border">Daily Usage</th>
                  <th className="p-3 border">Solar Suitability</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr>
                  <td className="p-3 border font-medium">Refrigerator</td>
                  <td className="p-3 border">150–300 W</td>
                  <td className="p-3 border">24 hours</td>
                  <td className="p-3 border">✔ Easily powered</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">LED TV</td>
                  <td className="p-3 border">80–150 W</td>
                  <td className="p-3 border">4–6 hrs</td>
                  <td className="p-3 border">✔ Easily powered</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">Ceiling Fan</td>
                  <td className="p-3 border">60–80 W</td>
                  <td className="p-3 border">8–12 hrs</td>
                  <td className="p-3 border">✔ Easily powered</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">LED Lights</td>
                  <td className="p-3 border">8–15 W each</td>
                  <td className="p-3 border">5–8 hrs</td>
                  <td className="p-3 border">✔ Easily powered</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">Washing Machine</td>
                  <td className="p-3 border">400–700 W</td>
                  <td className="p-3 border">1–2 hrs</td>
                  <td className="p-3 border">✔ Daytime use recommended</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">1.5 Ton AC</td>
                  <td className="p-3 border">1500–2000 W</td>
                  <td className="p-3 border">6–10 hrs</td>
                  <td className="p-3 border">✔ Needs 3–5 kW system</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">Water Heater</td>
                  <td className="p-3 border">2000–3000 W</td>
                  <td className="p-3 border">Short bursts</td>
                  <td className="p-3 border">⚠ High load</td>
                </tr>

              </tbody>

            </table>
          </div>

          <p className="text-sm text-slate-600 mt-4">
            Most Hyderabad homes with a 3–5 kW system can run essential appliances
            comfortably and reduce electricity bills by up to 70–90%.
          </p>
        </div>

        {/* 🔥 CALCULATOR CTA */}
        <div className="text-center pt-8 space-y-4">

          <p className="text-slate-700 font-medium">
            Want an exact estimate for your home?
          </p>

          <a
            href="/solar-calculator"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 shadow"
          >
            Calculate Solar Cost & EMI
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