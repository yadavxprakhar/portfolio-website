"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Server, Database, Shield, LayoutGrid } from "lucide-react";

interface Layer {
    id: string;
    name: string;
    icon: React.ElementType;
    desc: string;
    skills: string[];
}

const SYSTEMS_LAYERS: Layer[] = [
    {
        id: "LAYER_01",
        name: "Client Ingress (Frontend Gateway)",
        icon: LayoutGrid,
        desc: "Interactive, fluid user interfaces designed for high responsiveness, SEO optimization, and browser compatibility.",
        skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "Framer Motion"],
    },
    {
        id: "LAYER_02",
        name: "Ingress Control & Security",
        icon: Shield,
        desc: "Secure middleware gatekeeping protocols, token-based authorization structures, and system communication routing.",
        skills: ["Spring Security", "JWT Auth", "REST APIs", "API Gateway", "OAuth 2.0"],
    },
    {
        id: "LAYER_03",
        name: "Application Processing Core (Backend Services)",
        icon: Server,
        desc: "Robust, decoupled backend business logic, transactional database handlers, and schema microservices.",
        skills: ["Java", "Spring Boot", "Spring Data JPA", "Node.js", "Hibernate"],
    },
    {
        id: "LAYER_04",
        name: "Persistence & Infrastructure Tier",
        icon: Database,
        desc: "High-integrity relational and document storage engines, rapid caching systems, and lightweight containerization pipelines.",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "Git"],
    },
];

export default function Skills() {
    return (
        <SectionWrapper id="skills" className="relative py-32 overflow-hidden border-t border-border">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    className="mb-20 text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                        System Topology
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tighter">
                        Technical <span className="text-gradient">Infrastructure</span> Stack
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
                        A structured representation of my full-stack engineering workflow, organized as a decoupled multi-tier technical architecture.
                    </p>
                </motion.div>

                {/* System Topology Map */}
                <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[1px] before:bg-border/60">
                    {SYSTEMS_LAYERS.map((layer, index) => {
                        const Icon = layer.icon;
                        return (
                            <motion.div
                                key={layer.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-12 group"
                            >
                                {/* Connector Dot */}
                                <div className="absolute left-[19px] top-6 w-2.5 h-2.5 rounded-full border-2 border-border bg-background group-hover:border-amber-500 group-hover:bg-amber-500 transition-all duration-300 z-10" />

                                <div className="p-6 md:p-8 rounded-xl border border-border bg-card hover:border-amber-500/30 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded bg-amber-500/5 flex items-center justify-center border border-amber-500/20 text-amber-500">
                                                <Icon className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">
                                                    {layer.id}
                                                </span>
                                                <h3 className="text-lg font-bold text-white tracking-tight">
                                                    {layer.name}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                                            <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest">
                                                Active & Verified
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-400 mb-6 max-w-3xl leading-relaxed">
                                        {layer.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {layer.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 font-mono text-[11px] text-slate-300 rounded border border-border bg-[#0d0d0e]/60 hover:border-amber-500/30 hover:text-amber-400 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}