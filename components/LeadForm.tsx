"use client";

import { useState } from "react";

export function LeadForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      area: data.get("area"),
      billRange: data.get("billRange"),
      propertyType: data.get("propertyType"),
      timeline: data.get("timeline"),
      notes: data.get("notes"),
    };

    // Send to Google Sheet
    await fetch(
      "https://script.google.com/macros/s/AKfycbySW8d4pZQkxSSsjSXA-06QMKwJ1fOgyrvjn45swd_hiw_10iB32azqmvj6Irzj1fM0Nw/exec",
      {
        method: "POST",
        mode: "no-cors", // required for Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    // Redirect to Thank You page
    window.location.href = "/thank-you";
  }

  return (
    <form
      id="lead-form"
      onSubmit={handleSubmit}
      className="rounded-xl bg-white p-6 shadow-md"
    >
      {/* Name + Phone */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
        <input
          name="name"
          placeholder="Full name"
          className="w-full rounded border px-3 py-2 text-sm"
        />

        <input
          name="phone"
          required
          placeholder="Phone"
          className="w-full rounded border px-3 py-2 text-sm"
        />
      </div>

      {/* Area */}
      <input
        name="area"
        placeholder="Area / PIN"
        className="w-full rounded border px-3 py-2 text-sm mb-4"
      />

      {/* Bill */}
      <select
        name="billRange"
        className="w-full rounded border px-3 py-2 text-sm mb-4"
      >
        <option value="">Monthly Bill</option>
        <option>Below ₹1,500</option>
        <option>₹1,500–₹2,500</option>
        <option>₹2,500–₹4,000</option>
        <option>₹4,000–₹6,000</option>
        <option>Above ₹6,000</option>
      </select>

      {/* Property */}
      <select
        name="propertyType"
        className="w-full rounded border px-3 py-2 text-sm mb-4"
      >
        <option value="">Property Type</option>
        <option>Independent</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Commercial</option>
      </select>

      {/* Timeline */}
      <select
        name="timeline"
        className="w-full rounded border px-3 py-2 text-sm mb-4"
      >
        <option value="">Timeline</option>
        <option>Immediately</option>
        <option>1–3 months</option>
        <option>3–6 months</option>
        <option>Researching</option>
      </select>

      {/* Notes */}
      <textarea
        name="notes"
        rows={2}
        placeholder="Additional details"
        className="w-full rounded border px-3 py-2 text-sm mb-4"
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 text-white py-3 rounded font-bold hover:bg-orange-600"
      >
        {loading ? "Submitting..." : "Get Free Quote"}
      </button>

      <p className="text-xs text-center mt-3 text-slate-600">
        Free. No spam. No obligation.
      </p>
    </form>
  );
}