export default function Marquee() {
  const items = [
    '🍰 Custom Cakes',
    '🌸 Marshmallow Flowers',
    '🎁 Sweet Bouquets',
    '🧁 Bento Cakes',
    '🍥 Meringue Rolls',
    '🍫 Cake Pops',
    '🌿 Fresh Daily',
    '💛 Made With Love',
  ];
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden bg-[#d4614e] py-3.5"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-8 text-sm font-semibold text-white tracking-wide"
          >
            {item}
            <span className="text-white/40 ml-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
