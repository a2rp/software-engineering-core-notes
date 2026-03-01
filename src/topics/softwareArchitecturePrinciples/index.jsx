// src/topics/softwareArchitecturePrinciples/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiShield,
    FiCopy,
    FiFeather,
    FiSlash,
} from "react-icons/fi";

const SoftwareArchitecturePrinciples = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "softwareArchitecturePrinciples",
            title: "Software Architecture Principles",
            sub: "SOLID, DRY, KISS, YAGNI, and Separation of Concerns with beginner friendly examples.",
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
                            <span className="badge">Core principles</span>
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
                        {/* Architecture principles intro */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">
                                    What are architecture principles
                                </h3>
                            </div>

                            <p className="p">
                                <b>Software architecture principles</b> are
                                simple rules that help you design code and
                                systems that are easy to understand, easy to
                                change, and harder to break. These principles
                                reduce bugs, reduce effort, and make teamwork
                                smoother.
                            </p>

                            <p className="p">
                                Think of these like "traffic rules" for code. If
                                everyone follows the same rules, the system
                                stays predictable even when many developers work
                                on it.
                            </p>

                            <div className="mini">
                                <span className="pill">Readable</span>
                                <span className="dash">-</span>
                                <span className="pill">Maintainable</span>
                                <span className="dash">-</span>
                                <span className="pill">Testable</span>
                                <span className="dash">-</span>
                                <span className="pill">Scalable</span>
                            </div>
                        </div>

                        {/* SOLID */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">
                                    SOLID principles (full form and meaning)
                                </h3>
                            </div>

                            <p className="p">
                                <b>SOLID</b> is a set of five object-oriented
                                design principles that make code easier to
                                maintain and extend. Each letter stands for one
                                principle.
                            </p>

                            <div className="solidGrid">
                                <div className="solidItem">
                                    <div className="solidHead">
                                        <span className="letter">S</span>
                                        <div className="name">
                                            SRP - Single Responsibility
                                            Principle
                                        </div>
                                    </div>
                                    <p className="p2">
                                        A class or module should have{" "}
                                        <b>one main reason to change</b>. It
                                        should do one job well.
                                    </p>
                                    <p className="ex">
                                        Example: A "UserService" should not also
                                        format UI HTML. Keep business logic
                                        separate from UI formatting.
                                    </p>
                                </div>

                                <div className="solidItem">
                                    <div className="solidHead">
                                        <span className="letter">O</span>
                                        <div className="name">
                                            OCP - Open/Closed Principle
                                        </div>
                                    </div>
                                    <p className="p2">
                                        Software entities should be{" "}
                                        <b>open for extension</b> but
                                        <b> closed for modification</b>. Add new
                                        behavior without editing old working
                                        code too much.
                                    </p>
                                    <p className="ex">
                                        Example: Add a new payment method by
                                        adding a new strategy class instead of
                                        editing a big "if else" chain.
                                    </p>
                                </div>

                                <div className="solidItem">
                                    <div className="solidHead">
                                        <span className="letter">L</span>
                                        <div className="name">
                                            LSP - Liskov Substitution Principle
                                        </div>
                                    </div>
                                    <p className="p2">
                                        A child class should be usable anywhere
                                        the parent class is expected without
                                        breaking behavior.
                                    </p>
                                    <p className="ex">
                                        Example: If "Bird" has a "fly" method,
                                        then a "Penguin" should not inherit
                                        "Bird" if it cannot fly. Use better
                                        modeling.
                                    </p>
                                </div>

                                <div className="solidItem">
                                    <div className="solidHead">
                                        <span className="letter">I</span>
                                        <div className="name">
                                            ISP - Interface Segregation
                                            Principle
                                        </div>
                                    </div>
                                    <p className="p2">
                                        Do not force clients to depend on
                                        methods they do not use. Prefer many
                                        small interfaces over one large
                                        interface.
                                    </p>
                                    <p className="ex">
                                        Example: A "Printer" interface should
                                        not force "scan" methods. Create
                                        separate "Printable" and "Scannable"
                                        interfaces.
                                    </p>
                                </div>

                                <div className="solidItem">
                                    <div className="solidHead">
                                        <span className="letter">D</span>
                                        <div className="name">
                                            DIP - Dependency Inversion Principle
                                        </div>
                                    </div>
                                    <p className="p2">
                                        High-level modules should not depend on
                                        low-level modules directly. Both should
                                        depend on abstractions.
                                    </p>
                                    <p className="ex">
                                        Example: "OrderService" should depend on
                                        a "PaymentGateway" interface, not
                                        directly on "RazorpayGateway" class.
                                    </p>
                                </div>
                            </div>

                            <p className="note">
                                You do not need to force SOLID everywhere. Use
                                it where change and complexity exists.
                            </p>
                        </div>

                        {/* DRY */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCopy />
                                </span>
                                <h3 className="h3">
                                    DRY - Don't Repeat Yourself
                                </h3>
                            </div>

                            <p className="p">
                                <b>DRY</b> stands for{" "}
                                <b>Don't Repeat Yourself</b>. The same logic
                                should not be written in multiple places. If
                                something changes, you should update it in one
                                place only.
                            </p>

                            <ul className="list">
                                <li>
                                    Repeating code increases bugs because
                                    different copies drift over time.
                                </li>
                                <li>
                                    Repeating rules causes inconsistency in
                                    validations and calculations.
                                </li>
                            </ul>

                            <p className="ex">
                                Example: If you validate phone numbers in 3
                                places, and the rule changes, you might update
                                only 2 places and the third becomes a bug.
                            </p>

                            <p className="note">
                                DRY is not about making everything one function.
                                It is about avoiding duplicate knowledge and
                                rules.
                            </p>
                        </div>

                        {/* KISS */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiFeather />
                                </span>
                                <h3 className="h3">KISS - Keep It Simple</h3>
                            </div>

                            <p className="p">
                                <b>KISS</b> stands for <b>Keep It Simple</b>.
                                Prefer the simplest solution that works
                                correctly. Simple code is easier to read, debug,
                                test, and maintain.
                            </p>

                            <ul className="list">
                                <li>Fewer moving parts means fewer bugs.</li>
                                <li>Simple designs help teams work faster.</li>
                            </ul>

                            <p className="ex">
                                Example: If an "if else" is enough, do not add a
                                complicated abstraction or framework pattern
                                just to look advanced.
                            </p>

                            <p className="note">
                                Simple does not mean sloppy. Simple means clear
                                and correct.
                            </p>
                        </div>

                        {/* YAGNI */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiSlash />
                                </span>
                                <h3 className="h3">
                                    YAGNI - You Aren't Gonna Need It
                                </h3>
                            </div>

                            <p className="p">
                                <b>YAGNI</b> stands for{" "}
                                <b>You Aren't Gonna Need It</b>. Do not build
                                features or complexity before it is actually
                                required. Build what is needed now, and keep the
                                design flexible for later.
                            </p>

                            <ul className="list">
                                <li>Extra features take time and add bugs.</li>
                                <li>
                                    "Future proof" code often becomes unused and
                                    confusing.
                                </li>
                            </ul>

                            <p className="ex">
                                Example: Do not add multi-tenant architecture on
                                day 1 if you have only one customer. Add it when
                                real requirements appear.
                            </p>

                            <p className="note">
                                YAGNI saves time and keeps code clean. Premature
                                complexity is a common project killer.
                            </p>
                        </div>

                        {/* Separation of concerns */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Separation of concerns</h3>
                            </div>

                            <p className="p">
                                <b>Separation of concerns</b> means dividing a
                                system into parts where each part handles one
                                concern. A <b>concern</b> is a specific
                                responsibility like UI rendering, business
                                rules, or database access.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">UI concern</div>
                                    <div className="v">
                                        Display data, handle user input, show
                                        errors.
                                        <span className="small">
                                            Example: React components, pages,
                                            forms.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Business concern</div>
                                    <div className="v">
                                        Rules and decisions.
                                        <span className="small">
                                            Example: pricing rules, discount
                                            logic, role checks.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Data concern</div>
                                    <div className="v">
                                        Storage and retrieval.
                                        <span className="small">
                                            Example: database queries, API
                                            calls.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="ex">
                                Example: Keep your React UI separate from API
                                logic. Put API calls in a service file, and keep
                                components focused on rendering and user
                                interaction.
                            </p>

                            <p className="note">
                                This improves testing, reduces merge conflicts,
                                and makes changes safer.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            SOLID improves object-oriented design. DRY reduces
                            duplication. KISS keeps solutions simple. YAGNI
                            avoids premature complexity. Separation of concerns
                            keeps responsibilities separate.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SoftwareArchitecturePrinciples;
