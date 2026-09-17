
import { useEffect, useState } from "react";

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
  // Currently visible section
  const [activePage, setActivePage] = useState("home");

  /*
   * ============================================
   * NAVIGATION
   * ============================================
   */

  const handleNavigation = (page) => {
    setActivePage(page);

    const section = document.getElementById(page);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /*
   * ============================================
   * DETECT SECTION WHILE USER SCROLLS
   * ============================================
   */

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#home, #astrologers, #palm, #horoscope"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActivePage(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-80px 0px -20% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  /*
   * ============================================
   * RENDER
   * ============================================
   */

  return (
    <div className="min-h-screen bg-astro-cream">

      {/* ==========================================
          TOP BAR
      ========================================== */}

      <TopBar />


      {/* ==========================================
          NAVBAR
      ========================================== */}

      <Navbar
        onNavigate={handleNavigation}
        activePage={activePage}
      />


      {/* ==========================================
          QUICK LINKS
      ========================================== */}

      <QuickLinks
        onNavigate={handleNavigation}
      />


      {/* ==========================================
          MAIN WEBSITE
      ========================================== */}

      <main>

        {/* ========================================
            HOME
        ======================================== */}

        <section
          id="home"
          className="scroll-mt-24"
        >
          <Hero />
        </section>


        {/* ========================================
            SERVICES
        ======================================== */}

        <section
          id="services"
          className="scroll-mt-24"
        >
          <ServicesGrid />
        </section>


        {/* ========================================
            ASTROLOGERS
        ======================================== */}

        <section
          id="astrologers"
          className="scroll-mt-24"
        >
          <AstrologersList />
        </section>


        {/* ========================================
            PALM + FACE READER
        ======================================== */}

        <section
          id="palm"
          className="scroll-mt-24"
        >
          <PalmFaceScanner />
        </section>


        {/* ========================================
            LOVE CALCULATOR + KUNDLI
        ======================================== */}

        <section
          id="calculators"
          className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 scroll-mt-24"
        >
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Love Calculator */}

            <div id="love-calculator">
              <FlameLoveCalculator />
            </div>


            {/* Kundli */}

            <div id="kundli">
              <KundliChart />
            </div>

          </div>
        </section>


        {/* ========================================
            HOROSCOPE
        ======================================== */}

        <section
          id="horoscope"
          className="scroll-mt-24"
        >
          <ZodiacHoroscope />
        </section>

      </main>


      {/* ==========================================
          FOOTER / CONTACT
      ========================================== */}

      <section
        id="contact"
        className="scroll-mt-24"
      >
        <Footer />
      </section>

    </div>
  );
}
