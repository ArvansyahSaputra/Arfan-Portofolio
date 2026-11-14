import WindowFrame from "./WindowFrame";
import RetroButton from "./RetroButton";
import { CONTACTS } from "../data/Contact";
import { CV_URL } from "../data/welcome";

/**
 * Halaman pemberitahuan untuk layar kecil (HP/tablet kecil).
 * Ditampilkan di bawah breakpoint `lg` (1024px), lihat App.jsx.
 */
export default function DesktopNotice() {
  return (
    <div className="grid min-h-svh place-items-center p-4">
      <WindowFrame
        title="⚠ Layar Terlalu Kecil"
        tone="maroon"
        status="Buka lewat laptop atau PC"
        className="w-full max-w-md flex-none"
      >
        <div className="dots px-5 py-7 text-center">
          <p aria-hidden="true" className="text-6xl leading-none">
            🖥️
          </p>
          <h1 className="mt-4 font-pixel text-2xl font-bold">
            Buka lewat laptop atau PC
          </h1>
          <p className="mt-3">
            Portfolio ini dirancang untuk layar lebar dan belum mendukung
            tampilan HP. Silakan buka di laptop atau PC untuk pengalaman
            terbaik.
          </p>

          <p className="mt-6 mb-3 font-pixel font-bold">
            Sementara itu, kamu bisa:
          </p>
          <div className="flex flex-col gap-2.5">
            <RetroButton
              primary
              href={CV_URL}
              download
              className="justify-center"
            >
              ⬇ Download CV
            </RetroButton>
            {CONTACTS.map((c) => (
              <RetroButton
                key={c.label}
                href={c.href}
                {...(c.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="justify-center break-all"
              >
                {c.label}
              </RetroButton>
            ))}
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}
