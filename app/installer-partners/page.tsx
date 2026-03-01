"use client";

import { useState } from "react";

export default function InstallerPartnersPage() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      type: "partner",
      company: data.get("company"),
      contactPerson: data.get("contactPerson"),
      phone: data.get("phone"),
      areas: data.get("areas"),
    };

    await fetch(
      "https://script.google.com/macros/s/AKfycbySW8d4pZQkxSSsjSXA-06QMKwJ1fOgyrvjn45swd_hiw_10iB32azqmvj6Irzj1fM0Nw/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    setLoading(false);
    setSuccess(true);
    form.reset();
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — SALES COPY */}
          <div className="space-y-6">

            <h1 className="text-4xl font-bold text-slate-900">
              Get Qualified Solar Leads in Hyderabad
            </h1>

            <p className="text-lg text-slate-600">
              Connect with homeowners actively looking for rooftop solar installation.
              No cold calling. No marketing spend.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✔ Real homeowners with verified details</li>
              <li>✔ Electricity bill information included</li>
              <li>✔ Property type + installation timeline</li>
              <li>✔ Leads filtered by service area</li>
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Currently onboarding trusted installers across Hyderabad.
              </p>
            </div>

          </div>

          {/* RIGHT — FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Partner Registration
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="company"
                required
                placeholder="Company Name"
                className="w-full rounded border px-3 py-2 text-sm"
              />

              <input
                name="contactPerson"
                required
                placeholder="Contact Person"
                className="w-full rounded border px-3 py-2 text-sm"
              />

              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full rounded border px-3 py-2 text-sm"
              />

              <input
                name="areas"
                placeholder="Service Areas (e.g. Gachibowli, Kukatpally)"
                className="w-full rounded border px-3 py-2 text-sm"
              />

              <button
                disabled={loading}
                className="w-full bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800"
              >
                {loading ? "Submitting..." : "Apply as Partner"}
              </button>

              {success && (
                <p className="text-green-600 text-sm text-center">
                  ✅ Application received. We will contact you soon.
                </p>
              )}

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}