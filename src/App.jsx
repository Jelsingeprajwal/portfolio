import { AboutMe, Header, Home } from "./components/index";
function App() {
  return (
    <section className="bg-primaryDark text-white font-Hind">
      <div className="max-w-[1366px] m-auto">
        <Header />
        <Home />
        <AboutMe />
      </div>
    </section>
  );
}

export default App;
