import React from "react";

interface Props {
    icon: React.ReactElement,
    displayText: string,
    url: string
}

const LinkButton: React.FC<Props> = ({ icon, displayText, url }: Props) => {
    return (
        <a className="link-button" href={url} target="_Blank">
            {icon}
            <p>{displayText}</p>
        </a>
    );
}

export default LinkButton;