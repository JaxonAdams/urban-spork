import React from "react";

const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
            <div className="about-me-txt-container">
                <h1 className="txt-container-header">Always Learning</h1>
                <p className="txt">
                    I'm a software engineer located in Eagle Mountain, Utah.
                    I tend to prefer writing server side code, but I have many
                    front-end skills as well.
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