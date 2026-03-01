// src/topics/projectManagementBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiClipboard,
    FiTarget,
    FiClock,
    FiDollarSign,
    FiUsers,
    FiGrid,
    FiBarChart2,
    FiGitBranch,
} from "react-icons/fi";

const ProjectManagementBasics = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "projectManagementBasics",
            title: "Project Management Basics",
            sub: "Scope, timeline, budget, stakeholders, RACI, Gantt, and critical path with beginner-friendly examples.",
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
                            <span className="badge">Planning</span>
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
                        {/* Scope */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTarget />
                                </span>
                                <h3 className="h3">Scope</h3>
                            </div>

                            <p className="p">
                                <b>Scope</b> means what work is included in the
                                project and what is not included. Clear scope
                                prevents confusion and reduces unexpected work.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">In scope</div>
                                    <div className="v">
                                        Features we will deliver in this
                                        project.
                                        <span className="small">
                                            Example: Login, signup, forgot
                                            password.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Out of scope</div>
                                    <div className="v">
                                        Work explicitly not included.
                                        <span className="small">
                                            Example: Social login,
                                            multi-language support.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Scope creep means scope keeps increasing without
                                adjusting time or budget.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiClock />
                                </span>
                                <h3 className="h3">Timeline</h3>
                            </div>

                            <p className="p">
                                <b>Timeline</b> is the schedule of the project.
                                It includes milestones, deadlines, and the order
                                of work.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Milestone</b> - a major checkpoint
                                    <span className="small">
                                        Example: "MVP ready" by end of week 2.
                                    </span>
                                </li>
                                <li>
                                    <b>Deadline</b> - latest acceptable date
                                    <span className="small">
                                        Example: "Release to users" by March 15.
                                    </span>
                                </li>
                                <li>
                                    <b>Dependencies</b> - tasks that block other
                                    tasks
                                    <span className="small">
                                        Example: API must be ready before
                                        frontend integration.
                                    </span>
                                </li>
                            </ul>

                            <p className="note">
                                Timelines should include buffer for testing,
                                review, and unexpected issues.
                            </p>
                        </div>

                        {/* Budget */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiDollarSign />
                                </span>
                                <h3 className="h3">Budget</h3>
                            </div>

                            <p className="p">
                                <b>Budget</b> is the money allocated to complete
                                the project. It includes people cost, tooling,
                                infrastructure, and risk buffer.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>People cost</b> - developer time, QA,
                                    design
                                </li>
                                <li>
                                    <b>Tools</b> - paid services, licenses, APIs
                                </li>
                                <li>
                                    <b>Infrastructure</b> - servers, database,
                                    storage
                                </li>
                                <li>
                                    <b>Contingency</b> - extra buffer for
                                    surprises
                                </li>
                            </ul>

                            <p className="note">
                                If scope increases, budget or timeline must also
                                increase.
                            </p>
                        </div>

                        {/* Stakeholders */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiUsers />
                                </span>
                                <h3 className="h3">Stakeholders</h3>
                            </div>

                            <p className="p">
                                <b>Stakeholders</b> are people who care about
                                the project outcome. They influence
                                requirements, priorities, and acceptance.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Users</b> - people who use the product
                                </li>
                                <li>
                                    <b>Client</b> - paying party or business
                                    owner
                                </li>
                                <li>
                                    <b>Product manager</b> - decides priorities
                                </li>
                                <li>
                                    <b>Engineering team</b> - builds and
                                    maintains
                                </li>
                                <li>
                                    <b>QA</b> - validates quality
                                </li>
                            </ul>

                            <p className="note">
                                Managing stakeholders means managing
                                expectations.
                            </p>
                        </div>

                        {/* RACI */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGrid />
                                </span>
                                <h3 className="h3">RACI matrix</h3>
                            </div>

                            <p className="p">
                                <b>RACI</b> is a responsibility matrix used to
                                clarify who does what. It reduces confusion and
                                prevents "everyone thought someone else will do
                                it".
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">R</div>
                                    <div className="v">
                                        <b>Responsible</b> - the person who does
                                        the work
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">A</div>
                                    <div className="v">
                                        <b>Accountable</b> - the person who owns
                                        the final result (one owner)
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">C</div>
                                    <div className="v">
                                        <b>Consulted</b> - people who give input
                                        before work is finalized
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">I</div>
                                    <div className="v">
                                        <b>Informed</b> - people who should be
                                        updated after decisions
                                    </div>
                                </div>
                            </div>

                            <div className="example">
                                <div className="exTitle">Mini example</div>
                                <div className="exRow">
                                    <span className="exKey">Task</span>
                                    <span className="exVal">
                                        Deploy backend to production
                                    </span>
                                </div>
                                <div className="exRow">
                                    <span className="exKey">R</span>
                                    <span className="exVal">Developer</span>
                                </div>
                                <div className="exRow">
                                    <span className="exKey">A</span>
                                    <span className="exVal">Tech lead</span>
                                </div>
                                <div className="exRow">
                                    <span className="exKey">C</span>
                                    <span className="exVal">QA, DevOps</span>
                                </div>
                                <div className="exRow">
                                    <span className="exKey">I</span>
                                    <span className="exVal">
                                        Product manager, client
                                    </span>
                                </div>
                            </div>

                            <p className="note">
                                Best rule: only one "A" for each task.
                            </p>
                        </div>

                        {/* Gantt */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBarChart2 />
                                </span>
                                <h3 className="h3">Gantt chart</h3>
                            </div>

                            <p className="p">
                                A <b>Gantt chart</b> is a timeline view of
                                tasks. It shows task duration, overlap, and
                                dependencies.
                            </p>

                            <ul className="list">
                                <li>
                                    Useful for planning long projects with many
                                    tasks.
                                </li>
                                <li>Helps visualize parallel work.</li>
                                <li>Makes delays easier to spot.</li>
                            </ul>

                            <p className="note">
                                In Agile, we may use sprint boards more often,
                                but Gantt is still useful for high level
                                planning.
                            </p>
                        </div>

                        {/* Critical path */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitBranch />
                                </span>
                                <h3 className="h3">Critical path</h3>
                            </div>

                            <p className="p">
                                The <b>critical path</b> is the longest chain of
                                dependent tasks that decides the shortest
                                possible project duration. If any task on the
                                critical path is delayed, the whole project gets
                                delayed.
                            </p>

                            <div className="example">
                                <div className="exTitle">Simple example</div>
                                <div className="exRow">
                                    <span className="exKey">A</span>
                                    <span className="exVal">
                                        Design (2 days)
                                    </span>
                                </div>
                                <div className="exRow">
                                    <span className="exKey">B</span>
                                    <span className="exVal">
                                        Backend API (4 days) depends on A
                                    </span>
                                </div>
                                <div className="exRow">
                                    <span className="exKey">C</span>
                                    <span className="exVal">
                                        Frontend integration (3 days) depends on
                                        B
                                    </span>
                                </div>
                                <div className="exRow">
                                    <span className="exKey">D</span>
                                    <span className="exVal">
                                        Testing (2 days) depends on C
                                    </span>
                                </div>

                                <div className="exFooter">
                                    Total = 11 days. Any delay in A, B, C, or D
                                    delays delivery.
                                </div>
                            </div>

                            <p className="note">
                                Non-critical tasks have slack time. Critical
                                path tasks have zero slack.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Scope defines what to build, timeline defines when,
                            budget defines cost, stakeholders define
                            expectations. RACI clarifies responsibility, Gantt
                            shows schedule, critical path shows what cannot
                            slip.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ProjectManagementBasics;
