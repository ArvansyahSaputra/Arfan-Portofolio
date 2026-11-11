export default function SkillTile({ name, icon, category }) {
  return (
    <li className="flex cursor-default flex-col items-center gap-2.5 border-2 border-ink bg-silver px-2 py-[clamp(18px,5vh,56px)] text-center font-bold shadow-bevel transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">
      <img
        src={icon}
        alt=""
        loading="lazy"
        className="size-[clamp(54px,7vw,110px)] object-contain"
      />
      {name}
      <small className="-mt-1.5 text-[.72em] font-normal opacity-75">
        {category}
      </small>
    </li>
  );
}
