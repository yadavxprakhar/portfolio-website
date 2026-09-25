"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

interface ExperienceItem {
    role: string;
    company: string;
    companyAlt?: string;
    type: string;
    isPaid: boolean;
    period: string;
    duration: string;
    location: string;
    highlights: string[];
    skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
    {
        role: "Frontend Developer Intern",
        company: "SharkdomPRM",
        type: "Paid Internship",
        isPaid: true,
        period: "Jul 2026 – Sep 2026",
        duration: "3 Mos",
        location: "Gurugram, Haryana, India · Remote",
        highlights: [
            "Contributed to Sharkdom's production-grade B2B SaaS platform (Next.js 14 + TypeScript), developing and shipping client-facing web pages directly to live production.",
            "Owned the Trello integration frontend module — diagnosing broken integration logic and rewriting the bridge connecting Trello's API with Sharkdom's internal workflow engine.",
            "Collaborated remotely with the product engineering team on feature delivery, code reviews, and shipping fixes for live users in a fast-paced SaaS environment."
        ],
        skills: ["Next.js 14", "TypeScript", "Tailwind CSS", "Trello API", "React.js", "REST APIs"]
    },
    {
        role: "Web Development Intern",
        company: "InAmigos Foundation",
        companyAlt: "IAF",
        type: "Unpaid Internship",
        isPaid: false,
        period: "May 2026 – Jun 2026",
        duration: "2 Weeks",
        location: "India · Remote",
        highlights: [
            "Developed a full-stack project awareness web platform designed to inform and engage communities around social impact initiatives.",
            "Built responsive, accessible UI components using React.js, JavaScript, HTML5, and CSS3 following mobile-first design principles.",
            "Integrated Spring Boot backend APIs into the React frontend, handling dynamic data flow between client and server."
        ],
        skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Spring Boot", "REST APIs"]
    }
];

export default function Experience() {
    return (
        <SectionWrapper id="experience" className="py-32 border-t border-border bg-card">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                        Work Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tighter">
                        Professional <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
                        Hands-on engineering experience shipping production features, integration modules, and full-stack web solutions.
                    </p>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-border/60">
                    {EXPERIENCES.map((exp, i) => (
                        <motion.div
                            key={`${exp.company}-${exp.role}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8 group"
                        >
                            {/* Timeline Node Connector */}
                            <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full border-2 border-border bg-background group-hover:border-amber-500 group-hover:bg-amber-500 transition-all duration-300 z-10" />

                            <div className="p-6 md:p-8 rounded-xl border border-border bg-background hover:border-amber-500/30 transition-all duration-300">
                                {/* Card Header: Role & Company */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-amber-500 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider border ${
                                                exp.isPaid
                                                    ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
                                                    : "bg-secondary border-border text-muted-foreground"
                                            }`}>
                                                {exp.type}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
                                            <Building2 className="w-3.5 h-3.5 text-amber-500" />
                                            <span className="font-semibold text-foreground/90">{exp.company}</span>
                                            {exp.companyAlt && (
                                                <span className="text-muted-foreground">({exp.companyAlt})</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Period & Duration */}
                                    <div className="flex items-center gap-2 text-muted-foreground font-mono text-[10px] font-bold uppercase tracking-wider self-start md:self-auto bg-secondary/50 px-3 py-1.5 rounded border border-border">
                                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                                        <span>{exp.period}</span>
                                        <span className="text-amber-500">·</span>
                                        <span>{exp.duration}</span>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground mb-6">
                                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                                    <span>{exp.location}</span>
                                </div>

                                {/* Key Highlights */}
                                <div className="space-y-3 mb-6">
                                    {exp.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                                            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Skill Tags */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground rounded border border-border bg-secondary group-hover:border-amber-500/20 transition-colors"
                                        >
                                            {skill}
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
