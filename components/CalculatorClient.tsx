'use client'

import { useState, useMemo } from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

// ─── Types ────────────────────────────────────────────────────────────────────

type BHKType = "1 BHK" | "2 BHK" | "3 BHK" | "4 BHK";
type KitchenShape = "L-Shape" | "U-Shape" | "Straight" | "Parallel";

const BHK_BEDROOMS: Record<BHKType, number> = {
  "1 BHK": 1, "2 BHK": 2, "3 BHK": 3, "4 BHK": 4,
};

interface BedroomConfig {
  wardrobe: boolean;
  doors: number;
  bed: boolean;
  study: boolean;
  dresser: boolean;
}

const defaultBedroom = (): BedroomConfig => ({ wardrobe: true, doors: 2, bed: true, study: false, dresser: false });

interface LineItem {
  particulars: string;
  detail: string;
  qty: string;
  unitCost: number;
  amount: number;
}

interface Section {
  title: string;
  items: LineItem[];
  total: number;
}

// ─── Rates ────────────────────────────────────────────────────────────────────

const R = {
  tvUnit:          { label: "TV Unit",                     detail: "18mm Century Ply · Laminate Finish · LED Strip Lighting",      cost: 32000 },
  pujaUnit:        { label: "Puja Unit",                   detail: "18mm Ply · Decorative Laminate · Backlit Niches",              cost: 18000 },
  crockeryUnit:    { label: "Crockery / Bar Unit",         detail: "18mm Ply · Glass Shutters · Internal LED Lighting",           cost: 40000 },
  commonWashbasin: { label: "Common Washbasin Vanity",     detail: "WPC Board · Counter Basin · Chrome Fittings",                 cost: 10000 },
  washbasinMirror: { label: "Washbasin Backlit Mirror",    detail: "LED Backlit Designer Mirror · 24\"×36\"",                    cost:  6500 },
  kitchenLower:    { label: "Kitchen Lower Cabinets",      detail: "BWP 710 Grade Ply · Laminate · Hettich Soft-close Hinges",   cost:  2200 },
  kitchenUpper:    { label: "Kitchen Upper Cabinets",      detail: "BWP 710 Grade Ply · Laminate · Hettich Soft-close Hinges",   cost:  1700 },
  kitchenHardware: { label: "Kitchen Hardware Package",    detail: "Hettich Innotech Tandem Boxes · Pull-outs · Corner Unit",    cost: 12000 },
  wardrobe:        { label: "Wardrobe (Sliding)",          detail: "18mm BWP Ply · Mirror / Laminate Shutter · Hettich Channels",cost:  9000 },
  bed:             { label: "Bed with Hydraulic Storage",  detail: "Queen Size · 18mm Ply · Upholstered Headboard",              cost: 42000 },
  study:           { label: "Study / Work Unit",           detail: "4 ft Wide · 18mm Ply · Laminate · Overhead Cabinet",         cost: 16000 },
  dresser:         { label: "Dresser with Mirror",         detail: "18mm Ply · Laminate · Soft-close Drawers · Framed Mirror",   cost: 14000 },
  shoeCabinet:     { label: "Shoe Cabinet",                detail: "18mm Ply · Laminate · Adjustable Shelves",                   cost: 12000 },
  bathroomVanity:  { label: "Bathroom & Washbasin Vanity", detail: "WPC Board · Counter Basin · Backlit Mirror",                 cost: 18000 },
  falseCeiling:    { label: "False Ceiling",               detail: "Gypsum Board · Grid System · POP Edges · LED Cove Slots",    cost:    85 },
  electrical:      { label: "Electrical & Lighting",       detail: "Concealed Wiring · MCB Panel · Switches · LED Fixtures",     cost:    60 },
  painting:        { label: "Putty & Paint Work",          detail: "Putty · Primer · 2 Coats Asian Royale Emulsion",            cost:    25 },
} as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmtRs = (n: number) => `₹${n.toLocaleString("en-IN")}`;
const fmtBig = (n: number) => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000)   return `₹${(n / 100000).toFixed(2)} L`;
  return fmtRs(n);
};
const toFt = (ft: string, ins: string) => (parseFloat(ft) || 0) + (parseFloat(ins) || 0) / 12;

// ─── Sub-components ───────────────────────────────────────────────────────────

function CheckCard({ checked, onChange, label, sub }: {
  checked: boolean; onChange: (v: boolean) => void; label: string; sub?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-3 w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
        checked ? "border-gold bg-gold/5" : "border-stone-200 hover:border-stone-300"
      }`}
    >
      <div className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-colors ${
        checked ? "bg-gold border-gold" : "border-stone-300"
      }`}>
        {checked && (
          <svg className="w-3 h-3 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div>
        <span className={`font-sans text-sm font-600 block ${checked ? "text-dark" : "text-stone-500"}`}>{label}</span>
        {sub && <span className="font-sans text-xs text-stone-400">{sub}</span>}
      </div>
    </button>
  );
}

function DimInput({ label, value, onChange }: {
  label: string;
  value: { ft: string; in: string };
  onChange: (v: { ft: string; in: string }) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-sans text-sm font-700 text-dark w-5 flex-shrink-0">{label}</span>
      <div className="flex gap-2 flex-1">
        <div className="relative flex-1">
          <input
            type="number" min="0" placeholder="0" value={value.ft}
            onChange={e => onChange({ ...value, ft: e.target.value })}
            className="w-full font-sans text-sm bg-cream border border-stone-200 rounded-lg px-3 py-2.5 pr-9 text-dark focus:outline-none focus:border-gold transition-colors"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 font-sans text-xs text-stone-400">ft</span>
        </div>
        <div className="relative flex-1">
          <input
            type="number" min="0" max="11" placeholder="0" value={value.in}
            onChange={e => onChange({ ...value, in: e.target.value })}
            className="w-full font-sans text-sm bg-cream border border-stone-200 rounded-lg px-3 py-2.5 pr-9 text-dark focus:outline-none focus:border-gold transition-colors"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 font-sans text-xs text-stone-400">in</span>
        </div>
      </div>
    </div>
  );
}

function StepProgress({ current }: { current: number }) {
  const steps = ["Home Type", "Furniture", "Services", "Details"];
  return (
    <div className="flex items-start mb-12">
      {steps.map((label, i) => {
        const n = i + 1;
        const done = current > n;
        const active = current === n;
        return (
          <div key={n} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-sans text-sm font-700 transition-all duration-300 ${
                done ? "bg-gold text-dark" : active ? "bg-dark text-gold ring-2 ring-gold ring-offset-2" : "bg-stone-100 text-stone-400"
              }`}>
                {done ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : n}
              </div>
              <span className={`font-sans text-xs whitespace-nowrap ${active ? "text-dark font-600" : done ? "text-gold" : "text-stone-400"}`}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-px mx-2 mb-5 transition-colors duration-300 ${done ? "bg-gold" : "bg-stone-200"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function NavButtons({ onBack, onNext, nextLabel = "Next", nextDisabled = false, loading = false }: {
  onBack?: () => void; onNext: () => void; nextLabel?: string; nextDisabled?: boolean; loading?: boolean;
}) {
  return (
    <div className="flex items-center justify-between pt-6 border-t border-stone-200 mt-8">
      {onBack ? (
        <button onClick={onBack} className="font-sans text-sm font-600 text-stone-500 hover:text-dark transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      ) : <div />}
      <button
        onClick={onNext}
        disabled={nextDisabled || loading}
        className="inline-flex items-center gap-2 bg-dark text-cream font-sans text-sm font-700 px-8 py-3.5 rounded-full hover:bg-gold hover:text-dark transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : null}
        {nextLabel}
        {!loading && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </button>
    </div>
  );
}

// ─── Results Table ────────────────────────────────────────────────────────────

function ResultsView({ sections, grandTotal, bhkType, area }: {
  sections: Section[]; grandTotal: number; bhkType: BHKType; area: number;
}) {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-dark rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-sans text-xs text-stone-500 uppercase tracking-wider mb-1">Your Interior Budget Estimate</p>
          <div className="font-serif text-4xl lg:text-5xl font-700 text-gold">{fmtBig(grandTotal)}</div>
          <p className="font-sans text-xs text-stone-500 mt-2">{bhkType} · {area > 0 ? `${area} sqft carpet area` : ""} · Excl. GST &amp; Labour</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+919429223647"
            className="inline-flex items-center gap-2 bg-gold text-dark font-sans text-sm font-700 px-5 py-3 rounded-full hover:bg-gold/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Now
          </a>
          <a
            href="https://wa.me/919429223647"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-sans text-sm font-700 px-5 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.099.548 4.07 1.504 5.786L.057 23.986l6.305-1.434A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.845 0-3.575-.491-5.065-1.348l-.363-.213-3.741.851.868-3.651-.237-.377A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-stone-600 text-stone-300 font-sans text-sm font-600 px-5 py-3 rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>

      {/* Section tables */}
      {sections.map((section, si) => (
        <div key={si} className="bg-cream border border-stone-200 rounded-2xl overflow-hidden">
          <div className="bg-dark px-6 py-3.5 flex items-center justify-between">
            <h3 className="font-sans text-sm font-700 text-gold uppercase tracking-wider">{section.title}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50">
                  <th className="font-sans text-xs font-700 text-stone-500 uppercase tracking-wider text-left px-5 py-3 w-[30%]">Particulars</th>
                  <th className="font-sans text-xs font-700 text-stone-500 uppercase tracking-wider text-left px-4 py-3">Detail / Specification</th>
                  <th className="font-sans text-xs font-700 text-stone-500 uppercase tracking-wider text-center px-4 py-3 w-24">Qty</th>
                  <th className="font-sans text-xs font-700 text-stone-500 uppercase tracking-wider text-right px-4 py-3 w-28">Unit Cost</th>
                  <th className="font-sans text-xs font-700 text-stone-500 uppercase tracking-wider text-right px-5 py-3 w-28">Amount</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item, ii) => (
                  <tr key={ii} className={`border-b border-stone-100 ${ii % 2 === 1 ? "bg-stone-50/60" : ""}`}>
                    <td className="font-sans text-sm font-500 text-dark px-5 py-3.5">{item.particulars}</td>
                    <td className="font-sans text-xs text-stone-400 px-4 py-3.5 leading-relaxed">{item.detail}</td>
                    <td className="font-sans text-sm text-stone-500 px-4 py-3.5 text-center">{item.qty}</td>
                    <td className="font-sans text-sm text-stone-500 px-4 py-3.5 text-right">{fmtRs(item.unitCost)}</td>
                    <td className="font-sans text-sm font-600 text-dark px-5 py-3.5 text-right">{fmtRs(item.amount)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-dark/5 border-t-2 border-stone-200">
                  <td colSpan={3} className="font-sans text-sm font-700 text-dark px-5 py-3 uppercase tracking-wide">
                    Grand Total — {section.title}
                  </td>
                  <td className="px-4 py-3" />
                  <td className="font-sans text-base font-700 text-gold px-5 py-3 text-right">{fmtRs(section.total)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      ))}

      {/* Overall total */}
      <div className="bg-dark rounded-2xl p-6 flex items-center justify-between">
        <span className="font-sans text-sm font-700 text-stone-400 uppercase tracking-widest">Overall Grand Total</span>
        <span className="font-serif text-3xl font-700 text-gold">{fmtBig(grandTotal)}</span>
      </div>

      {/* Disclaimer */}
      <div className="bg-gold/5 border border-gold/20 rounded-xl p-5">
        <p className="font-sans text-xs text-stone-500 leading-relaxed">
          <span className="font-700 text-dark">Note: </span>
          This is an indicative estimate based on standard market rates for Ahmedabad. Final pricing is confirmed after a detailed site survey and material finalization. Labour charges, transportation, and GST (18%) are not included above. Contact us for a precise quote.
        </p>
      </div>

      <div className="text-center pt-2">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-sans text-sm text-stone-400 hover:text-gold transition-colors underline underline-offset-4"
        >
          Recalculate with different selections
        </button>
      </div>
    </div>
  );
}

// ─── Main Calculator ──────────────────────────────────────────────────────────

export default function CalculatorClient() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Step 1
  const [bhkType, setBhkType] = useState<BHKType>("2 BHK");
  const [carpetArea, setCarpetArea] = useState("");

  // Step 2 — Living & Dining
  const [tvUnit, setTvUnit] = useState(false);
  const [pujaUnit, setPujaUnit] = useState(false);
  const [crockeryUnit, setCrockeryUnit] = useState(false);
  const [commonWashbasin, setCommonWashbasin] = useState(false);
  const [washbasinMirror, setWashbasinMirror] = useState(false);

  // Step 2 — Kitchen
  const [kitchenShape, setKitchenShape] = useState<KitchenShape>("L-Shape");
  const [dimA, setDimA] = useState({ ft: "", in: "" });
  const [dimB, setDimB] = useState({ ft: "", in: "" });
  const [dimC, setDimC] = useState({ ft: "", in: "" });

  // Step 2 — Bedrooms
  const [bedrooms, setBedrooms] = useState<BedroomConfig[]>([defaultBedroom(), defaultBedroom()]);

  // Step 2 — Others
  const [shoeCabinet, setShoeCabinet] = useState(false);
  const [bathroomVanity, setBathroomVanity] = useState(false);

  // Step 3
  const [falseCeiling, setFalseCeiling] = useState(false);
  const [electrical, setElectrical] = useState(false);
  const [painting, setPainting] = useState(false);

  // Step 4
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "error">("idle");

  const handleBHKChange = (bhk: BHKType) => {
    setBhkType(bhk);
    const count = BHK_BEDROOMS[bhk];
    setBedrooms(prev => {
      if (count > prev.length) return [...prev, ...Array.from({ length: count - prev.length }, defaultBedroom)];
      return prev.slice(0, count);
    });
  };

  const updateBedroom = (i: number, key: keyof BedroomConfig, val: boolean | number) => {
    setBedrooms(prev => prev.map((b, idx) => idx === i ? { ...b, [key]: val } : b));
  };

  const kitchenRft = useMemo(() => {
    const a = toFt(dimA.ft, dimA.in);
    const b = toFt(dimB.ft, dimB.in);
    const c = toFt(dimC.ft, dimC.in);
    if (kitchenShape === "Straight") return a;
    if (kitchenShape === "L-Shape") return a + b;
    return a + b + c;
  }, [kitchenShape, dimA, dimB, dimC]);

  const area = parseFloat(carpetArea) || 0;

  const results: Section[] = useMemo(() => {
    const sections: Section[] = [];

    // Living & Dining
    const ld: LineItem[] = [];
    if (tvUnit)          ld.push({ particulars: R.tvUnit.label,          detail: R.tvUnit.detail,          qty: "1 No.", unitCost: R.tvUnit.cost,          amount: R.tvUnit.cost });
    if (pujaUnit)        ld.push({ particulars: R.pujaUnit.label,        detail: R.pujaUnit.detail,        qty: "1 No.", unitCost: R.pujaUnit.cost,        amount: R.pujaUnit.cost });
    if (crockeryUnit)    ld.push({ particulars: R.crockeryUnit.label,    detail: R.crockeryUnit.detail,    qty: "1 No.", unitCost: R.crockeryUnit.cost,    amount: R.crockeryUnit.cost });
    if (commonWashbasin) ld.push({ particulars: R.commonWashbasin.label, detail: R.commonWashbasin.detail, qty: "1 No.", unitCost: R.commonWashbasin.cost, amount: R.commonWashbasin.cost });
    if (washbasinMirror) ld.push({ particulars: R.washbasinMirror.label, detail: R.washbasinMirror.detail, qty: "1 No.", unitCost: R.washbasinMirror.cost, amount: R.washbasinMirror.cost });
    if (ld.length) sections.push({ title: "Living & Dining Room", items: ld, total: ld.reduce((s, i) => s + i.amount, 0) });

    // Kitchen
    if (kitchenRft > 0) {
      const lAmt = Math.round(kitchenRft * R.kitchenLower.cost);
      const uAmt = Math.round(kitchenRft * R.kitchenUpper.cost);
      const kItems: LineItem[] = [
        { particulars: R.kitchenLower.label,    detail: `${kitchenShape} · ${kitchenRft.toFixed(1)} rft · ${R.kitchenLower.detail}`,  qty: `${kitchenRft.toFixed(1)} Rft`, unitCost: R.kitchenLower.cost,    amount: lAmt },
        { particulars: R.kitchenUpper.label,    detail: `${kitchenShape} · ${kitchenRft.toFixed(1)} rft · ${R.kitchenUpper.detail}`,  qty: `${kitchenRft.toFixed(1)} Rft`, unitCost: R.kitchenUpper.cost,    amount: uAmt },
        { particulars: R.kitchenHardware.label, detail: R.kitchenHardware.detail, qty: "1 Lot", unitCost: R.kitchenHardware.cost, amount: R.kitchenHardware.cost },
      ];
      sections.push({ title: "Kitchen", items: kItems, total: kItems.reduce((s, i) => s + i.amount, 0) });
    }

    // Bedrooms
    bedrooms.forEach((br, idx) => {
      const items: LineItem[] = [];
      if (br.wardrobe) {
        const amt = br.doors * R.wardrobe.cost;
        items.push({ particulars: R.wardrobe.label, detail: `${br.doors}-Door · ${R.wardrobe.detail}`, qty: `${br.doors} Doors`, unitCost: R.wardrobe.cost, amount: amt });
      }
      if (br.bed)     items.push({ particulars: R.bed.label,    detail: R.bed.detail,    qty: "1 No.", unitCost: R.bed.cost,    amount: R.bed.cost });
      if (br.study)   items.push({ particulars: R.study.label,  detail: R.study.detail,  qty: "1 No.", unitCost: R.study.cost,  amount: R.study.cost });
      if (br.dresser) items.push({ particulars: R.dresser.label,detail: R.dresser.detail,qty: "1 No.", unitCost: R.dresser.cost,amount: R.dresser.cost });
      if (items.length) sections.push({ title: `Bedroom ${String(idx + 1).padStart(2, "0")}`, items, total: items.reduce((s, i) => s + i.amount, 0) });
    });

    // Others
    const others: LineItem[] = [];
    if (shoeCabinet)   others.push({ particulars: R.shoeCabinet.label, detail: R.shoeCabinet.detail, qty: "1 No.", unitCost: R.shoeCabinet.cost, amount: R.shoeCabinet.cost });
    if (bathroomVanity) {
      const cnt = BHK_BEDROOMS[bhkType];
      others.push({ particulars: R.bathroomVanity.label, detail: R.bathroomVanity.detail, qty: `${cnt} Nos.`, unitCost: R.bathroomVanity.cost, amount: cnt * R.bathroomVanity.cost });
    }
    if (others.length) sections.push({ title: "Others", items: others, total: others.reduce((s, i) => s + i.amount, 0) });

    // Miscellaneous
    const misc: LineItem[] = [];
    if (falseCeiling && area > 0) {
      const amt = Math.round(area * R.falseCeiling.cost);
      misc.push({ particulars: R.falseCeiling.label, detail: R.falseCeiling.detail, qty: `${area} Sqft`, unitCost: R.falseCeiling.cost, amount: amt });
    }
    if (electrical && area > 0) {
      const amt = Math.round(area * R.electrical.cost);
      misc.push({ particulars: R.electrical.label, detail: R.electrical.detail, qty: `${area} Sqft`, unitCost: R.electrical.cost, amount: amt });
    }
    if (painting && area > 0) {
      const amt = Math.round(area * R.painting.cost);
      misc.push({ particulars: R.painting.label, detail: R.painting.detail, qty: `${area} Sqft`, unitCost: R.painting.cost, amount: amt });
    }
    if (misc.length) sections.push({ title: "Miscellaneous", items: misc, total: misc.reduce((s, i) => s + i.amount, 0) });

    return sections;
  }, [tvUnit, pujaUnit, crockeryUnit, commonWashbasin, washbasinMirror, kitchenRft, kitchenShape, bedrooms, shoeCabinet, bathroomVanity, bhkType, falseCeiling, electrical, painting, area]);

  const grandTotal = results.reduce((s, r) => s + r.total, 0);

  const canGoStep2 = !!bhkType && area > 0;
  const canSubmit = name.trim().length > 0 && /^[6-9]\d{9}$/.test(phone) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setSubmitState("loading");
    try {
      await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, name, phone,
          projectType: "residential",
          subtype: bhkType,
          area,
          packageName: "Custom Selection",
          minTotal: grandTotal,
          maxTotal: grandTotal,
          midTotal: grandTotal,
          timeline: "45–75 Working Days",
        }),
      });
      setStep(5);
    } catch {
      setSubmitState("error");
    }
  };

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-12 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel text="Budget Calculator" />
          <h1 className="font-serif text-[clamp(2rem,5vw,6rem)] font-300 leading-[0.92] tracking-tight text-dark mt-6 mb-6 max-w-4xl">
            Plan your interior{" "}
            <span className="italic font-600 text-gold">budget.</span>
          </h1>
          <p className="font-sans text-lg text-stone-500 leading-relaxed max-w-2xl">
            Select your furniture items and get an itemised estimate — the same way you'd discuss it with our design team.
          </p>
        </div>
      </div>

      {/* Calculator body */}
      <section className="pb-24 bg-cream">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">

          {step < 5 && <StepProgress current={step} />}

          {/* ── Step 1: Home Type ── */}
          {step === 1 && (
            <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-10">
              <h2 className="font-serif text-2xl font-600 text-dark mb-8">Select your home type &amp; area</h2>

              {/* BHK Selection */}
              <div className="mb-8">
                <p className="font-sans text-sm font-600 text-stone-500 uppercase tracking-wider mb-4">Home Type</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {(["1 BHK", "2 BHK", "3 BHK", "4 BHK"] as BHKType[]).map(bhk => (
                    <button
                      key={bhk}
                      onClick={() => handleBHKChange(bhk)}
                      className={`py-5 rounded-xl border-2 font-sans text-base font-700 transition-all duration-200 ${
                        bhkType === bhk
                          ? "border-gold bg-gold/5 text-dark"
                          : "border-stone-200 text-stone-400 hover:border-stone-300 hover:text-stone-600"
                      }`}
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              </div>

              {/* Carpet Area */}
              <div>
                <p className="font-sans text-sm font-600 text-stone-500 uppercase tracking-wider mb-4">Carpet Area (sq. ft.)</p>
                <div className="relative max-w-xs">
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 850"
                    value={carpetArea}
                    onChange={e => setCarpetArea(e.target.value)}
                    className="w-full font-sans text-xl font-600 bg-cream border-2 border-stone-200 rounded-xl px-5 py-4 pr-16 text-dark focus:outline-none focus:border-gold transition-colors"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 font-sans text-sm text-stone-400">sqft</span>
                </div>
                <p className="font-sans text-xs text-stone-400 mt-2">Enter the carpet area (not super built-up area)</p>
              </div>

              <NavButtons onNext={() => setStep(2)} nextDisabled={!canGoStep2} />
            </div>
          )}

          {/* ── Step 2: Furniture ── */}
          {step === 2 && (
            <div className="space-y-6">

              {/* Living & Dining */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-8">
                <h2 className="font-sans text-base font-700 text-dark mb-1">Living &amp; Dining Room</h2>
                <p className="font-sans text-xs text-stone-400 mb-6">Select the furniture items you need</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CheckCard checked={tvUnit}          onChange={setTvUnit}          label="TV Unit"                        sub="Laminate finish with LED strip" />
                  <CheckCard checked={pujaUnit}        onChange={setPujaUnit}        label="Puja Unit"                      sub="With backlit niches" />
                  <CheckCard checked={crockeryUnit}    onChange={setCrockeryUnit}    label="Crockery / Bar Unit"            sub="Glass shutters with LED" />
                  <CheckCard checked={commonWashbasin} onChange={setCommonWashbasin} label="Common Washbasin Vanity"        sub="Counter basin with vanity" />
                  <CheckCard checked={washbasinMirror} onChange={setWashbasinMirror} label="Washbasin Backlit Mirror"       sub='LED designer mirror 24"×36"' />
                </div>
              </div>

              {/* Kitchen */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-8">
                <h2 className="font-sans text-base font-700 text-dark mb-1">Kitchen</h2>
                <p className="font-sans text-xs text-stone-400 mb-6">Select shape and enter slab measurements</p>

                <div className="mb-6">
                  <p className="font-sans text-xs font-600 text-stone-500 uppercase tracking-wider mb-3">Kitchen Shape</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {(["L-Shape", "U-Shape", "Straight", "Parallel"] as KitchenShape[]).map(shape => (
                      <button
                        key={shape}
                        onClick={() => setKitchenShape(shape)}
                        className={`py-3 px-4 rounded-xl border-2 font-sans text-sm font-600 transition-all duration-200 ${
                          kitchenShape === shape
                            ? "border-gold bg-gold/5 text-dark"
                            : "border-stone-200 text-stone-400 hover:border-stone-300"
                        }`}
                      >
                        {shape}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="font-sans text-xs font-600 text-stone-500 uppercase tracking-wider mb-3">Slab Dimensions</p>
                  <DimInput label="A" value={dimA} onChange={setDimA} />
                  {(kitchenShape === "L-Shape" || kitchenShape === "U-Shape" || kitchenShape === "Parallel") && (
                    <DimInput label="B" value={dimB} onChange={setDimB} />
                  )}
                  {(kitchenShape === "U-Shape") && (
                    <DimInput label="C" value={dimC} onChange={setDimC} />
                  )}
                  {kitchenRft > 0 && (
                    <p className="font-sans text-xs text-gold font-600 mt-2">
                      Total running feet: {kitchenRft.toFixed(1)} rft
                    </p>
                  )}
                  <p className="font-sans text-xs text-stone-400">
                    {kitchenShape === "L-Shape"  && "A = horizontal slab length · B = side wall length"}
                    {kitchenShape === "U-Shape"  && "A = main wall · B = side wall 1 · C = side wall 2"}
                    {kitchenShape === "Straight" && "A = full slab length"}
                    {kitchenShape === "Parallel" && "A = one wall length · B = opposite wall length"}
                  </p>
                </div>
              </div>

              {/* Bedrooms */}
              {bedrooms.map((br, i) => (
                <div key={i} className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-8">
                  <h2 className="font-sans text-base font-700 text-dark mb-1">Bedroom {String(i + 1).padStart(2, "0")}</h2>
                  <p className="font-sans text-xs text-stone-400 mb-6">Select furniture for this bedroom</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <CheckCard checked={br.wardrobe} onChange={v => updateBedroom(i, "wardrobe", v)} label="Wardrobe (Sliding)" sub="Mirror / Laminate shutters" />
                    <CheckCard checked={br.bed}      onChange={v => updateBedroom(i, "bed", v)}      label="Bed with Hydraulic Storage" sub="Queen size with upholstered headboard" />
                    <CheckCard checked={br.study}    onChange={v => updateBedroom(i, "study", v)}    label="Study / Work Unit"  sub="4 ft wide with overhead cabinet" />
                    <CheckCard checked={br.dresser}  onChange={v => updateBedroom(i, "dresser", v)}  label="Dresser with Mirror" sub="Soft-close drawers" />
                  </div>
                  {br.wardrobe && (
                    <div className="mt-5 pt-5 border-t border-stone-200">
                      <p className="font-sans text-xs font-600 text-stone-500 uppercase tracking-wider mb-3">Number of Wardrobe Doors</p>
                      <div className="flex gap-2">
                        {[2, 3, 4, 5, 6].map(d => (
                          <button
                            key={d}
                            onClick={() => updateBedroom(i, "doors", d)}
                            className={`w-11 h-11 rounded-lg border-2 font-sans text-sm font-700 transition-all duration-200 ${
                              br.doors === d ? "border-gold bg-gold/5 text-dark" : "border-stone-200 text-stone-400 hover:border-stone-300"
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Others */}
              <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-8">
                <h2 className="font-sans text-base font-700 text-dark mb-1">Others</h2>
                <p className="font-sans text-xs text-stone-400 mb-6">Additional items for your home</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CheckCard checked={shoeCabinet}   onChange={setShoeCabinet}   label="Shoe Cabinet"               sub="Adjustable shelves with laminate" />
                  <CheckCard checked={bathroomVanity} onChange={setBathroomVanity} label="Bathroom &amp; Washbasin Vanity" sub={`${BHK_BEDROOMS[bhkType]} bathroom(s) included`} />
                </div>
              </div>

              <NavButtons onBack={() => setStep(1)} onNext={() => setStep(3)} />
            </div>
          )}

          {/* ── Step 3: Optional Services ── */}
          {step === 3 && (
            <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-10">
              <h2 className="font-serif text-2xl font-600 text-dark mb-2">Optional Services</h2>
              <p className="font-sans text-sm text-stone-400 mb-8">
                Add civil / finishing work to your estimate. Rates are per sqft of carpet area ({area > 0 ? `${area} sqft` : "enter area in step 1"}).
              </p>

              <div className="space-y-3">
                <CheckCard
                  checked={falseCeiling}
                  onChange={setFalseCeiling}
                  label="False Ceiling"
                  sub={`Gypsum board + LED cove · ₹85/sqft${area > 0 ? ` · Est. ${fmtRs(Math.round(area * 85))}` : ""}`}
                />
                <CheckCard
                  checked={electrical}
                  onChange={setElectrical}
                  label="Electrical &amp; Lighting"
                  sub={`Concealed wiring + fixtures · ₹60/sqft${area > 0 ? ` · Est. ${fmtRs(Math.round(area * 60))}` : ""}`}
                />
                <CheckCard
                  checked={painting}
                  onChange={setPainting}
                  label="Putty &amp; Paint Work"
                  sub={`Putty + primer + 2 coats emulsion · ₹25/sqft${area > 0 ? ` · Est. ${fmtRs(Math.round(area * 25))}` : ""}`}
                />
              </div>

              <NavButtons onBack={() => setStep(2)} onNext={() => setStep(4)} nextLabel="Continue" />
            </div>
          )}

          {/* ── Step 4: Contact Details ── */}
          {step === 4 && (
            <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-10">
              <h2 className="font-serif text-2xl font-600 text-dark mb-2">Your details</h2>
              <p className="font-sans text-sm text-stone-400 mb-8">
                Enter your contact details to view the full itemised estimate. We&apos;ll also send a copy to your email.
              </p>

              <div className="space-y-5 max-w-md">
                <div>
                  <label className="font-sans text-xs font-700 text-stone-500 uppercase tracking-wider block mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full font-sans text-base bg-cream border-2 border-stone-200 rounded-xl px-5 py-3.5 text-dark focus:outline-none focus:border-gold transition-colors placeholder:text-stone-300"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs font-700 text-stone-500 uppercase tracking-wider block mb-2">Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 font-sans text-sm text-stone-400">+91</span>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={phone}
                      onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      className="w-full font-sans text-base bg-cream border-2 border-stone-200 rounded-xl pl-14 pr-5 py-3.5 text-dark focus:outline-none focus:border-gold transition-colors placeholder:text-stone-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-xs font-700 text-stone-500 uppercase tracking-wider block mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full font-sans text-base bg-cream border-2 border-stone-200 rounded-xl px-5 py-3.5 text-dark focus:outline-none focus:border-gold transition-colors placeholder:text-stone-300"
                  />
                </div>
              </div>

              {submitState === "error" && (
                <p className="font-sans text-sm text-red-500 mt-4">Something went wrong. Please try again.</p>
              )}

              <NavButtons
                onBack={() => setStep(3)}
                onNext={handleSubmit}
                nextLabel="View My Estimate"
                nextDisabled={!canSubmit}
                loading={submitState === "loading"}
              />
            </div>
          )}

          {/* ── Step 5: Results ── */}
          {step === 5 && (
            <ResultsView
              sections={results}
              grandTotal={grandTotal}
              bhkType={bhkType}
              area={area}
            />
          )}
        </div>
      </section>
    </>
  );
}
