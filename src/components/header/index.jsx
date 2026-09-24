// src/components/header/index.jsx
import { useEffect, useMemo, useState } from "react";
import { FiCheckCircle, FiGitBranch, FiMoon, FiSun, FiTool } from "react-icons/fi";
import { Styled } from "./styled";

const Header = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("app-theme") || "dark");


    useEffect(() => {
        document.documentElement.toggleAttribute(
            "data-theme",
            theme === "light",
        );
        localStorage.setItem("app-theme", theme);
    }, [theme]);

    const nextTheme = useMemo(
        () => (theme === "light" ? "dark" : "light"),
        [theme],
    );

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            <img
                                src={import.meta.env.BASE_URL + "logo.png"}
                                alt="Software engineering core notes"
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
                        onClick={() =>
                            setTheme((currentTheme) =>
                                currentTheme === "light" ? "dark" : "light",
                            )
                        }
                        aria-label={"Switch to " + nextTheme + " theme"}
                        title={"Switch to " + nextTheme}
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