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
    }
];

export default function Education() {
    return (
        <SectionWrapper id="education" className="py-32">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        Education & <span className="text-gradient">Background</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        My formal education and specialized academic training.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {EDUCATION.map((edu, i) => (
                        <motion.div
                            key={edu.institution}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8 border-l border-white/10 group"
                        >
                            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:scale-150 transition-transform" />
                            
                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                        {edu.institution}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold uppercase tracking-widest">
                                        <Calendar className="w-4 h-4" />
                                        {edu.period}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-slate-400">
                                    <div className="flex items-center gap-1.5 font-medium">
                                        <GraduationCap className="w-4 h-4 text-indigo-400" />
                                        {edu.degree}
                                    </div>
                                    <div className="flex items-center gap-1.5 font-medium">
                                        <MapPin className="w-4 h-4 text-indigo-400" />
                                        {edu.location}
                                    </div>
                                    {edu.score && (
                                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 uppercase tracking-widest">
                                            Score: {edu.score}
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {edu.coursework.map((course) => (
                                        <span key={course} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-white/5 bg-white/5 px-2 py-1 rounded group-hover:border-indigo-500/20 transition-colors">
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