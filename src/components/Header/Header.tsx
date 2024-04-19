import React from "react";

interface Props {
    showNavMenu: boolean
    setShowNavMenu: Function;
}

const Header: React.FC<Props> = ({ showNavMenu, setShowNavMenu }) => {

    return (
        <header>
            <p className="txt header-txt">Jaxon Adams</p>
            <div className={`menu-btn ${showNavMenu && 'close'}`} 
                 onClick={() => setShowNavMenu(!showNavMenu)}>
                <div className="btn-line" />
                <div className="btn-line" />
                <div className="btn-line" />
            </div>
        </header>
    );
}

export default Header;