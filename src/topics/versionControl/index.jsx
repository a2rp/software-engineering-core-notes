// src/topics/versionControl/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGitBranch,
    FiGitMerge,
    FiRotateCcw,
    FiSend,
    FiEye,
    FiCheckCircle,
    FiShield,
} from "react-icons/fi";

const VersionControl = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "versionControl",
            title: "Version Control",
            sub: "Git basics, branching strategy, merge vs rebase, pull request flow, and code review importance.",
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
                        <FiGitBranch />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Workflow</span>
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
                        {/* Version control meaning */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">What is Version Control</h3>
                            </div>

                            <p className="p">
                                <b>Version Control</b> means tracking changes to
                                files over time so you can <b>see history</b>,{" "}
                                <b>restore older versions</b>, and{" "}
                                <b>collaborate safely</b>. It is like a time
                                machine for your codebase.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Why it matters</div>
                                    <div className="v">
                                        Without version control, teams overwrite
                                        each other, bugs are hard to trace, and
                                        rollback is painful.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Common terms</div>
                                    <div className="v">
                                        <span className="mono">commit</span> - a
                                        saved snapshot of changes
                                        <br />
                                        <span className="mono">history</span> -
                                        timeline of commits
                                        <br />
                                        <span className="mono">diff</span> - the
                                        exact changes between versions
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Version control is not only for code, it is for
                                any file that changes over time.
                            </p>
                        </div>

                        {/* Git basics */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitBranch />
                                </span>
                                <h3 className="h3">Git basics</h3>
                            </div>

                            <p className="p">
                                <b>Git</b> is a{" "}
                                <b>distributed version control system</b>.
                                Distributed means every developer has a full
                                copy of the repository history on their machine.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Repository</b> - a project folder tracked
                                    by Git
                                    <span className="small">
                                        Often called "repo"
                                    </span>
                                </li>
                                <li>
                                    <b>Commit</b> - a snapshot of changes with a
                                    message
                                    <span className="small">
                                        Example: "Fix login validation bug"
                                    </span>
                                </li>
                                <li>
                                    <b>Branch</b> - a separate line of work
                                    <span className="small">
                                        Example: work on a feature without
                                        breaking main branch
                                    </span>
                                </li>
                                <li>
                                    <b>Remote</b> - a server copy of the repo,
                                    like GitHub
                                    <span className="small">
                                        Example remote name: "origin"
                                    </span>
                                </li>
                                <li>
                                    <b>Push</b> - upload commits to remote
                                </li>
                                <li>
                                    <b>Pull</b> - download commits from remote
                                </li>
                            </ul>

                            <div className="code">
                                <div className="codeTitle">
                                    Typical beginner commands
                                </div>
                                <pre className="pre">{`git init
git add .
git commit -m "first commit"
git branch
git checkout -b feature/login
git push -u origin feature/login`}</pre>
                            </div>
                        </div>

                        {/* Branching strategy */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitBranch />
                                </span>
                                <h3 className="h3">Branching strategy</h3>
                            </div>

                            <p className="p">
                                A <b>branching strategy</b> is a set of rules
                                about how your team creates and manages branches
                                so work stays organized and releases are safe.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Main branch</div>
                                    <div className="v">
                                        Usually called{" "}
                                        <span className="mono">main</span> or{" "}
                                        <span className="mono">master</span>.
                                        Should be stable.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Feature branch</div>
                                    <div className="v">
                                        A branch for one feature.
                                        <span className="small">
                                            Example: feature/cart-discount
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Fix branch</div>
                                    <div className="v">
                                        A branch for bug fixes.
                                        <span className="small">
                                            Example: fix/payment-timeout
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Basic best practice: keep main stable, do work
                                in feature branches, then merge via review.
                            </p>
                        </div>

                        {/* Merge vs Rebase */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitMerge />
                                </span>
                                <h3 className="h3">Merge vs Rebase</h3>
                            </div>

                            <p className="p">
                                Both <b>merge</b> and <b>rebase</b> are ways to
                                bring changes from one branch into another. The
                                difference is how history looks.
                            </p>

                            <div className="twoCol">
                                <div className="panel">
                                    <div className="pTop">
                                        <span className="pIcon">
                                            <FiGitMerge />
                                        </span>
                                        <div className="pTitle">Merge</div>
                                    </div>

                                    <p className="p2">
                                        Merge creates a new <b>merge commit</b>{" "}
                                        that combines histories. It keeps the
                                        real timeline.
                                    </p>

                                    <ul className="list">
                                        <li>
                                            Pros - safe and simple, history
                                            preserved
                                        </li>
                                        <li>
                                            Cons - history can look messy with
                                            many merges
                                        </li>
                                    </ul>

                                    <div className="code smallCode">
                                        <pre className="pre">{`git checkout main
git pull
git merge feature/login`}</pre>
                                    </div>
                                </div>

                                <div className="panel">
                                    <div className="pTop">
                                        <span className="pIcon">
                                            <FiRotateCcw />
                                        </span>
                                        <div className="pTitle">Rebase</div>
                                    </div>

                                    <p className="p2">
                                        Rebase rewrites commit history by
                                        placing your commits on top of another
                                        branch, making it look like you started
                                        from the latest main.
                                    </p>

                                    <ul className="list">
                                        <li>Pros - clean linear history</li>
                                        <li>
                                            Cons - rewrites history, can be
                                            risky if branch is shared
                                        </li>
                                    </ul>

                                    <div className="code smallCode">
                                        <pre className="pre">{`git checkout feature/login
git fetch origin
git rebase origin/main`}</pre>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Rule: use rebase for your local branch cleanup,
                                avoid rebasing branches already used by others.
                            </p>
                        </div>

                        {/* Pull request flow */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiSend />
                                </span>
                                <h3 className="h3">Pull request flow</h3>
                            </div>

                            <p className="p">
                                <b>PR</b> means <b>Pull Request</b>. It is a
                                request to merge your branch into a target
                                branch like main. It is the standard
                                collaboration flow on GitHub, GitLab, Bitbucket.
                            </p>

                            <ol className="olist">
                                <li>Create a feature branch</li>
                                <li>Make commits with clear messages</li>
                                <li>Push branch to remote</li>
                                <li>
                                    Open PR with description and screenshots if
                                    needed
                                </li>
                                <li>Review, fix comments, run checks</li>
                                <li>Merge into main after approval</li>
                            </ol>

                            <p className="note">
                                PR keeps main protected and forces review and
                                automated checks.
                            </p>
                        </div>

                        {/* Code review */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiEye />
                                </span>
                                <h3 className="h3">Code review importance</h3>
                            </div>

                            <p className="p">
                                <b>Code review</b> means another developer
                                checks your code before it merges. It reduces
                                bugs, improves readability, and spreads
                                knowledge across the team.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Bug catching</b> - someone notices edge
                                    cases you missed
                                </li>
                                <li>
                                    <b>Consistency</b> - naming, style,
                                    structure stays consistent
                                </li>
                                <li>
                                    <b>Security</b> - reviewers can spot risky
                                    patterns
                                </li>
                                <li>
                                    <b>Learning</b> - junior and senior both
                                    learn from each other
                                </li>
                                <li>
                                    <b>Ownership</b> - code is shared, not only
                                    in one person head
                                </li>
                            </ul>

                            <div className="tip">
                                <span className="tIcon">
                                    <FiCheckCircle />
                                </span>
                                <div className="tText">
                                    <div className="tTitle">
                                        Good review checklist
                                    </div>
                                    <div className="tSub">
                                        Correctness, readability, tests, edge
                                        cases, performance, and security.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            Git tracks changes. Branches isolate work. Merge
                            keeps real history. Rebase makes history linear. PR
                            means Pull Request. Code review keeps quality high
                            and knowledge shared.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default VersionControl;
