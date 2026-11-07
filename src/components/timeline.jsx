/** Garis waktu vertikal dengan titik bulat. items: [{ title, period, description }] */
export default function Timeline({ items }) {
  return (
    <ol className="border-l-[3px] border-ink pl-7.5">
      {items.map((item) => (
        <li
          key={item.title}
          className="relative mb-[clamp(10px,2vh,24px)] text-[1.05em] last:mb-0 before:absolute before:top-1.25 before:-left-9.75 before:size-3.75 before:rounded-full before:bg-ink before:content-['']"
        >
          <h3 className="font-pixel text-[1.3em] leading-snug font-bold">
            {item.title}{" "}
            <span className="font-retro text-[.7em] font-normal">
              ({item.period})
            </span>
          </h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
