"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Layers, Server, Code2, BookOpen } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

interface InterestCard {
    icon: React.ElementType;
    label: string;
}

const INTERESTS: InterestCard[] = [
    { icon: BrainCircuit, label: "DSA Solving" },
    { icon: Layers, label: "System Design" },
    { icon: Server, label: "Backend Eng" },
    { icon: Code2, label: "Side Projects" },
    { icon: BookOpen, label: "Tech Reading" },
];

export default function Hobbies() {
    return (
        <SectionWrapper id="hobbies" className="py-32 bg-secondary/30 dark:bg-card/50">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                        Beyond the <span className="text-gradient">Screen</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        When I&apos;m not shipping code, I&apos;m usually sharpening my architectural thinking or exploring new paradigms in system design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6">
                    {INTERESTS.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center gap-4 p-6 sm:p-8 rounded-3xl border border-border bg-card w-full sm:w-44 group hover:border-amber-500/30 transition-all shadow-sm"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                                    <Icon className="w-6.5 h-6.5 sm:w-8 sm:h-8 text-muted-foreground group-hover:text-amber-500 transition-colors" />
                                </div>
                                <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest text-center group-hover:text-foreground transition-colors">
                                    {item.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}