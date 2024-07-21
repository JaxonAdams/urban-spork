import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";

import Hero from "../components/Hero/Hero";
import LinkButton from "../components/LinkButton/LinkButton";

const Home: React.FC = () => {
    return (
        <div id="home-page" data-testid="home-page">
            <Hero />
            <div className="links-container">
                <LinkButton icon={<Github />} displayText="GitHub" url="https://github.com/JaxonAdams" />
                <LinkButton icon={<Linkedin />} displayText="LinkedIn" url="https://www.linkedin.com/in/jaxon-adams-ba5743229/" />
            </div>
        </div>
    );
}

export default Home;