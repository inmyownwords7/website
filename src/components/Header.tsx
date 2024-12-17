import React, { useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            {/* Use container inline and apply custom module styles */}
            <div className={`container ${styles.container}`}>
                {/* Logo */}
                <div>
                    <a href="#" className={styles.logo}>
                        MyWebsite
                    </a>
                </div>

                {/* Mobile Menu Button */}
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

                {/* Navigation Links */}
                <nav
                    className={`${styles.mobileMenu} ${
                        isMenuOpen ? styles.showMenu : styles.hideMenu
                    }`}
                >
                    <ul className={styles.navLinks}>
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

                {/* Call to Action */}
                <div>
                    <a href="#" className={styles.ctaButton}>
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
