// src/topics/whatIsSoftwareEngineering/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiBookOpen,
    FiCode,
    FiTool,
    FiRepeat,
    FiCheckCircle,
} from "react-icons/fi";

const WhatIsSoftwareEngineering = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "whatIsSoftwareEngineering",
            title: "What is Software Engineering",
            sub: "Definition, programming vs engineering, why it exists, and SDLC meaning with real examples.",
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
                        <FiBookOpen />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Foundations</span>
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
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTool />
                                </span>
                                <h3 className="h3">Definition</h3>
                            </div>

                            <p className="p">
                                <b>Software Engineering</b> is the disciplined
                                way of building software so it is{" "}
                                <b>reliable</b>, <b>maintainable</b>,{" "}
                                <b>testable</b>, and <b>deliverable</b> in the
                                real world. It includes planning, designing,
                                coding, testing, deployment, and maintenance.
                            </p>

                            <p className="p">
                                Simple example: Writing a login screen is
                                programming. Making sure login works securely,
                                handles failures, logs issues, scales to many
                                users, and can be changed later without breaking
                                other features is software engineering.
                            </p>

                            <div className="mini">
                                <span className="pill">Build</span>
                                <span className="dash">-</span>
                                <span className="pill">Ship</span>
                                <span className="dash">-</span>
                                <span className="pill">Operate</span>
                                <span className="dash">-</span>
                                <span className="pill">Improve</span>
                            </div>

                            <p className="note">
                                Engineering is about building things that
                                survive time, change, and real users.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCode />
                                </span>
                                <h3 className="h3">
                                    Programming vs Software Engineering
                                </h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Programming</div>
                                    <div className="v">
                                        Writing code to solve a problem or build
                                        a feature.
                                        <span className="small">
                                            Example: Write a function to
                                            calculate total cart price.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">
                                        Software Engineering
                                    </div>
                                    <div className="v">
                                        Building a full system around code so it
                                        stays correct, usable, and easy to
                                        change.
                                        <span className="small">
                                            Example: Cart system with
                                            validations, tests, API contracts,
                                            logs, monitoring, and rollback plan.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Think: programming is a part of software
                                engineering, not the full thing.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCheckCircle />
                                </span>
                                <h3 className="h3">Why SE exists</h3>
                            </div>

                            <p className="p">
                                Software Engineering exists because real
                                software is built by teams, used by many users,
                                and must keep working for years.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Scale of work</b> - projects have
                                    thousands of files and many developers.
                                </li>
                                <li>
                                    <b>Change is constant</b> - new features,
                                    bug fixes, refactors, new requirements.
                                </li>
                                <li>
                                    <b>Quality matters</b> - bugs cause money
                                    loss, trust loss, security issues.
                                </li>
                                <li>
                                    <b>Time and budget</b> - delivery must be
                                    predictable.
                                </li>
                                <li>
                                    <b>Production reality</b> - failures happen,
                                    so we need logs, monitoring, and rollback
                                    plans.
                                </li>
                            </ul>

                            <p className="note">
                                Without SE practices, software becomes slow to
                                change, easy to break, and costly to maintain.
                            </p>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRepeat />
                                </span>
                                <h3 className="h3">
                                    SDLC meaning - Software Development Life
                                    Cycle
                                </h3>
                            </div>

                            <p className="p">
                                <b>SDLC</b> stands for{" "}
                                <b>Software Development Life Cycle</b>. It is
                                the step-by-step process used to build software
                                from idea to production and beyond.
                            </p>

                            <div className="flow">
                                <div className="step">
                                    <div className="tag">1</div>
                                    <div className="body">
                                        <div className="t">Requirements</div>
                                        <div className="d">
                                            Understand what to build and why.
                                            <span className="small">
                                                Example: "Users should reset
                                                password using email OTP."
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">2</div>
                                    <div className="body">
                                        <div className="t">Design</div>
                                        <div className="d">
                                            Plan the structure of the solution.
                                            <span className="small">
                                                Example: database tables, API
                                                endpoints, UI flow, security
                                                rules.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">3</div>
                                    <div className="body">
                                        <div className="t">Implementation</div>
                                        <div className="d">
                                            Write the code and integrate
                                            components.
                                            <span className="small">
                                                Example: build OTP service,
                                                email sending, UI screens,
                                                backend validation.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">4</div>
                                    <div className="body">
                                        <div className="t">Testing</div>
                                        <div className="d">
                                            Verify correctness and catch bugs
                                            early.
                                            <span className="small">
                                                Example: unit tests for OTP
                                                logic, integration test for
                                                reset flow.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">5</div>
                                    <div className="body">
                                        <div className="t">Deployment</div>
                                        <div className="d">
                                            Release to users safely.
                                            <span className="small">
                                                Example: deploy backend, migrate
                                                database, release frontend
                                                build.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">6</div>
                                    <div className="body">
                                        <div className="t">Maintenance</div>
                                        <div className="d">
                                            Monitor, fix issues, improve
                                            performance, and add features.
                                            <span className="small">
                                                Example: bugfix for edge case,
                                                improve logs, optimize DB query.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                SDLC is not always strict steps. In Agile, these
                                steps repeat in small cycles every sprint.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Programming writes code. Software engineering builds
                            a system around that code so it stays reliable and
                            maintainable. SDLC is the full lifecycle from
                            requirements to maintenance.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default WhatIsSoftwareEngineering;
