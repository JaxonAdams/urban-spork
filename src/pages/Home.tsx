import React from "react";

import LightDarkToggle from "../utils/LightDarkToggle";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface Props {
    appModeToggler: LightDarkToggle
}

const Home: React.FC<Props> = ({ appModeToggler }) => {
    return (
        <>
        <Header />
        <main>
            <h1>Hello, world!</h1>
        </main>
        <Footer toggler={appModeToggler} />
        </>
    );
}

export default Home;