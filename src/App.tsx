import "./App.css"

import LightDarkToggle from "./utils/LightDarkToggle";

import Footer from "./components/Footer/Footer";

function App() {

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
