import Skills from "./components/Skills";
import { AboutMe, Header, Home, Projects } from "./components/index";
function App() {
  return (
    <section className="bg-primaryDark text-white font-Hind  ">
      <div className="max-w-[1366px] m-auto ">
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <div className="h-[100vh] outline"></div>
      </div>
    </section>
  );
}

export default App;
