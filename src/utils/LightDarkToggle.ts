// Handles the website's light mode / dark mode toggle functionality.

interface Colors {
    background: string;
    secondary: string;
    highlight: string;
    txt: string;
}

class LightDarkToggle {
    private toggleStatus: boolean;
    private darkColors: Colors;
    private lightColors: Colors;

    constructor() {
        this.toggleStatus = (localStorage.getItem("darkMode") == "true") || false;
        console.log(this.toggleStatus);

        this.darkColors = {
            // background: "#242424",  // I might use this style later
            background: "#000000",
            secondary: "#062F4F",
            highlight: "#B82601",
            txt: "#FFFFFF"
        }

        this.lightColors = {
            background: "#EFEFEF",
            secondary: "#A9A9A9",
            highlight: "#FF3B3F",
            txt: "#000000"
        }

        this.updateColors(this.toggleStatus);
    }

    toggleMode = () => {
        this.toggleStatus = !this.toggleStatus;
        localStorage.setItem("darkMode", String(this.toggleStatus));
        console.log("LOCAL STORAGE UPDATED");
        console.log(this.toggleStatus, localStorage.getItem("darkMode"));
        this.updateColors(this.toggleStatus);
    }

    isToggled = () => {
        return this.toggleStatus;
    }

    updateColors = (prefersDark: boolean) => {
        const root = document.documentElement;

        const { background, secondary, highlight, txt } = prefersDark ? this.darkColors : this.lightColors;

        root.style.setProperty("--background", background);
        root.style.setProperty("--secondary", secondary);
        root.style.setProperty("--highlight", highlight);
        root.style.setProperty("--txt", txt)
    }
}

export default LightDarkToggle;