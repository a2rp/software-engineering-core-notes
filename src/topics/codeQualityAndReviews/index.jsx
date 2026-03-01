// src/topics/codeQualityAndReviews/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCheckSquare,
    FiEye,
    FiTool,
    FiAlertTriangle,
    FiRefreshCw,
    FiLayers,
} from "react-icons/fi";

const CodeQualityAndReviews = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "codeQualityAndReviews",
            title: "Code Quality and Reviews",
            sub: "Clean code principles, code smells, refactoring basics, and technical debt with examples.",
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
                        <FiCheckSquare />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Quality</span>
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
                        {/* What is code quality + reviews */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiEye />
                                </span>
                                <h3 className="h3">
                                    What is code quality and why reviews matter
                                </h3>
                            </div>

                            <p className="p">
                                <b>Code quality</b> means how easy it is to{" "}
                                <b>read</b>, <b>change</b>, <b>test</b>, and{" "}
                                <b>maintain</b> your code while keeping it
                                correct. High-quality code reduces bugs and
                                makes future changes faster.
                            </p>

                            <p className="p">
                                <b>Code review</b> is when another developer
                                checks your changes before merging. Reviews are
                                used to catch mistakes, improve clarity, and
                                share team standards.
                            </p>

                            <div className="mini">
                                <span className="pill">Correctness</span>
                                <span className="dash">-</span>
                                <span className="pill">Readability</span>
                                <span className="dash">-</span>
                                <span className="pill">Maintainability</span>
                                <span className="dash">-</span>
                                <span className="pill">Testability</span>
                            </div>

                            <p className="note">
                                Reviews are not about ego. They are a safety net
                                and a learning tool.
                            </p>
                        </div>

                        {/* Clean code principles */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Clean code principles</h3>
                            </div>

                            <p className="p">
                                <b>Clean code</b> means code that reads like a
                                clear explanation. It should be easy for you and
                                your teammate to understand after weeks or
                                months.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Meaningful names</b> - use names that
                                    explain purpose.
                                    <span className="small">
                                        Bad: <span className="mono">d</span>{" "}
                                        Good:{" "}
                                        <span className="mono">
                                            daysSinceSignup
                                        </span>
                                    </span>
                                </li>
                                <li>
                                    <b>Small functions</b> - one function should
                                    do one job.
                                    <span className="small">
                                        A function named{" "}
                                        <span className="mono">
                                            createInvoice
                                        </span>{" "}
                                        should not also send emails and update
                                        analytics.
                                    </span>
                                </li>
                                <li>
                                    <b>Clear control flow</b> - avoid too many
                                    nested conditions.
                                </li>
                                <li>
                                    <b>Single responsibility</b> - one module
                                    should have one reason to change.
                                </li>
                                <li>
                                    <b>Consistency</b> - follow the same style
                                    across files, folders, and naming.
                                </li>
                            </ul>

                            <p className="note">
                                Clean code is not about being fancy. It is about
                                being clear.
                            </p>
                        </div>

                        {/* Code smells */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiAlertTriangle />
                                </span>
                                <h3 className="h3">Code smells</h3>
                            </div>

                            <p className="p">
                                A <b>code smell</b> is a warning sign that code
                                might be hard to maintain or risky to change. It
                                does not always mean the code is wrong, but it
                                suggests improvement is needed.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Long function</b> - one function is doing
                                    too much.
                                </li>
                                <li>
                                    <b>Duplicate code</b> - same logic repeated
                                    in many places.
                                </li>
                                <li>
                                    <b>God object</b> - one class or module
                                    knows everything and does everything.
                                </li>
                                <li>
                                    <b>Too many parameters</b> - function
                                    signature is hard to understand.
                                </li>
                                <li>
                                    <b>Magic numbers</b> - unexplained constants
                                    like <span className="mono">37</span> or{" "}
                                    <span className="mono">9999</span> inside
                                    logic.
                                </li>
                            </ul>

                            <p className="note">
                                Smells usually lead to bugs later because nobody
                                understands what will break.
                            </p>
                        </div>

                        {/* Refactoring */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCw />
                                </span>
                                <h3 className="h3">Refactoring basics</h3>
                            </div>

                            <p className="p">
                                <b>Refactoring</b> means improving the internal
                                structure of code without changing its external
                                behavior. The output should stay the same, but
                                the code becomes easier to understand and
                                modify.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Goal</div>
                                    <div className="v">
                                        Make code easier to maintain and less
                                        likely to break.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Safe approach</div>
                                    <div className="v">
                                        Small steps + tests.
                                        <span className="small">
                                            Tests act like a safety harness
                                            while refactoring.
                                        </span>
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Common refactors</div>
                                    <div className="v">
                                        Extract function, rename variables,
                                        remove duplication, simplify
                                        conditionals.
                                    </div>
                                </div>
                            </div>

                            <div className="codeBlock">
                                <div className="codeTitle">Mini example</div>
                                <pre className="code">
                                    {`// Before - repeated logic
if (user.role === "admin") {
    canEdit = true;
} else if (user.role === "manager") {
    canEdit = true;
}

// After - refactor to a clearer rule
const canEdit = ["admin", "manager"].includes(user.role);`}
                                </pre>
                            </div>

                            <p className="note">
                                Refactoring is easier when code has good tests.
                                Without tests, refactoring feels risky.
                            </p>
                        </div>

                        {/* Technical debt */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTool />
                                </span>
                                <h3 className="h3">Technical debt</h3>
                            </div>

                            <p className="p">
                                <b>Technical debt</b> is the extra future work
                                you create when you take shortcuts today. You
                                save time now, but you pay later with slower
                                development, more bugs, and painful changes.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Example</div>
                                    <div className="v">
                                        Hardcoding values, skipping tests,
                                        writing unclear code just to ship fast.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Why it happens</div>
                                    <div className="v">
                                        Deadlines, unclear requirements, lack of
                                        reviews, lack of time for refactoring.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">How to manage</div>
                                    <div className="v">
                                        Track it, prioritize it, pay it off
                                        regularly, do refactoring in small
                                        parts.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Debt is not always bad. Sometimes you accept
                                small debt to ship. The mistake is ignoring it
                                forever.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Clean code reduces confusion. Smells warn about
                            future bugs. Refactoring improves structure without
                            changing behavior. Technical debt is future pain
                            created by shortcuts today. Reviews help catch all
                            of these early.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CodeQualityAndReviews;
