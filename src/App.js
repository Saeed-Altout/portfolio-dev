import React, { useEffect } from "react";
import "./App.css";
import { Hero, Navbar, Services, Portfolio, Footer } from "./layouts";
import { useStateContext } from "./contexts/ProviderContexts";
import { styles } from "./data/styles";
import WhatsNew from "./layouts/WhatsNew";
import GetStarted from "./layouts/GetStarted";
import { FiSettings } from "react-icons/fi";
import Resume from "./layouts/Resume";
import About from "./layouts/About";
function App() {
  const { setActiveMenu, currentMode, setCurrentMode, setIsClickedMode } =
    useStateContext();
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    const icon = localStorage.getItem("icon");
    if (icon === "sun" && mode === "dark") {
      setCurrentMode(mode);
      setIsClickedMode(true);
    } else {
      setCurrentMode(mode);
      setIsClickedMode(false);
    }
  }, [currentMode]);
  return (
    <div
      lang="ar"
      dir="rtl"
      className={currentMode === "dark" ? "dark" : null}
      id="home"
    >
      <FiSettings
        className="fixed text-3xl text-teal-500 cursor-pointer lg:hidden bottom-5 right-10 md:right-20 lg:right-40 z-[1000]"
        onClick={() => {
          setActiveMenu(true);
        }}
      />

      <div
        className={`overflow-x-hidden dark:bg-slate-950 ${styles.primaryPadding} relative`}
      >
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <About />
          <Resume />
          <Services />
          <Portfolio />
          <WhatsNew />
          <GetStarted />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
