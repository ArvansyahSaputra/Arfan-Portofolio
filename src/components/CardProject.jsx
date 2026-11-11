import { useRef, useState } from "react";
import RetroButton from "./RetroButton";

// Link luar dibuka di tab baru
const linkProps = (url) =>
  url.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export default function ProjectCard({
  label,
  title,
  description,
  tags,
  image,
  fallback,
  demo,
  source,
}) {
  const [failed, setFailed] = useState(!image);
  const dialogRef = useRef(null);

  return (
    <article className="flex flex-col border-2 border-ink bg-cream p-[clamp(12px,1.6vw,22px)] shadow-[3px_3px_0_var(--color-ink)] transition hover:-translate-x-0.75 hover:-translate-y-0.75 hover:shadow-[6px_6px_0_var(--color-ink)]">
      {/* screenshot dalam bingkai browser mini; klik untuk memperbesar */}
      <div className="relative mb-3 aspect-video overflow-hidden border-2 border-ink">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-10 flex h-4 items-center gap-1 bg-black/40 px-2"
        >
          <i className="size-1.5 rounded-full bg-white" />
          <i className="size-1.5 rounded-full bg-white" />
          <i className="size-1.5 rounded-full bg-white" />
        </div>

        {label && (
          <span className="absolute bottom-2 left-2 z-10 border-2 border-ink bg-maroon px-2 py-0.5 text-[.7em] font-bold text-white">
            {label}
          </span>
        )}

        {failed ? (
          <div
            aria-hidden="true"
            className="h-full w-full"
            style={{
              background: `linear-gradient(160deg, ${fallback[0]}, ${fallback[1]})`,
            }}
          >
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(135deg,transparent_48%,rgb(255_255_255/0.75)_50%,transparent_52%)]" />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => dialogRef.current?.showModal()}
            aria-label={`Perbesar gambar ${title}`}
            className="block h-full w-full cursor-zoom-in"
          >
            <img
              src={image}
              alt={`Tampilan ${title}`}
              loading="lazy"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover object-top"
            />
          </button>
        )}
      </div>

      <h3 className="font-pixel text-[1.5em] leading-tight font-bold">
        {title}
      </h3>
      <p className="my-1.5">{description}</p>

      <div className="mt-auto pt-2">
        <ul className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="border-2 border-ink bg-hi px-2.5 py-0.5 text-[.8em] font-bold"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(demo || source) && (
          <div className="mt-3 flex gap-2">
            {demo && (
              <RetroButton primary size="sm" href={demo} {...linkProps(demo)}>
                Live Demo ↗
              </RetroButton>
            )}
            {source && (
              <RetroButton size="sm" href={source} {...linkProps(source)}>
                Source Code
              </RetroButton>
            )}
          </div>
        )}
      </div>

      {/* jendela pop-up gambar penuh */}
      {!failed && (
        <dialog
          ref={dialogRef}
          onClick={(e) =>
            e.target === e.currentTarget && e.currentTarget.close()
          }
          className="m-auto max-h-[92vh] w-[min(1200px,94vw)] border-2 border-ink bg-cream p-0 shadow-[6px_6px_0_var(--color-ink)] backdrop:bg-black/70"
        >
          <div className="flex items-center justify-between bg-linear-to-r from-navy to-[#3d6bd1] px-2 py-1 font-pixel font-bold text-white">
            <span>{title}</span>
            <form method="dialog">
              <button
                aria-label="Tutup"
                className="h-4.5 w-5 border-2 border-t-hi border-l-hi border-r-shade border-b-shade bg-silver p-0 text-[11px] leading-none text-ink"
              >
                ×
              </button>
            </form>
          </div>
          <img
            src={image}
            alt={`Tampilan ${title}`}
            className="block max-h-[calc(92vh-36px)] w-full object-contain"
          />
        </dialog>
      )}
    </article>
  );
}
