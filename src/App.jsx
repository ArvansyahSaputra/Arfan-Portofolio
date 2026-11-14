import Boot from "./components/Boot";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Skill from "./sections/skill";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Taskbar from "./sections/Taskbar";
import DesktopNotice from "./components/DesktopNotice";

export default function App() {
  return (
    <>
      <div className="lg:hidden">
        <DesktopNotice />
      </div>
      <div className="hidden lg:block">
        <Boot />
        <main>
          <Welcome />
          <About />
          <Skill />
          <Project />
          <Contact />
          <Taskbar />
        </main>
      </div>
    </>
  );
}
