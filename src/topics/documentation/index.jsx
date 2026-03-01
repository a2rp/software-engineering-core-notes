// src/topics/documentation/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiFileText,
    FiBookOpen,
    FiLayers,
    FiList,
    FiLink,
} from "react-icons/fi";

const Documentation = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "documentation",
            title: "Documentation",
            sub: "API documentation, README structure, architecture docs, and change logs with beginner friendly examples.",
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
                        <FiFileText />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Must know</span>
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
                                    <FiBookOpen />
                                </span>
                                <h3 className="h3">What is documentation</h3>
                            </div>

                            <p className="p">
                                <b>Documentation</b> is written information that
                                explains how a software system works, how to use
                                it, and how to maintain it. Good documentation
                                reduces confusion, speeds up onboarding, and
                                prevents repeated mistakes.
                            </p>

                            <p className="p">
                                Simple example: If you leave a project after 6
                                months, documentation is what helps you or
                                another developer understand how to run it, how
                                features are designed, and how changes should be
                                made safely.
                            </p>

                            <p className="note">
                                Documentation is not only for users. It is also
                                for developers, testers, DevOps teams, and
                                future you.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLink />
                                </span>
                                <h3 className="h3">API documentation</h3>
                            </div>

                            <p className="p">
                                <b>API</b> means{" "}
                                <b>Application Programming Interface</b>. API
                                documentation explains how to call an API and
                                what to expect in return. It is used by frontend
                                developers, other services, mobile apps, and
                                external clients.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">What it includes</div>
                                    <div className="v">
                                        Endpoints, methods, request body,
                                        response body, status codes,
                                        authentication, examples.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Example</div>
                                    <div className="v">
                                        <span className="mono">
                                            GET /users/me
                                        </span>
                                        <span className="small">
                                            Returns current logged-in user
                                            details.
                                        </span>
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Why it matters</div>
                                    <div className="v">
                                        Without API docs, developers guess
                                        inputs and outputs, which causes bugs
                                        and slow integration.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Common formats: OpenAPI (formerly called
                                Swagger) and Postman collections.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBookOpen />
                                </span>
                                <h3 className="h3">README structure</h3>
                            </div>

                            <p className="p">
                                A <b>README</b> is the first document people
                                read in a repository. It should explain what the
                                project is and how to run it.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>
                                        Project title and one-line description
                                    </b>
                                    <span className="small">
                                        Example: "Software Engineering Core
                                        Notes - quick revision single page"
                                    </span>
                                </li>
                                <li>
                                    <b>Purpose and coverage</b>
                                    <span className="small">
                                        What topics or features are included
                                    </span>
                                </li>
                                <li>
                                    <b>Tech stack</b>
                                    <span className="small">
                                        Example: React, Vite, styled-components
                                    </span>
                                </li>
                                <li>
                                    <b>How to run locally</b>
                                    <span className="small">
                                        Example: npm install then npm run dev
                                    </span>
                                </li>
                                <li>
                                    <b>Build and deploy steps</b>
                                    <span className="small">
                                        Example: GitHub Pages deploy command
                                    </span>
                                </li>
                            </ul>

                            <p className="note">
                                Good README makes a repo usable in minutes, not
                                hours.
                            </p>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Architecture docs</h3>
                            </div>

                            <p className="p">
                                <b>Architecture documents</b> explain the system
                                design at a higher level. They help teams
                                understand how components connect and why
                                decisions were made.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">What it includes</div>
                                    <div className="v">
                                        System overview, major components, data
                                        flow, database design overview, external
                                        services, and deployment flow.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Common diagrams</div>
                                    <div className="v">
                                        Component diagram, sequence diagram,
                                        flow diagram, and deployment diagram.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Example</div>
                                    <div className="v">
                                        "Frontend calls API gateway, API gateway
                                        routes to auth service and product
                                        service, database stores users and
                                        products."
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Architecture docs are not only drawings. They
                                should include the reasoning and tradeoffs
                                behind choices.
                            </p>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiList />
                                </span>
                                <h3 className="h3">Change logs</h3>
                            </div>

                            <p className="p">
                                A <b>change log</b> is a record of changes made
                                across versions of a project. It helps users and
                                developers quickly see what changed between
                                releases.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">What it includes</div>
                                    <div className="v">
                                        Version number, date, and grouped
                                        changes like Added, Changed, Fixed,
                                        Removed.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Example entry</div>
                                    <div className="v">
                                        <span className="mono">1.0.2</span>
                                        <span className="small">
                                            Fixed login redirect bug. Added
                                            caching for notes search.
                                        </span>
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Why it matters</div>
                                    <div className="v">
                                        Without a change log, teams waste time
                                        asking "what changed" and debugging
                                        unknown updates.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Change log is different from git commit history.
                                Change log is human-friendly summary of
                                releases.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            README helps run the project. API docs help
                            integrate. Architecture docs explain system
                            structure. Change logs track releases.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Documentation;
