import { lazy, useEffect } from "react";
import Header from "./organisms/Header/Header";
import { LazySection } from "./atoms/components/lazySection/LazySection";
import Hero from "./organisms/Hero/Hero";
import "./App.scss";
import { scrollToSection } from "./atoms/handlers/scrollToSection";
import { consumePendingHash } from "./atoms/handlers/pendingHash";
import { observeHeaderHeight } from "./atoms/handlers/syncHeaderHeight";
import { AboutSkeleton } from "./organisms/About/About.skeleton";
import { SkillsSkeleton } from "./organisms/Skills/Skills.skeleton";
import { ProjectsSkeleton } from "./organisms/Projects/Projects.skeleton";
import { ExperienceSkeleton } from "./organisms/Experience/Experience.skeleton";
import { ContactsSkeleton } from "./organisms/Contacts/Contacts.skeleton";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const About = lazy(() => import("./organisms/About/About"));
const Skills = lazy(() => import("./organisms/Skills/Skills"));
const Projects = lazy(() => import("./organisms/Projects/Projects"));
const Experience = lazy(() => import("./organisms/Experience/Experience"));
const Contacts = lazy(() => import("./organisms/Contacts/Contacts"));

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
        <LazySection id="skills" skeleton={<SkillsSkeleton />}>
          <Skills />
        </LazySection>
        <LazySection id="projects" skeleton={<ProjectsSkeleton />}>
          <Projects />
        </LazySection>
        <LazySection id="experience" skeleton={<ExperienceSkeleton />}>
          <Experience />
        </LazySection>
        <LazySection id="contacts" skeleton={<ContactsSkeleton />}>
          <Contacts />
        </LazySection>
      </main>
    </>
  );
}
export default App;
