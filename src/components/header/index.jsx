// src/components/header/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import transparentLogo from "/images/transparentLogo.png";
import {
    FiMoon,
    FiSun,
    FiGitBranch,
    FiCheckCircle,
    FiTool,
} from "react-icons/fi";

const Header = () => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState("dark");

    // Init theme from localStorage or default
    useEffect(() => {
        const storedTheme = localStorage.getItem("app-theme");
        const initialTheme = storedTheme || "dark";
        setTheme(initialTheme);

        if (initialTheme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, []);

    // Apply theme + persist
    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        localStorage.setItem("app-theme", theme);
    }, [theme]);

    const nextTheme = useMemo(() => {
        return theme === "light" ? "dark" : "light";
    }, [theme]);

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            {!logoLoaded && <div className="logoSkeleton" />}
                            <img
                                src={transparentLogo}
                                alt="software-engineering-core-notes"
                                onLoad={() => setLogoLoaded(true)}
                                style={{ opacity: logoLoaded ? 1 : 0 }}
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">
                                software-engineering-core-notes
                            </div>
                            <div className="subTitle">
                                At-a-glance software engineering revision
                            </div>
                        </div>
                    </div>

                    <div className="miniStats" aria-label="Quick focus areas">
                        <span className="stat">
                            <span className="sIcon">
                                <FiGitBranch />
                            </span>
                            <span className="sText">Workflow</span>
                        </span>

                        <span className="stat">
                            <span className="sIcon">
                                <FiCheckCircle />
                            </span>
                            <span className="sText">Quality</span>
                        </span>

                        <span className="stat">
                            <span className="sIcon">
                                <FiTool />
                            </span>
                            <span className="sText">Delivery</span>
                        </span>
                    </div>
                </div>

                <div className="rightSide">
                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={handleToggle}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme}`}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
