export default function Marquee({ text }) {
  return (
    <div
      className="overflow-hidden border-t-2 border-ink bg-ink py-1 font-pixel text-[.85em] font-bold whitespace-nowrap text-cream"
      aria-hidden="true"
    >
      <span className="inline-block animate-marquee pl-[100%] motion-reduce:animate-none">
        {text}
      </span>
    </div>
  );
}
