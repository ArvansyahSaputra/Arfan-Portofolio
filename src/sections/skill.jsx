import WindowFrame from "../components/WindowFrame";
import SkillTile from "../components/SkillTile";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="flex min-h-svh snap-start">
      <WindowFrame title="Skills" tone="navy" status="Skills — Ready">
        <div className="dots checker-corner relative flex flex-1 flex-col justify-center overflow-hidden px-[clamp(20px,5vw,80px)] pt-11 pb-9">
          <ul className="grid auto-rows-fr grid-cols-2 gap-[clamp(14px,2.5vw,32px)] md:grid-cols-4">
            {SKILLS.map((skill) => (
              <SkillTile key={skill.name} {...skill} />
            ))}
          </ul>
        </div>
      </WindowFrame>
    </section>
  );
}
