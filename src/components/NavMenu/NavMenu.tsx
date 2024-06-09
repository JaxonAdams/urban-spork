import React, { useState } from "react";

interface Props {
    visible: boolean;
    setPage: Function;
}

const NavMenu: React.FC<Props> = ({ visible, setPage }) => {
    const [currentPageStr, setCurrentPageStr] = useState<string>("home");

    const currentlyOnPage = (pathname: string): boolean => {
        return currentPageStr == pathname;
    }

    const updateCurPage = (pageStr: string) => {
        setCurrentPageStr(pageStr);
        setPage(pageStr);
    };

    return (
        <nav className={`nav-menu ${visible && "nav-visible"}`}>
            <ul>
                <li className={`menu-item txt ${currentlyOnPage("home") && "txt-highlight"}`}
                    onClick={() => {updateCurPage("home")}}>
                    Home
                </li>
                <li className={`menu-item txt ${currentlyOnPage("aboutMe") && "txt-highlight"}`}
                    onClick={() => {updateCurPage("aboutMe")}}>
                    About Me
                </li>
                <li className={`menu-item txt ${currentlyOnPage("projects") && "txt-highlight"}`}
                    onClick={() => {updateCurPage("projects")}}>
                    Projects
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;