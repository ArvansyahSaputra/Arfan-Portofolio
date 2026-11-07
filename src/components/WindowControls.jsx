const CONTROLS = [
  { label: "Minimize", glyph: "_" },
  { label: "Maximize", glyph: "□" },
  { label: "Close", glyph: "×" },
];

/** Tiga tombol _ □ × di title bar. `small` untuk jendela mini (mis. Portrait). */
export default function WindowControls({ small = false }) {
  return (
    <div className="flex gap-0.75">
      {CONTROLS.map((c) => (
        <button
          key={c.label}
          type="button"
          aria-label={c.label}
          className={`${
            small ? "h-4 w-4.5 text-[10px]" : "h-4.5 w-5 text-[11px]"
          } border-2 border-t-hi border-l-hi border-r-shade border-b-shade bg-silver p-0 leading-none text-ink active:border-t-shade active:border-l-shade active:border-r-hi active:border-b-hi`}
        >
          {c.glyph}
        </button>
      ))}
    </div>
  );
}
