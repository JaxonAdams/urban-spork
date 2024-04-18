import React from "react";

import LightDarkToggle from "../utils/LightDarkToggle";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

interface Props {
    appModeToggler: LightDarkToggle
}

const Home: React.FC<Props> = ({ appModeToggler }) => {
    return (
        <>
        <Header />
        <main>
            <Hero />
        </main>
        <Footer toggler={appModeToggler} />
        </>
    );
}

export default Home;