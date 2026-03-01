// src/topics/softwareMaintenance/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTool,
    FiAlertCircle,
    FiRefreshCw,
    FiTrendingUp,
    FiShield,
    FiCheckCircle,
} from "react-icons/fi";

const SoftwareMaintenance = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "softwareMaintenance",
            title: "Software Maintenance",
            sub: "Corrective, adaptive, perfective, and preventive maintenance with real examples.",
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
                        <FiTool />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Post release</span>
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
                                    <FiCheckCircle />
                                </span>
                                <h3 className="h3">
                                    What is software maintenance
                                </h3>
                            </div>

                            <p className="p">
                                <b>Software maintenance</b> means the work done
                                on software after it is released to users. This
                                includes fixing bugs, updating software to work
                                in new environments, improving performance, and
                                preventing future issues.
                            </p>

                            <p className="p">
                                In real life, most software cost is not only
                                building it once, but maintaining it for years.
                                Maintenance keeps software usable, secure, and
                                easy to change.
                            </p>

                            <div className="mini">
                                <span className="pill">Fix</span>
                                <span className="dash">-</span>
                                <span className="pill">Adapt</span>
                                <span className="dash">-</span>
                                <span className="pill">Improve</span>
                                <span className="dash">-</span>
                                <span className="pill">Prevent</span>
                            </div>

                            <p className="note">
                                Maintenance is not only bug fixing. It is also
                                upgrades, improvements, and prevention work.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiAlertCircle />
                                </span>
                                <h3 className="h3">Corrective maintenance</h3>
                            </div>

                            <p className="p">
                                <b>Corrective maintenance</b> means fixing
                                problems in existing software after they are
                                found. The problem can be a bug, crash, wrong
                                output, or unexpected behavior.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Goal</div>
                                    <div className="v">
                                        Restore correct behavior and remove
                                        defects.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Example</div>
                                    <div className="v">
                                        Checkout page crashes when user applies
                                        a coupon - fix the crash and add
                                        validation.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Typical signals</div>
                                    <div className="v">
                                        Bugs reported by users, error logs, test
                                        failures.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Think: something is broken - fix it.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCw />
                                </span>
                                <h3 className="h3">Adaptive maintenance</h3>
                            </div>

                            <p className="p">
                                <b>Adaptive maintenance</b> means changing
                                software so it continues to work when the
                                environment changes. The software might be fine,
                                but the outside world changed.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Goal</div>
                                    <div className="v">
                                        Keep software compatible with new
                                        platforms, rules, or dependencies.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Example</div>
                                    <div className="v">
                                        Payment provider changes API format -
                                        update your integration to match the new
                                        API.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Environment means</div>
                                    <div className="v">
                                        OS (Operating System), browser, device,
                                        library updates, API changes, law
                                        changes.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Think: software is correct, but the world
                                changed - adapt.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTrendingUp />
                                </span>
                                <h3 className="h3">Perfective maintenance</h3>
                            </div>

                            <p className="p">
                                <b>Perfective maintenance</b> means improving
                                software to make it better for users and the
                                business. This can be performance improvements,
                                usability improvements, or small feature
                                additions.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Goal</div>
                                    <div className="v">
                                        Improve value, speed, user experience,
                                        and maintainability.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Examples</div>
                                    <div className="v">
                                        Speed up search results by adding an
                                        index, reduce page load time, improve UI
                                        flow, add filters to product list.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">
                                        What "perfective" means
                                    </div>
                                    <div className="v">
                                        Make the system closer to "ideal" based
                                        on feedback and goals.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Think: nothing is broken, but we improve it.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">Preventive maintenance</h3>
                            </div>

                            <p className="p">
                                <b>Preventive maintenance</b> means doing work
                                to reduce the chance of future problems. It
                                focuses on improving internal quality and
                                removing risks before they become bugs or
                                outages.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Goal</div>
                                    <div className="v">
                                        Prevent future failures and reduce
                                        maintenance cost later.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Examples</div>
                                    <div className="v">
                                        Refactor messy code, update vulnerable
                                        dependencies, add missing tests, improve
                                        logging, remove unused code paths.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Risk examples</div>
                                    <div className="v">
                                        Security risk, performance risk, scaling
                                        risk, fragile code, missing monitoring.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Think: it works now, but future can break it -
                                prevent.
                            </p>
                        </div>

                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCheckCircle />
                                </span>
                                <h3 className="h3">Quick comparison</h3>
                            </div>

                            <div className="table">
                                <div className="row headRow">
                                    <div className="cell">Type</div>
                                    <div className="cell">Meaning</div>
                                    <div className="cell">Easy memory</div>
                                </div>

                                <div className="row">
                                    <div className="cell strong">
                                        Corrective
                                    </div>
                                    <div className="cell">
                                        Fix defects and bugs found after release
                                    </div>
                                    <div className="cell">
                                        Something broke - fix it
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="cell strong">Adaptive</div>
                                    <div className="cell">
                                        Update software for new environment
                                        changes
                                    </div>
                                    <div className="cell">
                                        World changed - adapt
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="cell strong">
                                        Perfective
                                    </div>
                                    <div className="cell">
                                        Improve performance, usability, and
                                        value
                                    </div>
                                    <div className="cell">Improve it</div>
                                </div>

                                <div className="row">
                                    <div className="cell strong">
                                        Preventive
                                    </div>
                                    <div className="cell">
                                        Reduce future risk by strengthening
                                        internals
                                    </div>
                                    <div className="cell">Prevent it</div>
                                </div>
                            </div>

                            <p className="note">
                                No short forms are required here. Only "OS" was
                                used once and expanded as Operating System.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Corrective fixes bugs, adaptive keeps compatibility,
                            perfective improves value, preventive reduces future
                            risks.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SoftwareMaintenance;
