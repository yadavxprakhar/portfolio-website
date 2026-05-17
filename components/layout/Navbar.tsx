"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useScrollY } from "@/hooks/useScrollY";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

interface NavItem {
    label: string;
    href: string;
    sectionId: string;
}

const NAV_ITEMS: NavItem[] = [
    { label: "About", href: "#about", sectionId: "about" },
    { label: "Skills", href: "#skills", sectionId: "skills" },
    { label: "Projects", href: "#projects", sectionId: "projects" },
    { label: "Education", href: "#education", sectionId: "education" },
    { label: "Contact", href: "#contact", sectionId: "contact" },
];

const SECTION_IDS = NAV_ITEMS.map((n) => n.sectionId);

function scrollToSection(href: string) {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

export default function Navbar() {
    const scrollY = useScrollY();
    const activeSection = useActiveSection(SECTION_IDS);
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrolled = scrollY > 20;

    const handleNavClick = useCallback(
        (href: string) => {
            scrollToSection(href);
            setMobileOpen(false);
        },
        []
    );

    return (
        <header
            className={cn(
                "fixed top-6 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8",
                scrolled ? "top-4" : "top-6"
            )}
        >
            <nav className={cn(
                "max-w-4xl mx-auto h-14 flex items-center justify-between px-6 rounded-full transition-all duration-300 font-mono",
                scrolled 
                    ? "glass-darker border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]" 
                    : "bg-transparent border-transparent"
            )}>

                {/* Logo */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2.5 focus:outline-none"
                    aria-label="Scroll to top"
                >
                    <div className="w-8 h-8 rounded border border-amber-500/20 bg-amber-500/5 flex items-center justify-center shadow-lg shadow-amber-500/5">
                        <span className="text-amber-500 font-bold text-sm">P</span>
                    </div>
                    <span className="hidden sm:block text-xs font-bold tracking-tight text-white">
                        Prakhar<span className="text-amber-500">.</span>sys
                    </span>
                </motion.button>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeSection === item.sectionId;
                        return (
                            <li key={item.sectionId}>
                                <button
                                    onClick={() => handleNavClick(item.href)}
                                    className={cn(
                                        "relative px-4 py-1.5 text-xs font-medium rounded transition-all duration-300",
                                        isActive
                                            ? "text-amber-500 font-semibold"
                                            : "text-slate-400 hover:text-white"
                                    )}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 z-0 bg-amber-500/5 border border-amber-500/10 rounded"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Right Side Controls */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/Prakhar_Yadav_Resume.pdf"
                        download
                        className="hidden sm:flex items-center gap-1 px-4 py-1.5 rounded border border-amber-500 bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold transition-all duration-200"
                    >
                        Resume
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                    </motion.a>

                    {/* Mobile Hamburger */}
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden w-8 h-8 rounded hover:bg-white/10"
                                aria-label="Open navigation menu"
                            >
                                {mobileOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="top" className="h-fit bg-[#0d0d0e] border-border px-6 py-12 font-mono">
                            <nav className="flex flex-col gap-6 items-center justify-center">
                                {NAV_ITEMS.map((item) => (
                                    <button
                                        key={item.sectionId}
                                        onClick={() => handleNavClick(item.href)}
                                        className="text-lg font-bold text-slate-400 hover:text-amber-500 transition-colors"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                <Button className="w-full mt-4 bg-amber-500 text-black hover:bg-amber-600 font-bold font-mono" asChild>
                                    <a href="/Prakhar_Yadav_Resume.pdf" download>
                                        Download Resume
                                    </a>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}