"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/common/ParticleBackground";
import SocialLinks from "@/components/common/SocialLinks";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const CODE_LINES = [
    { tokens: [{ text: "// Senior Full Stack Developer", type: "comment" }] },
    { tokens: [] },
    {
        tokens: [
            { text: "const ", type: "keyword" },
            { text: "prakhar", type: "variable" },
            { text: " = {", type: "default" },
        ],
    },
    {
        tokens: [
            { text: "  role", type: "property" },
            { text: ": ", type: "default" },
            { text: '"SDE-1"', type: "string" },
            { text: ",", type: "default" },
        ],
    },
    {
        tokens: [
            { text: "  focus", type: "property" },
            { text: ": ", type: "default" },
            { text: '"Distributed Systems"', type: "string" },
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
            { text: "],", type: "default" },
        ],
    },
    {
        tokens: [
            { text: "  frontend", type: "property" },
            { text: ": ", type: "default" },
            { text: '"React / Next.js"', type: "string" },
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
    comment: "text-slate-500 italic",
    keyword: "text-indigo-400",
    string: "text-cyan-400",
    property: "text-violet-400",
    boolean: "text-orange-400",
    variable: "text-foreground",
    default: "text-foreground/80",
};

function CodeCard() {
    return (
        <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <motion.div
                initial={{ rotateY: 20, rotateX: 10, opacity: 0 }}
                animate={{ rotateY: 0, rotateX: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative glass-darker rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
                <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                        profile.ts
                    </span>
                </div>
                <div className="p-8 font-mono text-xs md:text-sm leading-relaxed">
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
            </motion.div>
        </div>
    );
}

const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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
            className="relative min-h-[90vh] flex items-center w-full section-padding overflow-hidden"
        >
            <div className="hero-glow" />
            <ParticleBackground />

            <div className="relative z-10 max-w-7xl mx-auto w-full pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col gap-8"
                    >
                        <motion.div variants={itemVariant}>
                            <span className="inline-flex items-center gap-2 text-[13px] font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-1.5 uppercase tracking-wider">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                                </span>
                                Available for new opportunities
                            </span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                variants={itemVariant}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
                            >
                                Crafting <span className="text-gradient">Digital</span> <br /> 
                                Experiences.
                            </motion.h1>
                            
                            <motion.p
                                variants={itemVariant}
                                className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
                            >
                                I&apos;m <span className="text-white font-semibold">Prakhar Yadav</span>, a Full Stack Developer specializing in high-performance backend systems and fluid user interfaces.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={itemVariant}
                            className="flex flex-row flex-wrap gap-4 items-center"
                        >
                            <Button
                                onClick={scrollToProjects}
                                size="lg"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-14 text-base font-semibold group"
                            >
                                Explore Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <div className="flex items-center gap-3">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full w-14 h-14 border-white/10 bg-white/5 hover:bg-white/10"
                                    asChild
                                >
                                    <a href="https://github.com/yadavxprakhar" target="_blank">
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full h-14 border-white/10 bg-white/5 hover:bg-white/10 font-medium"
                                    asChild
                                >
                                    <a href="/Prakhar_Yadav_Resume.pdf" download>
                                        <Download className="mr-2 w-4 h-4" />
                                        Resume
                                    </a>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariant}>
                            <SocialLinks iconSize={20} className="opacity-60 hover:opacity-100 transition-opacity" />
                        </motion.div>
                    </motion.div>

                    {/* Right: Code Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative hidden lg:block"
                    >
                        <CodeCard />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}