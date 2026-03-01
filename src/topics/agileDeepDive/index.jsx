// src/topics/agileDeepDive/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiRepeat,
    FiUsers,
    FiClipboard,
    FiColumns,
    FiMessageSquare,
    FiRefreshCcw,
} from "react-icons/fi";

const AgileDeepDive = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "agileDeepDive",
            title: "Agile Deep Dive",
            sub: "Scrum roles, sprint cycle, backlog, Kanban, standup, and retrospective with meanings and examples.",
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
                            <span className="badge">Agile</span>
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
                                    <FiRepeat />
                                </span>
                                <h3 className="h3">What is Agile</h3>
                            </div>

                            <p className="p">
                                <b>Agile</b> is a way of building software in
                                small steps with frequent feedback. Instead of
                                doing a big plan and shipping once, Agile teams
                                deliver smaller improvements regularly, learn
                                from users, and adjust quickly.
                            </p>

                            <p className="p">
                                Example: Instead of building a full e-commerce
                                app for 6 months and launching at the end, an
                                Agile team ships a basic checkout first, then
                                adds coupons, then adds order tracking, then
                                improves performance.
                            </p>

                            <p className="note">
                                Agile is a mindset. Scrum and Kanban are common
                                frameworks used to apply it.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiUsers />
                                </span>
                                <h3 className="h3">Scrum roles</h3>
                            </div>

                            <p className="p">
                                <b>Scrum</b> is a framework for Agile work. It
                                defines roles, events, and artifacts so teams
                                can deliver in fixed time cycles called sprints.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Product Owner</div>
                                    <div className="v">
                                        Decides what to build next based on
                                        business value. Owns prioritization.
                                        <span className="small">
                                            Example: chooses that "password
                                            reset" is more important than "dark
                                            mode"
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Scrum Master</div>
                                    <div className="v">
                                        Helps the team follow Scrum, removes
                                        blockers, and improves process. Not a
                                        manager.
                                        <span className="small">
                                            Example: resolves delays, improves
                                            meetings, clears dependencies
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Development Team</div>
                                    <div className="v">
                                        Cross-functional people who build the
                                        product. Usually developers, testers,
                                        designers, etc.
                                        <span className="small">
                                            Example: builds feature, tests it,
                                            reviews it, ships it
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Scrum roles ensure clarity - who decides
                                priorities, who supports the process, and who
                                builds.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCcw />
                                </span>
                                <h3 className="h3">Sprint cycle</h3>
                            </div>

                            <p className="p">
                                A <b>sprint</b> is a fixed time box where the
                                team commits to a small set of work and finishes
                                it. Most sprints are 1 to 2 weeks.
                            </p>

                            <div className="flow">
                                <div className="step">
                                    <div className="tag">1</div>
                                    <div className="body">
                                        <div className="t">Sprint Planning</div>
                                        <div className="d">
                                            Team selects work from backlog and
                                            defines sprint goal.
                                            <span className="small">
                                                Example goal: "Deliver login and
                                                signup flows"
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">2</div>
                                    <div className="body">
                                        <div className="t">Daily Standup</div>
                                        <div className="d">
                                            Short daily sync to track progress
                                            and blockers.
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">3</div>
                                    <div className="body">
                                        <div className="t">Build and Test</div>
                                        <div className="d">
                                            Implement tasks, review code, test
                                            features, and integrate.
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">4</div>
                                    <div className="body">
                                        <div className="t">Sprint Review</div>
                                        <div className="d">
                                            Demo completed work to stakeholders
                                            and get feedback.
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">5</div>
                                    <div className="body">
                                        <div className="t">Retrospective</div>
                                        <div className="d">
                                            Team reflects on what went well and
                                            what to improve next sprint.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Sprint cycle repeats. Feedback from review and
                                retrospective affects next sprint.
                            </p>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiClipboard />
                                </span>
                                <h3 className="h3">Backlog</h3>
                            </div>

                            <p className="p">
                                A <b>backlog</b> is a prioritized list of work.
                                It contains everything that could be built:
                                features, improvements, bugs, and technical
                                tasks.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Product Backlog</div>
                                    <div className="v">
                                        Master list of all planned work. Owned
                                        and prioritized by Product Owner.
                                        <span className="small">
                                            Example items: "Add wishlist", "Fix
                                            slow search", "Improve checkout"
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Sprint Backlog</div>
                                    <div className="v">
                                        The subset of backlog items chosen for
                                        the sprint. Owned by the team.
                                        <span className="small">
                                            Example: "Wishlist UI", "Wishlist
                                            API", "Wishlist tests"
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="p">
                                Backlog items are often written as{" "}
                                <b>user stories</b>. A user story describes
                                value from user perspective.
                            </p>

                            <div className="code">
                                <div className="monoTitle">
                                    Example user story
                                </div>
                                <pre className="mono">{`As a user, I want to reset my password so I can regain access to my account.`}</pre>
                            </div>

                            <p className="note">
                                Backlog grooming or refinement means regularly
                                cleaning, rewriting, splitting, and
                                re-prioritizing backlog items.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiColumns />
                                </span>
                                <h3 className="h3">Kanban</h3>
                            </div>

                            <p className="p">
                                <b>Kanban</b> is an Agile method focused on
                                continuous flow instead of fixed sprints. Work
                                moves through visible stages on a board.
                            </p>

                            <div className="mini">
                                <span className="pill">To Do</span>
                                <span className="dash">-</span>
                                <span className="pill">In Progress</span>
                                <span className="dash">-</span>
                                <span className="pill">Review</span>
                                <span className="dash">-</span>
                                <span className="pill">Done</span>
                            </div>

                            <ul className="list">
                                <li>
                                    <b>WIP limit</b> means Work In Progress
                                    limit. It restricts how many tasks can be in
                                    progress at once.
                                </li>
                                <li>
                                    Focus is to reduce waiting time and deliver
                                    continuously.
                                </li>
                            </ul>

                            <p className="note">
                                Kanban is great for support teams, maintenance
                                work, and continuous delivery pipelines.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiMessageSquare />
                                </span>
                                <h3 className="h3">Standup</h3>
                            </div>

                            <p className="p">
                                A <b>standup</b> is a short daily meeting. It is
                                called standup because it is meant to be quick.
                                Main goal is alignment and blocker visibility.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">What I did</div>
                                    <div className="v">
                                        Share progress since last standup.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">What I will do</div>
                                    <div className="v">
                                        Share plan for today.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Blockers</div>
                                    <div className="v">
                                        Anything preventing progress.
                                        <span className="small">
                                            Example: waiting for API endpoint,
                                            access issues, unclear requirement
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Standup is not a status report to a manager. It
                                is for the team to coordinate.
                            </p>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCcw />
                                </span>
                                <h3 className="h3">Retrospective</h3>
                            </div>

                            <p className="p">
                                A <b>retrospective</b> is a meeting after the
                                sprint where the team reflects on process and
                                collaboration. The goal is continuous
                                improvement, not blaming people.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">What went well</div>
                                    <div className="v">
                                        Identify practices to keep.
                                        <span className="small">
                                            Example: faster code reviews, clear
                                            tickets, fewer merge conflicts
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">What went wrong</div>
                                    <div className="v">
                                        Identify pain points.
                                        <span className="small">
                                            Example: unclear requirements, too
                                            many tasks started at once
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Action items</div>
                                    <div className="v">
                                        Concrete improvements for next sprint.
                                        <span className="small">
                                            Example: add definition of done
                                            checklist, set WIP limits, improve
                                            ticket templates
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                A good retrospective always ends with 1 to 3
                                small action items that the team actually
                                follows.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Scrum is sprint-based delivery with defined roles.
                            Kanban is continuous flow with visual stages and WIP
                            limits. Standup shows progress and blockers.
                            Retrospective improves the process.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AgileDeepDive;
