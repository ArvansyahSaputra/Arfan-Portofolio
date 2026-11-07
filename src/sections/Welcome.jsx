import WindowFrame from "../components/WindowFrame";
import DesktopIcons from "../components/DesktopIcons";
import RetroButton from "../components/RetroButton";
import Portrait from "../components/Portrait";
import useTypewriter from "../hooks/useTypewriter";
import { PHOTO, CV_URL, ROLE, STATS } from "../data/welcome";
import { BOOT_DURATION } from "../data/boot";

export default function Welcome() {
  const role = useTypewriter(ROLE, { start: BOOT_DURATION + 300 });

  return (
    <section id="home" className="flex min-h-svh snap-start">
      <WindowFrame
        title="▣ Welcome.exe"
        tone="navy"
        status="Welcome.exe — Ready"
      >
        <div className="dots relative flex flex-1 flex-col justify-center overflow-hidden px-[clamp(20px,5vw,80px)] pt-5 pb-5">
          <div className="grid items-center gap-[clamp(20px,5vw,80px)] md:grid-cols-[auto_1fr_auto]">
            <DesktopIcons />

            <div>
              <p>Hello, I’m</p>
              <h1 className="my-1 mb-4 font-pixel text-[clamp(34px,6.5vw,84px)] leading-none font-bold [text-shadow:4px_4px_0_var(--color-maroon)]">
                Arfansyah Saputra
              </h1>

              <p
                className="mb-4 inline-block min-h-[1.6em] bg-ink px-3 py-1 font-pixel text-[clamp(17px,2vw,28px)] text-cream"
                aria-label={ROLE}
              >
                <span aria-hidden="true">{role}</span>
                <span
                  aria-hidden="true"
                  className="animate-blink motion-reduce:animate-none"
                >
                  _
                </span>
              </p>

              <p className="max-w-140 text-[clamp(14px,1.5vw,19px)]">
                I’m passionate about creating modern web experiences with clean
                and responsive design.
              </p>

              <div className="mt-4.5 flex flex-wrap gap-3">
                <RetroButton primary href="#projects">
                  ▤ View Projects →
                </RetroButton>
                <RetroButton href={CV_URL} download>
                  ⬇ Download CV
                </RetroButton>
                <RetroButton href="#contact">✉ Hubungi Saya</RetroButton>
              </div>

              <dl className="mt-[clamp(20px,5vh,48px)] flex flex-wrap gap-[clamp(12px,2vw,28px)]">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col border-2 border-ink bg-silver px-4.5 py-2.5 shadow-bevel"
                  >
                    <dt className="order-2 text-[.75em]">{s.label}</dt>
                    <dd className="font-pixel text-[1.9em] leading-tight font-bold">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Portrait src={PHOTO} />
          </div>
        </div>
      </WindowFrame>
    </section>
  );
}
