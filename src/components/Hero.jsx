export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-astro-cream via-[#FBF3E6] to-[#F3E8FA]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 md:py-16 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-2 bg-white border border-astro-border rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            100% Confidential • Verified Vedic Astrologers
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.08] mt-5 text-astro-maroon">
            <span className="bg-astro-yellow px-1">Unlock Your Destiny</span>
            <br />
            <span className="bg-astro-yellow px-1">With India's Top</span>
            <br />
            <span className="bg-astro-yellow px-1">Astrologers at ₹1 / min</span>
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
            Get authentic clarity on{" "}
            <strong className="text-astro-ink">Love, Career, Marriage, Finances &amp; Kundli Doshas</strong>.
            Connect instantly via Live Chat &amp; Call with 500+ verified Vedic masters.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <button className="flex items-center justify-center gap-2 bg-astro-orange hover:bg-astro-orange-dark text-white font-semibold px-6 py-3.5 rounded-full transition-colors shadow-card">
              💬 Start First Chat @ ₹1 <span>→</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-astro-orange/40 text-astro-orange font-semibold px-6 py-3.5 rounded-full hover:bg-amber-50 transition-colors">
              ✋ Try Free AI Palm Scanner
            </button>
          </div>

          <div className="flex flex-wrap gap-10 mt-10 pt-7 border-t border-astro-border/80">
            <Stat value="500+" label="Verified Masters" />
            <Stat value="4.9★" label="2M+ Consults" />
            <Stat value="100%" label="Private & Secure" />
          </div>
        </div>

        {/* Right column - featured astrologer */}
        <div className="relative bg-white border border-astro-border rounded-3xl shadow-card p-5 max-w-sm w-full mx-auto lg:mx-0">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold text-emerald-700">ASTROLOGER OF THE MOMENT</p>
            <span className="bg-astro-yellow text-astro-maroon text-[10px] font-bold px-2.5 py-1 rounded-full">
              TOP RATED
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces"
                alt="Acharya Ananya"
                className="h-16 w-16 rounded-full object-cover border-2 border-astro-orange/40"
              />
              <span className="absolute -bottom-1 -right-1 bg-astro-orange text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                4.9★
              </span>
            </div>
            <div>
              <p className="font-display font-bold text-lg text-astro-ink">Acharya Ananya</p>
              <p className="text-sm text-astro-orange font-semibold">Vedic, Tarot &amp; Relationship Expert</p>
              <p className="text-xs text-gray-500 mt-0.5">12+ Years Exp • 14,800+ Consults</p>
            </div>
          </div>

          <div className="mt-5 border border-astro-border rounded-2xl px-4 py-3 flex items-center justify-between bg-astro-cream/60">
            <div>
              <p className="text-xs text-gray-500 font-medium">First Chat Rate:</p>
              <p className="text-emerald-700 text-xs font-semibold flex items-center gap-1 mt-1">
                ✓ Available right now • Instant Response
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400 line-through mr-1">₹25/min</span>
              <span className="text-astro-orange font-bold">₹1 / min</span>
            </div>
          </div>

          <button className="w-full mt-4 bg-astro-orange hover:bg-astro-orange-dark text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
            💬 Connect with Acharya Ananya Now
          </button>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display font-extrabold text-2xl text-astro-orange">{value}</p>
      <p className="text-xs text-gray-500 font-medium mt-0.5">{label}</p>
    </div>
  );
}
