// src/topics/estimationAndPlanning/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTarget,
    FiClock,
    FiHash,
    FiBarChart2,
    FiUsers,
    FiAlertTriangle,
    FiTrendingUp,
} from "react-icons/fi";

const EstimationAndPlanning = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "estimationAndPlanning",
            title: "Estimation and Planning",
            sub: "Effort estimation basics, LOC vs function points, story points, velocity, planning poker, and risk basics with examples.",
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
                        <FiTarget />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Delivery</span>
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
                        {/* Effort estimation basics */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiClock />
                                </span>
                                <h3 className="h3">Effort estimation basics</h3>
                            </div>

                            <p className="p">
                                <b>Effort estimation</b> means predicting how
                                much work is needed to deliver something. Work
                                usually includes coding, testing, review,
                                documentation, bug fixes, and deployment effort.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Effort</div>
                                    <div className="v">
                                        How much work it takes
                                        <span className="small">
                                            Example: 2 developer-days
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Duration</div>
                                    <div className="v">
                                        How long it will take on calendar
                                        <span className="small">
                                            Example: 2 days effort can become 4
                                            days duration because of meetings,
                                            reviews, dependencies.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Uncertainty</div>
                                    <div className="v">
                                        Unknowns that can change the estimate
                                        <span className="small">
                                            Example: API might change, data may
                                            be messy, requirements may shift.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Good estimates include a range, not a single
                                exact number. Example: "2 to 4 days" instead of
                                "3 days".
                            </p>
                        </div>

                        {/* LOC vs Function Points */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiHash />
                                </span>
                                <h3 className="h3">LOC vs Function Points</h3>
                            </div>

                            <p className="p">
                                Two classic ways to estimate size:
                            </p>

                            <ul className="list">
                                <li>
                                    <b>LOC</b> - Lines of Code
                                    <span className="small">
                                        Measures code length. Easy to count
                                        later, hard to predict early. Encourages
                                        writing more code which is not always
                                        good.
                                    </span>
                                </li>
                                <li>
                                    <b>Function Points</b>
                                    <span className="small">
                                        Measures functionality delivered to
                                        users. Useful earlier in the project
                                        because it focuses on features, not
                                        code.
                                    </span>
                                </li>
                            </ul>

                            <p className="note">
                                Simple example: A "search feature" can be 50
                                lines or 500 lines depending on design, so LOC
                                is not stable early.
                            </p>
                        </div>

                        {/* Story points */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBarChart2 />
                                </span>
                                <h3 className="h3">Story points</h3>
                            </div>

                            <p className="p">
                                <b>Story points</b> are a relative estimation
                                unit used in Agile. It represents{" "}
                                <b>effort + complexity + uncertainty</b>. It is
                                not a time unit.
                            </p>

                            <div className="mini">
                                <span className="pill">Effort</span>
                                <span className="dash">-</span>
                                <span className="pill">Complexity</span>
                                <span className="dash">-</span>
                                <span className="pill">Uncertainty</span>
                            </div>

                            <p className="p">
                                Example: If login screen is 2 points, then
                                password reset might be 5 points if it includes
                                email OTP, security, and edge cases.
                            </p>

                            <p className="note">
                                Story points work best when your team keeps them
                                consistent across sprints.
                            </p>
                        </div>

                        {/* Velocity */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTrendingUp />
                                </span>
                                <h3 className="h3">Velocity</h3>
                            </div>

                            <p className="p">
                                <b>Velocity</b> is how many story points a team
                                completes in one sprint. It helps predict how
                                much work can be done in future sprints.
                            </p>

                            <div className="exBox">
                                <div className="exTitle">Example</div>
                                <div className="exText">
                                    Sprint length is 2 weeks. Team completed 28
                                    story points. So velocity is 28 points per
                                    sprint.
                                </div>
                            </div>

                            <p className="note">
                                Velocity is a team metric, not a performance
                                rating for individuals.
                            </p>
                        </div>

                        {/* Planning Poker */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiUsers />
                                </span>
                                <h3 className="h3">Planning poker</h3>
                            </div>

                            <p className="p">
                                <b>Planning poker</b> is a team estimation
                                technique where each person privately picks a
                                story point value, then everyone reveals
                                together. If values differ a lot, the team
                                discusses and estimates again.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Why it works</div>
                                    <div className="v">
                                        It avoids one loud person deciding the
                                        estimate. It also exposes hidden
                                        complexity when someone votes high.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Common scale</div>
                                    <div className="v">
                                        Fibonacci-like: 1, 2, 3, 5, 8, 13
                                        <span className="small">
                                            Big jumps force discussion when work
                                            is uncertain.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Example flow</div>
                                    <div className="v">
                                        Feature: "Add search filters"
                                        <span className="small">
                                            Votes: 3, 3, 8, 5. Discuss why 8.
                                            Maybe API changes needed.
                                            Re-estimate and settle on 5.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                If your estimates keep changing, it usually
                                means requirements are unclear or dependencies
                                are unknown.
                            </p>
                        </div>

                        {/* Risk management basics */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon warn">
                                    <FiAlertTriangle />
                                </span>
                                <h3 className="h3">Risk management basics</h3>
                            </div>

                            <p className="p">
                                <b>Risk</b> is anything that can delay delivery
                                or reduce quality. Risk management means finding
                                risks early and making a plan to handle them.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Identify</div>
                                    <div className="v">
                                        List possible problems early
                                        <span className="small">
                                            Example: dependency team not ready,
                                            unclear requirements, performance
                                            unknown.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Analyze</div>
                                    <div className="v">
                                        Check probability and impact
                                        <span className="small">
                                            Example: payment gateway delay is
                                            high impact, medium probability.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Mitigate</div>
                                    <div className="v">
                                        Reduce risk with actions
                                        <span className="small">
                                            Example: build mock API, create
                                            fallback, do spike prototype, add
                                            buffer time.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Monitor</div>
                                    <div className="v">
                                        Track risks during the project
                                        <span className="small">
                                            Example: weekly check on dependency
                                            delivery status.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                A good plan is not "no risks". A good plan is
                                "risks are known and handled".
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Estimation is about predicting effort with
                            uncertainty. Story points are relative size.
                            Velocity is completed points per sprint. Planning
                            poker aligns team understanding. Risk management
                            prevents surprises.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default EstimationAndPlanning;
