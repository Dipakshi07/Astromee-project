const links = [
  { label: "Free Kundli Chart", icon: "🧭", plain: true },
  { label: "FLAME Love Match", icon: "💗" },
  { label: "Tarot Pull", icon: "🔮" },
  { label: "Vedic Panchang", icon: "📅" },
  { label: "AI Face Reading", icon: "👤" },
  { label: "Lucky Gemstones", icon: "💚" },
  { label: "Sade Sati Check", icon: "🪐" },
];

export default function QuickLinks() {
  return (
    <div className="bg-white border-b border-astro-border">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3 flex items-center gap-3 overflow-x-auto no-scrollbar">
        {links.map((link) => (
          <button
            key={link.label}
            className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              link.plain
                ? "border-gray-200 text-gray-600 hover:border-astro-orange/40"
                : "border-astro-yellow bg-astro-yellow/70 text-astro-maroon hover:bg-astro-yellow"
            }`}
          >
            <span>{link.icon}</span>
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
}
