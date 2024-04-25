import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";

import Hero from "../components/Hero/Hero";
import LinkButton from "../components/LinkButton/LinkButton";

const Home: React.FC = () => {
    return (
        <>
        <Hero />
        <div className="links-container">
            <LinkButton icon={<Github />} displayText="GitHub" />
            <LinkButton icon={<Linkedin />} displayText="LinkedIn"/>
        </div>
        </>
    );
}

export default Home;