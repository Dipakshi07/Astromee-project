const columns = [
  {
    title: "Astrology Tools",
    links: ["Free Kundli Chart", "FLAME Love Match", "Tarot Pull", "Vedic Panchang", "Lucky Gemstones"],
  },
  {
    title: "Consultations",
    links: ["Chat with Astrologer", "Call an Astrologer", "Palm Reader", "Face Reading", "Sade Sati Check"],
  },
  {
    title: "Trust & Support",
    links: ["About Astromee", "Verified Astrologers", "Privacy Policy", "Terms of Service", "Contact Support"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-astro-border">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 grid md:grid-cols-[1.3fr_repeat(3,1fr)] gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl border-2 border-astro-orange flex items-center justify-center font-display font-bold text-lg text-astro-orange">
              A
            </div>
            <span className="font-display font-bold text-xl text-astro-orange">ASTROMEE</span>
          </div>
          <p className="text-sm text-gray-500 mt-4 max-w-xs leading-relaxed">
            India's trusted platform for authentic Vedic astrology, palmistry &amp; AI-powered cosmic insights.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-bold text-sm text-astro-ink tracking-wide mb-4">{col.title.toUpperCase()}</p>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-astro-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-astro-border py-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Astromee. All rights reserved.
      </div>
    </footer>
  );
}
