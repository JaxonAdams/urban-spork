import React from "react";

interface Props {
    visible: boolean;
}

const NavMenu: React.FC<Props> = ({ visible }) => {

    const currentlyOnPage = (pathname: string): boolean => {
        return window.location.pathname == pathname;
    }

    return (
        <nav className={`nav-menu ${visible && "nav-visible"}`}>
            <ul>
                <li className={`menu-item txt ${currentlyOnPage("/") && "txt-highlight"}`}>
                    Home
                </li>
                <li className={`menu-item txt ${currentlyOnPage("/about-me") && "txt-highlight"}`}>
                    About Me
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;