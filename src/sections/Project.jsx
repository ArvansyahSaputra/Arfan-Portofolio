import WindowFrame from "../components/WindowFrame";
import ProjectCard from "../components/CardProject";
import RetroButton from "../components/RetroButton";
import { PROJECTS, GITHUB_URL } from "../data/project";

export default function Projects() {
  return (
    <section id="projects" className="flex min-h-svh snap-start">
      <WindowFrame title="Projects" tone="navy" status="Projects — Ready">
        <div className="dots checker-corner relative flex flex-1 flex-col justify-center overflow-hidden px-[clamp(20px,5vw,80px)] pt-11 pb-9">
          <div className="grid gap-[clamp(16px,2.5vw,36px)] md:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-[clamp(16px,2.5vw,36px)] flex justify-center">
            <RetroButton
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ⌥ Lihat semua project di GitHub →
            </RetroButton>
          </div>
        </div>
      </WindowFrame>
    </section>
  );
}
