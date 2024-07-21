import React, { useState, useEffect } from "react";
import { SunFill, MoonFill } from "react-bootstrap-icons";
import LightDarkToggle from "../../utils/LightDarkToggle";

interface Props {
    toggler: LightDarkToggle
}

const Footer: React.FC<Props> = ({ toggler }) => {
    const [isToggled, setToggled] = useState<boolean>(false);

    useEffect(() => {
        setToggled(toggler.isToggled());
    }, []);

    const updateToggleStatus = () => {
        toggler.toggleMode();
        setToggled(toggler.isToggled());
    }

    const getSliderElement = (isToggled: boolean): JSX.Element => {
        if (isToggled) {
            return <MoonFill className="toggle-icon on" />
        }

        return <SunFill className="toggle-icon off" />
    }

    return (
        <footer data-testid="footer">
            <div className="footer-element">
                <a className="footer-txt" href="mailto:jaxon.adams01@gmail.com">Email me!</a>
            </div>
            <div className={`footer-element slider-toggle ${isToggled ? 'on' : ''}`} id="light-dark-toggle" onClick={updateToggleStatus} data-testid="light-dark-toggle">
                <div className="slider-track">
                    {getSliderElement(isToggled)}
                </div>
            </div>
        </footer>
    )
}

export default Footer;