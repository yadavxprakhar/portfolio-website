"use client";

import { motion } from "framer-motion";
import SocialLinks from "@/components/common/SocialLinks";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border bg-card dark:bg-[#0d0d0e] py-20 px-6 font-mono transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2 space-y-6">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded border border-amber-500/20 bg-amber-500/5 flex items-center justify-center">
                                <span className="text-amber-500 font-bold text-sm">P</span>
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-foreground">
                                Prakhar<span className="text-amber-500">.</span>sys
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm text-xs leading-relaxed">
                            Full Stack Systems Engineer specializing in robust backend architectures, decoupled microservices, and fluid interface design.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sitemap</h4>
                        <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                            <li><a href="#about" className="hover:text-amber-500 transition-colors">/about</a></li>
                            <li><a href="#skills" className="hover:text-amber-500 transition-colors">/skills</a></li>
                            <li><a href="#projects" className="hover:text-amber-500 transition-colors">/projects</a></li>
                            <li><a href="#console" className="hover:text-amber-500 transition-colors">/console</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connect</h4>
                        <div className="flex flex-col gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <a href="mailto:yadavxprakhar@gmail.com" className="hover:text-amber-500 transition-colors">Email</a>
                            <a href="https://www.linkedin.com/in/prakharyxdev/" target="_blank" className="hover:text-amber-500 transition-colors">LinkedIn</a>
                            <a href="https://github.com/yadavxprakhar" target="_blank" className="hover:text-amber-500 transition-colors">GitHub</a>
                            <a href="https://x.com/prakharyadav" target="_blank" className="hover:text-amber-500 transition-colors">X (Twitter)</a>
                            <a href="https://instagram.com/prakharyadav" target="_blank" className="hover:text-amber-500 transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        <span>© {currentYear} Prakhar Yadav · Node: operational</span>
                        <span className="h-3 w-px bg-slate-800 hidden sm:inline-block" />
                        <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
                            <a 
                                href="https://counter.websiteout.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center"
                                aria-label="Web Hit Counter"
                            >
                                <img 
                                    src={`https://counter.websiteout.com/compte.php?S=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : 'https://yadavxprakhar.github.io')}&C=20&D=0&N=0&M=1`} 
                                    alt="Web Hit Counter" 
                                    className="h-3.5 object-contain filter contrast-125 brightness-110"
                                />
                            </a>
                        </div>
                    </div>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        Stay Curious // Built with passion
                    </p>
                </div>
            </div>
        </footer>
    );
}