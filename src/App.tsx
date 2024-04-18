import { useEffect } from "react";

import "./App.css"

import LightDarkToggle from "./utils/LightDarkToggle";
import Footer from "./components/Footer/Footer";

function App() {

  useEffect(() => {
    document.title = "Jaxon Adams";
  }, []);

  const appModeToggler = new LightDarkToggle();

  return (
    <>
    <main>
      <h1>Hello, world!</h1>
    </main>
    <Footer toggler={appModeToggler} />
    </>
  )
}

export default App
