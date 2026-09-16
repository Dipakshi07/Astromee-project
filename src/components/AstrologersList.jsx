import { useState } from "react";
import AstrologerCard from "./AstrologerCard.jsx";

const filters = ["All Astrologers", "Love & Marriage", "Career & Wealth", "Vedic & Kundli", "Tarot & Psychic"];

const astrologers = [
  {
    name: "Acharya Ananya",
    specialty: "Vedic, Tarot, Numerology",
    langExp: "Hindi, English • 12 Yrs Exp",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
    rating: 4.9,
    consults: 14820,
    price: 25,
  },
  {
    name: "Pandit Devraj Sharma",
    specialty: "Kundli, KP System, Vastu",
    langExp: "Hindi, Sanskrit • 18 Yrs Exp",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces",
    rating: 5.0,
    consults: 22100,
    price: 35,
  },
  {
    name: "Dr. Priya Nambiar",
    specialty: "Psychic Reader & Palmistry",
    langExp: "English, Tamil • 10 Yrs Exp",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
    rating: 4.8,
    consults: 9450,
    price: 30,
  },
];

export default function AstrologersList() {
  const [active, setActive] = useState(filters[0]);

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-astro-ink flex items-center gap-2">
            🎧 Consult Top Astrologers Online
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Instant guidance on Marriage, Love, Career &amp; Planetary Doshas
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                active === f
                  ? "bg-astro-orange text-white border-astro-orange"
                  : "bg-white text-gray-600 border-astro-border hover:border-astro-orange/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {astrologers.map((a) => (
          <AstrologerCard key={a.name} astrologer={a} />
        ))}
      </div>
    </section>
  );
}
