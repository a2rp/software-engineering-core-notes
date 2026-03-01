// src/topics/umlBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiMap,
    FiUsers,
    FiBox,
    FiRepeat,
    FiGitCommit,
    FiActivity,
} from "react-icons/fi";

const UmlBasics = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "umlBasics",
            title: "UML Basics",
            sub: "UML meaning and the most used diagrams - use case, class, sequence, activity, and state.",
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
                        <FiMap />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Design Docs</span>
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
                        {/* What is UML */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiMap />
                                </span>
                                <h3 className="h3">
                                    What is UML - Unified Modeling Language
                                </h3>
                            </div>

                            <p className="p">
                                <b>UML</b> stands for{" "}
                                <b>Unified Modeling Language</b>. It is a
                                standard way to visually describe a software
                                system. UML diagrams help teams communicate
                                clearly using pictures instead of long text.
                            </p>

                            <p className="p">
                                Beginners tip: UML is not mandatory for every
                                project. Use it when the system is complex, when
                                multiple developers are involved, or when you
                                want clarity before coding.
                            </p>

                            <div className="mini">
                                <span className="pill">Explain</span>
                                <span className="dash">-</span>
                                <span className="pill">Plan</span>
                                <span className="dash">-</span>
                                <span className="pill">Discuss</span>
                                <span className="dash">-</span>
                                <span className="pill">Document</span>
                            </div>

                            <p className="note">
                                UML helps you answer "What will we build" and
                                "How will parts interact" before writing code.
                            </p>
                        </div>

                        {/* Use case */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiUsers />
                                </span>
                                <h3 className="h3">Use case diagram</h3>
                            </div>

                            <p className="p">
                                A <b>use case diagram</b> shows <b>who</b> uses
                                the system and <b>what</b> they can do. It
                                focuses on user goals, not internal code.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Shows</div>
                                    <div className="v">
                                        Actors and their actions (use cases).
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Good for</div>
                                    <div className="v">
                                        Requirement clarity and scope.
                                    </div>
                                </div>
                            </div>

                            <p className="p">Example for an e-commerce app:</p>

                            <ul className="list">
                                <li>
                                    Actor: Customer - use cases: "Browse
                                    products", "Add to cart", "Checkout"
                                </li>
                                <li>
                                    Actor: Admin - use cases: "Add product",
                                    "Update price", "View orders"
                                </li>
                            </ul>

                            <p className="note">
                                Use case diagram is a map of features from the
                                user point of view.
                            </p>
                        </div>

                        {/* Class diagram */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBox />
                                </span>
                                <h3 className="h3">Class diagram</h3>
                            </div>

                            <p className="p">
                                A <b>class diagram</b> shows the static
                                structure of the system - classes, their fields,
                                methods, and relationships.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Shows</div>
                                    <div className="v">
                                        Classes, properties, methods,
                                        associations, inheritance.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Good for</div>
                                    <div className="v">
                                        Object model planning, data modeling,
                                        architecture clarity.
                                    </div>
                                </div>
                            </div>

                            <p className="p">Example for a library system:</p>

                            <ul className="list">
                                <li>
                                    Class: Book - fields: title, author, isbn -
                                    methods: isAvailable()
                                </li>
                                <li>
                                    Class: Member - fields: name, id - methods:
                                    borrowBook()
                                </li>
                                <li>
                                    Relationship: Member borrows Book
                                    (association)
                                </li>
                            </ul>

                            <p className="note">
                                Class diagram is like a blueprint of objects and
                                relationships.
                            </p>
                        </div>

                        {/* Sequence diagram */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRepeat />
                                </span>
                                <h3 className="h3">Sequence diagram</h3>
                            </div>

                            <p className="p">
                                A <b>sequence diagram</b> shows how objects or
                                services interact over time. It focuses on the
                                order of messages and calls.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Shows</div>
                                    <div className="v">
                                        Time order of requests and responses
                                        between components.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Good for</div>
                                    <div className="v">
                                        API flows, microservice interactions,
                                        request lifecycle.
                                    </div>
                                </div>
                            </div>

                            <p className="p">Example: User login flow</p>

                            <ul className="list">
                                <li>User - sends login request to UI</li>
                                <li>UI - calls Auth API</li>
                                <li>Auth API - checks DB</li>
                                <li>DB - returns user record</li>
                                <li>
                                    Auth API - returns token or session to UI
                                </li>
                            </ul>

                            <p className="note">
                                Sequence diagram is perfect when you want to
                                explain "what calls what" in order.
                            </p>
                        </div>

                        {/* Activity diagram */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiActivity />
                                </span>
                                <h3 className="h3">Activity diagram</h3>
                            </div>

                            <p className="p">
                                An <b>activity diagram</b> shows workflow steps
                                and decisions. It is like a flowchart but more
                                structured for software processes.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Shows</div>
                                    <div className="v">
                                        Steps, decisions, parallel actions,
                                        start and end.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Good for</div>
                                    <div className="v">
                                        Business logic flows and process
                                        documentation.
                                    </div>
                                </div>
                            </div>

                            <p className="p">Example: Checkout flow</p>

                            <ul className="list">
                                <li>Start - user clicks checkout</li>
                                <li>Validate cart items</li>
                                <li>Decision: payment success?</li>
                                <li>If yes - create order and show success</li>
                                <li>If no - show error and retry</li>
                            </ul>

                            <p className="note">
                                Activity diagram is best for explaining workflow
                                and decision logic.
                            </p>
                        </div>

                        {/* State diagram */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitCommit />
                                </span>
                                <h3 className="h3">State diagram</h3>
                            </div>

                            <p className="p">
                                A <b>state diagram</b> shows different states of
                                an object and transitions between those states.
                                It is useful when something changes over time
                                based on events.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Shows</div>
                                    <div className="v">
                                        States, events, transitions, and final
                                        state.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Good for</div>
                                    <div className="v">
                                        Order status, payment status, ticket
                                        lifecycle, user account lifecycle.
                                    </div>
                                </div>
                            </div>

                            <p className="p">
                                Example: Order states in e-commerce
                            </p>

                            <div className="mini">
                                <span className="pill">Created</span>
                                <span className="dash">-</span>
                                <span className="pill">Paid</span>
                                <span className="dash">-</span>
                                <span className="pill">Shipped</span>
                                <span className="dash">-</span>
                                <span className="pill">Delivered</span>
                                <span className="dash">-</span>
                                <span className="pill">Returned</span>
                            </div>

                            <p className="note">
                                State diagrams are very useful for systems where
                                valid transitions matter. Example: you should
                                not go from "Delivered" back to "Shipped".
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Use case - user goals. Class - structure. Sequence -
                            interaction order. Activity - workflow. State -
                            lifecycle states.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default UmlBasics;
