// src/topics/ethicsAndProfessionalPractice/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShield,
    FiLock,
    FiFileText,
    FiGitBranch,
    FiAlertTriangle,
} from "react-icons/fi";

const EthicsAndProfessionalPractice = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "ethicsAndProfessionalPractice",
            title: "Ethics and Professional Practice",
            sub: "Software ethics, data privacy, licensing basics, and open source vs proprietary with practical examples.",
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
                            <span className="badge">Professionalism</span>
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
                        {/* Software ethics */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiAlertTriangle />
                                </span>
                                <h3 className="h3">Software ethics</h3>
                            </div>

                            <p className="p">
                                <b>Ethics</b> means doing the right thing even
                                when it is legal to do something harmful. In
                                software, ethics is about how your product
                                affects users, society, safety, and trust.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Honesty</div>
                                    <div className="v">
                                        Do not hide important behavior.
                                        <span className="small">
                                            Example: Do not silently collect
                                            contacts or location without clear
                                            user consent.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Safety</div>
                                    <div className="v">
                                        Avoid designs that can harm users.
                                        <span className="small">
                                            Example: A medical app must not show
                                            wrong dosage due to rounding or UI
                                            bugs.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Fairness</div>
                                    <div className="v">
                                        Avoid discrimination and biased
                                        outcomes.
                                        <span className="small">
                                            Example: A hiring filter should not
                                            reject candidates unfairly due to
                                            biased training data.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Respect</div>
                                    <div className="v">
                                        Treat user time, money, and data as
                                        valuable.
                                        <span className="small">
                                            Example: Avoid dark patterns like
                                            misleading buttons or hidden
                                            subscriptions.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Engineering ethics is basically: build trust,
                                reduce harm, and be transparent about risk.
                            </p>
                        </div>

                        {/* Data privacy */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLock />
                                </span>
                                <h3 className="h3">Data privacy</h3>
                            </div>

                            <p className="p">
                                <b>Privacy</b> means a user should control how
                                their personal information is collected, used,
                                stored, and shared. Privacy is different from
                                security.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Privacy</div>
                                    <div className="v">
                                        Rules about what data you should collect
                                        and why.
                                        <span className="small">
                                            Example: Collect only what is needed
                                            for the feature.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Security</div>
                                    <div className="v">
                                        Protection from unauthorized access or
                                        leaks.
                                        <span className="small">
                                            Example: Encrypt data and restrict
                                            database access.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <ul className="list">
                                <li>
                                    <b>Personal data</b> - information that can
                                    identify a person.
                                    <span className="small">
                                        Example: name, phone number, email,
                                        address, device ID, location.
                                    </span>
                                </li>
                                <li>
                                    <b>Consent</b> - user clearly agrees after
                                    understanding what will happen.
                                </li>
                                <li>
                                    <b>Data minimization</b> - collect the
                                    minimum data required.
                                </li>
                                <li>
                                    <b>Retention</b> - how long you keep data
                                    before deleting it.
                                </li>
                                <li>
                                    <b>Anonymization</b> - removing identity
                                    from data so it cannot be linked back.
                                </li>
                            </ul>

                            <p className="note">
                                Privacy habit: ask "do we need this data" before
                                you store it.
                            </p>
                        </div>

                        {/* Licensing basics */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiFileText />
                                </span>
                                <h3 className="h3">Licensing basics</h3>
                            </div>

                            <p className="p">
                                A <b>license</b> is the legal permission that
                                defines how software can be used, copied,
                                modified, and shared. Without a license, you do
                                not have permission to use or redistribute code.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Copyright</b> - the default legal
                                    ownership of code written by someone.
                                </li>
                                <li>
                                    <b>License terms</b> - rules that tell you
                                    what is allowed.
                                </li>
                                <li>
                                    <b>Attribution</b> - giving credit as
                                    required by the license.
                                </li>
                                <li>
                                    <b>Distribution</b> - sharing the software
                                    with others.
                                </li>
                            </ul>

                            <div className="callout">
                                <div className="callTitle">
                                    Practical example
                                </div>
                                <div className="callText">
                                    If you copy a library into your project, you
                                    must follow its license. Some licenses
                                    require you to include the license text in
                                    your app or repo. Some require you to open
                                    source your changes if you distribute the
                                    software.
                                </div>
                            </div>

                            <p className="note">
                                Always check the license before using a library
                                in production.
                            </p>
                        </div>

                        {/* Open source vs proprietary */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitBranch />
                                </span>
                                <h3 className="h3">
                                    Open source vs proprietary
                                </h3>
                            </div>

                            <p className="p">
                                <b>Open source</b> means the source code is
                                publicly available and can be used under an open
                                source license. <b>Proprietary</b> means the
                                code is owned privately and usage is restricted
                                by the owner.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Open source</div>
                                    <div className="v">
                                        Code is visible, community can
                                        contribute, reuse depends on license.
                                        <span className="small">
                                            Example: Linux kernel, many
                                            libraries on GitHub.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Proprietary</div>
                                    <div className="v">
                                        Code is closed, usage is controlled,
                                        typically paid or limited.
                                        <span className="small">
                                            Example: many commercial apps and
                                            enterprise tools.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="twoCol">
                                <div className="box">
                                    <div className="bTitle">
                                        Pros of open source
                                    </div>
                                    <ul className="list">
                                        <li>Transparency and auditability</li>
                                        <li>
                                            Community improvements and bug fixes
                                        </li>
                                        <li>Often lower cost to start</li>
                                        <li>Less vendor lock-in</li>
                                    </ul>
                                </div>

                                <div className="box">
                                    <div className="bTitle">
                                        Pros of proprietary
                                    </div>
                                    <ul className="list">
                                        <li>
                                            Clear ownership and support
                                            contracts
                                        </li>
                                        <li>Centralized roadmap and control</li>
                                        <li>Often optimized user experience</li>
                                        <li>
                                            Legal clarity for enterprise usage
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="note">
                                Open source does not mean free of rules. It
                                means the rules are written in the license.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Ethics is about reducing harm and building trust.
                            Privacy is about correct data handling. Licenses
                            define what you are allowed to do with code. Open
                            source and proprietary are ownership models, both
                            with rules and tradeoffs.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default EthicsAndProfessionalPractice;
