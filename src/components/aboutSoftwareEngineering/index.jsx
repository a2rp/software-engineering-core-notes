import React from "react";
import { Styled } from "./styled";
import { FiCode, FiLayers, FiCheckSquare } from "react-icons/fi";

const AboutSoftwareEngineering = () => {
    return (
        <Styled.Wrapper id="aboutSoftwareEngineering">
            <div className="top">
                <h2 className="title">Software Engineering</h2>

                <p className="sub">
                    Software Engineering is the discipline of building software
                    in a structured, reliable, and maintainable way. It is not
                    just writing code. It includes planning, requirements,
                    design, testing, deployment, and long-term maintenance.
                </p>

                <p className="sub">
                    A programmer writes features. A software engineer designs
                    systems that survive real users, scaling, deadlines, and
                    change. The goal is predictable delivery and sustainable
                    quality.
                </p>

                <p className="sub">
                    This page focuses on SDLC, requirements, architecture
                    basics, version control, testing, DevOps, and quality
                    practices that matter in real production environments.
                </p>
            </div>

            <div className="grid">
                <div className="card">
                    <div className="cardTop">
                        <span className="icon">
                            <FiLayers />
                        </span>
                        <h3 className="h3">Lifecycle Thinking</h3>
                    </div>

                    <div className="mini">
                        <span className="pill">Requirements</span>
                        <span className="dash">-</span>
                        <span className="pill">Design</span>
                        <span className="dash">-</span>
                        <span className="pill">Build</span>
                        <span className="dash">-</span>
                        <span className="pill">Test</span>
                        <span className="dash">-</span>
                        <span className="pill">Deploy</span>
                        <span className="dash">-</span>
                        <span className="pill">Maintain</span>
                    </div>

                    <p className="note">
                        Software is a process, not a one-time event.
                    </p>
                </div>

                <div className="card">
                    <div className="cardTop">
                        <span className="icon">
                            <FiCode />
                        </span>
                        <h3 className="h3">Engineering Principles</h3>
                    </div>

                    <ul className="list">
                        <li>SOLID principles</li>
                        <li>Low coupling and high cohesion</li>
                        <li>Clean code practices</li>
                        <li>Version control and code reviews</li>
                    </ul>
                </div>

                <div className="card">
                    <div className="cardTop">
                        <span className="icon">
                            <FiCheckSquare />
                        </span>
                        <h3 className="h3">Quality and Delivery</h3>
                    </div>

                    <ul className="list">
                        <li>Unit and integration testing</li>
                        <li>CI and CD pipelines</li>
                        <li>Monitoring and maintenance</li>
                        <li>Technical debt management</li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AboutSoftwareEngineering;
