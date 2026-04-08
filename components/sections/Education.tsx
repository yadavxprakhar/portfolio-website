"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, MapPin } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

interface EducationEntry {
    id: string;
    institution: string;
    degree: string;
    field?: string;
    period: string;
    location?: string;
    score?: string;
    current: boolean;
    coursework?: string[];
}

const EDUCATION: EducationEntry[] = [
    {
        id: "btech",
        institution: "Galgotia College of Engineering & Technology",
        degree: "Bachelor of Technology (B.Tech)",
        field: "Computer Science & Engineering",
        period: "Aug 2022 – May 2026 (Expected)",
        location: "Greater Noida, India",
        current: true,
        coursework: [
            "Data Structures & Algorithms",
            "Database Management Systems",
            "Object-Oriented Programming",
            "Web Technologies",
        ],
    },
    {
        id: "class12",
        institution: "Jawahar Navodaya Vidyalaya",
        degree: "Intermediate (Class XII)",
        period: "2021",
        score: "89%",
        current: false,
    },
    {
        id: "class10",
        institution: "Jawahar Navodaya Vidyalaya",
        degree: "High School (Class X)",
        period: "2019",
        score: "92%",
        current: false,
    },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Education() {
    return (
        <SectionWrapper id="education" alternate>
            {/* Header */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                    Academic Background
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Education
                </h2>
                <p className="text-muted-foreground mt-3 text-base max-w-xl mx-auto">
                    My academic background and qualifications
                </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
                className="relative max-w-3xl mx-auto"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
            >
                {/* Vertical connector line */}
                <div
                    className="absolute left-5 top-6 bottom-6 w-0.5 bg-border"
                    aria-hidden="true"
                />

                <div className="flex flex-col gap-8">
                    {EDUCATION.map((entry) => (
                        <motion.div
                            key={entry.id}
                            variants={fadeUp}
                            className="relative flex gap-6"
                        >
                            {/* Timeline dot */}
                            <div className="relative z-10 flex-shrink-0 mt-6">
                                {entry.current ? (
                                    <div
                                        className="w-10 h-10 rounded-full bg-primary
                               ring-4 ring-primary/20
                               flex items-center justify-center shadow-md"
                                    >
                                        <GraduationCap className="w-5 h-5 text-white" />
                                    </div>
                                ) : (
                                    <div
                                        className="w-10 h-10 rounded-full bg-muted border-2 border-border
                               flex items-center justify-center"
                                    >
                                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                )}
                            </div>

                            {/* Card */}
                            <motion.div
                                whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
                                className="flex-1 bg-card border border-border rounded-xl p-6
                           transition-all duration-200 hover:shadow-md"
                            >
                                {/* Top row */}
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                    <div className="flex flex-col gap-1">
                                        {entry.current && (
                                            <span
                                                className="inline-flex w-fit items-center text-xs font-medium
                                   rounded-full px-2.5 py-0.5 mb-1
                                   bg-green-500/10 text-green-600 dark:text-green-400
                                   border border-green-500/20"
                                            >
                        Currently Enrolled
                      </span>
                                        )}
                                        <h3 className="font-bold text-lg text-foreground leading-snug">
                                            {entry.institution}
                                        </h3>
                                    </div>

                                    {/* Score badge (non-current) */}
                                    {entry.score && (
                                        <span
                                            className="inline-flex items-center text-xs font-semibold
                                 rounded-full px-3 py-1 shrink-0
                                 bg-green-500/10 text-green-600 dark:text-green-400"
                                        >
                      {entry.score}
                    </span>
                                    )}
                                </div>

                                {/* Degree + Field */}
                                <p className="text-base font-semibold text-foreground">
                                    {entry.degree}
                                </p>
                                {entry.field && (
                                    <p className="text-sm text-primary font-medium mt-0.5">
                                        {entry.field}
                                    </p>
                                )}

                                {/* Period */}
                                <p className="text-sm text-muted-foreground mt-1">
                                    {entry.period}
                                </p>

                                {/* Location */}
                                {entry.location && (
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                                        {entry.location}
                                    </div>
                                )}

                                {/* Coursework pills */}
                                {entry.coursework && entry.coursework.length > 0 && (
                                    <div className="mt-4">
                                        <p className="text-xs font-semibold uppercase tracking-wider
                                  text-muted-foreground mb-2">
                                            Relevant Coursework
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {entry.coursework.map((course) => (
                                                <span
                                                    key={course}
                                                    className="bg-primary/10 text-primary text-xs
                                     rounded-full px-2 py-1 font-medium"
                                                >
                          {course}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionWrapper>
    );
}