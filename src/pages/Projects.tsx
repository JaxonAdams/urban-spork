import React from "react";

import projectsData from "../assets/projects/projects.json";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Projects: React.FC = () => {

    return (
        <div className="projects">
            {projectsData.map(project => {
                return <ProjectCard project={project} key={project.projectTitle} />;
            })}
        </div>
    );
}

export default Projects;