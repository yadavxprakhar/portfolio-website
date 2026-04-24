"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import SectionWrapper from "@/components/common/SectionWrapper";

type ProjectCategory = "full-stack" | "backend" | "frontend";
type FilterTab = "All Projects" | "Full Stack" | "Backend" | "Frontend";

interface Project {
    id: string;
    category: ProjectCategory;
    featured: boolean;
    gradient: string;
    title: string;
    tagline: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl: string | null;
}

const PROJECTS: Project[] = [
    {
        id: "linklytics",
        category: "full-stack",
        featured: true,
        gradient: "from-blue-600 to-blue-800",
        title: "Linklytics",
        tagline: "URL Shortener · Secure Auth · Scalable Backend",
        description:
            "A production-ready URL shortening platform built with Spring Boot and React — featuring JWT authentication, path-based routing, and a backend architecture designed for real-world scalability.",
        techStack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "PostgreSQL",
            "React.js",
            "Vite",
            "REST API",
        ],
        githubUrl: "https://github.com/yadavxprakhar/Linklytics---A-URL-Shortner-App",
        liveUrl: null,
    },
    {
        id: "resume-builder",
        category: "full-stack",
        featured: false,
        gradient: "from-purple-600 to-blue-600",
        title: "Resume Builder",
        tagline: "Dynamic Resume Generator · PDF Export",
        description:
            "A full-stack resume generation platform where users enter their details, preview a live resume, and export it as a PDF — built with React, Redux, and pdf-lib.",
        techStack: [
            "React.js",
            "Redux",
            "Node.js",
            "JavaScript",
            "pdf-lib",
            "HTML5",
            "CSS3",
        ],
        githubUrl: "https://github.com/yadavxprakhar/resume-builder",
        liveUrl: null,
    },
];

const FILTER_TABS: FilterTab[] = [
    "All Projects",
    "Full Stack",
    "Backend",
    "Frontend",
];

const FILTER_MAP: Record<FilterTab, ProjectCategory | null> = {
    "All Projects": null,
    "Full Stack": "full-stack",
    Backend: "backend",
    Frontend: "frontend",
};

const CATEGORY_LABEL: Record<ProjectCategory, string> = {
    "full-stack": "Full Stack",
    backend: "Backend",
    frontend: "Frontend",
};

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
    exit: {
        opacity: 0,
        y: -16,
        transition: { duration: 0.25, ease: "easeIn" as const }, // ← Add 'as const' here
    },
};

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            layout
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="bg-card border border-border rounded-xl overflow-hidden
                 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40
                 transition-all duration-300 flex flex-col"
        >
            {/* Gradient banner */}
            <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient}
                    flex items-center justify-center`}
            >
                <h3 className="text-white text-2xl font-bold tracking-tight drop-shadow-sm">
                    {project.title}
                </h3>

                {/* Featured badge */}
                {project.featured && (
                    <span
                        className="absolute top-0 right-0 bg-yellow-400 text-yellow-900
                       text-xs font-bold px-2 py-1 rounded-bl-lg"
                    >
                        ⭐ Featured
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-1 gap-3">
                {/* Category badge */}
                <Badge variant="outline" className="w-fit text-xs">
                    {CATEGORY_LABEL[project.category]}
                </Badge>

                {/* Tagline */}
                <p className="text-sm text-primary font-medium leading-snug">
                    {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="bg-primary/10 text-primary text-xs
                         rounded-full px-2.5 py-1 font-semibold border border-primary/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action buttons — pushed to bottom */}
                <div className="flex gap-3 mt-auto pt-4">
                    {/* GitHub */}
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                    >
                        <Button variant="outline" size="default" className="w-full font-medium group transition-all hover:border-primary/50">
                            GitHub <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-1">↗</span>
                        </Button>
                    </a>

                    {/* Live Demo */}
                    {project.liveUrl ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                        >
                            <Button size="default" className="w-full font-medium group">
                                Live Demo <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-1">↗</span>
                            </Button>
                        </a>
                    ) : (
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <Button
                                            size="default"
                                            className="w-full font-medium opacity-80"
                                            disabled
                                            aria-label="Live demo coming soon"
                                        >
                                            Live Demo ↗
                                        </Button>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Coming Soon 🚀</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<FilterTab>("All Projects");

    const filtered = PROJECTS.filter((p) => {
        const target = FILTER_MAP[activeFilter];
        return target === null || p.category === target;
    });

    return (
        <SectionWrapper id="projects" alternate>
            {/* Section Header */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" as const }}
                viewport={{ once: true }}
            >
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                    My Work
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Featured Projects
                </h2>
                <p className="text-muted-foreground mt-3 text-base max-w-xl mx-auto">
                    Things I&apos;ve built that I&apos;m proud of
                </p>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
                className="flex flex-wrap justify-center gap-2 mb-10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" as const, delay: 0.1 }}
                viewport={{ once: true }}
            >
                {FILTER_TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveFilter(tab)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium
                        transition-all duration-200 focus:outline-none
                        focus-visible:ring-2 focus-visible:ring-primary
                        ${
                            activeFilter === tab
                                ? "bg-primary text-white shadow-sm"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </motion.div>

            {/* Project Cards Grid */}
            <motion.div
                layout
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filtered.length > 0 ? (
                        filtered.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="col-span-full text-center py-16 text-muted-foreground"
                        >
                            No projects in this category yet — check back soon.
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </SectionWrapper>
    );
}