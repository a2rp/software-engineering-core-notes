// src/topics/securityBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShield,
    FiKey,
    FiLock,
    FiAlertTriangle,
    FiEye,
    FiUserCheck,
} from "react-icons/fi";

const SecurityBasics = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "securityBasics",
            title: "Security Basics",
            sub: "Authentication vs authorization, encryption fundamentals, OWASP basics, and common vulnerabilities with examples.",
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
                        {/* Auth vs Authz */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiUserCheck />
                                </span>
                                <h3 className="h3">
                                    Authentication vs Authorization
                                </h3>
                            </div>

                            <p className="p">
                                These two are confused a lot, but they solve two
                                different problems.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Authentication</div>
                                    <div className="v">
                                        Verifying <b>who</b> you are.
                                        <span className="small">
                                            Example: login with password, OTP,
                                            Google sign-in.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Authorization</div>
                                    <div className="v">
                                        Deciding <b>what</b> you can access
                                        after you are authenticated.
                                        <span className="small">
                                            Example: admin can delete users,
                                            normal user cannot.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mini">
                                <span className="pill">
                                    Authentication = who are you
                                </span>
                                <span className="dash">-</span>
                                <span className="pill">
                                    Authorization = what can you do
                                </span>
                            </div>

                            <p className="note">
                                Quick example: Entering a building gate check is
                                authentication. Entering only allowed rooms is
                                authorization.
                            </p>
                        </div>

                        {/* Encryption basics */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLock />
                                </span>
                                <h3 className="h3">Encryption basics</h3>
                            </div>

                            <p className="p">
                                <b>Encryption</b> means converting readable data
                                (called <b>plaintext</b>) into unreadable data
                                (called <b>ciphertext</b>) so only authorized
                                parties can read it.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Plaintext</div>
                                    <div className="v">
                                        Original readable data.
                                        <span className="small">
                                            Example: "myPassword123"
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Ciphertext</div>
                                    <div className="v">
                                        Encrypted unreadable output.
                                        <span className="small">
                                            Example: looks like random
                                            characters, not readable.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Key</div>
                                    <div className="v">
                                        Secret value used to encrypt and
                                        decrypt.
                                        <span className="small">
                                            Without the key, ciphertext should
                                            not be readable.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="split">
                                <div className="box">
                                    <div className="boxTop">
                                        <span className="bIcon">
                                            <FiKey />
                                        </span>
                                        <div className="bTitle">
                                            Symmetric encryption
                                        </div>
                                    </div>
                                    <p className="p">
                                        Same key is used for encryption and
                                        decryption.
                                    </p>
                                    <ul className="list">
                                        <li>Fast, good for large data.</li>
                                        <li>
                                            Main problem is sharing the key
                                            securely.
                                        </li>
                                    </ul>
                                    <p className="note">
                                        Example use: encrypting files, data at
                                        rest (stored data).
                                    </p>
                                </div>

                                <div className="box">
                                    <div className="boxTop">
                                        <span className="bIcon">
                                            <FiEye />
                                        </span>
                                        <div className="bTitle">
                                            Asymmetric encryption
                                        </div>
                                    </div>
                                    <p className="p">
                                        Uses two keys: <b>public key</b> and{" "}
                                        <b>private key</b>.
                                    </p>
                                    <ul className="list">
                                        <li>
                                            Public key can be shared, private
                                            key must be secret.
                                        </li>
                                        <li>
                                            Slower, but solves secure key
                                            sharing problem.
                                        </li>
                                    </ul>
                                    <p className="note">
                                        Example use: TLS (Transport Layer
                                        Security) handshake on HTTPS.
                                    </p>
                                </div>
                            </div>

                            <div className="warn">
                                <span className="wIcon">
                                    <FiAlertTriangle />
                                </span>
                                <div className="wText">
                                    <div className="wTitle">
                                        Hashing is not encryption
                                    </div>
                                    <div className="wSub">
                                        <b>Hashing</b> converts data into a
                                        fixed-length value and is one-way.
                                        Passwords should be stored as hashed
                                        values, not encrypted values.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* OWASP */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">OWASP basics</h3>
                            </div>

                            <p className="p">
                                <b>OWASP</b> stands for{" "}
                                <b>Open Web Application Security Project</b>. It
                                is a community-driven organization that provides
                                guidance, tools, and awareness about web
                                application security.
                            </p>

                            <p className="p">
                                The most famous thing from OWASP is the{" "}
                                <b>OWASP Top 10</b>, which is a list of common
                                and high-impact security risks in web apps. It
                                is used widely in audits, interviews, and real
                                security checklists.
                            </p>

                            <div className="noteBox">
                                <div className="nbTitle">
                                    Simple way to use OWASP
                                </div>
                                <ul className="list">
                                    <li>
                                        Use OWASP Top 10 as a checklist during
                                        development and review.
                                    </li>
                                    <li>
                                        Validate input, enforce auth rules,
                                        secure configs, and log safely.
                                    </li>
                                    <li>
                                        Keep dependencies updated and use
                                        security headers.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Common vulnerabilities */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiAlertTriangle />
                                </span>
                                <h3 className="h3">Common vulnerabilities</h3>
                            </div>

                            <p className="p">
                                A <b>vulnerability</b> is a weakness in software
                                that an attacker can exploit to cause harm.
                                Below are common categories you should know and
                                be able to explain.
                            </p>

                            <div className="vulnGrid">
                                <div className="vCard">
                                    <div className="vTitle">SQL Injection</div>
                                    <div className="vSub">
                                        Attacker injects SQL (Structured Query
                                        Language) into inputs to access or
                                        modify database data.
                                    </div>
                                    <div className="vFix">
                                        Fix: use parameterized queries, ORM, and
                                        validate inputs.
                                    </div>
                                </div>

                                <div className="vCard">
                                    <div className="vTitle">XSS</div>
                                    <div className="vSub">
                                        <b>XSS</b> is Cross-Site Scripting.
                                        Attacker injects script into a page that
                                        runs in user browser.
                                    </div>
                                    <div className="vFix">
                                        Fix: escape output, sanitize input, use
                                        CSP (Content Security Policy).
                                    </div>
                                </div>

                                <div className="vCard">
                                    <div className="vTitle">CSRF</div>
                                    <div className="vSub">
                                        <b>CSRF</b> is Cross-Site Request
                                        Forgery. Attacker tricks a logged-in
                                        user browser into sending a request.
                                    </div>
                                    <div className="vFix">
                                        Fix: CSRF tokens, SameSite cookies,
                                        re-check auth for sensitive actions.
                                    </div>
                                </div>

                                <div className="vCard">
                                    <div className="vTitle">
                                        Broken Access Control
                                    </div>
                                    <div className="vSub">
                                        Users can access actions or data they
                                        should not. This is authorization
                                        failure.
                                    </div>
                                    <div className="vFix">
                                        Fix: server-side authorization checks on
                                        every request.
                                    </div>
                                </div>

                                <div className="vCard">
                                    <div className="vTitle">
                                        Insecure Password Storage
                                    </div>
                                    <div className="vSub">
                                        Storing passwords in plaintext or weak
                                        hashes.
                                    </div>
                                    <div className="vFix">
                                        Fix: use strong hashing with salt, like
                                        bcrypt.
                                    </div>
                                </div>

                                <div className="vCard">
                                    <div className="vTitle">
                                        Security Misconfiguration
                                    </div>
                                    <div className="vSub">
                                        Unsafe default settings like open admin
                                        panels, debug mode in production, weak
                                        CORS.
                                    </div>
                                    <div className="vFix">
                                        Fix: secure defaults, remove debug,
                                        restrict access, review configs.
                                    </div>
                                </div>
                            </div>

                            <div className="bottomNote">
                                <div className="bnTitle">At a glance</div>
                                <div className="bnSub">
                                    Auth is identity, authz is permission.
                                    Encryption protects data. OWASP is the
                                    common security checklist. Most attacks
                                    happen because input is not validated or
                                    access rules are not enforced.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SecurityBasics;
