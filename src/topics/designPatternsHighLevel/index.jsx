// src/topics/designPatternsHighLevel/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiBox,
    FiGitMerge,
    FiCpu,
    FiRepeat,
    FiSettings,
    FiLink,
} from "react-icons/fi";

const DesignPatternsHighLevel = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "designPatternsHighLevel",
            title: "Design Patterns (High Level)",
            sub: "Creational, Structural, Behavioral patterns - plus Singleton, Factory, Observer, and Strategy with examples.",
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
                            <span className="badge">Architecture</span>
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
                                    <FiBox />
                                </span>
                                <h3 className="h3">What is a design pattern</h3>
                            </div>

                            <p className="p">
                                A <b>design pattern</b> is a reusable solution
                                to a common software design problem. It is not
                                copy-paste code. It is a repeatable idea or
                                structure that helps you write code that is
                                easier to change and maintain.
                            </p>

                            <p className="p">
                                Think of patterns like "recipes" for design.
                                Same problem appears again and again, so we keep
                                a known approach instead of inventing from zero
                                each time.
                            </p>

                            <p className="note">
                                Patterns improve communication too. If someone
                                says "use Factory", the team quickly understands
                                the shape of the solution.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiSettings />
                                </span>
                                <h3 className="h3">
                                    Creational patterns overview
                                </h3>
                            </div>

                            <p className="p">
                                <b>Creational patterns</b> focus on{" "}
                                <b>object creation</b>. They control how objects
                                are created so code stays flexible and does not
                                depend on concrete classes directly.
                            </p>

                            <ul className="list">
                                <li>
                                    Goal - create objects in a clean, controlled
                                    way
                                </li>
                                <li>
                                    Helps when creation logic is complex or must
                                    be interchangeable
                                </li>
                            </ul>

                            <p className="note">
                                Example idea: instead of doing "new" everywhere,
                                use a creator that decides what to build.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLink />
                                </span>
                                <h3 className="h3">
                                    Structural patterns overview
                                </h3>
                            </div>

                            <p className="p">
                                <b>Structural patterns</b> focus on{" "}
                                <b>how objects and classes are composed</b>.
                                They help you build bigger structures from
                                smaller pieces without making the system messy.
                            </p>

                            <ul className="list">
                                <li>
                                    Goal - compose parts cleanly and reuse code
                                </li>
                                <li>
                                    Common vibe - wrapping, connecting, adapting
                                </li>
                            </ul>

                            <p className="note">
                                Example idea: wrap an old library so your app
                                can use it with a cleaner interface.
                            </p>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRepeat />
                                </span>
                                <h3 className="h3">
                                    Behavioral patterns overview
                                </h3>
                            </div>

                            <p className="p">
                                <b>Behavioral patterns</b> focus on{" "}
                                <b>how objects communicate</b> and how
                                responsibilities are distributed. They define
                                clean ways to handle interactions, events, and
                                workflows.
                            </p>

                            <ul className="list">
                                <li>
                                    Goal - keep communication clean and avoid
                                    tight coupling
                                </li>
                                <li>
                                    Helps in event systems, workflows, and
                                    changing behavior at runtime
                                </li>
                            </ul>

                            <p className="note">
                                Example idea: when one thing changes, many other
                                things need to react without direct
                                dependencies.
                            </p>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCpu />
                                </span>
                                <h3 className="h3">Singleton</h3>
                            </div>

                            <p className="p">
                                <b>Singleton</b> is a pattern where only{" "}
                                <b>one instance</b> of a class is created and
                                reused everywhere. It acts like a global shared
                                object.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Problem it solves</div>
                                    <div className="v">
                                        Some things should have a single shared
                                        state.
                                        <span className="small">
                                            Example: a config manager, a logger,
                                            a single database connection
                                            manager.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Common risk</div>
                                    <div className="v">
                                        It can become hidden global state and
                                        make testing harder. Use only when truly
                                        needed.
                                    </div>
                                </div>
                            </div>

                            <div className="example">
                                <div className="exTitle">Example scenario</div>
                                <p className="p">
                                    Your app needs logging. If every module
                                    creates its own logger, logs can be
                                    inconsistent. A Singleton logger keeps one
                                    configuration and one output pipeline.
                                </p>
                            </div>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitMerge />
                                </span>
                                <h3 className="h3">Factory</h3>
                            </div>

                            <p className="p">
                                <b>Factory</b> is a pattern where object
                                creation is moved into a separate creator
                                function or class. Instead of the caller doing
                                direct construction, the factory decides what
                                exact object to create.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Problem it solves</div>
                                    <div className="v">
                                        Caller should not care about the exact
                                        class being created.
                                        <span className="small">
                                            Example: payment method selection,
                                            notification channel selection.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Why it helps</div>
                                    <div className="v">
                                        Add new types without changing code
                                        everywhere. Centralizes creation logic.
                                    </div>
                                </div>
                            </div>

                            <div className="example">
                                <div className="exTitle">Example scenario</div>
                                <p className="p">
                                    In an e-commerce app, you support "UPI",
                                    "Card", and "CashOnDelivery". A payment
                                    factory takes an input like "Card" and
                                    returns the correct handler. UI stays clean
                                    because it just asks the factory for the
                                    payment handler.
                                </p>
                            </div>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRepeat />
                                </span>
                                <h3 className="h3">Observer</h3>
                            </div>

                            <p className="p">
                                <b>Observer</b> is a pattern where one object
                                called the <b>subject</b> publishes changes, and
                                many <b>observers</b> subscribe and react to
                                those changes automatically.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Terms</div>
                                    <div className="v">
                                        <b>Subject</b> - the thing being
                                        observed.
                                        <span className="small">
                                            Example: a data store, a button
                                            click event, a stock price feed.
                                        </span>
                                        <b>Observer</b> - listeners that react
                                        when subject changes.
                                        <span className="small">
                                            Example: UI components, notification
                                            service, logger.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Problem it solves</div>
                                    <div className="v">
                                        Many components need updates when one
                                        thing changes, without hard wiring
                                        everything.
                                    </div>
                                </div>
                            </div>

                            <div className="example">
                                <div className="exTitle">Example scenario</div>
                                <p className="p">
                                    In a shopping cart, when quantity changes,
                                    total price should update, header cart count
                                    should update, and checkout button state
                                    should update. Using Observer, all these
                                    subscribe to cart changes instead of
                                    manually calling each update.
                                </p>
                            </div>

                            <p className="note">
                                React state updates are conceptually similar to
                                Observer behavior.
                            </p>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiSettings />
                                </span>
                                <h3 className="h3">Strategy</h3>
                            </div>

                            <p className="p">
                                <b>Strategy</b> is a pattern where you define
                                multiple algorithms or behaviors and select one
                                at runtime based on need. It avoids large
                                if-else blocks and makes behavior easy to swap.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Problem it solves</div>
                                    <div className="v">
                                        You need different ways to do the same
                                        job, based on context.
                                        <span className="small">
                                            Example: sorting methods, discount
                                            calculation, routing rules.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Why it helps</div>
                                    <div className="v">
                                        Add new strategies without rewriting the
                                        main logic. Keeps code modular.
                                    </div>
                                </div>
                            </div>

                            <div className="example">
                                <div className="exTitle">Example scenario</div>
                                <p className="p">
                                    Discount calculation can vary:
                                    "FestivalDiscount", "MemberDiscount",
                                    "CouponDiscount". Strategy pattern lets you
                                    pick one calculation strategy without
                                    changing checkout logic.
                                </p>
                            </div>

                            <p className="note">
                                Strategy is about replacing a big conditional
                                chain with pluggable behavior.
                            </p>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Quick revision table</h3>
                            </div>

                            <div className="tableWrap">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Pattern</th>
                                            <th>Category</th>
                                            <th>Main purpose</th>
                                            <th>Common example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Singleton</td>
                                            <td>Creational</td>
                                            <td>Single shared instance</td>
                                            <td>Logger, config manager</td>
                                        </tr>
                                        <tr>
                                            <td>Factory</td>
                                            <td>Creational</td>
                                            <td>
                                                Create correct object based on
                                                input
                                            </td>
                                            <td>Payment method handler</td>
                                        </tr>
                                        <tr>
                                            <td>Observer</td>
                                            <td>Behavioral</td>
                                            <td>
                                                Notify multiple listeners on
                                                change
                                            </td>
                                            <td>Event system, state updates</td>
                                        </tr>
                                        <tr>
                                            <td>Strategy</td>
                                            <td>Behavioral</td>
                                            <td>Swap algorithm at runtime</td>
                                            <td>Discount rules, sorting</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="note">
                                These are high-level mental models. The goal is
                                to recognize when a pattern fits, not to
                                memorize code.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Creational patterns decide how objects are created.
                            Structural patterns decide how parts are composed.
                            Behavioral patterns decide how parts communicate.
                            Singleton and Factory are about creation. Observer
                            and Strategy are about behavior and communication.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DesignPatternsHighLevel;
