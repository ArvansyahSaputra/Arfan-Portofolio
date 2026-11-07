import { useEffect, useState } from "react";
import { BIOS_LINES, BOOT_DURATION } from "../data/boot";

export default function Boot() {
  const [phase, setPhase] = useState("show"); // show -> fade -> done

  useEffect(() => {
    const toFade = setTimeout(() => setPhase("fade"), BOOT_DURATION);
    const toDone = setTimeout(() => setPhase("done"), BOOT_DURATION + 600);
    return () => {
      clearTimeout(toFade);
      clearTimeout(toDone);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-label="Memuat portfolio"
      className={`fixed inset-0 z-100 grid place-items-center bg-black font-retro text-[#c8c8c8] transition-opacity duration-500 ${
        phase === "fade" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-[min(460px,86vw)] text-sm">
        {BIOS_LINES.map((line) => (
          <p
            key={line.text}
            style={{ animationDelay: `${line.delay}s` }}
            className="my-1.25 animate-boot-line opacity-0"
          >
            {line.text}
          </p>
        ))}
        <div className="mx-auto mt-3.5 h-5.5 w-[min(320px,70vw)] border-2 border-white p-0.5">
          <i className="block h-full w-0 animate-boot-bar bg-white" />
        </div>
      </div>
    </div>
  );
}
