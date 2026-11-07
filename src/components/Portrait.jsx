import { useState } from "react";
import WindowControls from "./WindowControls";

/** Foto profil dalam jendela mini ala Windows 95 (Profile.jpg). */
export default function Portrait({
  src,
  title = "Profile.jpg",
  alt = "Foto Arfansyah Saputra",
}) {
  const [ok, setOk] = useState(true);

  return (
    <div className="relative mx-auto w-48 md:w-[clamp(190px,24vw,340px)]">
      <div className="border-2 border-ink bg-silver shadow-[inset_2px_2px_0_var(--color-hi),inset_-2px_-2px_0_var(--color-shade),5px_5px_0_var(--color-ink)]">
        {/* title bar */}
        <div className="m-0.5 flex select-none items-center justify-between bg-linear-to-r from-navy to-[#3d6bd1] px-1.5 py-0.5 font-pixel text-sm font-bold text-white">
          <span>{title}</span>
          <WindowControls small />
        </div>

        {/* area foto (cekung) */}
        <div className="m-1 aspect-3/4 overflow-hidden border-2 border-t-shade border-l-shade border-r-hi border-b-hi bg-navy">
          {ok ? (
            <img
              src={src}
              alt={alt}
              onError={() => setOk(false)}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="grid h-full place-items-center p-3 text-center font-pixel text-sm text-white">
              Taruh foto di public/foto.jpg
            </div>
          )}
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute -top-3 -left-3 animate-twinkle text-lg text-maroon motion-reduce:animate-none"
      >
        ✦
      </span>
      <span
        aria-hidden="true"
        className="absolute top-1/2 -right-5 animate-twinkle text-lg text-maroon [animation-delay:.7s] motion-reduce:animate-none"
      >
        ✦
      </span>
    </div>
  );
}
