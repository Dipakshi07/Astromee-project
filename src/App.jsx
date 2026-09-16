
import { useState } from "react";

import TopBar from "./components/TopBar.jsx";
import Navbar from "./components/Navbar.jsx";
import QuickLinks from "./components/QuickLinks.jsx";

import Hero from "./components/Hero.jsx";
import ServicesGrid from "./components/ServicesGrid.jsx";
import AstrologersList from "./components/AstrologersList.jsx";
import PalmFaceScanner from "./components/PalmFaceScanner.jsx";
import FlameLoveCalculator from "./components/FlameLoveCalculator.jsx";
import KundliChart from "./components/KundliChart.jsx";
import ZodiacHoroscope from "./components/ZodiacHoroscope.jsx";

import Footer from "./components/Footer.jsx";

export default function App() {
  // Current active page
  const [activePage, setActivePage] = useState("home");

  // Navbar click handler
  const handleNavigation = (page) => {
    setActivePage(page);

    // New component render hone ke baad page top par chala jayega
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Component/page render function
  const renderPage = () => {
    switch (activePage) {
      // =========================
      // HOME
      // =========================
      case "home":
        return (
          <>
            {/* Hero */}
            <section id="home">
              <Hero />
            </section>

            {/* Services */}
            <section id="services">
              <ServicesGrid />
            </section>

            {/* Love Calculator + Kundli */}
            <section
              id="calculators"
              className="max-w-[1440px] mx-auto px-4 md:px-8 py-10"
            >
              <div className="grid lg:grid-cols-2 gap-6">
                <div id="love-calculator">
                  <FlameLoveCalculator />
                </div>

                <div id="kundli">
                  <KundliChart />
                </div>
              </div>
            </section>
          </>
        );

      // =========================
      // ASTROLOGERS
      // =========================
      case "astrologers":
        return (
          <section id="astrologers">
            <AstrologersList />
          </section>
        );

      // =========================
      // PALM READER
      // =========================
      case "palm":
        return (
          <section id="scanner">
            <PalmFaceScanner />
          </section>
        );

      // =========================
      // HOROSCOPE
      // =========================
      case "horoscope":
        return (
          <section id="horoscope">
            <ZodiacHoroscope />
          </section>
        );

      // =========================
      // DEFAULT
      // =========================
      default:
        return (
          <>
            <section id="home">
              <Hero />
            </section>

            <section id="services">
              <ServicesGrid />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-astro-cream">

      {/* =========================
          TOP BAR
      ========================= */}
      <TopBar />

      {/* =========================
          NAVBAR
      ========================= */}
      <Navbar
        onNavigate={handleNavigation}
        activePage={activePage}
      />

      {/* =========================
          QUICK LINKS
      ========================= */}
      <QuickLinks
        onNavigate={handleNavigation}
      />

      {/* =========================
          DYNAMIC PAGE CONTENT
      ========================= */}
      <main>
        {renderPage()}
      </main>

      {/* =========================
          FOOTER
      ========================= */}
      <section id="contact">
        <Footer />
      </section>

    </div>
  );
}
