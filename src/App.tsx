import "./App.css";
import Hero from "./organisms/Hero/Hero";
import Header from "./organisms/Header/Header";
import About from "./organisms/About/About";
import Skills from "./organisms/Skills/Skills";
import Projects from "./organisms/Projects/Projects";
import Experience from "./organisms/Experience/Experience";
import Contacts from "./organisms/Contacts/Contacts";

function App() {
  return (
    <>
      <div className="app-bg"></div>
      <div className="app-bg-vignette"></div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contacts />
      </main>
    </>
  );
}

export default App;
