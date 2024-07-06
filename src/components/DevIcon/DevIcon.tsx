import React from "react";

interface Props {
    language: string;
    altText?: string;
}

const DevIcon:React.FC<Props> = ({ language, altText }) => {
    return (
        <div className="dev-icon">
            <i className={`devicon-${language.toLowerCase()}-plain`} />
            <p className="txt icon-txt">{altText || language}</p>
        </div>
    );
}

export default DevIcon;
