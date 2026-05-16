"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Code2, Layout, Server, Database } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

interface Skill {
    name: string;
    level: string;
}

interface SkillCategory {
    label: string;
    icon: React.ElementType;
    skills: Skill[];
}

const CATEGORIES: SkillCategory[] = [
    {
        label: "Languages",
        icon: Code2,
        skills: [
            { name: "Java", level: "Strong" },
            { name: "JavaScript", level: "Strong" },
            { name: "TypeScript", level: "Confident" },
            { name: "Python", level: "Intermediate" },
        ],
    },
    {
        label: "Frontend",
        icon: Layout,
        skills: [
            { name: "React.js", level: "Strong" },
            { name: "Next.js", level: "Strong" },
            { name: "Tailwind CSS", level: "Strong" },
            { name: "Framer Motion", level: "Confident" },
        ],
    },
    {
        label: "Backend",
        icon: Server,
        skills: [
            { name: "Spring Boot", level: "Strong" },
            { name: "REST API", level: "Strong" },
            { name: "Spring Data JPA", level: "Strong" },
            { name: "JWT Auth", level: "Strong" },
            { name: "Node.js", level: "Confident" },
        ],
    },
    {
        label: "Cloud & DB",
        icon: Database,
        skills: [
            { name: "PostgreSQL", level: "Strong" },
            { name: "MySQL", level: "Strong" },
            { name: "MongoDB", level: "Confident" },
            { name: "AWS", level: "Learning" },
        ],
    },
];

function SkillCard({ category }: { category: SkillCategory }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const Icon = category.icon;

    return (
        <motion.div
            onMouseMove={onMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
                }}
            />
            
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-lg shadow-indigo-500/5">
                        <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.label}
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                        <span
                            key={skill.name}
                            className="inline-flex items-center rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-400 border border-white/5 hover:border-indigo-500/30 hover:text-white hover:bg-indigo-500/5 transition-all duration-300 cursor-default"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <SectionWrapper id="skills" className="relative py-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
                        Skills & <span className="text-gradient">Technologies</span>
                    </h2>
                    <p className="text-slate-400 max-w-lg mx-auto text-lg">
                        The languages, frameworks, and tools that power my development workflow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CATEGORIES.map((cat) => (
                        <SkillCard key={cat.label} category={cat} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}