"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Layers, Server, Code2, BookOpen } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

interface InterestCard {
    id: string;
    icon: React.ElementType;
    label: string;
}

const INTERESTS: InterestCard[] = [
    { id: "dsa", icon: BrainCircuit, label: "DSA Problem Solving" },
    { id: "sysdesign", icon: Layers, label: "System Design" },
    { id: "backend", icon: Server, label: "Backend Development" },
    { id: "projects", icon: Code2, label: "Building Side Projects" },
    { id: "learning", icon: BookOpen, label: "Continuous Learning" },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, scale: 0.88, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

export default function Hobbies() {
    return (
        <SectionWrapper id="hobbies">
            {/* Header */}
            <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                    Outside Work
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Beyond the Code
                </h2>
            </motion.div>

            {/* Intro text */}
            <motion.p
                className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                viewport={{ once: true }}
            >
                In my free time, I enjoy solving DSA problems, exploring backend and
                system design concepts, and building side projects to improve my skills.
            </motion.p>

            {/* Interest Cards */}
            <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
            >
                {INTERESTS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            variants={cardVariant}
                            whileHover={{
                                scale: 1.06,
                                borderColor: "hsl(var(--primary))",
                                boxShadow: "0 4px 20px rgba(29,78,216,0.18)",
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-card border border-border rounded-xl p-6
                         flex flex-col items-center gap-3
                         w-36 md:w-40 cursor-default
                         transition-colors duration-200"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                <Icon className="w-7 h-7 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-center text-foreground leading-snug">
                                {item.label}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </SectionWrapper>
    );
}