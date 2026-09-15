import "./App.css";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Nav from "./components/navbar.jsx";
import Skills from "./components/skills.jsx";
import { StarBackground } from "./components/star_bg.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <StarBackground />
      <main className="app-main">
        <Nav />
        <Hero />
        <About />
        <Projects />
         <Skills />
        <Contact />
      </main>
    </div>
  );
}