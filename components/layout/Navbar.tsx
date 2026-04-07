"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "backdrop-blur-md bg-background/80 border-b border-border shadow-sm"
                    : "bg-transparent"
            )}
        >
            <nav className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

                {/* ── Logo ── */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-xl font-bold tracking-tight focus:outline-none
                     focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                    aria-label="Scroll to top"
                >
                    <span className="text-primary">PY</span>
                    <span className="text-foreground">.</span>
                </button>

                {/* ── Desktop Nav Links ── */}
                <ul className="hidden md:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeSection === item.sectionId;
                        return (
                            <li key={item.sectionId}>
                                <button
                                    onClick={() => handleNavClick(item.href)}
                                    className={cn(
                                        "relative px-3 py-2 text-sm font-medium rounded-md",
                                        "transition-colors duration-200 focus:outline-none",
                                        "focus-visible:ring-2 focus-visible:ring-primary",
                                        isActive
                                            ? "text-primary"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {item.label}
                                    {/* Active underline indicator */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-underline"
                                                className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* ── Right Side Controls ── */}
                <div className="flex items-center gap-2">
                    {/* Resume Download Button — visible on desktop */}

                    <a
                        href="/Prakhar_Yadav_Resume.pdf"
                        download
                        className="hidden md:inline-flex"
                        aria-label="Download Resume">
                        <Button variant="outline" size="sm">
                            Resume ↓
                        </Button>
                    </a>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Mobile Hamburger */}
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden w-9 h-9"
                                aria-label="Open navigation menu"
                            >
                                <motion.span
                                    key={mobileOpen ? "close" : "open"}
                                    initial={{ rotate: -45, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {mobileOpen ? (
                                         <X className="w-5 h-5" />
                                    ) : (
                                         <Menu className="w-5 h-5" />
                                    )}
                                </motion.span>
                            </Button>
                        </SheetTrigger>

                        {/* Mobile Sheet Panel */}
                        <SheetContent side="right" className="w-64 pt-12 flex flex-col gap-2">
                             <nav aria-label="Mobile navigation">
                                 <ul className="flex flex-col gap-1">
                                     {NAV_ITEMS.map((item) => {
                                        const isActive = activeSection === item.sectionId;
                                        return (
                                            <li key={item.sectionId}>
                                                <SheetClose asChild>
                                                    <button
                                                       onClick={() => handleNavClick(item.href)}
                                                       className={cn(
                                                          "w-full text-left px-4 py-3 rounded-md text-sm font-medium",
                                                          "transition-colors duration-200 focus:outline-none",
                                                          "focus-visible:ring-2 focus-visible:ring-primary",
                                                           isActive
                                                               ? "text-primary bg-primary/10"
                                                               : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                                       )}
                                                    >
                                                    {item.label}
                                                    </button>
                                                </SheetClose>
                                            </li>
                                        );
                                     })}
                                 </ul>
                             </nav>

                            {/* Resume download in mobile sheet */}
                            <div className="mt-4 px-2">
                                <SheetClose asChild>

                                    href="/Prakhar_Yadav_Resume.pdf"
                                    download
                                    className="block"
                                    <a>
                                        <Button
                                           variant="outline"
                                           size="sm"
                                           className="w-full text-sm font-medium"
                                        >
                                            Resume ↓
                                        </Button>
                                    </a>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
   )
}
