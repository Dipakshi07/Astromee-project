import { useState } from "react";

export default function FlameLoveCalculator() {
  const [name, setName] = useState("");
  const [partner, setPartner] = useState("");

  return (
    <div className="bg-white border border-astro-border rounded-3xl p-6 md:p-7 shadow-card h-full">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-rose-100 flex items-center justify-center text-xl">🔥</div>
          <div>
            <p className="font-display font-bold text-lg text-astro-ink">FLAME Love Calculator</p>
            <p className="text-xs text-gray-400">Test cosmic relationship chemistry</p>
          </div>
        </div>
        <span className="bg-rose-100 text-rose-600 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
          FREE TOOL
        </span>
      </div>

      <label className="block text-sm font-semibold text-astro-ink mb-1.5">Your Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. Rahul Sharma"
        className="w-full border border-astro-border rounded-xl px-4 py-3 text-sm mb-4 outline-none focus:border-astro-orange transition-colors"
      />

      <label className="block text-sm font-semibold text-astro-ink mb-1.5">Partner's Name</label>
      <input
        value={partner}
        onChange={(e) => setPartner(e.target.value)}
        placeholder="e.g. Priya Patel"
        className="w-full border border-astro-border rounded-xl px-4 py-3 text-sm mb-6 outline-none focus:border-astro-orange transition-colors"
      />

      <button className="w-full bg-gradient-to-r from-pink-600 to-rose-500 hover:opacity-90 text-white font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 transition-opacity">
        ❤️ Calculate Love &amp; Marriage Compatibility
      </button>
    </div>
  );
}
