import { useState } from "react";

export default function KundliChart() {
  const [form, setForm] = useState({
    name: "",
    gender: "Male",
    date: "",
    time: "",
    place: "",
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <div className="bg-white border border-astro-border rounded-3xl p-6 md:p-7 shadow-card h-full">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-emerald-100 flex items-center justify-center text-xl">📜</div>
          <div>
            <p className="font-display font-bold text-lg text-astro-ink">Free Vedic Kundli Chart</p>
            <p className="text-xs text-gray-400">Instant Lagna &amp; planetary transit generator</p>
          </div>
        </div>
        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
          INSTANT PDF
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-astro-ink mb-1.5">Full Name</label>
          <input
            value={form.name}
            onChange={update("name")}
            placeholder="Your Name"
            className="w-full border border-astro-border rounded-xl px-4 py-3 text-sm outline-none focus:border-astro-orange transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-astro-ink mb-1.5">Gender</label>
          <select
            value={form.gender}
            onChange={update("gender")}
            className="w-full border border-astro-border rounded-xl px-4 py-3 text-sm outline-none focus:border-astro-orange transition-colors"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-astro-ink mb-1.5">Birth Date</label>
          <input
            type="date"
            value={form.date}
            onChange={update("date")}
            className="w-full border border-astro-border rounded-xl px-4 py-3 text-sm outline-none focus:border-astro-orange transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-astro-ink mb-1.5">Birth Time</label>
          <input
            type="time"
            value={form.time}
            onChange={update("time")}
            className="w-full border border-astro-border rounded-xl px-4 py-3 text-sm outline-none focus:border-astro-orange transition-colors"
          />
        </div>
      </div>

      <label className="block text-sm font-semibold text-astro-ink mb-1.5">Place of Birth</label>
      <input
        value={form.place}
        onChange={update("place")}
        placeholder="City, State, Country"
        className="w-full border border-astro-border rounded-xl px-4 py-3 text-sm mb-6 outline-none focus:border-astro-orange transition-colors"
      />

      <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:opacity-90 text-white font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 transition-opacity">
        🥧 Generate Full Kundli Chart
      </button>
    </div>
  );
}
