"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

interface EducationEntry {
    institution: string;
    degree: string;
    period: string;
    location: string;
    score?: string;
    coursework: string[];
}

const EDUCATION: EducationEntry[] = [
    {
        institution: "Galgotia College of Engineering & Technology",
        degree: "B.Tech in Computer Science & Engineering",
        period: "2022 – 2026",
        location: "Greater Noida, India",
        coursework: ["Data Structures", "Algorithms", "DBMS", "OS", "System Design"],
    },
    {
        institution: "Jawahar Navodaya Vidyalaya",
        degree: "Intermediate (Class XII)",
        period: "2021",
        location: "Raebareli, India",
        score: "89%",
        coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
    {
        institution: "Jawahar Navodaya Vidyalaya",
        degree: "High School (Class X)",
        period: "2019",
        location: "Raebareli, India",
        score: "92%",
        coursework: ["Science", "Mathematics", "Social Science", "English", "Hindi"],
    }
];

export default function Education() {
    return (
        <SectionWrapper id="education" className="py-32 border-t border-border bg-card">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                        Academic Nodes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tighter">
                        Education & <span className="text-gradient">Background</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
                        My formal education and specialized academic training, organized chronologically.
                    </p>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-border/60">
                    {EDUCATION.map((edu, i) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8 group"
                        >
                            {/* Technical Timeline Connector */}
                            <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full border-2 border-border bg-background group-hover:border-amber-500 group-hover:bg-amber-500 transition-all duration-300 z-10" />
                            
                            <div className="p-6 md:p-8 rounded-xl border border-border bg-[#0d0d0e]/60 hover:border-amber-500/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                                        {edu.institution}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] font-bold uppercase tracking-wider">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {edu.period}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-6">
                                    <div className="flex items-center gap-1.5 text-xs font-mono">
                                        <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                                        {edu.degree}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-mono">
                                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                                        {edu.location}
                                    </div>
                                    {edu.score && (
                                        <span className="px-2.5 py-0.5 rounded border border-amber-500/20 bg-amber-500/5 text-amber-500 font-mono text-[9px] uppercase tracking-wider">
                                            Score: {edu.score}
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {edu.coursework.map((course) => (
                                        <span key={course} className="px-2 py-0.5 font-mono text-[10px] text-slate-400 rounded border border-border bg-[#0d0d0e]/60 group-hover:border-amber-500/20 transition-colors">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}