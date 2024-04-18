import { useEffect } from "react";

import "./App.css"

import LightDarkToggle from "./utils/LightDarkToggle";
import Home from "./pages/Home";

function App() {

  useEffect(() => {
    document.title = "Jaxon Adams";
  }, []);

  const appModeToggler = new LightDarkToggle();

  return (
    <>
    <Home appModeToggler={appModeToggler} />
    </>
  )
}

export default App
