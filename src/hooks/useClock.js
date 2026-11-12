import { useEffect, useState } from "react";

const format = () =>
  new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

/** Jam HH.MM yang diperbarui tiap 30 detik. */
export default function useClock() {
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}
