import WindowFrame from "../components/WindowFrame";
import ContactForm from "../components/ContactForm";
import RetroButton from "../components/RetroButton";
import { CONTACTS, EMAIL } from "../data/Contact";
import { CV_URL } from "../data/welcome";

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-svh snap-start">
      <WindowFrame title="Contact Me" tone="navy" status="Contact Me — Ready">
        <div className="dots checker-corner relative flex flex-1 flex-col justify-center overflow-hidden px-[clamp(20px,5vw,80px)] pt-11 pb-9">
          <div className="grid gap-[clamp(20px,4vw,56px)] md:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="font-pixel text-[clamp(30px,4vw,56px)] font-bold">
                Get in Touch!
              </h2>
              <p>
                Feel free to contact me for collaboration or just to say hi!
              </p>

              <ul className="my-[clamp(14px,3vh,30px)] space-y-[clamp(14px,3vh,30px)]">
                {CONTACTS.map((c) => (
                  <li
                    key={c.label}
                    className="flex items-center gap-3 break-all text-[1.05em]"
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-8.5 flex-none place-items-center bg-ink font-pixel font-bold text-cream"
                    >
                      {c.badge}
                    </span>
                    <a
                      href={c.href}
                      {...(c.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="text-ink hover:underline"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <RetroButton primary href={`mailto:${EMAIL}`}>
                  ✉ Email Saya
                </RetroButton>
                <RetroButton href={CV_URL} download>
                  ⬇ Download CV
                </RetroButton>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </WindowFrame>
    </section>
  );
}
