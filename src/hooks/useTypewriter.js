import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Mengetik teks huruf demi huruf. Jika reduce-motion aktif, teks langsung tampil penuh. */
export default function useTypewriter(text, { start = 900, speed = 70 } = {}) {
  const [count, setCount] = useState(() =>
    prefersReducedMotion() ? text.length : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let i = 0;
    let timer;
    const tick = () => {
      i += 1;
      setCount(i); // dipanggil dari timer (async), bukan langsung di body effect
      if (i < text.length) timer = setTimeout(tick, speed);
    };
    timer = setTimeout(tick, start);
    return () => clearTimeout(timer);
  }, [text, start, speed]);

  return text.slice(0, count);
}
