import React from "react";

const navLinks = [
  { label: "Home", icon: "🏠", page: "home" },
  { label: "Astrologers", icon: "🎧", dot: true, page: "astrologers" },
  { label: "Palm reader", icon: "🔮", page: "palm" },
  { label: "Horoscope", icon: "⚙️", page: "horoscope" },
];

export default function Navbar({ onNavigate, activePage }) {
  const handleNavigation = (page) => {
    // Parent App.jsx ko active page batayega
    if (onNavigate) {
      onNavigate(page);
    }

    // Page ke respective section par smooth scroll
    const section = document.getElementById(page);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-[1440px] mx-auto">

        {/* Logo */}
        <button
          onClick={() => handleNavigation("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="h-11 w-11 rounded-xl border-2 border-orange-500 flex items-center justify-center font-bold text-lg text-orange-500">
            A
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-orange-500 tracking-wide">
                ASTROMEE
              </span>

              <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                PRO
              </span>
            </div>

            <p className="text-[10px] tracking-[0.15em] text-gray-500 font-medium -mt-0.5">
              VEDIC ASTROLOGY + COSMIC AI
            </p>
          </div>
        </button>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.page)}
              className={`
                relative flex items-center gap-1.5
                text-sm font-medium
                transition-all duration-300
                ${
                  activePage === link.page
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }
              `}
            >
              <span>{link.icon}</span>

              {link.label}

              {link.dot && (
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
              )}

              <span className="text-[10px]">⌄</span>

              {/* Active underline */}
              {activePage === link.page && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">

          {/* Balance */}
          <div className="hidden sm:flex items-center gap-2 border border-orange-300 bg-amber-50 rounded-full pl-3 pr-1 py-1">
            <span className="text-lg">🪙</span>

            <div className="leading-tight">
              <p className="text-[9px] text-gray-500 font-semibold tracking-wide">
                BALANCE
              </p>

              <p className="text-sm font-bold -mt-0.5">
                120 Coins
              </p>
            </div>

            <button className="ml-1 bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-orange-600 transition-colors">
              + Topup
            </button>
          </div>

          {/* Spin */}
          <button className="hidden sm:flex items-center gap-1 border border-orange-300 text-orange-500 text-sm font-semibold px-3 py-2 rounded-full hover:bg-amber-50 transition-colors">
            ⚙️ Spin
          </button>

          {/* Profile */}
          <button className="relative h-10 w-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500">
            👤

            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500 border border-white" />
          </button>

        </div>
      </div>
    </header>
  );
}