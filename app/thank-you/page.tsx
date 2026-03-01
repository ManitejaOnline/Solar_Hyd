"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {

  // 🔥 GA4 Lead Conversion Event
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-10 text-center space-y-7">

        {/* SUCCESS ICON */}
        <div className="text-6xl">✅</div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-slate-900">
          Request Received Successfully
        </h1>

        {/* PRIMARY MESSAGE */}
        <p className="text-slate-600">
          Your details have been shared with verified solar installers in Hyderabad.
          They will review your requirements and contact you shortly.
        </p>

        {/* EXPECTATION BOX */}
        <div className="bg-slate-100 rounded-lg p-5 text-sm text-slate-700 space-y-2">

          <p className="font-semibold text-slate-900">
            What happens next?
          </p>

          <p>📞 Expect a call within <strong>30 minutes to 24 hours</strong></p>
          <p>📱 Keep your phone reachable</p>
          <p>⚠️ Calls may come from unknown numbers</p>
          <p>🏠 You may be offered a free site survey</p>

        </div>

        {/* TRUST / CONTROL MESSAGE */}
        <p className="text-sm text-slate-500">
          No obligation. You are free to compare quotes or decline offers.
        </p>

        {/* OPTIONAL ACTION — BACK HOME */}
        <Link
          href="/"
          className="inline-block rounded-lg bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition-colors"
        >
          Back to Home
        </Link>

        {/* OPTIONAL SECONDARY INFO */}
        <p className="text-xs text-slate-400">
          If you entered incorrect details, simply submit the form again.
        </p>

      </div>

    </div>
  );
}