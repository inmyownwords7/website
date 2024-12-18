import React, { useState } from "react";
import styles from "./Header.module.css";
import { useTheme } from "../../context/ThemeContext.tsx";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { darkMode, setDarkMode } = useTheme();

    return (
        <header className={styles.header}>
            <div className={styles.containerWrapper}>
                {/* Logo and Light Mode Button in Flex */}
                <div className={styles.leftSection}>
                    <a href="#" className={styles.logo}>
                        MyWebsite
                    </a>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={styles.lightModeButton}
                    >
                        {darkMode ? "Dark" : "Light"}
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
                    <ul className={styles.navList}>
                        <li>
                            <a href="#home" className={styles.navItem}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className={styles.navItem}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#services" className={styles.navItem}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={styles.navItem}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={styles.hamburger}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
