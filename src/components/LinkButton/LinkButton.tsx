import React from "react";

interface Props {
    icon: React.ReactElement,
    displayText: string
}

const LinkButton: React.FC<Props> = ({ icon, displayText }: Props) => {
    return (
        <div className="link-button">
            {icon}
            <p>{displayText}</p>
        </div>
    );
}

export default LinkButton;