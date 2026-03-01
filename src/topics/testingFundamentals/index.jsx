// src/topics/testingFundamentals/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCheckSquare,
    FiLayers,
    FiSettings,
    FiClipboard,
    FiRefreshCw,
    FiGitBranch,
} from "react-icons/fi";

const TestingFundamentals = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "testingFundamentals",
            title: "Testing Fundamentals",
            sub: "Unit, integration, system, acceptance tests, manual vs automation, TDD and CI explained clearly.",
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
                        {/* Overview */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiClipboard />
                                </span>
                                <h3 className="h3">What testing means</h3>
                            </div>

                            <p className="p">
                                <b>Testing</b> is the process of checking that a
                                software system behaves as expected. The goal is
                                to catch bugs early, reduce risk, and keep
                                software stable while changes happen.
                            </p>

                            <p className="p">
                                Real example: you add a new discount rule in an
                                e-commerce cart. Testing ensures the new rule
                                works and also that old things like totals,
                                taxes, and coupons do not break.
                            </p>

                            <div className="mini">
                                <span className="pill">Find bugs early</span>
                                <span className="dash">-</span>
                                <span className="pill">
                                    Reduce production risk
                                </span>
                                <span className="dash">-</span>
                                <span className="pill">
                                    Confidence in changes
                                </span>
                            </div>

                            <p className="note">
                                Testing is not just QA. Developers also own
                                testing through unit tests and automation.
                            </p>
                        </div>

                        {/* Unit testing */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiSettings />
                                </span>
                                <h3 className="h3">Unit testing</h3>
                            </div>

                            <p className="p">
                                A <b>unit test</b> checks the smallest testable
                                part of code such as a function, method, or
                                component in isolation.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Focus</div>
                                    <div className="v">
                                        One function or module, not the full
                                        system.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Speed</div>
                                    <div className="v">
                                        Very fast. Can run hundreds in seconds.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Example</div>
                                    <div className="v">
                                        Test `calculateTotal(items)` returns
                                        correct total for different inputs.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Unit tests should be predictable. If they fail
                                randomly, they become useless.
                            </p>
                        </div>

                        {/* Integration testing */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Integration testing</h3>
                            </div>

                            <p className="p">
                                An <b>integration test</b> checks how multiple
                                modules work together. It tests the connections
                                between components.
                            </p>

                            <ul className="list">
                                <li>
                                    Tests how your API talks to the database.
                                </li>
                                <li>
                                    Tests how frontend calls backend endpoints.
                                </li>
                                <li>
                                    Tests how login service works with email or
                                    OTP provider.
                                </li>
                            </ul>

                            <p className="note">
                                Integration tests are slower than unit tests but
                                catch bugs that happen at boundaries.
                            </p>
                        </div>

                        {/* System testing */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">System testing</h3>
                            </div>

                            <p className="p">
                                <b>System testing</b> checks the complete system
                                as a whole. It verifies that the entire
                                application works from end to end.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Scope</div>
                                    <div className="v">
                                        Full app with real services or
                                        close-to-real setup.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Example</div>
                                    <div className="v">
                                        Create account - login - add product -
                                        pay - verify order confirmation.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                System testing ensures features work together
                                like real users expect.
                            </p>
                        </div>

                        {/* Acceptance testing */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCheckSquare />
                                </span>
                                <h3 className="h3">Acceptance testing</h3>
                            </div>

                            <p className="p">
                                <b>Acceptance testing</b> checks whether the
                                software meets business requirements and is
                                ready to release. It answers: "Is this
                                acceptable for delivery"
                            </p>

                            <ul className="list">
                                <li>
                                    Often based on <b>acceptance criteria</b>{" "}
                                    written in user stories.
                                </li>
                                <li>
                                    Can be done by QA, product owner, client, or
                                    end users.
                                </li>
                                <li>
                                    Example: "Password reset email must arrive
                                    within 30 seconds and the link must expire
                                    in 10 minutes."
                                </li>
                            </ul>

                            <p className="note">
                                If acceptance test fails, the feature is not
                                considered complete.
                            </p>
                        </div>

                        {/* Manual vs Automated */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiClipboard />
                                </span>
                                <h3 className="h3">
                                    Manual vs Automated testing
                                </h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Manual testing</div>
                                    <div className="v">
                                        A human tests by clicking, typing, and
                                        verifying results.
                                        <span className="small">
                                            Example: QA tests login, signup, and
                                            checkout by hand.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Automated testing</div>
                                    <div className="v">
                                        Tests are written as code and run
                                        automatically.
                                        <span className="small">
                                            Example: A test script logs in and
                                            verifies the dashboard loads
                                            correctly.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <ul className="list">
                                <li>
                                    Manual is useful for exploratory testing and
                                    quick UI checks.
                                </li>
                                <li>
                                    Automation is best for repeated checks like
                                    regression testing.
                                </li>
                                <li>
                                    Good teams use both - manual for discovery,
                                    automation for stability.
                                </li>
                            </ul>

                            <p className="note">
                                Regression testing means checking that old
                                features still work after new changes.
                            </p>
                        </div>

                        {/* TDD */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCw />
                                </span>
                                <h3 className="h3">
                                    TDD - Test Driven Development
                                </h3>
                            </div>

                            <p className="p">
                                <b>TDD</b> means <b>Test Driven Development</b>.
                                It is a development approach where you write
                                tests first, then write code to pass the tests.
                            </p>

                            <div className="mini">
                                <span className="pill">Red</span>
                                <span className="dash">-</span>
                                <span className="pill">Green</span>
                                <span className="dash">-</span>
                                <span className="pill">Refactor</span>
                            </div>

                            <ul className="list">
                                <li>
                                    <b>Red</b> - write a test, it fails because
                                    code is missing.
                                </li>
                                <li>
                                    <b>Green</b> - write minimum code to make
                                    the test pass.
                                </li>
                                <li>
                                    <b>Refactor</b> - clean the code while
                                    keeping tests passing.
                                </li>
                            </ul>

                            <p className="note">
                                TDD improves design because you think about
                                inputs and outputs before implementation.
                            </p>
                        </div>

                        {/* CI */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitBranch />
                                </span>
                                <h3 className="h3">
                                    CI - Continuous Integration
                                </h3>
                            </div>

                            <p className="p">
                                <b>CI</b> means <b>Continuous Integration</b>.
                                It is the practice of automatically building and
                                testing code whenever changes are pushed.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Goal</div>
                                    <div className="v">
                                        Catch bugs early by validating every
                                        change.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Common steps</div>
                                    <div className="v">
                                        Install dependencies - run tests - run
                                        lint - build artifacts.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Example</div>
                                    <div className="v">
                                        On every pull request, CI runs unit
                                        tests and fails the PR if something
                                        breaks.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                CI helps teams merge changes safely. It reduces
                                the "it works on my machine" problem.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Unit tests check small pieces. Integration tests
                            check module connections. System tests check full
                            app behavior. Acceptance tests check business
                            readiness. TDD writes tests first. CI runs tests
                            automatically on code changes.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TestingFundamentals;
