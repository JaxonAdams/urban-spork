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
        </div>
    );
}

export default AboutMe;