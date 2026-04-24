"use client";

import { motion } from "framer-motion";
import SocialLinks from "@/components/common/SocialLinks";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border bg-card py-12 px-4 md:px-8">
            <motion.div
                className="max-w-6xl mx-auto flex flex-col gap-10"
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Col 1 — Brand */}
                    <div className="flex flex-col gap-4 items-start">
                        <span className="text-3xl font-extrabold tracking-tight">
                            <span className="text-primary">PY</span>
                            <span className="text-foreground">.</span>
                        </span>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            Building scalable, production-ready applications with clean architecture and modern web technologies.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                bg-primary/10 text-xs font-semibold text-primary border border-primary/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            Available for hire
                        </div>
                    </div>

                    {/* Col 2 — Quick Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-foreground">Navigation</h4>
                        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Col 3 — Socials */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-foreground">Connect</h4>
                        <SocialLinks iconSize={20} showLabels={false} className="justify-start gap-4" />
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {currentYear} Prakhar Yadav. All Rights Reserved.</p>
                    <a
                         href="https://github.com/yadavxprakhar/portfolio-website"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="hover:text-primary transition-colors duration-200 underline underline-offset-2">
                         Designed & Built by Prakhar ↗
                    </a>
                </div>
        </motion.div>
</footer>
);
}