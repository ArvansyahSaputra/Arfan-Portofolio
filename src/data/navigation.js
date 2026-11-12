import { CV_URL } from "./welcome";

// id harus sama dengan id pada <section id="..."> di masing-masing section
export const SECTIONS = [
  { id: "home", label: "▣ Welcome", menuLabel: "▣ Home" },
  { id: "about", label: "About", menuLabel: "💻 About & Experience" },
  { id: "skills", label: "Skills", menuLabel: "🧰 Skills" },
  { id: "projects", label: "Projects", menuLabel: "📁 Projects" },
  { id: "contact", label: "Contact", menuLabel: "✉ Contact" },
];

export const SECTION_IDS = SECTIONS.map((s) => s.id);

export const START_MENU_EXTRA = { label: "⬇ Download CV", href: CV_URL };
