"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/common/SectionWrapper";

interface Certification {
    id: string;
    title: string;
    issuer: string;
    year: string;
    featured: boolean;
    relevance: string;
    skills: string[];
    credentialUrl: string | null;
}

const CERTIFICATIONS: Certification[] = [
    {
        id: "wipro-java",
        title: "Java Full Stack Development",
        issuer: "Wipro TalentNext",
        year: "2025",
        featured: true,
        relevance:
            "Validates end-to-end full-stack development skills with a focus on Java backend technologies — directly aligned with target SDE-1 roles.",
        skills: [
            "Java",
            "Spring Boot",
            "REST API",
            "Full Stack Development",
            "Backend Architecture",
        ],
        credentialUrl:
            "https://drive.google.com/file/d/1_6yOD3cCfAGmJzkPGZ_2tFiKOXQcpXOE/view?usp=sharing",
    },
    {
        id: "oracle-sql",
        title: "Programming with SQL",
        issuer: "Oracle Academy",
        year: "2024",
        featured: false,
        relevance:
            "Validates strong SQL and relational database fundamentals — core to backend development and system design.",
        skills: [
            "SQL",
            "Relational Databases",
            "Database Design",
            "Query Optimization",
            "Oracle DB",
        ],
        credentialUrl: null,
    },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" as const },
    },
};

export default function Certifications() {
    return (
        <SectionWrapper id="certifications">
            {/* Header */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" as const }}
                viewport={{ once: true }}
            >
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                    Credentials
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Certifications
                </h2>
                <p className="text-muted-foreground mt-3 text-base max-w-xl mx-auto">
                    Verified credentials and achievements
                </p>
            </motion.div>

            {/* Cards */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
            >
                {CERTIFICATIONS.map((cert) => (
                    <motion.div
                        key={cert.id}
                        variants={cardVariant}
                        whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(29,78,216,0.15)" }}
                        whileTap={{ scale: 0.99 }}
                        className="bg-card border border-border border-l-4 border-l-primary
                       rounded-xl p-6 flex flex-col gap-3
                       transition-shadow duration-200"
                    >
                        {/* Featured badge */}
                        {cert.featured && (
                            <span
                                className="inline-flex w-fit items-center bg-primary text-white
                               text-xs font-semibold rounded-full px-2.5 py-0.5"
                            >
                                ⭐ Featured
                            </span>
                        )}

                        {/* Top row: icon + year */}
                        <div className="flex items-start justify-between gap-2">
                            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Award className="w-6 h-6 text-primary" />
                            </div>
                            <span
                                className="inline-flex items-center bg-primary/10 text-primary
                               text-xs font-semibold rounded-full px-2.5 py-0.5 mt-1"
                            >
                                {cert.year}
                            </span>
                        </div>

                        {/* Title + Issuer */}
                        <div>
                            <h3 className="font-bold text-lg text-foreground leading-snug">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
                        </div>

                        {/* Relevance */}
                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                            {cert.relevance}
                        </p>

                        {/* Skill pills */}
                        <div className="flex flex-wrap gap-1.5">
                            {cert.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-muted text-muted-foreground text-xs
                                 rounded-full px-2 py-0.5 font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-1">
                            {cert.credentialUrl ? (
                                <a href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" size="sm" className="text-xs">
                                        View Certificate ↗
                                    </Button>
                                </a>
                                ) : (
                                    <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs opacity-50 cursor-not-allowed"
                                    disabled
                                    >
                                    View Certificate ↗
                                    </Button>
                                )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}