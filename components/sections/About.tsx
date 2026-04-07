"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    MapPin,
    Code2,
    Briefcase,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "@/components/common/SectionWrapper";

const PARAGRAPHS = [
    `I got into coding because I wanted to understand how things work — not just use them. While most of my peers gravitated toward frontend frameworks, I fell in love with backend systems: how APIs are structured, how data flows through a system, and how everything connects to create something that actually works end-to-end.`,
    `My journey started with Java fundamentals in my first year of college. Over time, I moved into Spring Boot, REST API design, and database integration — and eventually into building complete full-stack applications. Today, I focus on writing backend systems that are clean, scalable, and maintainable — not just functional.`,
    `What I enjoy most is the architecture side of development: deciding how components connect, how data moves between layers, and how to write code that another developer can read and extend without friction.`,
];

const WORK_STYLE_TAGS = [
    "Architecture-First Thinker",
    "Clean Code Advocate",
    "Resourceful Problem Solver",
    "Backend-Focused Builder",
    "System Design Enthusiast",
];

interface HighlightCard {
    icon: React.ElementType;
    label: string;
    value: string;
    sub: string;
}

const HIGHLIGHT_CARDS: HighlightCard[] = [
    {
        icon: GraduationCap,
        label: "Education",
        value: "B.Tech CS — Galgotia College",
        sub: "2022 – 2026 (Final Year)",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Greater Noida, India",
        sub: "Open to Relocation",
    },
    {
        icon: Code2,
        label: "Core Stack",
        value: "Java · Spring Boot · React",
        sub: "Full Stack with Backend Focus",
    },
    {
        icon: Briefcase,
        label: "Availability",
        value: "Immediately Available",
        sub: "SDE-1 · Backend · Full Stack",
    },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
    return (
        <SectionWrapper id="about" alternate>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                {/* ── Left: Text (60%) ── */}
                <motion.div
                    className="lg:col-span-3 flex flex-col gap-6"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {/* Section label */}
                    <motion.p
                        variants={fadeUp}
                        className="text-primary text-sm font-semibold uppercase tracking-wider"
                    >
                        About Me
                    </motion.p>

                    {/* Section title */}
                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl md:text-4xl font-bold leading-tight text-foreground"
                    >
                        I Build Systems That Work Under the Hood
                    </motion.h2>

                    {/* Paragraphs */}
                    <div className="flex flex-col gap-4">
                        {PARAGRAPHS.map((para, i) => (
                            <motion.p
                                key={i}
                                variants={fadeUp}
                                className="text-base text-muted-foreground leading-relaxed"
                            >
                                {para}
                            </motion.p>
                        ))}
                    </div>

                    {/* Hobbies line */}
                    <motion.p
                        variants={fadeUp}
                        className="text-base text-muted-foreground italic leading-relaxed
                       border-l-2 border-primary/30 pl-4"
                    >
                        When I&apos;m not building, I&apos;m sharpening my problem-solving
                        through DSA practice and exploring system design concepts to
                        understand how large-scale systems are built and maintained.
                    </motion.p>

                    {/* Status Badge */}
                    <motion.div variants={fadeUp}>
            <span
                className="inline-flex items-center gap-2 text-sm rounded-full
                         bg-green-500/10 text-green-600 dark:text-green-400
                         border border-green-500/20 px-3 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open to SDE-1, Backend &amp; Full Stack roles — Immediately Available
            </span>
                    </motion.div>

                    {/* Work Style Tags */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap gap-2"
                    >
                        {WORK_STYLE_TAGS.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs font-medium py-1">
                                {tag}
                            </Badge>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── Right: Highlight Cards (40%) ── */}
                <motion.div
                    className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1
                     xl:grid-cols-2 gap-4"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {HIGHLIGHT_CARDS.map((card) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.label}
                                variants={fadeUp}
                                whileHover={{ scale: 1.02, y: -2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="bg-card border border-border rounded-xl p-4
                           hover:border-primary/50 hover:shadow-md
                           transition-shadow duration-200 cursor-default"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {card.label}
                  </span>
                                </div>
                                <p className="text-sm font-semibold text-foreground leading-snug">
                                    {card.value}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">{card.sub}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </SectionWrapper>
    );
}