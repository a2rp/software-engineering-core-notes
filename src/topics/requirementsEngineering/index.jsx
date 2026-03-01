// src/topics/requirementsEngineering/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiClipboard,
    FiList,
    FiFileText,
    FiUsers,
    FiCheckSquare,
} from "react-icons/fi";

const RequirementsEngineering = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "requirementsEngineering",
            title: "Requirements Engineering",
            sub: "Functional vs non-functional requirements, gathering techniques, SRS, use cases, and acceptance criteria.",
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
                        <FiClipboard />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">SDLC</span>
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
                        {/* Overview */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiList />
                                </span>
                                <h3 className="h3">What it means</h3>
                            </div>

                            <p className="p">
                                <b>Requirements Engineering</b> is the process
                                of understanding what needs to be built,
                                documenting it clearly, validating it with
                                stakeholders, and managing changes over time. It
                                reduces confusion and prevents building the
                                wrong thing.
                            </p>

                            <p className="p">
                                Practical goal: make requirements so clear that
                                dev, QA, and client can all agree on what "done"
                                means.
                            </p>

                            <p className="note">
                                Most project failures happen due to unclear or
                                changing requirements, not because of bad code.
                            </p>
                        </div>

                        {/* Functional vs Non-functional */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiUsers />
                                </span>
                                <h3 className="h3">
                                    Functional vs Non-functional requirements
                                </h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">
                                        Functional requirements
                                    </div>
                                    <div className="v">
                                        What the system should do - features and
                                        behavior.
                                        <span className="small">
                                            Example: "User can reset password
                                            using email OTP."
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">
                                        Non-functional requirements
                                    </div>
                                    <div className="v">
                                        How well the system should perform -
                                        quality attributes like performance,
                                        security, and reliability.
                                        <span className="small">
                                            Example: "Password reset page should
                                            load under 2 seconds." "OTP should
                                            expire in 5 minutes." "System must
                                            log all reset attempts."
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mini">
                                <span className="pill">Functional = What</span>
                                <span className="dash">-</span>
                                <span className="pill">
                                    Non-functional = How well
                                </span>
                            </div>

                            <p className="note">
                                Many teams write functional requirements and
                                forget non-functional ones. That is where
                                production problems start.
                            </p>
                        </div>

                        {/* Gathering techniques */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiUsers />
                                </span>
                                <h3 className="h3">
                                    Requirement gathering techniques
                                </h3>
                            </div>

                            <p className="p">
                                Gathering requirements means extracting needs
                                from stakeholders and users. Use multiple
                                techniques because one technique never captures
                                everything.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Interviews</div>
                                    <div className="v">
                                        Talk to users and stakeholders directly.
                                        <span className="small">
                                            Example: ask support team what
                                            common complaints users have.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Workshops</div>
                                    <div className="v">
                                        Group discussion to align everyone.
                                        <span className="small">
                                            Example: product owner, dev, QA
                                            define the checkout flow together.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Observation</div>
                                    <div className="v">
                                        Watch how users do work today.
                                        <span className="small">
                                            Example: observe how employees do
                                            inventory updates using Excel.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Questionnaires</div>
                                    <div className="v">
                                        Collect feedback from many users
                                        quickly.
                                        <span className="small">
                                            Example: survey users about what
                                            payment methods they use.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">
                                        Prototype or mockups
                                    </div>
                                    <div className="v">
                                        Show UI or flow and collect corrections
                                        early.
                                        <span className="small">
                                            Example: clickable Figma prototype
                                            for sign up screens.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">
                                        Existing system study
                                    </div>
                                    <div className="v">
                                        Analyze current product or competitors.
                                        <span className="small">
                                            Example: read existing API docs and
                                            logs to see current behavior.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Pro tip: always confirm requirements with real
                                examples and edge cases.
                            </p>
                        </div>

                        {/* SRS */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiFileText />
                                </span>
                                <h3 className="h3">
                                    SRS - Software Requirement Specification
                                </h3>
                            </div>

                            <p className="p">
                                <b>SRS</b> means{" "}
                                <b>Software Requirement Specification</b>. It is
                                the document that clearly describes the system
                                requirements so every team member is on the same
                                page.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">What it contains</div>
                                    <div className="v">
                                        Scope, features, constraints, functional
                                        requirements, non-functional
                                        requirements, assumptions, and
                                        acceptance criteria.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Why it is useful</div>
                                    <div className="v">
                                        Prevents misunderstanding, helps
                                        estimation, guides testing, and acts as
                                        a reference when changes happen.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Example line</div>
                                    <div className="v">
                                        "System shall allow user to reset
                                        password using email OTP. OTP expires in
                                        5 minutes and max 3 attempts allowed per
                                        hour."
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                In Agile teams, SRS may be lighter and replaced
                                by user stories and acceptance criteria. But the
                                clarity requirement still stays.
                            </p>
                        </div>

                        {/* Use cases */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiClipboard />
                                </span>
                                <h3 className="h3">Use case basics</h3>
                            </div>

                            <p className="p">
                                A <b>use case</b> describes how a user (actor)
                                interacts with the system to achieve a goal. It
                                focuses on steps and outcomes, including failure
                                paths.
                            </p>

                            <div className="useCase">
                                <div className="ucTitle">
                                    Example use case - "Reset Password"
                                </div>

                                <div className="ucGrid">
                                    <div className="ucRow">
                                        <div className="k">Actor</div>
                                        <div className="v">Registered user</div>
                                    </div>
                                    <div className="ucRow">
                                        <div className="k">Goal</div>
                                        <div className="v">
                                            Reset password securely using OTP
                                        </div>
                                    </div>
                                    <div className="ucRow">
                                        <div className="k">Main flow</div>
                                        <div className="v">
                                            1. User enters email
                                            <br />
                                            2. System sends OTP
                                            <br />
                                            3. User enters OTP
                                            <br />
                                            4. System verifies OTP
                                            <br />
                                            5. User sets new password
                                            <br />
                                            6. System updates password and
                                            confirms
                                        </div>
                                    </div>
                                    <div className="ucRow">
                                        <div className="k">Alternate flow</div>
                                        <div className="v">
                                            OTP invalid or expired - show error
                                            and allow resend after cooldown
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Use cases are very useful for finding missing
                                requirements and edge cases.
                            </p>
                        </div>

                        {/* Acceptance criteria */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCheckSquare />
                                </span>
                                <h3 className="h3">Acceptance criteria</h3>
                            </div>

                            <p className="p">
                                <b>Acceptance criteria</b> are clear conditions
                                that must be true for a feature to be considered
                                complete and acceptable. They guide developers
                                and testers and prevent scope confusion.
                            </p>

                            <p className="p">
                                A common format is <b>Given - When - Then</b>.
                            </p>

                            <div className="code">
                                <div className="codeTitle">Example</div>
                                <pre className="pre">
                                    {`Given the user is on the reset password page
When the user enters a registered email and clicks "Send OTP"
Then the system sends an OTP to the email within 10 seconds

Given an OTP was sent
When the user enters the correct OTP within 5 minutes
Then the system allows the user to set a new password

Given an OTP was sent
When the user enters an incorrect OTP 3 times
Then the system blocks further attempts for 1 hour`}
                                </pre>
                            </div>

                            <p className="note">
                                Acceptance criteria is where "done" becomes
                                measurable. It reduces bugs and rework.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Functional tells what to build. Non-functional tells
                            how well it must behave. Gather requirements using
                            interviews, workshops, observation, prototypes. SRS
                            documents requirements. Use cases describe
                            interaction flows. Acceptance criteria defines what
                            "done" means.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default RequirementsEngineering;
