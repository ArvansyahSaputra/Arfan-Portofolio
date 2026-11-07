import Boot from "./components/Boot";
import Welcome from "./sections/Welcome";
import About from "./sections/About";

export default function App() {
  return (
    <>
      <Boot />
      <main>
        <Welcome />
        <About />
      </main>
    </>
  );
}
