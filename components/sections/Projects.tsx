"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";

interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live?: string;
    image?: string;
    category: string;
}

const PROJECTS: Project[] = [
    {
        id: "lynkforge",
        title: "Lynkforge",
        description: "A production-ready URL shortening platform built with Spring Boot and React. Features JWT authentication, path-based routing, and a scalable microservices architecture.",
        tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Redis"],
        github: "https://github.com/yadavxprakhar/Lynkforge---A-URL-Shortner-App",
        live: "https://lynkforge.vercel.app",
        image: "/images/lynkforge.png",
        category: "Full Stack",
    },
    {
        id: "flowkit",
        title: "FlowKit",
        description: "A collaborative team task management system with real-time updates, project tracking, and workspace isolation. Designed for high-performance team workflows.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
        github: "https://github.com/yadavxprakhar/FlowKit",
        live: "https://flow-kit-flame.vercel.app/",
        image: "/images/flowkit.png",
        category: "Full Stack",
    },
    {
        id: "portfolio",
        title: "Premium Portfolio",
        description: "High-performance personal website with advanced animations, glassmorphism, and a custom design system. Optimized for SEO and mobile responsiveness.",
        tech: ["Next.js 15", "Framer Motion", "Tailwind v4"],
        github: "https://github.com/yadavxprakhar/portfolio-website",
        live: "https://portfolio-website-tau-seven-73.vercel.app/",
        image: "/images/portfolio.png",
        category: "Full Stack",
    }
];

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col h-full rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-all duration-500"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                {project.image ? (
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-3xl font-black text-white/10 select-none group-hover:text-white/20 transition-colors">
                                {project.title.toUpperCase()}
                            </h3>
                        </div>
                    </>
                )}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-8">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold text-indigo-400/80 uppercase tracking-widest bg-indigo-500/5 px-2 py-1 rounded">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold h-11"
                        asChild
                    >
                        <a href={project.github} target="_blank">
                            <FaGithub className="w-4 h-4 mr-2" />
                            Code
                        </a>
                    </Button>
                    {project.live && (
                        <Button
                            size="sm"
                            className="flex-1 rounded-full bg-white text-black hover:bg-slate-200 font-bold h-11"
                            asChild
                        >
                            <a href={project.live} target="_blank">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

    const filtered = filter === "All" 
        ? PROJECTS 
        : PROJECTS.filter(p => p.category === filter);

    return (
        <SectionWrapper id="projects" className="py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-slate-400 max-w-md text-lg">
                            A curated selection of my most impactful projects and experiments.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {categories.map((c) => (
                            <button
                                key={c}
                                onClick={() => setFilter(c)}
                                className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                                    filter === c 
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                {c}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </div>

                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Button variant="ghost" className="group text-slate-400 hover:text-white text-lg font-bold" asChild>
                        <a href="https://github.com/yadavxprakhar" target="_blank">
                            View More on GitHub
                            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}