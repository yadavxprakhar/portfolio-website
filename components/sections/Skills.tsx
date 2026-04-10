"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Wrench, BookOpen } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

type SkillLevel = "Strong" | "Confident" | "Learning";

interface Skill {
    name: string;
    level: SkillLevel;
}

interface SkillCategory {
    label: string;
    icon: React.ElementType;
    accent: string;       // Tailwind text color class
    dot: string;          // Tailwind bg class for dot
    border: string;       // Tailwind border hover class
    skills: Skill[];
}

const CATEGORIES: SkillCategory[] = [
    {
        label: "Languages",
        icon: Code2,
        accent: "text-blue-500",
        dot: "bg-blue-500",
        border: "hover:border-blue-500/40",
        skills: [
            { name: "Java", level: "Strong" },
            { name: "JavaScript", level: "Strong" },
        ],
    },
    {
        label: "Frontend",
        icon: Layout,
        accent: "text-purple-500",
        dot: "bg-purple-500",
        border: "hover:border-purple-500/40",
        skills: [
            { name: "React.js", level: "Strong" },
            { name: "HTML & CSS", level: "Strong" },
            { name: "Tailwind CSS", level: "Confident" },
            { name: "Vite", level: "Confident" },
        ],
    },
    {
        label: "Backend",
        icon: Server,
        accent: "text-green-500",
        dot: "bg-green-500",
        border: "hover:border-green-500/40",
        skills: [
            { name: "Spring Boot", level: "Strong" },
            { name: "REST API", level: "Strong" },
            { name: "Spring Data JPA", level: "Strong" },
            { name: "JWT Auth", level: "Strong" },
            { name: "API Integration", level: "Strong" },
            { name: "Spring Security", level: "Confident" },
            { name: "Node.js", level: "Confident" },
        ],
    },
    {
        label: "Databases",
        icon: Database,
        accent: "text-orange-500",
        dot: "bg-orange-500",
        border: "hover:border-orange-500/40",
        skills: [
            { name: "MySQL", level: "Strong" },
            { name: "PostgreSQL", level: "Strong" },
            { name: "MongoDB", level: "Strong" },
            { name: "DB Schema Design", level: "Strong" },
        ],
    },
    {
        label: "Tools",
        icon: Wrench,
        accent: "text-red-500",
        dot: "bg-red-500",
        border: "hover:border-red-500/40",
        skills: [
            { name: "Git & GitHub", level: "Strong" },
            { name: "Postman", level: "Strong" },
            { name: "Maven", level: "Confident" },
        ],
    },
    {
        label: "Currently Learning",
        icon: BookOpen,
        accent: "text-teal-500",
        dot: "bg-teal-500",
        border: "hover:border-teal-500/40",
        skills: [
            { name: "Data Structures & Algorithms", level: "Learning" },
            { name: "System Design", level: "Learning" },
        ],
    },
];

const LEVEL_STYLES: Record<SkillLevel, string> = {
    Strong: "text-green-600 dark:text-green-400",
    Confident: "text-blue-500 dark:text-blue-400",
    Learning: "text-teal-500 dark:text-teal-400",
};

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const pillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export default function Skills() {
    return (
        <SectionWrapper id="skills">
            {/* Section Header */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" as const }}
                viewport={{ once: true }}
            >
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                    What I Work With
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Skills &amp; Technologies
                </h2>
                <p className="text-muted-foreground mt-3 text-base max-w-xl mx-auto">
                    Technologies I work with and am actively improving
                </p>
            </motion.div>

            {/* Category Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
            >
                {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <motion.div
                            key={cat.label}
                            variants={fadeUp}
                            className={`bg-card border border-border rounded-xl p-6
                         transition-all duration-200 ${cat.border}
                         hover:shadow-md`}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                                    <Icon className={`w-4 h-4 ${cat.accent}`} />
                                </div>
                                <h3 className={`text-sm font-bold uppercase tracking-wide ${cat.accent}`}>
                                    {cat.label}
                                </h3>
                            </div>

                            {/* Skill pills */}
                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {cat.skills.map((skill) => (
                                    <motion.span
                                        key={skill.name}
                                        variants={pillVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 0 8px rgba(29,78,216,0.25)",
                                        }}
                                        className="inline-flex items-center gap-1.5 bg-muted
                               border border-transparent hover:border-primary/40
                               rounded-full px-3 py-1 text-sm font-medium
                               text-foreground cursor-default
                               transition-colors duration-150"
                                    >
                                        {/* Colored dot */}
                                        <span className={`w-1.5 h-1.5 rounded-full ${cat.dot} shrink-0`} />
                                        {skill.name}
                                        <span className={`text-xs ${LEVEL_STYLES[skill.level]}`}>
                      · {skill.level}
                    </span>
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </SectionWrapper>
    );
}