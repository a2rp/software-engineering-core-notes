// src/topics/devOpsBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiSettings,
    FiGitBranch,
    FiTruck,
    FiBox,
    FiMonitor,
    FiLayers,
    FiShield,
} from "react-icons/fi";

const DevOpsBasics = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "devOpsBasics",
            title: "DevOps Basics",
            sub: "CI and CD meaning, deployment pipeline, Docker and containers, containers vs VMs, and monitoring basics.",
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
                        <FiSettings />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Production</span>
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
                        {/* DevOps meaning */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">
                                    What is DevOps - meaning and goal
                                </h3>
                            </div>

                            <p className="p">
                                <b>DevOps</b> is a culture and set of practices
                                that improves collaboration between{" "}
                                <b>Development</b> and <b>Operations</b>. The
                                goal is to deliver software <b>faster</b>,{" "}
                                <b>safer</b>, and <b>more reliably</b>.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Development</b> builds features and
                                    fixes.
                                </li>
                                <li>
                                    <b>Operations</b> runs software in
                                    production and keeps it stable.
                                </li>
                                <li>
                                    DevOps reduces friction by automating
                                    builds, tests, deployments, and monitoring.
                                </li>
                            </ul>

                            <p className="note">
                                DevOps is not only tools. Tools support the
                                process, but teamwork and automation mindset is
                                the main point.
                            </p>
                        </div>

                        {/* CI CD */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitBranch />
                                </span>
                                <h3 className="h3">CI and CD meaning</h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">CI</div>
                                    <div className="v">
                                        <b>CI</b> means{" "}
                                        <b>Continuous Integration</b>.
                                        Developers merge small code changes
                                        frequently and run automated checks.
                                        <span className="small">
                                            Typical CI tasks: lint, unit tests,
                                            build, security checks.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">CD</div>
                                    <div className="v">
                                        <b>CD</b> can mean{" "}
                                        <b>Continuous Delivery</b> or{" "}
                                        <b>Continuous Deployment</b>.
                                        <span className="small">
                                            Continuous Delivery: code is always
                                            ready to release, but release may be
                                            manual.
                                        </span>
                                        <span className="small">
                                            Continuous Deployment: every
                                            successful change is deployed
                                            automatically.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                CI makes sure changes do not break the codebase.
                                CD makes sure releases are repeatable and fast.
                            </p>
                        </div>

                        {/* Deployment pipeline */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTruck />
                                </span>
                                <h3 className="h3">Deployment pipeline</h3>
                            </div>

                            <p className="p">
                                A <b>deployment pipeline</b> is an automated
                                sequence of steps that turns code into a running
                                production release. It gives a predictable path
                                from commit to production.
                            </p>

                            <div className="flow">
                                <div className="step">
                                    <div className="tag">1</div>
                                    <div className="body">
                                        <div className="t">Commit</div>
                                        <div className="d">
                                            Developer pushes code to Git
                                            repository.
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">2</div>
                                    <div className="body">
                                        <div className="t">Build</div>
                                        <div className="d">
                                            Compile or bundle the app and
                                            produce artifacts.
                                            <span className="small">
                                                Example: Vite build creates dist
                                                folder.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">3</div>
                                    <div className="body">
                                        <div className="t">Test</div>
                                        <div className="d">
                                            Run automated tests to catch issues
                                            early.
                                            <span className="small">
                                                Example: unit tests and
                                                integration tests.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">4</div>
                                    <div className="body">
                                        <div className="t">Package</div>
                                        <div className="d">
                                            Create a deployable package.
                                            <span className="small">
                                                Example: Docker image or zipped
                                                build.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">5</div>
                                    <div className="body">
                                        <div className="t">Deploy</div>
                                        <div className="d">
                                            Release to environment.
                                            <span className="small">
                                                Example: staging then
                                                production.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="tag">6</div>
                                    <div className="body">
                                        <div className="t">Verify</div>
                                        <div className="d">
                                            Run smoke checks and monitor health
                                            metrics.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Pipeline keeps releases consistent. It reduces
                                human mistakes during deployment.
                            </p>
                        </div>

                        {/* Docker basics */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBox />
                                </span>
                                <h3 className="h3">Docker basics</h3>
                            </div>

                            <p className="p">
                                <b>Docker</b> is a tool used to build and run
                                <b>containers</b>. It packages an app with its
                                dependencies so it runs the same way on every
                                machine.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Image</div>
                                    <div className="v">
                                        A read-only template containing app code
                                        and dependencies.
                                        <span className="small">
                                            Think: a snapshot you can use to
                                            create containers.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Container</div>
                                    <div className="v">
                                        A running instance of an image.
                                        <span className="small">
                                            Think: container is what actually
                                            runs.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Dockerfile</div>
                                    <div className="v">
                                        A file that describes how to build an
                                        image.
                                        <span className="small">
                                            Example: base image, install deps,
                                            copy code, start command.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Registry</div>
                                    <div className="v">
                                        A place to store and download images.
                                        <span className="small">
                                            Example: Docker Hub or private
                                            registry.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Real-life example: your Node API runs fine on
                                your laptop but fails on server due to missing
                                dependency. Docker fixes this by packaging
                                everything needed.
                            </p>
                        </div>

                        {/* Containers vs VMs */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Containers vs VMs</h3>
                            </div>

                            <p className="p">
                                Both containers and VMs isolate applications,
                                but they do it differently.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">VM</div>
                                    <div className="v">
                                        <b>VM</b> means <b>Virtual Machine</b>.
                                        It runs a full guest operating system on
                                        a hypervisor.
                                        <span className="small">
                                            Heavier, slower to start, but strong
                                            isolation.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Container</div>
                                    <div className="v">
                                        Shares the host OS kernel and isolates
                                        processes.
                                        <span className="small">
                                            Lightweight, fast start, efficient
                                            for microservices.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <ul className="list">
                                <li>
                                    Containers are great for packaging and fast
                                    scaling.
                                </li>
                                <li>
                                    VMs are useful when you need different OS or
                                    stronger isolation.
                                </li>
                            </ul>
                        </div>

                        {/* Monitoring */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiMonitor />
                                </span>
                                <h3 className="h3">Monitoring basics</h3>
                            </div>

                            <p className="p">
                                <b>Monitoring</b> means watching a system in
                                production to detect problems early. It helps
                                teams know if the app is healthy, slow, or
                                failing.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Metrics</div>
                                    <div className="v">
                                        Numeric values collected over time.
                                        <span className="small">
                                            Examples: CPU usage, memory, request
                                            count, response time.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Logs</div>
                                    <div className="v">
                                        Text records of events.
                                        <span className="small">
                                            Example: "payment failed", "user
                                            login", "API error stack trace".
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Alerts</div>
                                    <div className="v">
                                        Notifications triggered when something
                                        crosses a threshold.
                                        <span className="small">
                                            Example: alert when error rate
                                            crosses 2 percent.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Monitoring is how you avoid "users found the bug
                                before us" situation.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnTitle">At a glance</div>
                        <div className="bnSub">
                            DevOps improves delivery by automation. CI checks
                            code often. CD makes releases repeatable. Pipelines
                            connect commit to production. Docker packages apps
                            into containers. Monitoring keeps production
                            healthy.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DevOpsBasics;
