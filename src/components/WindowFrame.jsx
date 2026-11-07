// Jendela ala Windows 95/98. Dipakai ulang untuk semua section.
// tone: "navy" | "maroon"
const BARS = {
  navy: "from-navy to-[#3d6bd1]",
  maroon: "from-maroon to-[#a8485b]",
};

const CONTROLS = [
  { label: "Minimize", glyph: "_" },
  { label: "Maximize", glyph: "□" },
  { label: "Close", glyph: "×" },
];

export default function WindowFrame({
  title,
  tone = "navy",
  status,
  className = "",
  children,
}) {
  return (
    <div
      className={`flex min-w-0 flex-1 flex-col border-2 border-ink bg-cream shadow-win ${className}`}
    >
      <div
        className={`flex select-none items-center justify-between bg-linear-to-r ${BARS[tone]} px-2 py-1 font-pixel font-bold text-white`}
      >
        <span>{title}</span>
        <div className="flex gap-0.75">
          {CONTROLS.map((c) => (
            <button
              key={c.label}
              type="button"
              aria-label={c.label}
              className="h-4.5 w-5 border-2 border-t-hi border-l-hi border-r-shade border-b-shade bg-silver p-0 text-[11px] leading-none text-ink active:border-t-shade active:border-l-shade active:border-r-hi active:border-b-hi"
            >
              {c.glyph}
            </button>
          ))}
        </div>
      </div>

      {children}

      <div className="mb-0 flex justify-between gap-3 border-t-2 border-ink bg-silver px-2.5 py-0.5 text-[.72em] shadow-[inset_0_2px_0_var(--color-hi)] md:mb-0">
        <span>{status ?? `${title} — Ready`}</span>
        <span className="border-2 border-t-shade border-l-shade border-r-hi border-b-hi px-2">
          © 2026 Arfansyah Saputra
        </span>
      </div>
    </div>
  );
}
