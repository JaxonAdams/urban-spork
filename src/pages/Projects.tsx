import React from "react";

import projectsData from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import wgups from "../assets/projects/wgups_img.png";
import pyrpg from "../assets/projects/pyrpg_img.jfif";
import tinyurl from "../assets/projects/tinyurl_img.png";

interface ImageMap {
    [key: string]: string;
}

const images: ImageMap = {
    "WGUPS": wgups,
    "PyGame RPG": pyrpg,
    "URL Shortener": tinyurl
};

const Projects: React.FC = () => {

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