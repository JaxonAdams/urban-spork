import React, { useEffect } from "react";

import projectsData from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import fakeNews from "../assets/projects/fake_news_img.png";
import wguCapstone from "../assets/projects/capstone.png";
import premiumCalculator from "../assets/projects/premium_calculator_img.png";
import pyrpg from "../assets/projects/pyrpg_img.jfif";
import clordle from "../assets/projects/clordle_img.png";

interface ImageMap {
    [key: string]: string;
}

const images: ImageMap = {
    "Fake News Classifier": fakeNews,
    "WGU Capstone - ML Loan Risk Assessment": wguCapstone,
    "Premium Calculator": premiumCalculator,
    "PyGame RPG": pyrpg,
    "Clordle": clordle,
};

const Projects: React.FC = () => {

    useEffect(() => {
        document.title = "Jaxon Adams | Projects";
    });

    return (
        <>
            <h1 className="txt-container-header">Recent Projects</h1>
            <div className="projects">
                {projectsData.map(project => {
                    return <ProjectCard project={project} key={project.projectTitle}
                        imageSrc={images[project.projectTitle]} />;
                })}
            </div>
        </>
    );
}

export default Projects;
