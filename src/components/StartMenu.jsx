import { SECTIONS, START_MENU_EXTRA } from "../data/navigation";

const item =
  "block px-3.5 py-2 font-pixel text-[15px] font-bold text-ink no-underline hover:bg-navy hover:text-white focus-visible:bg-navy focus-visible:text-white";

export default function StartMenu({ id, onClose }) {
  return (
    <nav
      id={id}
      aria-label="Menu Start"
      className="absolute bottom-[calc(100%+6px)] left-0 flex min-w-57.5 border-2 border-ink bg-silver shadow-[inset_2px_2px_0_var(--color-hi),inset_-2px_-2px_0_var(--color-shade),4px_4px_0_var(--color-ink)]"
    >
      <div
        aria-hidden="true"
        className="rotate-180 bg-linear-to-t from-navy to-[#6a8fe0] px-1.5 py-2.5 font-pixel text-xl font-bold tracking-wide text-white [writing-mode:vertical-rl]"
      >
        Arfansyah 98
      </div>

      <ul className="flex-1 p-1">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} onClick={onClose} className={item}>
              {s.menuLabel}
            </a>
          </li>
        ))}
        <li aria-hidden="true">
          <hr className="mx-0.5 my-1 border-0 border-t-2 border-b-2 border-t-shade border-b-hi" />
        </li>
        <li>
          <a
            href={START_MENU_EXTRA.href}
            download
            onClick={onClose}
            className={item}
          >
            {START_MENU_EXTRA.label}
          </a>
        </li>
      </ul>
    </nav>
  );
}
