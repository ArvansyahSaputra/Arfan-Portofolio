import { useState } from "react";
import RetroButton from "./RetroButton";
import { EMAIL } from "../data/Contact";

const field =
  "mb-2.5 w-full border-2 border-t-shade border-l-shade border-r-hi border-b-hi bg-hi p-[.8em] text-ink outline-2 outline-ink focus:outline-3 focus:outline-maroon";

/** Form kontak. Saat dikirim, membuka aplikasi email dengan isi yang sudah terisi (mailto). */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setStatus("⚠ Lengkapi semua kolom dulu ya.");
      return;
    }
    const subject = encodeURIComponent(`Halo Arfansyah — dari ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("✔ Membuka aplikasi email Anda…");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        className={field}
        aria-label="Nama"
        placeholder="Your Name"
        value={form.name}
        onChange={update("name")}
      />
      <input
        className={field}
        type="email"
        aria-label="Email"
        placeholder="Your Email"
        value={form.email}
        onChange={update("email")}
      />
      <textarea
        className={`${field} min-h-[clamp(120px,22vh,240px)] resize-y`}
        aria-label="Pesan"
        placeholder="Your Message..."
        value={form.message}
        onChange={update("message")}
      />
      <RetroButton primary type="submit" className="w-full justify-center">
        ➤ Send Message
      </RetroButton>
      <p
        role="status"
        aria-live="polite"
        className="mt-2.5 min-h-5 font-bold text-maroon"
      >
        {status}
      </p>
    </form>
  );
}
