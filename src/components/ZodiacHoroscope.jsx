import { useState } from "react";

const zodiacSigns = [
  {
    name: "Aries",
    icon: "♈",
    luckyColor: "Golden Yellow",
    luckyNumber: 7,
    luckyTime: "02:15 PM",
    forecast:
      "High planetary energy! Major career breakthrough arriving before noon. Stay focused, avoid distractions, and communicate clearly in team discussions.",
  },
  {
    name: "Taurus",
    icon: "♉",
    luckyColor: "Emerald Green",
    luckyNumber: 3,
    luckyTime: "11:00 AM",
    forecast:
      "A steady, grounded day. Financial decisions made today carry long-term benefit. Trust your instincts in close relationships.",
  },
  {
    name: "Gemini",
    icon: "♊",
    luckyColor: "Sky Blue",
    luckyNumber: 5,
    luckyTime: "04:30 PM",
    forecast:
      "Communication is your superpower today. A pending conversation finally resolves in your favour. Good day for networking.",
  },
  {
    name: "Cancer",
    icon: "♋",
    luckyColor: "Pearl White",
    luckyNumber: 2,
    luckyTime: "09:45 AM",
    forecast:
      "Emotional clarity returns after a cloudy few days. Family matters need your gentle attention this evening.",
  },
  {
    name: "Leo",
    icon: "♌",
    luckyColor: "Ruby Red",
    luckyNumber: 1,
    luckyTime: "01:00 PM",
    forecast:
      "Leadership opportunities present themselves. Your confidence draws admiration — use it wisely in negotiations.",
  },
  {
    name: "Virgo",
    icon: "♍",
    luckyColor: "Forest Green",
    luckyNumber: 6,
    luckyTime: "10:30 AM",
    forecast:
      "A detail you almost missed saves the day. Health routines started today will stick — begin now.",
  },
  {
    name: "Libra",
    icon: "♎",
    luckyColor: "Rose Pink",
    luckyNumber: 4,
    luckyTime: "03:15 PM",
    forecast:
      "Balance returns to a strained relationship. A fair compromise today prevents a bigger conflict later.",
  },
  {
    name: "Scorpio",
    icon: "♏",
    luckyColor: "Deep Maroon",
    luckyNumber: 9,
    luckyTime: "07:00 PM",
    forecast:
      "Intense focus rewards you at work. Keep a secret a little longer — the timing to reveal it isn't right yet.",
  },
  {
    name: "Sagittarius",
    icon: "♐",
    luckyColor: "Royal Purple",
    luckyNumber: 8,
    luckyTime: "12:45 PM",
    forecast:
      "Travel or a new opportunity calls. Say yes to the unfamiliar — it leads somewhere valuable this month.",
  },
  {
    name: "Capricorn",
    icon: "♑",
    luckyColor: "Charcoal Grey",
    luckyNumber: 10,
    luckyTime: "08:00 AM",
    forecast:
      "Discipline pays off today with recognition from a senior figure. Keep long-term goals in view.",
  },
  {
    name: "Aquarius",
    icon: "♒",
    luckyColor: "Electric Blue",
    luckyNumber: 11,
    luckyTime: "05:45 PM",
    forecast:
      "An unconventional idea gains traction. Collaborate with someone outside your usual circle.",
  },
  {
    name: "Pisces",
    icon: "♓",
    luckyColor: "Sea Green",
    luckyNumber: 12,
    luckyTime: "06:30 PM",
    forecast:
      "Intuition guides you accurately today. A creative project deserves your full attention this weekend.",
  },
];

export default function ZodiacHoroscope() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sign = zodiacSigns[activeIndex];

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-astro-ink flex items-center gap-2">
            ☀️ Daily Sun Sign Horoscope
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Select your zodiac sign for daily love, career &amp; wellness forecast
          </p>
        </div>
        <span className="bg-white border border-astro-border text-astro-ink text-sm font-semibold px-4 py-2 rounded-full">
          Today's Forecast
        </span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-6">
        {zodiacSigns.map((z, i) => (
          <button
            key={z.name}
            onClick={() => setActiveIndex(i)}
            className={`flex flex-col items-center gap-2 rounded-2xl border py-4 transition-colors ${
              i === activeIndex
                ? "bg-astro-orange border-astro-orange text-white"
                : "bg-white border-astro-border text-astro-ink hover:border-astro-orange/40"
            }`}
          >
            <span
              className={`h-9 w-9 rounded-xl flex items-center justify-center text-lg ${
                i === activeIndex ? "bg-white/20" : "bg-violet-100 text-violet-600"
              }`}
            >
              {z.icon}
            </span>
            <span className="text-xs font-semibold">{z.name}</span>
          </button>
        ))}
      </div>

      <div className="bg-astro-cream/60 border border-astro-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center text-lg">
              {sign.icon}
            </span>
            <h3 className="font-display font-bold text-xl text-astro-ink">{sign.name} Daily Horoscope</h3>
          </div>

          <div className="flex flex-wrap gap-5 mt-3 text-sm text-gray-600">
            <span>🎨 Lucky Color: <strong className="text-astro-ink">{sign.luckyColor}</strong></span>
            <span>🔢 Lucky Number: <strong className="text-astro-ink">{sign.luckyNumber}</strong></span>
            <span>⏰ Lucky Time: <strong className="text-astro-ink">{sign.luckyTime}</strong></span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mt-4 max-w-2xl">{sign.forecast}</p>
        </div>

        <div className="flex flex-col gap-2 shrink-0 w-full md:w-56">
          <button className="bg-astro-orange hover:bg-astro-orange-dark text-white font-semibold px-5 py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
            Consult Astrologer for {sign.name} →
          </button>
          <button className="bg-white border border-astro-border text-astro-ink font-semibold px-5 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-astro-cream transition-colors">
            🔖 Save Reading
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <InfoBox label="TITHI" value="Shukla Paksha Dashami" />
        <InfoBox label="NAKSHATRA" value="Rohini Nakshatra" />
        <InfoBox label="ABHIJIT MUHURAT (AUSPICIOUS)" value="11:45 AM – 12:35 PM" tone="good" />
        <InfoBox label="RAHU KAAL (AVOID)" value="03:00 PM – 04:30 PM" tone="bad" />
      </div>
    </section>
  );
}

function InfoBox({ label, value, tone }) {
  const toneClasses =
    tone === "good"
      ? "bg-emerald-50 border-emerald-200 text-emerald-700"
      : tone === "bad"
      ? "bg-rose-50 border-rose-200 text-rose-600"
      : "bg-white border-astro-border text-astro-ink";

  return (
    <div className={`border rounded-xl px-4 py-4 ${toneClasses}`}>
      <p className="text-[10px] font-bold tracking-wide opacity-70">{label}</p>
      <p className="font-semibold text-sm mt-1">{value}</p>
    </div>
  );
}
