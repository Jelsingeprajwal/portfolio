import { easeOut, motion } from "framer-motion";
import Skills from "./components/Skills";
import { AboutMe, Header, Home, Projects, Contact } from "./components/index";
import { styles } from "./styles";

function App() {
  return (
    <section className="bg-primaryDark text-white font-Hind ">
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: "-100vh" }}
        transition={{ delay: 1, duration: 0.7, ease: easeOut }}
        className={` bg-black fixed w-[100vw] h-[100vh] ${styles.flexCenter} z-[100] `}
      >
        <p className="relative text-3xl md:text-6xl lg:text-8xl font-bold font-DancingScript">
          Jelsinge Prajwal
        </p>
      </motion.div>
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
