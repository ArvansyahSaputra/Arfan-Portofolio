import WindowFrame from "../components/WindowFrame.jsx";
import Coin from "../components/Coin.jsx";
import RetroButton from "../components/RetroButton.jsx";
import Timeline from "../components/timeline.jsx";
import { EXPERIENCES } from "../data/experience.js";
import { STATS } from "../data/about.js";
export default function About() {
  return (
    <section id="about" className="flex min-h-svh snap-start">
      <WindowFrame title="▣ About.exe" tone="navy" status="About.exe — Ready">
        <div className="dots relative flex justify-center px-[clamp(20px,5vw,80px)] pt-5 pb-9">
          {/* Window Tentang Saya */}
          <WindowFrame
            title="▣ About.exe"
            tone="navy"
            status="About.exe — Ready"
          >
            <div className="dots flex p-10 gap-10">
              <div className="my-auto">
                <Coin />
              </div>
              <div>
                <p className="text-[1.5em] font-retro font-bold">About Me</p>
                <p>
                  I’m a fresh graduate with a strong interest in web
                  development, especially front-end. I enjoy learning new
                  technologies and turning ideas into interactive websites.
                </p>
                <dl className="mt-[clamp(10px,5vh,48px)] gap-[clamp(12px,2vw,28px)]">
                  {STATS.map((s) => (
                    <div
                      key={s.label + s.value}
                      className="flex-col border-2 border-ink bg-silver px-4.5 py-2.5 shadow-bevel w-70"
                    >
                      <p className="order-2 text-[.75em]">
                        <span className="mr-2">{s.value}</span>
                        <span>{s.label}</span>
                      </p>
                    </div>
                  ))}
                </dl>
                <div className="mt-4.5 flex flex-wrap gap-3">
                  <RetroButton href="#about">View More ⏩</RetroButton>
                </div>
              </div>
            </div>
          </WindowFrame>
          {/* Window Pengalaman */}
          <WindowFrame
            title="Experience"
            tone="navy"
            status="Experience — Ready"
            className="max-md:border-t-0 md:border-l-0"
          >
            <div className="dots checker-corner relative flex flex-1 flex-col justify-center overflow-hidden px-[clamp(20px,5vw,80px)] pt-11 pb-9">
              <Timeline items={EXPERIENCES} />
              <div
                aria-hidden="true"
                className="mt-3.5 text-right text-[clamp(20px,10vw,150px)] leading-none"
              >
                📁
              </div>
            </div>
          </WindowFrame>
        </div>
      </WindowFrame>
    </section>
  );
}
