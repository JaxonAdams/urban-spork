import React, { useEffect } from "react";
import DevIcon from "../components/DevIcon/DevIcon";

const AboutMe: React.FC = () => {
    
    useEffect(() => {
        document.title = "Jaxon Adams | About Me";
    });

    return (
        <div className="about-me">
            <div className="about-me-txt-container">
                <h1 className="txt-container-header">Solving Problems With Software</h1>
                <p className="txt">
                    I'm a backend-focused software engineer with a passion for building scalable,
                    reliable systems that solve real-world problems. With professional experience
                    in several programming languages, I bring strong, multi-paradigm expertise in
                    backend development while still maintaining a solid foundation in frontend technologies.
                </p>
                <p className="txt">
                    I thrive in fast-paced, collaborative environments where learning is constant and
                    challenges are meaningful. Whether I'm designing RESTful APIs, optimizing database
                    queries, or shipping features in production, I'm driven by clean architecture and
                    thoughtful design.
                </p>
                <p className="txt">
                    I take pride in my ability to quickly pick up new tools and frameworks, contribute
                    to cross-functional teams, and deliver well-tested, maintainable code. Currently,
                    I'm especially interested in cloud-native development, serverless architecture,
                    and scalable data systems.
                </p>
            </div>
            <div className="about-me-txt-container">
                <h1 className="txt-container-header">Core Skills</h1>
                <p className="txt">
                    My technical skill set includes proficiency in Python, Go, Clojure, TypeScript,
                    Java, and Ruby. I have hands-on exprience with relational databases like MySQL and
                    PostgreSQL, as well as NoSQL systems like DynamoDB and MongoDB. I'm comfortable
                    designing and working with RESTful and GraphQL APIs, and regularly use tools like
                    Docker, Git, and AWS for development and deployment.
                </p>
                <p className="txt">
                    My ability to quickly adapt to new environments and rapidly acquire new skills 
                    and technologies is one of my greatest assets.
                </p>
            </div>
            <div className="about-me-txt-container language-carousel">
                <DevIcon language="Python" />
                <DevIcon language="Go" altType="original-wordmark" altText="Golang" />
                <DevIcon language="Clojure" />
                <DevIcon language="TypeScript" />
                <DevIcon language="JavaScript" />
                <DevIcon language="Java" />
                <DevIcon language="MySQL" />
                <DevIcon language="AmazonWebServices" altText="AWS" />
                <DevIcon language="MongoDB" />
            </div>
        </div>
    );
}

export default AboutMe;
