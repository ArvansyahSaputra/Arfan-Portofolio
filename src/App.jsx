import Boot from "./components/Boot";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Skill from "./sections/skill";

export default function App() {
  return (
    <>
      <Boot />
      <main>
        <img src="/assets/tools/html.png" alt="tes" width="80" />
        <Welcome />
        <About />
        <Skill />
      </main>
    </>
  );
}
