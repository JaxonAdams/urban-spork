import { useState, useEffect } from "react";

import "./App.css"

import LightDarkToggle from "./utils/LightDarkToggle";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer/Footer";

interface PageMapping {
  [key: string]: React.ReactNode;
}

function App() {
  const [currentPage, setCurrentPage] = useState<React.ReactNode>(<Home />);
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Jaxon Adams";
  }, []);

  const appModeToggler = new LightDarkToggle();

  const setPage = (pageStr: string): string => {
    const pageMap: PageMapping = {
      "home": <Home />,
      "aboutMe": <AboutMe />
    };

    setCurrentPage(pageMap[pageStr]);
    setShowNavMenu(false);
  
    return pageStr;
  }

  return (
    <>
      <Header showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu}
              setPage={setPage} />
      <main>
        {currentPage}
      </main>
      <Footer toggler={appModeToggler} />
    </>
  )
}

export default App
