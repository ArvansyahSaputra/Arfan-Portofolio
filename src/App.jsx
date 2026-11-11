import Boot from "./components/Boot";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Skill from "./sections/skill";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Boot />
      <main>
        <Welcome />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
    </>
  );
}
