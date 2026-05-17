"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/common/ParticleBackground";
import SocialLinks from "@/components/common/SocialLinks";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const CODE_LINES = []; // Unused in new blueprint layout

function CodeCard() {
    return (
        <div className="relative group">
            {/* Subtle terminal-green backing border */}
            <div className="absolute -inset-[1px] bg-emerald-500/10 rounded-xl" />
            
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
            >
                {/* Title Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-secondary border-b border-border">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                        prakhar.sys --bash
                    </span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-[11px] md:text-[12px] leading-relaxed text-muted-foreground space-y-6">
                    <div>
                        <span className="text-emerald-600 dark:text-emerald-400">$</span> <span className="text-foreground">cat profile.json</span>
                        <pre className="text-foreground/80 dark:text-slate-300 mt-2 font-mono">
{`{
  "host": "yadavxprakhar.dev",
  "specialization": "Distributed Systems",
  "status": "operational",
  "auth": "secure_jwt"
}`}
                        </pre>
                    </div>

                    <div className="border-t border-border pt-4 space-y-3">
                        <span className="text-emerald-600 dark:text-emerald-400">$</span> <span className="text-foreground">sys --draw-architecture</span>
                        
                        {/* Distributed Systems Toplogy Diagram */}
                        <div className="mt-2 p-4 bg-secondary/50 dark:bg-black/40 rounded-lg border border-border flex flex-col items-center justify-center space-y-2 text-[10px] select-none text-foreground">
                            {/* Frontend Gateway */}
                            <div className="px-3 py-1 rounded border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                                Client (React)
                            </div>
                            
                            <div className="text-muted-foreground/60 dark:text-slate-600 font-bold">│ (REST API)</div>
                            
                            {/* API Gateway */}
                            <div className="px-3 py-1 rounded border border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                                Spring API Gateway
                            </div>
                            
                            <div className="text-muted-foreground/60 dark:text-slate-600 font-bold">├───┴───┐</div>
                            
                            {/* internal microservices */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="px-2.5 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 font-semibold">
                                        Auth Svc
                                    </div>
                                    <div className="text-muted-foreground/60 dark:text-slate-600 font-bold">│</div>
                                    <div className="px-2 py-0.5 rounded border border-border bg-background dark:border-slate-700 dark:bg-slate-800/40 text-muted-foreground text-[8px]">
                                        Redis Cache
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="px-2.5 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 font-semibold">
                                        Data Engine
                                    </div>
                                    <div className="text-muted-foreground/60 dark:text-slate-600 font-bold">│</div>
                                    <div className="px-2 py-0.5 rounded border border-border bg-background dark:border-slate-700 dark:bg-slate-800/40 text-muted-foreground text-[8px]">
                                        PostgreSQL
                                    </div>
                                </div>
                            </div>
                        </div>
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
            <div className="relative z-10 max-w-5xl mx-auto w-full pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        <motion.div variants={itemVariant}>
                            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-medium rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 uppercase tracking-wider">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                                </span>
                                Host Status: operational
                            </span>
                        </motion.div>

                        <div className="space-y-3">
                            <motion.h1
                                variants={itemVariant}
                                className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.2rem] xl:text-[3.6rem] font-bold tracking-tight leading-[1.1]"
                            >
                                Building Scalable <br /> 
                                <span className="text-gradient">Full-Stack</span> Systems.
                            </motion.h1>
                            
                            <motion.p
                                variants={itemVariant}
                                className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-sans"
                            >
                                I&apos;m <span className="text-foreground font-semibold">Prakhar Yadav</span>. I build high-performance web apps and systems while documenting my journey in tech. Passionate about creating clean digital products, growing a personal brand, and turning ideas into scalable businesses.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={itemVariant}
                            className="flex flex-row flex-wrap gap-4 items-center"
                        >
                            <Button
                                onClick={scrollToProjects}
                                size="lg"
                                className="bg-amber-500 hover:bg-amber-600 text-black rounded px-8 h-14 text-base font-semibold group font-mono"
                            >
                                Explore Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <div className="flex items-center gap-3">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded w-14 h-14 border-border bg-card hover:bg-secondary"
                                    asChild
                                >
                                    <a href="https://github.com/yadavxprakhar" target="_blank">
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded h-14 border-border bg-card hover:bg-secondary font-mono font-medium"
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