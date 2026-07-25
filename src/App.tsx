import "./App.css";
import Hero from "./molecules/Hero/Hero";
import { Header } from "./organisms/Header/Header";

function App() {
  return (
    <>
      <div className="app-bg"></div>
      <div className="app-bg-vignette"></div>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
