export default function TopBar() {
  return (
    <div className="hidden md:flex items-center justify-between bg-[#241209] text-[#F3D9A4] text-xs px-6 py-2">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
          520+ Vedic Astrologers Online
        </span>
        <span className="opacity-50">•</span>
        <span className="font-medium">First Consultation at just ₹1/Min</span>
      </div>

      <div className="flex items-center gap-1.5 text-amber-300">
        <span>ॐ</span>
        <span>
          Today's Abhijit Muhurat: <strong className="font-semibold">11:45 AM – 12:35 PM</strong> (Highly Auspicious)
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1 cursor-pointer hover:text-white">
          🎧 Support
        </span>
        <span className="opacity-40">|</span>
        <span className="flex items-center gap-1 cursor-pointer hover:text-white">
          🌐 English ⌄
        </span>
      </div>
    </div>
  );
}
