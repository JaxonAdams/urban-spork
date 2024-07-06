import React from "react";
import DevIcon from "../components/DevIcon/DevIcon";

const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
            <div className="about-me-txt-container">
                <h1 className="txt-container-header">Always Learning</h1>
                <p className="txt">
                    I'm a software engineer located in Eagle Mountain, Utah.
                    I prefer writing server side code, but I have many front-end
                    skills as well.
                </p>
                <p className="txt">
                    I'm always working to improve as a developer, and I love picking
                    up new skills. I'm drawn to the challenges inherent in software
                    development, and find designing and building software extremely
                    rewarding.
                </p>
            </div>
            <div className="about-me-txt-container">
                <h1 className="txt-container-header">Languages & Technologies</h1>
                <p className="txt">
                    I'm most comfortable writing code in Python, but I have experience
                    working with many other languages. Additionally, I've worked with
                    SQL and NoSQL databases as well as REST, SOAP, and GraphQL APIs.
                </p>
                <p className="txt">
                    I'm quick to adapt to new environments, and learn new skills and
                    technologies quickly.
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