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
        <SectionWrapper id="hobbies" className="py-32 bg-white/5">
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
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        When I&apos;m not shipping code, I&apos;m usually sharpening my architectural thinking or exploring new paradigms in system design.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
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
                                className="flex flex-col items-center gap-4 p-8 rounded-3xl border border-white/10 bg-white/5 w-44 group hover:border-indigo-500/30 transition-all"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
                                    <Icon className="w-8 h-8 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                                </div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center group-hover:text-white transition-colors">
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