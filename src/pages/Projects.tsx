import React, { useEffect } from "react";

import projectsData from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import wguCapstone from "../assets/projects/capstone.png";
import premiumCalculator from "../assets/projects/premium_calculator_img.png";
import wgups from "../assets/projects/wgups_img.png";
import pyrpg from "../assets/projects/pyrpg_img.jfif";
import tinyurl from "../assets/projects/tinyurl_img.png";
import clordle from "../assets/projects/clordle_img.png";

interface ImageMap {
    [key: string]: string;
}

const images: ImageMap = {
    "WGU Capstone - ML Loan Risk Assessment": wguCapstone,
    "Premium Calculator": premiumCalculator,
    "WGUPS": wgups,
    "PyGame RPG": pyrpg,
    "URL Shortener": tinyurl,
    "Clordle": clordle,
};

const Projects: React.FC = () => {

    useEffect(() => {
        document.title = "Jaxon Adams | Projects";
    });

    return (
        <div className="projects">
            {projectsData.map(project => {
                return <ProjectCard project={project} key={project.projectTitle} 
                                    imageSrc={images[project.projectTitle]} />;
            })}
        </div>
    );
}

export default Projects;
