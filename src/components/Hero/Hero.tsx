import React from "react";

import portrait from "../../assets/portrait.png";

const Hero: React.FC = () => {
    
    return (
        <div className="hero">
            <div className="hero-grid">
                <div className="hero-title">
                    <h2>Hello, I'm <span className="txt-highlight">Jaxon</span></h2>
                    <p>Software Engineer</p>
                </div>
                <div className="portrait-wrapper">
                    <div className="hero-portrait portrait-container">
                        <img className="portrait" src={portrait} alt="Jaxon Adams" />
                    </div>
                </div>
            </div>
            <div className="hero-intro-txt">
                <p className="txt">
                    I'm currently a product integrations engineer building new automations
                    and integrating other platforms at LoanPro. At the moment I'm mostly
                    building with Python and Ruby.
                </p>
            </div>
        </div>
    );
}

export default Hero;