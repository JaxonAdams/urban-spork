import React, { useState, useEffect } from "react";
import { SunFill, MoonFill } from "react-bootstrap-icons";

interface Colors {
    background: string;
    secondary: string;
    highlight: string;
    txt: string;
}

const Footer: React.FC = () => {
    const [isToggled, setToggled] = useState<boolean>(false);

    useEffect(() => {
        const root = document.documentElement;

        const darkColors: Colors = {
            background: "#242424",
            secondary: "#062F4F",
            highlight: "#B82601",
            txt: "#FFFFFF"
        }

        const lightColors: Colors = {
            background: "#EFEFEF",
            secondary: "#A9A9A9",
            highlight: "#FF3B3F",
            txt: "#000000"
        }

        const { background, secondary, highlight, txt } = isToggled ? darkColors : lightColors;

        root.style.setProperty("--background", background);
        root.style.setProperty("--secondary", secondary);
        root.style.setProperty("--highlight", highlight);
        root.style.setProperty("--txt", txt)
    }, [isToggled]);

    const toggle = () => {
        setToggled(!isToggled);
    }

    const getSliderElement = (isToggled: boolean): JSX.Element => {
        if (isToggled) {
            return <MoonFill className="toggle-icon on" />
        }

        return <SunFill className="toggle-icon off" />
    }

    return (
        <footer>
            <div className="footer-element">
                <p className="footer-txt">2024</p>
            </div>
            <div className={`footer-element slider-toggle ${isToggled ? 'on' : ''}`} id="light-dark-toggle" onClick={toggle}>
                <div className="slider-track">
                    {getSliderElement(isToggled)}
                </div>
            </div>
        </footer>
    )
}

export default Footer;