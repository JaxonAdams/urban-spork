import React from "react";

interface Props {
    language: string;
}

const DevIcon:React.FC<Props> = ({ language }) => {
    return (
        <div className="dev-icon">
            <i className={`devicon-${language.toLowerCase()}-plain`} />
            <p className="txt icon-txt">{language}</p>
        </div>
    );
}

export default DevIcon;
