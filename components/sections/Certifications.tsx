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
        title: "Programming with SQL",
        issuer: "Oracle Academy",
        year: "2024",
        skills: ["SQL", "Database Design", "Oracle DB"],
    },
];

export default function Certifications() {
    return (
        <SectionWrapper id="certifications" className="py-32 bg-white/5">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        Verified <span className="text-gradient">Certifications</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Professional certifications and technical validations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CERTIFICATIONS.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition-all group"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                                    <Award className="w-7 h-7 text-indigo-400" />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    {cert.year}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-400 font-medium">
                                    {cert.issuer}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 my-8">
                                {cert.skills.map((skill) => (
                                    <span key={skill} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {cert.url && (
                                <Button
                                    variant="outline"
                                    className="w-full rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold h-12 group"
                                    asChild
                                >
                                    <a href={cert.url} target="_blank">
                                        View Certificate
                                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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