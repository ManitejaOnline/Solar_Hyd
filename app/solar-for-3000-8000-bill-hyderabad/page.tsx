import { LeadForm } from "../../components/LeadForm";

export default function SolarBillRangePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">

      <div className="max-w-5xl mx-auto space-y-10">

        {/* HERO */}
        <h1 className="text-4xl font-bold text-slate-900">
          Solar for ₹3,000–₹8,000 Electricity Bill in Hyderabad
        </h1>

        <p className="text-lg text-slate-700">
          If your monthly electricity bill falls between ₹3k and ₹8k,
          rooftop solar can eliminate most of it and pay for itself in a few years.
        </p>

        {/* SYSTEM SIZE GUIDE */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">

          <h2 className="text-2xl font-semibold mb-4">
            Recommended Solar System Size
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">

              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 border">Monthly Bill</th>
                  <th className="p-3 border">Suggested System</th>
                  <th className="p-3 border">Roof Space Needed</th>
                  <th className="p-3 border">Estimated Savings</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr>
                  <td className="p-3 border font-medium">₹3k–₹4k</td>
                  <td className="p-3 border">2 kW</td>
                  <td className="p-3 border">150–200 sq ft</td>
                  <td className="p-3 border">₹2k–₹3k/month</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">₹4k–₹6k</td>
                  <td className="p-3 border">3 kW</td>
                  <td className="p-3 border">250–300 sq ft</td>
                  <td className="p-3 border">₹3k–₹5k/month</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">₹6k–₹8k</td>
                  <td className="p-3 border">5 kW</td>
                  <td className="p-3 border">400–500 sq ft</td>
                  <td className="p-3 border">₹5k–₹7k/month</td>
                </tr>

              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-600 mt-4">
            Actual savings depend on usage pattern, roof direction, and DISCOM policies.
          </p>

        </div>

        {/* COST ESTIMATE */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-3">

          <h2 className="text-2xl font-semibold">
            Typical Installation Cost
          </h2>

          <ul className="text-slate-700 space-y-1">
            <li>• 2 kW system: ₹1.2L – ₹1.6L</li>
            <li>• 3 kW system: ₹1.6L – ₹2.2L</li>
            <li>• 5 kW system: ₹2.5L – ₹3.2L</li>
          </ul>

          <p className="text-sm text-slate-600">
            Government subsidies can reduce final cost significantly.
          </p>

        </div>

        {/* PAYBACK */}
        <div className="bg-white rounded-xl p-6 border shadow-sm space-y-3">

          <h2 className="text-2xl font-semibold">
            Payback Period
          </h2>

          <p className="text-slate-700">
            Most Hyderabad homes recover the installation cost within
            <strong> 3–5 years</strong>, while panels last 25+ years.
          </p>

        </div>

        {/* TRUST BOX */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-slate-800 space-y-2">

          <p className="font-semibold">
            Why homeowners use solar quote platforms:
          </p>

          <ul className="text-sm space-y-1">
            <li>✔ Compare multiple installers</li>
            <li>✔ Free consultation</li>
            <li>✔ No obligation</li>
            <li>✔ Local Hyderabad experts</li>
          </ul>

        </div>

        {/* LEAD FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Check Exact Savings for Your Home
          </h2>

          <p className="text-sm text-slate-600 mb-6">
            Takes less than a minute.
          </p>

          <LeadForm />

        </div>

      </div>
    </div>
  );
}