import { lazy, useEffect } from "react";
import Header from "./organisms/Header/Header";
import { LazySection } from "./atoms/components/lazySection/LazySection";
import { AboutSkeleton } from "./organisms/About/About.skeleton";
import Hero from "./organisms/Hero/Hero";
const About = lazy(() => import("./organisms/About/About"));
const Skills = lazy(() => import("./organisms/Skills/Skills"));
const Projects = lazy(() => import("./organisms/Projects/Projects"));
const Experience = lazy(() => import("./organisms/Experience/Experience"));
const Contacts = lazy(() => import("./organisms/Contacts/Contacts"));
import "./App.css";
import { scrollToSection } from "./atoms/handlers/scrollToSection";
import { consumePendingHash } from "./atoms/handlers/pendingHash";
import { observeHeaderHeight } from "./atoms/handlers/syncHeaderHeight";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function App() {
  useEffect(() => observeHeaderHeight(), []);

  useEffect(() => {
    const hash = consumePendingHash() || window.location.hash.slice(1);
    if (!hash) return;

    scrollToSection(hash, { updateHash: true, resetScroll: true });
  }, []);
  return (
    <>
      <div className="app-bg">
        <img src="bg.webp" alt="фон" fetchPriority="high" />
      </div>
      <div className="app-bg-vignette"></div>
      <Header />
      <main>
        <Hero />
        <LazySection id="about" skeleton={<AboutSkeleton />}>
          <About />
        </LazySection>
        <LazySection id="skills" skeleton={<AboutSkeleton />}>
          <Skills />
        </LazySection>
        <LazySection id="projects" skeleton={<AboutSkeleton />}>
          <Projects />
        </LazySection>
        <LazySection id="experience" skeleton={<AboutSkeleton />}>
          <Experience />
        </LazySection>
        <LazySection id="contacts" skeleton={<AboutSkeleton />}>
          <Contacts />
        </LazySection>
      </main>
    </>
  );
}
export default App;
