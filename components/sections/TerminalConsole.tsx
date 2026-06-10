"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

interface CommandHistory {
    command: string;
    output: React.ReactNode;
}

export default function TerminalConsole() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandHistory[]>([
        {
            command: "system-init",
            output: (
                <div className="space-y-1 text-amber-500 font-mono text-[11px] md:text-xs">
                    <div>[OK] Initializing prakhar.sys core modules...</div>
                    <div>[OK] Loading Technical Skills Topology Layer...</div>
                    <div>[OK] Syncing LeetCode metric controllers... (300+ Solved)</div>
                    <div>[OK] Connection established. Operational.</div>
                    <div className="text-muted-foreground mt-2">Type &apos;help&apos; to view all available system operations.</div>
                </div>
            ),
        },
    ]);

    const terminalEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const isMountedRef = useRef(false);

    const scrollToBottom = () => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }
        scrollToBottom();
    }, [history]);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase();
        let output: React.ReactNode = null;

        if (trimmed === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        switch (trimmed) {
            case "help":
                output = (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-muted-foreground font-mono text-[11px] md:text-xs">
                        <div><span className="text-amber-500 font-bold">about</span> - User specs</div>
                        <div><span className="text-amber-500 font-bold">skills</span> - Stack topology</div>
                        <div><span className="text-amber-500 font-bold">projects</span> - Active nodes</div>
                        <div><span className="text-amber-500 font-bold">blogs</span> - Featured articles</div>
                        <div><span className="text-amber-500 font-bold">certs</span> - Credentials</div>
                        <div><span className="text-amber-500 font-bold">neofetch</span> - System specs</div>
                        <div><span className="text-amber-500 font-bold">contact</span> - Route to user</div>
                        <div><span className="text-amber-500 font-bold">clear</span> - Flush buffer</div>
                    </div>
                );
                break;

            case "about":
                output = (
                    <div className="space-y-2 text-muted-foreground font-mono text-[11px] md:text-xs leading-relaxed">
                        <p>
                            <span className="text-foreground font-bold">Prakhar Yadav</span> is a Systems and Backend Software Engineer in his final year of B.Tech Computer Science at Galgotias College (2022-2026).
                        </p>
                        <p>
                            Specializes in high-efficiency distributed system architectures, clean transactional databases, and fluid, intuitive frontend interfaces. Dedicated to clean code, test integrity, and system scalability under heavy load.
                        </p>
                    </div>
                );
                break;

            case "skills":
                output = (
                    <div className="space-y-2 text-muted-foreground font-mono text-[11px] md:text-xs">
                        <div><span className="text-amber-500 font-bold">[Layer 01] Frontend Ingress:</span> React, Next.js, Tailwind CSS, TypeScript</div>
                        <div><span className="text-amber-500 font-bold">[Layer 02] Security Gate:</span> Spring Security, JWT, OAuth 2.0, REST Router</div>
                        <div><span className="text-amber-500 font-bold">[Layer 03] Backend Engine:</span> Java, Spring Boot, JPA, Hibernate, Node.js</div>
                        <div><span className="text-amber-500 font-bold">[Layer 04] Data Persistence:</span> PostgreSQL, MySQL, Redis, MongoDB, Docker</div>
                    </div>
                );
                break;

            case "projects":
                output = (
                    <div className="space-y-3 text-muted-foreground font-mono text-[11px] md:text-xs">
                        <div>
                            <span className="text-amber-500 font-bold">e-akhbar</span> - Modern Full-Stack News Aggregator (Spring Boot, Node.js, React)
                            <br />
                            <span className="text-slate-500">Status: Operational // Deployed</span>
                        </div>
                        <div>
                            <span className="text-amber-500 font-bold">flowkit_v2</span> - Realtime Workspace & Time Tracker (Node.js, PostgreSQL)
                            <br />
                            <span className="text-slate-500">Status: Operational // Deployed</span>
                        </div>
                        <div>
                            <span className="text-amber-500 font-bold">lynkforge_v2</span> - B2B Developer Integration Portal (Java, Spring Boot, React)
                            <br />
                            <span className="text-slate-500">Status: Operational // Deployed</span>
                        </div>
                        <div>
                            <span className="text-amber-500 font-bold">polytest_ai</span> - AI-Powered Automated Test Suite Generator (AI/LLMs, TypeScript)
                            <br />
                            <span className="text-slate-500">Status: Operational // Deployed</span>
                        </div>
                        <div>
                            <span className="text-amber-500 font-bold">ember_stone</span> - Culinary booking engine & restaurant story (React, Tailwind)
                            <br />
                            <span className="text-slate-500">Status: Operational // Deployed</span>
                        </div>
                        <div>
                            <span className="text-amber-500 font-bold">personal_portfolio</span> - Blueprint Systems Portfolio (Next.js, Tailwind v4)
                            <br />
                            <span className="text-slate-500">Status: Active Node</span>
                        </div>
                    </div>
                );
                break;

            case "blogs":
                output = (
                    <div className="space-y-3 text-muted-foreground font-mono text-[11px] md:text-xs">
                        <div>
                            <span className="text-amber-500 font-bold">should_you_still_learn_to_code_in_2026</span>
                            <br />
                            <span className="text-slate-400">Subtitle: The Honest Answer Nobody Is Giving You</span>
                            <br />
                            <span className="text-slate-500">Link: https://medium.com/@yadavxprakhar/should-you-still-learn-to-code-in-2026-cccab3bac4a6</span>
                        </div>
                        <div>
                            <span className="text-amber-500 font-bold">job_hunting_in_2026_what_nobody_tells_new_grads</span>
                            <br />
                            <span className="text-slate-400">Subtitle: The Raw Reality of the Post-College Job Hunt</span>
                            <br />
                            <span className="text-slate-500">Link: https://medium.com/@yadavxprakhar/job-hunting-in-2026-what-nobody-tells-new-graduates-d2f4eafaf4d1</span>
                        </div>
                    </div>
                );
                break;

            case "certs":
                output = (
                    <div className="space-y-2 text-muted-foreground font-mono text-[11px] md:text-xs">
                        <div>• <span className="text-amber-500 font-bold">Java Developer Certification</span> (Infosys Springboard)</div>
                        <div>• <span className="text-amber-500 font-bold">Frontend Development Certificate</span> (FreeCodeCamp)</div>
                    </div>
                );
                break;

            case "neofetch":
                output = (
                    <div className="flex flex-col md:flex-row gap-4 font-mono text-[11px] md:text-xs">
                        <pre className="text-amber-500 leading-none select-none">
{`   ██████╗  ██████╗
   ██╔══██╗ ██╔══██╗
   ██████╔╝ ██████╔╝
   ██╔═══╝  ██╔══██╗
   ██║      ██║  ██║
   ╚═╝      ╚═╝  ╚═╝`}
                        </pre>
                        <div className="space-y-1 text-muted-foreground">
                            <div><span className="text-amber-500 font-bold">guest@prakhar.sys</span></div>
                            <div>--------------------</div>
                            <div><span className="text-amber-500 font-bold">OS:</span> PrakharOS v1.0.0 (Darwin arm64)</div>
                            <div><span className="text-amber-500 font-bold">Host:</span> Galgotia College Final Year</div>
                            <div><span className="text-amber-500 font-bold">Kernel:</span> Next.js v15.2.2 / Tailwind v4</div>
                            <div><span className="text-amber-500 font-bold">Uptime:</span> 99.99% Operational</div>
                            <div><span className="text-amber-500 font-bold">Shell:</span> bash-like terminal panel</div>
                            <div><span className="text-amber-500 font-bold">LeetCode Specs:</span> 300+ Solved</div>
                            <div><span className="text-amber-500 font-bold">Active Projects:</span> 10+ completed</div>
                        </div>
                    </div>
                );
                break;

            case "contact":
                output = (
                    <div className="space-y-1 text-muted-foreground font-mono text-[11px] md:text-xs">
                        <div><span className="text-amber-500 font-bold">Email:</span> yadavxprakhar@gmail.com</div>
                        <div><span className="text-amber-500 font-bold">Github:</span> github.com/yadavxprakhar</div>
                        <div><span className="text-amber-500 font-bold">LinkedIn:</span> linkedin.com/in/prakharyxdev</div>
                    </div>
                );
                break;

            default:
                output = (
                    <div className="text-red-400 font-mono text-[11px] md:text-xs">
                        Command not found: &apos;{trimmed}&apos;. Type &apos;help&apos; to view all operations.
                    </div>
                );
                break;
        }

        setHistory((prev) => [...prev, { command: cmd, output }]);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(input);
        }
    };

    const runSuggestion = (cmd: string) => {
        handleCommand(cmd);
    };

    return (
        <SectionWrapper id="console" className="relative py-24 overflow-hidden border-t border-border">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    className="mb-12 text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                        Interactive Shell
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tighter">
                        Engineering <span className="text-gradient">Console</span> playground
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
                        Query Prakhar&apos;s developer parameters, stack topology, and core project specifications directly from a live interactive terminal gateway.
                    </p>
                </motion.div>

                {/* Console Frame */}
                <div
                    className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl cursor-text"
                    onClick={focusInput}
                >
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-secondary border-b border-border select-none">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                            prakhar.sys@console
                        </span>
                    </div>

                    {/* Console Output Buffer */}
                    <div className="p-6 h-[320px] overflow-y-auto font-mono text-[11px] md:text-xs space-y-4">
                        {history.map((item, index) => (
                            <div key={index} className="space-y-1.5">
                                {item.command !== "system-init" && (
                                    <div className="flex items-center gap-2 text-foreground font-bold">
                                        <span className="text-amber-500">guest@prakhar.sys:~$</span>
                                        <span>{item.command}</span>
                                    </div>
                                )}
                                <div>{item.output}</div>
                            </div>
                        ))}
                        <div ref={terminalEndRef} />
                    </div>

                    {/* Interactive suggestions drawer */}
                    <div className="px-6 py-2 bg-secondary border-t border-border flex flex-wrap gap-2 items-center text-[10px] font-mono select-none">
                        <span className="text-slate-500 uppercase tracking-wider font-bold">Quick Queries:</span>
                        {["help", "about", "skills", "projects", "blogs", "neofetch", "contact"].map((cmd) => (
                            <button
                                key={cmd}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    runSuggestion(cmd);
                                }}
                                className="px-2.5 py-0.5 rounded border border-border bg-card hover:border-amber-500/30 hover:text-amber-500 transition-all cursor-pointer"
                            >
                                {cmd}
                            </button>
                        ))}
                    </div>

                    {/* Prompt input field */}
                    <div className="px-6 py-3.5 bg-card flex items-center gap-2 border-t border-border">
                        <span className="font-mono text-[11px] md:text-xs text-amber-500 font-bold select-none">
                            guest@prakhar.sys:~$
                        </span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent border-none outline-none font-mono text-base md:text-xs text-foreground caret-amber-500"
                            placeholder="Type a command and press Enter..."
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck={false}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
