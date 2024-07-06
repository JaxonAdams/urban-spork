import React from "react";
import { Github } from "react-bootstrap-icons";

import DevIcon from "../DevIcon/DevIcon";

interface Project {
    projectTitle: string;
    projectDescription: string;
    languages: string[];
    image: string;
    githubLink: string;
    deployedLink: string | null;
}

interface Props {
    project: Project;
    imageSrc: string;
}

const ProjectCard: React.FC<Props> = ({ project, imageSrc }) => {
    return (
        <div className="project-card">
            <div className="project-card-left">
                <h3 className="project-title">{project.projectTitle}</h3>
                <div className="project-img-container">
                    <img className="project-img" src={imageSrc} alt={project.projectTitle} />
                </div>
            </div>
            <div className="project-card-right">
                <a className="project-link" href={project.githubLink} target="_Blank">
                    <Github /> GitHub
                </a>
                <p className="project-desc">{project.projectDescription}</p>
                <ul className="project-languages">
                    {project.languages.map(language => {
                        return <DevIcon language={language} key={language} />;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;