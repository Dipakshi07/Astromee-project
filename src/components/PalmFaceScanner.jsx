import { useState } from "react";

const reportItems = [
  {
    icon: "❤️",
    title: "Heart & Emotion Line:",
    text: "Deep, unbroken curved line reaching Jupiter Mount. Indicates passionate romantic bonds, high emotional empathy, and stable long-term fidelity.",
  },
  {
    icon: "💰",
    title: "Wealth Mount & Fate Line:",
    text: "Prominent Sun and Mercury mounts indicating business acumen. Strong financial growth spike predicted between ages 28 to 33.",
  },
];

export default function PalmFaceScanner() {
  const [mode, setMode] = useState("palm");

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-10">
      <div className="bg-gradient-to-br from-white to-[#FBF3E6] border border-astro-border rounded-3xl p-6 md:p-8 shadow-card">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full">
              ⚛️ AI Biometric Destiny Engine v2.4
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-astro-ink mt-3">
              Palm &amp; Face{" "}
              <span className="bg-gradient-to-r from-astro-orange to-violet-500 bg-clip-text text-transparent">
                Destiny Scanner
              </span>
            </h2>
            <p className="text-gray-500 text-sm mt-1 max-w-lg">
              Scan your palm lines or facial geometry to reveal Life Line length, Marriage Timing &amp; Financial Mounts.
            </p>
          </div>

          <div className="flex bg-white border border-astro-border rounded-full p-1 shrink-0">
            <button
              onClick={() => setMode("palm")}
              className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                mode === "palm" ? "bg-astro-orange text-white" : "text-gray-500"
              }`}
            >
              ✋ Palm Reader
            </button>
            <button
              onClick={() => setMode("face")}
              className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                mode === "face" ? "bg-astro-orange text-white" : "text-gray-500"
              }`}
            >
              👤 Face Reader
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upload box */}
          <div className="border-2 border-dashed border-astro-orange/50 rounded-2xl bg-white flex flex-col items-center justify-center text-center py-14 px-6">
            <div className="h-16 w-16 rounded-2xl bg-astro-yellow/60 flex items-center justify-center text-2xl mb-4">
              {mode === "palm" ? "✋" : "🙂"}
            </div>
            <p className="font-semibold text-astro-ink">Upload Photo or Scan</p>
            <p className="text-xs text-gray-400 mt-1">
              {mode === "palm" ? "Place clear photo of left/right palm" : "Place a clear, well-lit face photo"}
            </p>
            <button className="mt-5 bg-astro-orange hover:bg-astro-orange-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 transition-colors">
              📷 Snap / Choose Photo
            </button>
          </div>

          {/* Report */}
          <div className="bg-white border border-astro-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="font-bold text-astro-ink flex items-center gap-2">📊 AI Biometric Analysis Report</p>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
                50% Free Preview
              </span>
            </div>

            <div className="space-y-3">
              {reportItems.map((item) => (
                <div key={item.title} className="flex gap-3 bg-astro-cream/60 border border-astro-border rounded-xl p-4">
                  <div className="h-9 w-9 shrink-0 rounded-full bg-orange-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-astro-ink">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}

              <div className="relative rounded-xl border border-astro-yellow bg-astro-yellow/30 p-4 text-center overflow-hidden">
                <p className="font-bold text-sm text-astro-ink">Unlock Full 12-Page Complete Destiny Report</p>
                <p className="text-xs text-gray-500 mt-1 blur-[2px] select-none">
                  Accurate Marriage Age, Lucky Gemstones &amp; Astrological Remedies · Foreign Travel Probability &amp;
                  Lifetime Wealth Milestone Chart
                </p>
                <button className="mt-3 bg-astro-orange hover:bg-astro-orange-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors">
                  Unlock Full PDF for ₹49{" "}
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">50 Coins</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-6 text-astro-orange font-semibold text-sm flex items-center gap-1.5 hover:underline">
          🪄 Run Sample Demo Scan
        </button>
      </div>
    </section>
  );
}
