import React from "react";

interface Props {
    language: string;
    altText?: string;
}

const DevIcon:React.FC<Props> = ({ language, altText, altType }) => {
    return (
        <div className="dev-icon">
            <i className={`devicon-${language.toLowerCase()}-${altType || "plain"}`} />
            <p className="txt icon-txt">{altText || language}</p>
        </div>
    );
}

export default DevIcon;
