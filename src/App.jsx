import Skills from "./components/Skills";
import { AboutMe, Header, Home, Projects, Contact } from "./components/index";
function App() {
  return (
    <section className="bg-primaryDark text-white font-Hind  ">
      <div className="max-w-[1366px] m-auto ">
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </section>
  );
}

export default App;
