"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code2, Briefcase } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

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

export default function About() {
    return (
        <SectionWrapper id="about" className="py-32 bg-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                                I Build <span className="text-gradient">Systems</span> <br /> 
                                That Work Under the Hood.
                            </h2>
                            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    I am a Full Stack Developer with a deep-seated passion for backend architecture and distributed systems. While others focus solely on the surface, I find my flow in the logic that powers complex applications.
                                </p>
                                <p>
                                    My journey is defined by a commitment to clean code, scalable patterns, and the relentless pursuit of understanding "how it works." From designing RESTful APIs to optimizing database queries, I strive to build systems that are not just functional, but elegant.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {["Architecture-First", "Clean Code", "Backend-Focus", "System Design"].map((tag) => (
                                <span key={tag} className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20 uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {HIGHLIGHT_CARDS.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-indigo-500/10 transition-colors">
                                        <Icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                                        {card.label}
                                    </p>
                                    <p className="text-sm font-bold text-white mb-1">
                                        {card.value}
                                    </p>
                                    <p className="text-xs text-slate-500 italic">
                                        {card.sub}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}