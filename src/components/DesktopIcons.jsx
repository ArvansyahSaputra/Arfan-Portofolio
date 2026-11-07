import { ICONS } from "../data/welcome";

export default function DesktopIcons() {
  return (
    <nav
      aria-label="Desktop"
      className="flex flex-row flex-wrap justify-center gap-2 border-2 border-t-shade border-l-shade border-r-hi border-b-hi bg-black/5 px-2.5 pt-3 pb-3.5 shadow-[3px_3px_0_var(--color-ink)] md:flex-col md:flex-nowrap md:items-center md:gap-[clamp(8px,2vh,22px)]"
    >
      <span className="-mx-2.5 -mt-3 mb-1 block basis-[calc(100%+20px)] self-stretch bg-navy px-2 py-0.5 font-pixel text-xs font-bold text-white md:basis-auto">
        Desktop
      </span>
      {ICONS.map((icon) => (
        <a
          key={icon.label}
          href={icon.href}
          {...(icon.external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          {...(icon.download && { download: true })}
          className="group flex w-[clamp(84px,7vw,110px)] flex-col items-center border-2 border-transparent p-1.5 text-center text-xs font-bold text-ink no-underline hover:border-dotted hover:border-white hover:bg-navy hover:text-white focus-visible:border-dotted focus-visible:border-white focus-visible:bg-navy focus-visible:text-white focus-visible:outline-0"
        >
          <span
            aria-hidden="true"
            className="mb-1 grid h-[clamp(42px,6.2vh,76px)] w-[clamp(42px,6.2vh,76px)] place-items-center border-2 border-t-hi border-l-hi border-r-shade border-b-shade bg-silver text-[clamp(22px,3.6vh,42px)] leading-none shadow-[2px_2px_0_var(--color-ink)] transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0_var(--color-ink)] group-active:translate-x-px group-active:translate-y-px group-active:shadow-none"
          >
            {icon.glyph}
          </span>
          {icon.label}
        </a>
      ))}
    </nav>
  );
}
