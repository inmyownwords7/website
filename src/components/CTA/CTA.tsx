import React from "react";
import styles from "./CTA.module.css";
// import { useTheme } from "../../context/ThemeContext.tsx";

const CTA: React.FC = () => {
    // const { darkMode, setDarkMode } = useTheme();
    // console.log("Dark Mode:", !darkMode)
    return (
        <div className={styles.mainContent}>
            <h1 className={styles.mainTitle}>Welcome to My Website!</h1>
            {/*<button*/}
            {/*    onClick={() => setDarkMode(!darkMode)}*/}
            {/*    className={styles.ctaButton}*/}
            {/*>*/}
            {/*    Toggle {darkMode ? "Light" : "Dark"} Mode*/}
            {/*</button>*/}
        </div>
    );
};

export default CTA;
