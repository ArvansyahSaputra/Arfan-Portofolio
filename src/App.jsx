import Boot from "./components/Boot";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Skill from "./sections/skill";

export default function App() {
  return (
    <>
      <Boot />
      <main>
        <Welcome />
        <About />
        <Skill />
      </main>
    </>
  );
}
