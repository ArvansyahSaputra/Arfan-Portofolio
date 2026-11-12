import { useEffect, useRef, useState } from "react";
import RetroButton from "../components/RetroButton";
import StartMenu from "../components/StartMenu";
import useActiveSection from "../hooks/useActiveSection";
import useClock from "../hooks/useClock";
import { SECTIONS, SECTION_IDS } from "../data/navigation";

const MENU_ID = "start-menu";

/** Taskbar ala Windows 95 di bagian bawah layar: tombol Start, tombol tiap section, dan jam. */
export default function Taskbar() {
  const [open, setOpen] = useState(false);
  const startRef = useRef(null);
  const active = useActiveSection(SECTION_IDS);
  const time = useClock();

  // tutup Start menu saat klik di luar atau menekan Esc
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (startRef.current && !startRef.current.contains(e.target))
        setOpen(false);
    };
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 flex min-h-[42px] items-center gap-2 border-t-2 border-ink bg-silver px-2 pt-1 pb-[calc(4px+env(safe-area-inset-bottom,0px))] shadow-[inset_0_2px_0_var(--color-hi)]">
      <div ref={startRef} className="relative">
        <RetroButton
          size="xs"
          className={`font-pixel ${open ? "translate-x-0.5 translate-y-0.5 shadow-bevel-down" : ""}`}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={MENU_ID}
          onClick={() => setOpen((o) => !o)}
        >
          Start
        </RetroButton>
        {open && <StartMenu id={MENU_ID} onClose={() => setOpen(false)} />}
      </div>

      <nav
        aria-label="Navigasi section"
        className="flex min-w-0 flex-1 gap-1 overflow-x-auto"
      >
        {SECTIONS.map((s) => {
          const isActive = s.id === active;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={isActive ? "location" : undefined}
              style={
                isActive
                  ? {
                      background:
                        "repeating-conic-gradient(var(--color-silver) 0 25%, var(--color-hi) 0 50%) 0 0 / 4px 4px",
                    }
                  : undefined
              }
              className={`border-2 px-3 py-0.5 font-pixel text-sm font-bold whitespace-nowrap text-ink no-underline ${
                isActive
                  ? "border-t-shade border-l-shade border-r-hi border-b-hi shadow-[inset_1px_1px_0_var(--color-ink)]"
                  : "border-t-hi border-l-hi border-r-shade border-b-shade bg-silver hover:bg-hi"
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </nav>

      <time className="hidden border-2 border-t-shade border-l-shade border-r-hi border-b-hi bg-hi px-2.5 py-0.5 font-pixel text-sm font-bold md:block">
        {time}
      </time>
    </footer>
  );
}
