import React from "react";

const AboutMe: React.FC = () => {
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
                <div className="dev-icon">
                    <i className="devicon-python-plain" />
                    <p className="txt icon-txt">Python</p>
                </div>
                <div className="dev-icon">
                    <i className="devicon-mysql-plain" />
                    <p className="txt icon-txt">MySQL</p>
                </div>
                <div className="dev-icon">
                    <i className="devicon-ruby-plain" />
                    <p className="txt icon-txt">Ruby</p>
                </div>
                <div className="dev-icon">
                    <i className="devicon-typescript-plain" />
                    <p className="txt icon-txt">TypeScript</p>
                </div>
                <div className="dev-icon">
                    <i className="devicon-clojure-plain" />
                    <p className="txt icon-txt">Clojure</p>
                </div>
                <div className="dev-icon">
                    <i className="devicon-javascript-plain" />
                    <p className="txt icon-txt">JavaScript</p>
                </div>
                <div className="dev-icon">
                    <i className="devicon-cplusplus-plain" />
                    <p className="txt icon-txt">C++</p>
                </div>
                <div className="dev-icon">
                    <i className="devicon-java-plain" />
                    <p className="txt icon-txt">Java</p>
                </div>
                <div className="dev-icon">
                    <i className="devicon-mongodb-plain" />
                    <p className="txt icon-txt">MongoDB</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;