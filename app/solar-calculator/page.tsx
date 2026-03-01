"use client";

import { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SolarCalculatorPage() {

  // ---------- USER INPUTS ----------

  const [bill, setBill] = useState(5000);
  const [roof, setRoof] = useState(400); // sq ft
  const [battery, setBattery] = useState(false);
  const [subsidy, setSubsidy] = useState(true);

  // ---------- SYSTEM SIZE FROM ROOF ----------

  const systemKW = Math.round(roof / 100); // ~100 sq ft per kW

  // ---------- COST MODEL ----------

  const costPerKW = 65000;
  const batteryCost = battery ? 120000 : 0;

  const baseCost = systemKW * costPerKW + batteryCost;

  const subsidyAmount = subsidy
    ? Math.min(systemKW, 3) * 20000
    : 0;

  const finalCost = baseCost - subsidyAmount;

  // ---------- ENERGY PRODUCTION ----------

  const monthlyGeneration = systemKW * 120; // kWh/month in India

  const monthlyUsage = bill / 8; // assume ₹8/kWh

  const selfUse = Math.min(monthlyGeneration, monthlyUsage);

  const exportUnits = Math.max(0, monthlyGeneration - monthlyUsage);

  // ---------- NET METERING VALUE ----------

  const exportValue = exportUnits * 3; // export rate ~₹3/kWh
  const savingsFromUse = selfUse * 8;

  const totalMonthlySavings = savingsFromUse + exportValue;

  const yearlySavings = totalMonthlySavings * 12;
  const lifetimeSavings = yearlySavings * 25;

  const paybackYears = Math.round(finalCost / yearlySavings);

  const emi = Math.round(finalCost / 60);

  // ---------- POWER COVERAGE ----------

  const solarCoverage = Math.min(
    100,
    Math.round((monthlyGeneration / monthlyUsage) * 100)
  );

  const gridUsage = 100 - solarCoverage;

  const pieData = {
    labels: ["Solar Power", "Grid Power"],
    datasets: [
      {
        data: [solarCoverage, gridUsage],
        backgroundColor: ["#22c55e", "#e5e7eb"]
      }
    ]
  };

  // ---------- RECOMMENDATION ----------

  const recommendation =
    solarCoverage > 90
      ? "Your roof can almost eliminate your electricity bill."
      : solarCoverage > 60
      ? "Significant savings possible with this system."
      : "Consider larger system or battery for better coverage.";

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-center">
          Advanced Solar Savings Simulator
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ===== LEFT: INPUTS ===== */}

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">

            <h2 className="text-xl font-semibold">
              Home Details
            </h2>

            {/* BILL */}
            <InputSlider
              label="Monthly Electricity Bill"
              value={bill}
              setValue={setBill}
              min={1000}
              max={15000}
              step={500}
              unit="₹"
            />

            {/* ROOF */}
            <InputSlider
              label="Available Roof Area"
              value={roof}
              setValue={setRoof}
              min={100}
              max={1200}
              step={50}
              unit="sq ft"
            />

            {/* BATTERY */}
            <Toggle
              label="Include Battery Backup"
              value={battery}
              setValue={setBattery}
            />

            {/* SUBSIDY */}
            <Toggle
              label="Apply Govt Subsidy"
              value={subsidy}
              setValue={setSubsidy}
            />

          </div>

          {/* ===== RIGHT: RESULTS ===== */}

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">

            <h2 className="text-xl font-semibold">
              Estimated Outcome
            </h2>

            {/* BIG SAVINGS */}
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <p className="text-sm text-slate-600">
                Monthly Savings
              </p>
              <p className="text-4xl font-bold text-green-700">
                ₹{Math.round(totalMonthlySavings).toLocaleString("en-IN")}
              </p>
            </div>

            {/* METRICS GRID */}
            <div className="grid grid-cols-2 gap-4 text-sm">

              <Metric label="System Size" text={`${systemKW} kW`} />
              <Metric label="System Cost" value={baseCost} />
              <Metric label="Subsidy" value={subsidyAmount} />
              <Metric label="Final Cost" value={finalCost} />
              <Metric label="EMI (5 yrs)" value={emi} />
              <Metric label="Payback" text={`${paybackYears} yrs`} />
              <Metric label="Export Income" value={exportValue} />
              <Metric label="Lifetime Savings" value={lifetimeSavings} />

            </div>

            {/* PIE */}
            <div className="max-w-xs mx-auto">
              <Pie data={pieData} />
              <p className="text-xs text-center mt-2">
                Energy from solar vs grid
              </p>
            </div>

            {/* RECOMMENDATION */}
            <div className="bg-blue-50 p-4 rounded-lg text-sm">
              💡 {recommendation}
            </div>

          </div>
        </div>

        {/* ===== LEAD CAPTURE AFTER RESULTS ===== */}

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center space-y-4">

          <h2 className="text-2xl font-bold">
            Get Exact System Design & Installer Quotes
          </h2>

          <p className="text-slate-600">
            Receive detailed assessment based on your roof and location.
          </p>

          <a
            href="/#lead-form"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600"
          >
            Get Personalized Solar Plan
          </a>

        </div>

      </div>
    </div>
  );
}

// ===== COMPONENTS =====

function InputSlider({
  label,
  value,
  setValue,
  min,
  max,
  step,
  unit
}: any) {
  return (
    <div>
      <p className="font-medium mb-2">
        {label}: {value} {unit}
      </p>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

function Toggle({ label, value, setValue }: any) {
  return (
    <button
      onClick={() => setValue(!value)}
      className={`w-full px-4 py-3 rounded-lg border text-left ${
        value ? "bg-green-500 text-white" : "bg-white"
      }`}
    >
      {label}: {value ? "Yes" : "No"}
    </button>
  );
}

function Metric({
  label,
  value,
  text
}: {
  label: string;
  value?: number;
  text?: string;
}) {
  return (
    <div className="bg-slate-100 rounded-lg p-4">
      <p className="text-xs text-slate-600">{label}</p>
      <p className="font-bold text-slate-900">
        {text || `₹${value?.toLocaleString("en-IN")}`}
      </p>
    </div>
  );
}