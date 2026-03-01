// src/topics/sdlcModels/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiRepeat,
    FiLayers,
    FiCheckCircle,
    FiRefreshCw,
} from "react-icons/fi";

const SdlcModels = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "sdlcModels",
            title: "SDLC Models",
            sub: "Waterfall, V Model, Iterative, Incremental, Spiral, Agile, DevOps - with when to use and pros-cons summary.",
        };
    }, []);

    return (
        <Styled.Wrapper id={meta.id}>
            <button
                type="button"
                className={`head ${open ? "open" : ""}`}
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                aria-controls={`${meta.id}-content`}
            >
                <div className="left">
                    <span className="icon">
                        <FiRepeat />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Process</span>
                        </div>
                        <p className="sub">{meta.sub}</p>
                    </div>
                </div>

                <span className="chev">
                    <FiChevronDown />
                </span>
            </button>

            <div
                id={`${meta.id}-content`}
                className={`content ${open ? "show" : ""}`}
            >
                <div className="inner">
                    <div className="grid">
                        {/* Waterfall */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Waterfall Model</h3>
                            </div>

                            <p className="p">
                                A linear model where each phase completes before
                                the next begins.
                            </p>

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
                            </div>

                            <p className="note">
                                Example: Government or banking systems with
                                fixed requirements.
                            </p>

                            <div className="section">
                                <div className="secTitle">When to use</div>
                                <ul className="list">
                                    <li>Requirements are stable and clear</li>
                                    <li>Compliance heavy environments</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Pros</div>
                                <ul className="list">
                                    <li>Simple and structured</li>
                                    <li>Clear documentation</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Cons</div>
                                <ul className="list">
                                    <li>Hard to adapt to change</li>
                                    <li>Late feedback from users</li>
                                </ul>
                            </div>
                        </div>

                        {/* V Model */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCheckCircle />
                                </span>
                                <h3 className="h3">V Model</h3>
                            </div>

                            <p className="p">
                                Extension of Waterfall where each development
                                phase has a corresponding testing phase.
                            </p>

                            <p className="note">
                                Example: Safety critical systems like medical or
                                aviation software.
                            </p>

                            <div className="section">
                                <div className="secTitle">When to use</div>
                                <ul className="list">
                                    <li>High reliability required</li>
                                    <li>Strict validation process</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Pros</div>
                                <ul className="list">
                                    <li>Strong focus on testing</li>
                                    <li>Early defect detection</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Cons</div>
                                <ul className="list">
                                    <li>Rigid like Waterfall</li>
                                    <li>Not ideal for evolving requirements</li>
                                </ul>
                            </div>
                        </div>

                        {/* Iterative */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCw />
                                </span>
                                <h3 className="h3">Iterative Model</h3>
                            </div>

                            <p className="p">
                                Build a basic version first, then improve in
                                repeated cycles.
                            </p>

                            <p className="note">
                                Example: First release simple app, then enhance
                                features in versions.
                            </p>

                            <div className="section">
                                <div className="secTitle">When to use</div>
                                <ul className="list">
                                    <li>Requirements partially known</li>
                                    <li>Feedback driven development</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Pros</div>
                                <ul className="list">
                                    <li>Early working version</li>
                                    <li>Improves through feedback</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Cons</div>
                                <ul className="list">
                                    <li>Can increase cost</li>
                                    <li>
                                        Architecture may degrade without control
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Incremental */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Incremental Model</h3>
                            </div>

                            <p className="p">
                                Deliver system in small functional increments.
                            </p>

                            <p className="note">
                                Example: E-commerce site releasing cart first,
                                then payment, then recommendation.
                            </p>

                            <div className="section">
                                <div className="secTitle">When to use</div>
                                <ul className="list">
                                    <li>Large system divided into modules</li>
                                    <li>Faster time to market needed</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Pros</div>
                                <ul className="list">
                                    <li>Faster delivery</li>
                                    <li>Lower initial risk</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Cons</div>
                                <ul className="list">
                                    <li>
                                        Requires strong architecture planning
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Spiral */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRepeat />
                                </span>
                                <h3 className="h3">Spiral Model</h3>
                            </div>

                            <p className="p">
                                Focuses on risk analysis in every cycle.
                            </p>

                            <p className="note">
                                Example: Large enterprise systems with high
                                uncertainty.
                            </p>

                            <div className="section">
                                <div className="secTitle">When to use</div>
                                <ul className="list">
                                    <li>High risk projects</li>
                                    <li>Complex systems</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Pros</div>
                                <ul className="list">
                                    <li>Strong risk management</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Cons</div>
                                <ul className="list">
                                    <li>Costly</li>
                                    <li>Complex to manage</li>
                                </ul>
                            </div>
                        </div>

                        {/* Agile */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCw />
                                </span>
                                <h3 className="h3">Agile Model</h3>
                            </div>

                            <p className="p">
                                Short iterations called sprints with frequent
                                feedback.
                            </p>

                            <p className="note">
                                Example: Startups building SaaS products.
                            </p>

                            <div className="section">
                                <div className="secTitle">When to use</div>
                                <ul className="list">
                                    <li>Requirements change frequently</li>
                                    <li>Customer collaboration needed</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Pros</div>
                                <ul className="list">
                                    <li>Flexible</li>
                                    <li>Fast feedback</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Cons</div>
                                <ul className="list">
                                    <li>Less predictability</li>
                                    <li>Needs strong team coordination</li>
                                </ul>
                            </div>
                        </div>

                        {/* DevOps */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRepeat />
                                </span>
                                <h3 className="h3">DevOps Model</h3>
                            </div>

                            <p className="p">
                                Integrates development and operations to enable
                                continuous integration and continuous delivery.
                            </p>

                            <div className="mini">
                                <span className="pill">Build</span>
                                <span className="dash">-</span>
                                <span className="pill">Test</span>
                                <span className="dash">-</span>
                                <span className="pill">Deploy</span>
                                <span className="dash">-</span>
                                <span className="pill">Monitor</span>
                            </div>

                            <p className="note">
                                Example: CI pipeline automatically testing and
                                deploying new commits.
                            </p>

                            <div className="section">
                                <div className="secTitle">When to use</div>
                                <ul className="list">
                                    <li>Cloud native systems</li>
                                    <li>Frequent releases</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Pros</div>
                                <ul className="list">
                                    <li>Fast release cycles</li>
                                    <li>Automation reduces errors</li>
                                </ul>
                            </div>

                            <div className="section">
                                <div className="secTitle">Cons</div>
                                <ul className="list">
                                    <li>Requires automation maturity</li>
                                    <li>Tooling complexity</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Waterfall and V are rigid. Iterative and Incremental
                            allow gradual improvement. Spiral focuses on risk.
                            Agile focuses on flexibility. DevOps focuses on
                            continuous delivery and operations integration.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SdlcModels;
