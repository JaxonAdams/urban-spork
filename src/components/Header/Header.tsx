import React from "react";

import NavMenu from "../NavMenu/NavMenu";

interface Props {
    showNavMenu: boolean
    setShowNavMenu: Function;
    setPage: Function;
}

const Header: React.FC<Props> = ({ showNavMenu, setShowNavMenu, setPage }) => {

    return (
        <header>
            <div className="header-wrapper">
                <p className="txt header-txt">Jaxon Adams</p>
                <div className={`menu-btn ${showNavMenu && 'close'}`} 
                    onClick={() => setShowNavMenu(!showNavMenu)}>
                    <div className="btn-line" />
                    <div className="btn-line" />
                    <div className="btn-line" />
                </div>
            </div>
            <NavMenu visible={showNavMenu} setPage={setPage} />
        </header>
    );
}

export default Header;