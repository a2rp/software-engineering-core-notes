// src/topics/systemDesignFundamentals/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiMap,
    FiBox,
    FiServer,
    FiGrid,
    FiShuffle,
    FiSliders,
} from "react-icons/fi";

const SystemDesignFundamentals = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "systemDesignFundamentals",
            title: "System Design Fundamentals",
            sub: "HLD vs LLD, architecture types, coupling vs cohesion, and practical tradeoffs.",
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
                        <FiLayers />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Design</span>
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
                        {/* HLD vs LLD */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiMap />
                                </span>
                                <h3 className="h3">
                                    High Level Design vs Low Level Design
                                </h3>
                            </div>

                            <p className="p">
                                In real projects, design happens at two levels.
                                First you decide the big picture, then you
                                design the internals of each module.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">HLD</div>
                                    <div className="v">
                                        <b>HLD</b> is <b>High Level Design</b>.
                                        It focuses on system structure and
                                        component boundaries.
                                        <span className="small">
                                            Example: Web app, API service,
                                            database, cache, and how they talk
                                            to each other.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">LLD</div>
                                    <div className="v">
                                        <b>LLD</b> is <b>Low Level Design</b>.
                                        It focuses on internal classes, modules,
                                        data models, and detailed logic.
                                        <span className="small">
                                            Example: API endpoint validation
                                            flow, service classes, DTOs, DB
                                            schema fields, and edge cases.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mini">
                                <span className="pill">HLD is the map</span>
                                <span className="dash">-</span>
                                <span className="pill">
                                    LLD is the building plan
                                </span>
                            </div>

                            <p className="note">
                                Interviews often mix the words. For software
                                engineering, this section is about understanding
                                the difference clearly.
                            </p>
                        </div>

                        {/* Architecture types */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGrid />
                                </span>
                                <h3 className="h3">Architecture types</h3>
                            </div>

                            <p className="p">
                                Architecture means how software components are
                                organized and how they communicate. There is no
                                "best" architecture. There is only "best for the
                                current constraints".
                            </p>

                            <div className="archGrid">
                                <div className="archCard">
                                    <div className="aTop">
                                        <span className="aIcon">
                                            <FiBox />
                                        </span>
                                        <div className="aTitle">Monolith</div>
                                    </div>
                                    <p className="aText">
                                        Single codebase and single deployment
                                        unit. UI, API, and business logic often
                                        live together.
                                    </p>
                                    <ul className="aList">
                                        <li>
                                            <b>Good for</b> small teams, fast
                                            start, simpler debugging.
                                        </li>
                                        <li>
                                            <b>Risk</b> becomes harder to scale
                                            teams and releases as it grows.
                                        </li>
                                        <li>
                                            <b>Example</b> early stage
                                            e-commerce app deployed as one
                                            server.
                                        </li>
                                    </ul>
                                </div>

                                <div className="archCard">
                                    <div className="aTop">
                                        <span className="aIcon">
                                            <FiServer />
                                        </span>
                                        <div className="aTitle">
                                            Microservices
                                        </div>
                                    </div>
                                    <p className="aText">
                                        Many small services, each owning a
                                        specific business capability. Each can
                                        be deployed independently.
                                    </p>
                                    <ul className="aList">
                                        <li>
                                            <b>Good for</b> large teams,
                                            independent scaling, independent
                                            releases.
                                        </li>
                                        <li>
                                            <b>Risk</b> complexity increases -
                                            networking, monitoring, failures,
                                            data consistency.
                                        </li>
                                        <li>
                                            <b>Example</b> separate services for
                                            auth, catalog, orders, payments.
                                        </li>
                                    </ul>
                                </div>

                                <div className="archCard">
                                    <div className="aTop">
                                        <span className="aIcon">
                                            <FiServer />
                                        </span>
                                        <div className="aTitle">
                                            Client server
                                        </div>
                                    </div>
                                    <p className="aText">
                                        Client requests data or actions, server
                                        processes and responds. Most web apps
                                        follow this model.
                                    </p>
                                    <ul className="aList">
                                        <li>
                                            <b>Client</b> browser app, mobile
                                            app, desktop app.
                                        </li>
                                        <li>
                                            <b>Server</b> API, database access,
                                            auth, business logic.
                                        </li>
                                        <li>
                                            <b>Example</b> React app calls REST
                                            API which talks to database.
                                        </li>
                                    </ul>
                                </div>

                                <div className="archCard">
                                    <div className="aTop">
                                        <span className="aIcon">
                                            <FiLayers />
                                        </span>
                                        <div className="aTitle">
                                            Layered architecture
                                        </div>
                                    </div>
                                    <p className="aText">
                                        Code is organized into layers. Each
                                        layer has a responsibility and depends
                                        on the layer below it.
                                    </p>
                                    <ul className="aList">
                                        <li>
                                            <b>Common layers</b> UI, controller,
                                            service, repository, database.
                                        </li>
                                        <li>
                                            <b>Benefit</b> clearer separation of
                                            concerns and easier testing.
                                        </li>
                                        <li>
                                            <b>Example</b> Controller calls
                                            Service, Service calls Repository.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="note">
                                You can combine architectures. Example: a system
                                can be microservices and each service can be
                                layered inside.
                            </p>
                        </div>

                        {/* Coupling vs Cohesion */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiSliders />
                                </span>
                                <h3 className="h3">Coupling vs Cohesion</h3>
                            </div>

                            <p className="p">
                                These two words define how clean your design is.
                                Most design problems are actually coupling
                                problems.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Coupling</div>
                                    <div className="v">
                                        How much one module depends on another
                                        module.
                                        <span className="small">
                                            Goal: low coupling so changes do not
                                            break many parts.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Cohesion</div>
                                    <div className="v">
                                        How well the code inside a module
                                        belongs together.
                                        <span className="small">
                                            Goal: high cohesion so one module
                                            does one job clearly.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Easy rule: keep related things together, keep
                                unrelated things separate.
                            </p>
                        </div>

                        {/* Tradeoffs */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShuffle />
                                </span>
                                <h3 className="h3">Design tradeoffs</h3>
                            </div>

                            <p className="p">
                                Every design decision has a cost. Tradeoff means
                                you gain something but lose something else.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Speed vs Maintainability</b> - quick
                                    hacks deliver fast but create future pain.
                                </li>
                                <li>
                                    <b>Simplicity vs Flexibility</b> - more
                                    options and plugins mean more complexity.
                                </li>
                                <li>
                                    <b>Cost vs Reliability</b> - redundancy
                                    improves uptime but increases cost.
                                </li>
                                <li>
                                    <b>Consistency vs Availability</b> -
                                    distributed systems often force a choice
                                    during failures.
                                </li>
                                <li>
                                    <b>Monolith vs Microservices</b> - monolith
                                    is simpler at first, microservices help
                                    scaling teams later.
                                </li>
                            </ul>

                            <p className="note">
                                Good engineers explain tradeoffs and choose
                                based on requirements, not preferences.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            HLD is the system picture. LLD is internal
                            structure. Choose architecture based on constraints.
                            Aim for low coupling and high cohesion. Always
                            explain tradeoffs.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SystemDesignFundamentals;
