// src/topics/testQualityAttributes/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShield,
    FiTrendingUp,
    FiServer,
    FiRefreshCcw,
    FiTool,
    FiZap,
    FiAlertTriangle,
} from "react-icons/fi";

const TestQualityAttributes = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "testQualityAttributes",
            title: "Quality Attributes",
            sub: "Scalability, availability, reliability, maintainability, security, and performance with examples.",
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
                        <FiShield />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Non-functional</span>
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
                    <div className="intro">
                        <p className="p">
                            <b>Quality attributes</b> are the non-feature
                            qualities of a system. They define how the system
                            behaves in real life - under load, during failures,
                            during changes, and against attacks.
                        </p>
                        <p className="note">
                            These are also called{" "}
                            <b>non-functional requirements</b>
                            because they describe system qualities, not specific
                            features.
                        </p>
                    </div>

                    <div className="grid">
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTrendingUp />
                                </span>
                                <h3 className="h3">Scalability</h3>
                            </div>

                            <p className="p">
                                <b>Scalability</b> means the system can handle
                                more load (users, requests, data) by adding
                                resources, without breaking or becoming too
                                slow.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Load</div>
                                    <div className="v">
                                        The work the system must handle.
                                        <span className="small">
                                            Example: 10,000 users online, 2,000
                                            requests per second.
                                        </span>
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Resources</div>
                                    <div className="v">
                                        CPU, RAM, disk, network, servers, or
                                        database capacity.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Example: If a shopping app works for 1,000 users
                                today, scalability means it should still work
                                when 100,000 users arrive during a sale.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiServer />
                                </span>
                                <h3 className="h3">Availability</h3>
                            </div>

                            <p className="p">
                                <b>Availability</b> means the system is up and
                                usable when users need it. It is about uptime.
                            </p>

                            <ul className="list">
                                <li>High availability means fewer outages.</li>
                                <li>
                                    Usually measured as a percentage.
                                    <span className="small">
                                        Example: 99.9 percent uptime.
                                    </span>
                                </li>
                            </ul>

                            <p className="note">
                                Example: If your API is down for 30 minutes,
                                users cannot login or pay. Availability is the
                                goal of staying online.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCcw />
                                </span>
                                <h3 className="h3">Reliability</h3>
                            </div>

                            <p className="p">
                                <b>Reliability</b> means the system works
                                correctly and consistently over time. It is not
                                only about being up, but also about being
                                correct.
                            </p>

                            <ul className="list">
                                <li>Reliable system gives correct results.</li>
                                <li>
                                    It handles failures safely without data
                                    loss.
                                </li>
                            </ul>

                            <p className="note">
                                Example: A payment service can be available but
                                unreliable if it sometimes double-charges or
                                loses transactions.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTool />
                                </span>
                                <h3 className="h3">Maintainability</h3>
                            </div>

                            <p className="p">
                                <b>Maintainability</b> means the software is
                                easy to understand, fix, and improve over time.
                                It decides how quickly you can ship changes
                                safely.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Maintain</div>
                                    <div className="v">
                                        Fix bugs, add features, improve
                                        performance, update dependencies.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Good signs</div>
                                    <div className="v">
                                        Clean code, good naming, tests, docs,
                                        modular design.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Example: If a small change takes 2 days because
                                code is messy and has no tests, maintainability
                                is low.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">Security</h3>
                            </div>

                            <p className="p">
                                <b>Security</b> means protecting the system and
                                its data from unauthorized access, misuse, and
                                attacks.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Authentication</b> - proving who you are.
                                    <span className="small">
                                        Example: login with password or OTP (One
                                        Time Password).
                                    </span>
                                </li>
                                <li>
                                    <b>Authorization</b> - what you are allowed
                                    to do.
                                    <span className="small">
                                        Example: only admin can delete users.
                                    </span>
                                </li>
                                <li>
                                    <b>Encryption</b> - data is converted into a
                                    secret form.
                                    <span className="small">
                                        Example: HTTPS (Hypertext Transfer
                                        Protocol Secure) uses TLS (Transport
                                        Layer Security).
                                    </span>
                                </li>
                            </ul>

                            <p className="note">
                                Example: A reliable app without security can
                                still be hacked and lose user data.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiZap />
                                </span>
                                <h3 className="h3">Performance</h3>
                            </div>

                            <p className="p">
                                <b>Performance</b> means how fast and
                                efficiently the system responds and uses
                                resources.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Latency</div>
                                    <div className="v">
                                        Time taken for one request.
                                        <span className="small">
                                            Example: API response in 120 ms
                                            (milliseconds).
                                        </span>
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Throughput</div>
                                    <div className="v">
                                        Requests handled per unit time.
                                        <span className="small">
                                            Example: 1,000 requests per second.
                                        </span>
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Resource usage</div>
                                    <div className="v">
                                        CPU, RAM, disk I/O (Input Output),
                                        network usage.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Example: A page that loads in 8 seconds is slow.
                                Improving performance means reducing load time
                                and resource usage.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiAlertTriangle />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">At a glance</div>
                            <div className="bnSub">
                                Availability is being up. Reliability is being
                                correct. Scalability is handling growth.
                                Maintainability is easy changes. Security
                                protects data. Performance is speed and
                                efficiency.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TestQualityAttributes;
