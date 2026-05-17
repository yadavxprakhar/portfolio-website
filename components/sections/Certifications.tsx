"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";

interface Certification {
    title: string;
    issuer: string;
    year: string;
    skills: string[];
    url?: string;
}

const CERTIFICATIONS: Certification[] = [
    {
        title: "Java Full Stack Development",
        issuer: "Wipro TalentNext",
        year: "2025",
        skills: ["Java", "Spring Boot", "React", "REST API"],
        url: "https://drive.google.com/file/d/1_6yOD3cCfAGmJzkPGZ_2tFiKOXQcpXOE/view?usp=sharing",
    },
    {
        title: "Java Developer Certification",
        issuer: "Infosys Springboard",
        year: "2025",
        skills: ["Java", "OOPs", "Data Structures", "Backend"],
        url: "https://drive.google.com/file/d/1uNpFOtOa9jiJd1EvhfolNTlt3fni6rrj/view",
    },
    {
        title: "Programming with Java",
        issuer: "Infosys Springboard",
        year: "2024",
        skills: ["Java", "OOPs", "Java SE", "Syntax"],
        url: "https://drive.google.com/file/d/1C_EfB708om7rzXyNzVWsdpO3yNAnP3xi/view?usp=sharing",
    },
];

export default function Certifications() {
    return (
        <SectionWrapper id="certifications" className="py-32 border-t border-border bg-card">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                        Technical Validation
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tighter">
                        Verified <span className="text-gradient">Credentials</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
                        Professional validations, platform accreditations, and specialized technical certifications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CERTIFICATIONS.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-xl border border-border bg-[#0d0d0e]/60 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-9 h-9 rounded bg-amber-500/5 flex items-center justify-center border border-amber-500/20 text-amber-500 group-hover:bg-amber-500/10 transition-colors">
                                        <Award className="w-4.5 h-4.5" />
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded border border-border bg-card font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                                        {cert.year}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors tracking-tight">
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-mono">
                                        {cert.issuer}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 my-6">
                                    {cert.skills.map((skill) => (
                                        <span key={skill} className="px-2 py-0.5 font-mono text-[9px] text-slate-400 rounded border border-border bg-card">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {cert.url && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full rounded border border-border bg-[#0d0d0e]/60 hover:bg-secondary hover:border-amber-500/30 hover:text-amber-500 text-white font-mono h-10 text-xs mt-2 group"
                                    asChild
                                >
                                    <a href={cert.url} target="_blank">
                                        View Certificate
                                        <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </Button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}