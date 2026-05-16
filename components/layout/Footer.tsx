"use client";

import { motion } from "framer-motion";
import SocialLinks from "@/components/common/SocialLinks";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/5 bg-[#020617] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">P</span>
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-white">
                                Prakhar<span className="text-indigo-400">.</span>
                            </span>
                        </div>
                        <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                            A dedicated Full Stack Developer focused on building high-performance systems and meaningful digital experiences.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest">Sitemap</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
                            <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a></li>
                            <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
                            <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest">Connect</h4>
                        <div className="flex flex-col gap-2 text-sm text-slate-400">
                            <a href="mailto:yadavprakhar1034@gmail.com" className="hover:text-indigo-400 transition-colors">Email</a>
                            <a href="https://www.linkedin.com/in/prakharyxdev" target="_blank" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
                            <a href="https://github.com/yadavxprakhar" target="_blank" className="hover:text-indigo-400 transition-colors">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        © {currentYear} Prakhar Yadav · Built with Passion
                    </p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Stay Curious
                    </p>
                </div>
            </div>
        </footer>
    );
}