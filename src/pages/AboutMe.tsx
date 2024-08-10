import React, { useEffect } from "react";
import DevIcon from "../components/DevIcon/DevIcon";

const AboutMe: React.FC = () => {
    
    useEffect(() => {
        document.title = "Jaxon Adams | About Me";
    });

    return (
        <div className="about-me">
            <div className="about-me-txt-container">
                <h1 className="txt-container-header">Always Learning</h1>
                <p className="txt">
                    As a dedicated software engineer based in Eagle Mountain, Utah, I 
                    specialize in server-side development while also possessing a robust 
                    set of front-end skills.
                </p>
                <p className="txt">
                    My passion for continuous improvement drives me to constantly enhance my 
                    capabilities and embrace new technologies. I love the inherent challenges
                    of software development, and I find immense satisfaction in designing and
                    building innovative software solutions.
                </p>
            </div>
            <div className="about-me-txt-container">
                <h1 className="txt-container-header">Languages & Technologies</h1>
                <p className="txt">
                    My expertise lies in Python, though I am proficient in a diverse array of
                    programming languages. I have extensive experience working with both SQL 
                    and NoSQL databases, and I am well-versed in REST, SOAP, and GraphQL APIs.
                </p>
                <p className="txt">
                    My ability to quickly adapt to new environments and rapidly acquire new skills 
                    and technologies is one of my greatest assets.
                </p>
            </div>
            <div className="about-me-txt-container language-carousel">
                <DevIcon language="Python" />
                <DevIcon language="Java" />
                <DevIcon language="Ruby" />
                <DevIcon language="TypeScript" />
                <DevIcon language="Clojure" />
                <DevIcon language="JavaScript" />
                <DevIcon language="MySQL" />
                <DevIcon language="CPlusPlus" altText="C++" />
                <DevIcon language="MongoDB" />
            </div>
        </div>
    );
}

export default AboutMe;
