export default function AstrologerCard({ astrologer }) {
  const { name, specialty, langExp, photo, rating, consults, price } = astrologer;

  return (
    <div className="bg-white border border-astro-border rounded-2xl p-5 shadow-card">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={photo}
              alt={name}
              className="h-14 w-14 rounded-full object-cover"
            />
            <span className="absolute -bottom-1 -right-1 bg-astro-orange text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {rating}★
            </span>
          </div>
          <div>
            <p className="font-display font-bold text-astro-ink">{name}</p>
            <p className="text-astro-orange text-sm font-semibold">{specialty}</p>
            <p className="text-xs text-gray-400 mt-0.5">{langExp}</p>
          </div>
        </div>
        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0">
          ONLINE
        </span>
      </div>

      <p className="flex items-center gap-1 text-xs text-gray-500 mt-3">
        💬 {consults.toLocaleString()} Consultations
      </p>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-astro-border">
        <div>
          <p className="text-xs text-gray-400 line-through">₹{price}/min</p>
          <p className="text-emerald-700 text-sm font-bold">₹1 /min (First Chat)</p>
        </div>
        <button className="bg-astro-orange hover:bg-astro-orange-dark text-white text-sm font-semibold px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-colors">
          💬 Chat Now
        </button>
      </div>
    </div>
  );
}
