const services = [
  { label: "Chat & Call", sub: "500+ Online", icon: "💬", tag: "LIVE", tagColor: "bg-emerald-100 text-emerald-700", iconBg: "bg-amber-100" },
  { label: "Palm Scanner", sub: "Teaser Free", icon: "✋", tag: "AI", tagColor: "bg-violet-100 text-violet-700", iconBg: "bg-violet-100" },
  { label: "Face Reading", sub: "Destiny AI", icon: "🙂", tag: "AI", tagColor: "bg-blue-100 text-blue-700", iconBg: "bg-blue-100" },
  { label: "Free Kundli", sub: "Vedic Chart PDF", icon: "📜", iconBg: "bg-emerald-100" },
  { label: "Horoscope", sub: "Daily Transit", icon: "✴️", iconBg: "bg-rose-100" },
  { label: "FLAME Match", sub: "Love % Test", icon: "🔥", iconBg: "bg-red-100" },
];

export default function ServicesGrid() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-astro-ink flex items-center gap-2">
            🪄 Explore Astromee Services
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Comprehensive Vedic astrology tools and psychic intelligence
          </p>
        </div>
        <a href="#" className="text-astro-orange font-semibold text-sm hover:underline flex items-center gap-1">
          View All Services →
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-astro-border rounded-2xl p-5 flex flex-col items-center text-center gap-2 hover:shadow-card hover:-translate-y-0.5 transition-all cursor-pointer relative"
          >
            {s.tag && (
              <span
                className={`absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full ${s.tagColor}`}
              >
                {s.tag}
              </span>
            )}
            <div className={`h-12 w-12 rounded-full flex items-center justify-center text-xl ${s.iconBg}`}>
              {s.icon}
            </div>
            <p className="font-semibold text-sm text-astro-ink mt-1">{s.label}</p>
            <p className="text-xs text-gray-400">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
