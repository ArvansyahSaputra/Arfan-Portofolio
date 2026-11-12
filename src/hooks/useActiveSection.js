import { useEffect, useState } from "react";

/** Mengembalikan id section yang sedang tampil di layar. `ids` harus array yang stabil (konstanta). */
export default function useActiveSection(ids, threshold = 0.3) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids, threshold]);

  return active;
}
