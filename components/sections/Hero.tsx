"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/common/ParticleBackground";
import TypingAnimation from "@/components/common/TypingAnimation";
import SocialLinks from "@/components/common/SocialLinks";

const TYPING_TEXTS = [
    "Full Stack Developer",
    "Backend-Focused Engineer",
    "Spring Boot Developer",
    "Clean Code Advocate",
];

const CODE_LINES = [
    { tokens: [{ text: "// Prakhar Yadav", type: "comment" }] },
    { tokens: [] },
    {
        tokens: [
            { text: "const ", type: "keyword" },
            { text: "developer", type: "variable" },
            { text: " = {", type: "default" },
        ],
    },
    {
        tokens: [
            { text: "  name", type: "property" },
            { text: ": ", type: "default" },
            { text: '"Prakhar Yadav"', type: "string" },
            { text: ",", type: "default" },
        ],
    },
    {
        tokens: [
            { text: "  role", type: "property" },
            { text: ": ", type: "default" },
            { text: '"Full Stack Developer"', type: "string" },
            { text: ",", type: "default" },
        ],
    },
    {
        tokens: [
            { text: "  stack", type: "property" },
            { text: ": [", type: "default" },
            { text: '"Java"', type: "string" },
            { text: ", ", type: "default" },
            { text: '"Spring Boot"', type: "string" },
            { text: ",", type: "default" },
        ],
    },
    {
        tokens: [
            { text: "          ", type: "default" },
            { text: '"React"', type: "string" },
            { text: ", ", type: "default" },
            { text: '"PostgreSQL"', type: "string" },
            { text: "],", type: "default" },
        ],
    },
    {
        tokens: [
            { text: "  focus", type: "property" },
            { text: ": ", type: "default" },
            { text: '"Clean Architecture"', type: "string" },
            { text: ",", type: "default" },
        ],
    },
    {
        tokens: [
            { text: "  available", type: "property" },
            { text: ": ", type: "default" },
            { text: "true", type: "boolean" },
            { text: ",", type: "default" },
        ],
    },
    { tokens: [{ text: "};", type: "default" }] },
];

type TokenType =
    | "comment"
    | "keyword"
    | "string"
    | "property"
    | "boolean"
    | "variable"
    | "default";

const TOKEN_CLASSES: Record<TokenType, string> = {
    comment: "text-gray-500 italic",
    keyword: "text-purple-400",
    string: "text-green-400",
    property: "text-blue-300",
    boolean: "text-orange-400",
    variable: "text-foreground",
    default: "text-foreground/80",
};

function CodeCard() {
    return (
        <div className="relative flex items-center justify-center">
            <div
                className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10"
                aria-hidden="true"
            />
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-sm"
            >
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-800/60 border-b border-zinc-700">
                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="ml-3 text-xs text-zinc-500 font-mono">
                            developer.ts
                        </span>
                    </div>
                    <div className="p-5 font-mono text-sm leading-relaxed">
                        {CODE_LINES.map((line, i) => (
                            <div key={i} className="min-h-[1.5rem]">
                                {line.tokens.map((token, j) => (
                                    <span
                                        key={j}
                                        className={TOKEN_CLASSES[token.type as TokenType]}
                                    >
                                        {token.text}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center w-full px-4 md:px-8 lg:px-16 pt-16 overflow-hidden"
        >
            {/* Particle canvas */}
            <ParticleBackground />

            <div className="relative z-10 max-w-6xl mx-auto w-full py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* ── Left: Text Content ── */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-5"
                    >
                        {/* Availability Badge */}
                        <motion.div variants={itemVariant}>
                            <span className="inline-flex items-center gap-2 text-sm rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 px-3 py-1">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                                Actively Seeking SDE-1 & Backend Roles
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={itemVariant}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight"
                        >
                            Hi, I&apos;m{" "}
                            <span className="text-primary">Prakhar Yadav</span>
                        </motion.h1>

                        {/* Typing Animation */}
                        <motion.div
                            variants={itemVariant}
                            className="text-2xl md:text-3xl font-semibold"
                        >
                            <span className="text-muted-foreground">I&apos;m a </span>
                            <TypingAnimation
                                texts={TYPING_TEXTS}
                                speed={90}
                                deleteSpeed={45}
                                pauseTime={2000}
                                className="text-primary"
                            />
                        </motion.div>

                        {/* Subheadline */}
                        <motion.p
                            variants={itemVariant}
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                        >
                            I build scalable full-stack applications using Java, Spring Boot,
                            and React that focus on clean architecture and real-world problem
                            solving.
                        </motion.p>

                        {/* Short Intro */}
                        <motion.p
                            variants={itemVariant}
                            className="text-base text-muted-foreground max-w-xl leading-relaxed"
                        >
                            Final-year Computer Science student based in Greater Noida, India.
                            I specialize in building backend systems with Java and Spring Boot,
                            and integrating them with modern React frontends. Currently open to
                            SDE-1, Backend, and Full Stack opportunities.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariant}
                            className="flex flex-row flex-wrap gap-3 mt-1"
                        >
                            <Button
                                onClick={scrollToProjects}
                                size="default"
                                className="font-medium"
                            >
                                View My Projects
                            </Button>

                            <a href="/Prakhar_Yadav_Resume.pdf" download>
                                <Button
                                    variant="secondary"
                                    size="default"
                                    className="font-medium"
                                >
                                    Download Resume
                                </Button>
                            </a>

                            <a
                                href="https://github.com/yadavxprakhar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="outline"
                                    size="default"
                                    className="font-medium"
                                >
                                    View GitHub ↗
                                </Button>
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariant}>
                            <SocialLinks iconSize={22} className="mt-1" />
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Code Card (desktop only) ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.5 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <CodeCard />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}