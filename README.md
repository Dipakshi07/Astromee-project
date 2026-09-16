# Astromee — Vedic Astrology + Cosmic AI (UI Clone)

A pixel-close React + Tailwind CSS recreation of the Astromee Pro landing page, built with reusable, isolated components.

## Tech stack
- React 18 (Vite)
- Tailwind CSS
- Plain JavaScript (no TypeScript), functional components + hooks

## Project structure
```
astromee/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── TopBar.jsx            # announcement strip (astrologers online, muhurat, support)
        ├── Navbar.jsx             # logo, nav links, coin balance, spin, profile
        ├── QuickLinks.jsx         # scrollable pill shortcuts
        ├── Hero.jsx                # headline + CTA + "Astrologer of the Moment" card
        ├── ServicesGrid.jsx       # 6 service tiles
        ├── AstrologerCard.jsx     # single astrologer card (reused)
        ├── AstrologersList.jsx    # filter tabs + grid of AstrologerCard
        ├── PalmFaceScanner.jsx    # AI palm/face scanner with locked report preview
        ├── FlameLoveCalculator.jsx
        ├── KundliChart.jsx        # birth details form
        ├── ZodiacHoroscope.jsx    # 12-sign picker + daily forecast + panchang boxes
        └── Footer.jsx
```

## Run locally

```bash
cd astromee
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production
```bash
npm run build
npm run preview
```

## Notes
- All astrologer/profile photos are placeholder stock photos from Unsplash — swap the `photo` fields in `AstrologersList.jsx` and `Hero.jsx` with your real assets.
- Colors, type scale and spacing are centralized in `tailwind.config.js` under the `astro` color palette (`astro-orange`, `astro-cream`, `astro-yellow`, `astro-maroon`, etc.) so you can re-theme the whole site from one place.
- Every interactive section (Palm/Face toggle, zodiac picker, astrologer filters, form inputs) uses local `useState` — no external state library needed.
- Fully responsive: stacks to a single column on mobile, 2-column on tablet, full multi-column grid on desktop.
