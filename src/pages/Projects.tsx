import React, { useEffect } from "react";

import projectsData from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Projects: React.FC = () => {

    useEffect(() => {
        console.log(projectsData);
    }, []);



    return (
        <div className="projects">
            {projectsData.map(project => {
                return <ProjectCard key={project.projectTitle} project={project} />;
            })}
        </div>
    );
}

export default Projects;