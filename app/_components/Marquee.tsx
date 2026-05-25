export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-6 border-y border-black/[0.08] bg-black text-white">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-2xl sm:text-3xl font-medium tracking-tight"
          >
            {item}
            <span className="ml-12 text-white/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
