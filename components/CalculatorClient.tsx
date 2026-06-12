'use client'

import { useState, useMemo } from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { calculatorConfig } from "@/lib/data";

type ProjectTypeCalc = "residential" | "commercial";
type PackageName = "Essential" | "Standard" | "Luxury";

const breakdownColors: Record<string, string> = {
  Design: "bg-gold",
  Civil: "bg-terra",
  Furniture: "bg-amber-600",
  Electrical: "bg-stone-500",
  Flooring: "bg-stone-400",
};

export default function CalculatorClient() {
  const [projectType, setProjectType] = useState<ProjectTypeCalc>("residential");
  const [subtype, setSubtype] = useState<string>(calculatorConfig.subtypes.residential[0]);
  const [area, setArea] = useState<number>(1500);
  const [selectedPackage, setSelectedPackage] = useState<PackageName>("Standard");
  const [estimateEmail, setEstimateEmail] = useState("");
  const [emailState, setEmailState] = useState<"idle" | "loading" | "success" | "error">("idle");

  // When project type changes, reset subtype
  const handleProjectTypeChange = (type: ProjectTypeCalc) => {
    setProjectType(type);
    setSubtype(calculatorConfig.subtypes[type][0]);
  };

  // Compute estimates
  const estimate = useMemo(() => {
    const pkg = calculatorConfig.packages[selectedPackage];
    const rates = pkg[projectType];
    const minTotal = rates.min * area;
    const maxTotal = rates.max * area;
    const midTotal = Math.round((minTotal + maxTotal) / 2);

    const breakdown = Object.entries(calculatorConfig.breakdown).map(([key, pct]) => ({
      label: key,
      percent: pct,
      minAmount: Math.round((minTotal * pct) / 100),
      maxAmount: Math.round((maxTotal * pct) / 100),
      midAmount: Math.round((midTotal * pct) / 100),
    }));

    return {
      minTotal,
      maxTotal,
      midTotal,
      breakdown,
      timeline: pkg.timeline,
      rateMin: rates.min,
      rateMax: rates.max,
    };
  }, [projectType, area, selectedPackage]);

  const handleSendEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!estimateEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(estimateEmail)) return;
    setEmailState("loading");
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: estimateEmail,
          projectType,
          subtype,
          area,
          packageName: selectedPackage,
          minTotal: estimate.minTotal,
          maxTotal: estimate.maxTotal,
          midTotal: estimate.midTotal,
          timeline: estimate.timeline,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setEmailState("success");
    } catch {
      setEmailState("error");
    }
  };

  const formatCurrency = (amount: number): string => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel text="Cost Calculator" />
          <h1 className="font-serif text-[clamp(2.5rem,5vw,6rem)] font-300 leading-[0.92] tracking-tight text-dark mt-6 mb-6 max-w-4xl">
            Estimate your{" "}
            <span className="italic font-600 text-gold">project cost.</span>
          </h1>
          <p className="font-sans text-lg text-stone-500 leading-relaxed max-w-2xl">
            Get an instant budget estimate based on your project type, area, and preferred package.
            All estimates are indicative—contact us for a precise quote after site survey.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <section className="pb-24 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* Left: Inputs (3 cols) */}
            <div className="lg:col-span-3 space-y-8">

              {/* Step 1: Project Type */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-full bg-gold text-dark flex items-center justify-center font-sans text-sm font-700 flex-shrink-0">
                    1
                  </div>
                  <h2 className="font-sans text-base font-600 text-dark">Project Type</h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {(["residential", "commercial"] as ProjectTypeCalc[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => handleProjectTypeChange(type)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                        projectType === type
                          ? "border-gold bg-gold/5"
                          : "border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        projectType === type ? "border-gold" : "border-stone-300"
                      }`}>
                        {projectType === type && (
                          <div className="w-2 h-2 rounded-full bg-gold" />
                        )}
                      </div>
                      <span className={`font-sans text-sm font-600 capitalize ${
                        projectType === type ? "text-dark" : "text-stone-500"
                      }`}>
                        {type}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Property Subtype */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-full bg-gold text-dark flex items-center justify-center font-sans text-sm font-700 flex-shrink-0">
                    2
                  </div>
                  <h2 className="font-sans text-base font-600 text-dark">Property Type</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {calculatorConfig.subtypes[projectType].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSubtype(type)}
                      className={`font-sans text-sm font-600 px-4 py-2.5 rounded-full border transition-all duration-300 ${
                        subtype === type
                          ? "bg-dark text-cream border-dark"
                          : "border-stone-200 text-stone-500 hover:border-dark hover:text-dark"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Area */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-full bg-gold text-dark flex items-center justify-center font-sans text-sm font-700 flex-shrink-0">
                    3
                  </div>
                  <h2 className="font-sans text-base font-600 text-dark">Project Area</h2>
                </div>
                <div className="flex items-end justify-between mb-6">
                  <p className="font-sans text-sm text-stone-400 ml-10">Drag to set area</p>
                  <div className="text-right">
                    <span className="font-serif text-4xl font-700 text-gold">{area.toLocaleString("en-IN")}</span>
                    <span className="font-sans text-sm text-stone-400 ml-1">sqft</span>
                  </div>
                </div>
                <div className="px-1">
                  <input
                    type="range"
                    min={300}
                    max={10000}
                    step={100}
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full"
                    aria-label="Project area in square feet"
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-sans text-xs text-stone-400">300 sqft</span>
                  <span className="font-sans text-xs text-stone-400">10,000 sqft</span>
                </div>

                {/* Quick Select */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[500, 1000, 1500, 2500, 4000, 6000].map((val) => (
                    <button
                      key={val}
                      onClick={() => setArea(val)}
                      className={`font-sans text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                        area === val
                          ? "bg-gold/10 border-gold text-gold"
                          : "border-stone-200 text-stone-400 hover:border-stone-400"
                      }`}
                    >
                      {val.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Package */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-full bg-gold text-dark flex items-center justify-center font-sans text-sm font-700 flex-shrink-0">
                    4
                  </div>
                  <h2 className="font-sans text-base font-600 text-dark">Design Package</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(["Essential", "Standard", "Luxury"] as PackageName[]).map((pkg) => {
                    const pkgData = calculatorConfig.packages[pkg];
                    const rates = pkgData[projectType];
                    return (
                      <button
                        key={pkg}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                          selectedPackage === pkg
                            ? "border-gold bg-gold/5"
                            : "border-stone-200 hover:border-stone-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-sans text-sm font-700 ${
                            selectedPackage === pkg ? "text-dark" : "text-stone-500"
                          }`}>
                            {pkg}
                          </span>
                          {pkg === "Standard" && (
                            <span className="font-sans text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className={`font-sans text-xs ${selectedPackage === pkg ? "text-gold" : "text-stone-400"}`}>
                          ₹{rates.min}–{rates.max}/sqft
                        </div>
                        <div className="font-sans text-xs text-stone-400 mt-1">
                          {pkgData.timeline}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Results (2 cols) */}
            <div className="lg:col-span-2 lg:sticky lg:top-28 space-y-6">

              {/* Total Estimate Card */}
              <div className="bg-dark rounded-2xl p-6 lg:p-8">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-sans text-xs text-stone-500 uppercase tracking-wider">Estimated Total</p>
                  <span className="font-sans text-xs bg-dark-700 text-stone-400 px-2 py-1 rounded-full">
                    {selectedPackage} Package
                  </span>
                </div>
                <div className="mb-1">
                  <span className="font-serif text-4xl lg:text-5xl font-700 text-gold">
                    {formatCurrency(estimate.midTotal)}
                  </span>
                </div>
                <p className="font-sans text-sm text-stone-500 mb-6">
                  Range: {formatCurrency(estimate.minTotal)} – {formatCurrency(estimate.maxTotal)}
                </p>

                <div className="space-y-1.5 mb-6">
                  <div className="flex justify-between font-sans text-xs text-stone-500">
                    <span>Rate</span>
                    <span>₹{estimate.rateMin}–{estimate.rateMax}/sqft</span>
                  </div>
                  <div className="flex justify-between font-sans text-xs text-stone-500">
                    <span>Area</span>
                    <span>{area.toLocaleString("en-IN")} sqft</span>
                  </div>
                  <div className="flex justify-between font-sans text-xs text-stone-500">
                    <span>Type</span>
                    <span className="capitalize">{projectType} · {subtype}</span>
                  </div>
                  <div className="flex justify-between font-sans text-xs text-stone-500">
                    <span>Timeline</span>
                    <span>{estimate.timeline}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-gold text-dark font-sans text-sm font-700 tracking-wide px-6 py-3.5 rounded-full hover:bg-gold/80 transition-all duration-300"
                >
                  Get Exact Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                {/* Email estimate */}
                <div className="border-t border-dark-700 pt-5 mt-1">
                  <p className="font-sans text-xs text-stone-500 mb-3">Or email this estimate to yourself:</p>
                  {emailState === "success" ? (
                    <div className="flex items-center gap-2 text-gold">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-sans text-sm">Estimate sent to your inbox!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSendEstimate} className="flex gap-2">
                      <input
                        type="email"
                        value={estimateEmail}
                        onChange={(e) => { setEstimateEmail(e.target.value); setEmailState("idle"); }}
                        placeholder="your@email.com"
                        required
                        disabled={emailState === "loading"}
                        className="flex-1 min-w-0 font-sans text-sm bg-dark-800 border border-dark-700 text-cream placeholder:text-stone-600 rounded-full px-3 py-2 focus:outline-none focus:border-gold transition-colors text-xs disabled:opacity-50"
                      />
                      <button
                        type="submit"
                        disabled={emailState === "loading"}
                        className="flex-shrink-0 border border-stone-700 text-stone-400 hover:border-gold hover:text-gold font-sans text-xs font-600 px-3 py-2 rounded-full transition-colors disabled:opacity-50 whitespace-nowrap"
                      >
                        {emailState === "loading" ? (
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                        ) : emailState === "error" ? "Retry" : "Send"}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Breakdown Card */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-8">
                <h3 className="font-sans text-sm font-600 text-dark mb-5">Cost Breakdown</h3>

                <div className="space-y-4">
                  {estimate.breakdown.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className={`w-2.5 h-2.5 rounded-full ${breakdownColors[item.label] || "bg-stone-400"}`} />
                          <span className="font-sans text-sm text-stone-600">{item.label}</span>
                          <span className="font-sans text-xs text-stone-400">({item.percent}%)</span>
                        </div>
                        <span className="font-sans text-sm font-600 text-dark">
                          {formatCurrency(item.midAmount)}
                        </span>
                      </div>
                      <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${breakdownColors[item.label] || "bg-stone-400"}`}
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200">
                  <p className="font-sans text-xs text-stone-400 leading-relaxed">
                    Breakdown based on typical project allocation. Actual distribution varies by project requirements and material selections.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-sans text-xs text-amber-700 leading-relaxed">
                    This is an indicative estimate. Final pricing is determined after a detailed site survey, material selection, and scope confirmation with our design team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
