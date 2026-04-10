"use client";

import { motion } from "framer-motion";
import SocialLinks from "@/components/common/SocialLinks";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border bg-background py-8 px-4">
            <motion.div
                className="max-w-6xl mx-auto flex flex-col items-center gap-5 text-center"
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                viewport={{ once: true }}
            >

                {/* Row 1 — Logo + Tagline */}
                <div className="flex flex-col items-center gap-1">
                   <span className="text-xl font-bold tracking-tight">
                       <span className="text-primary">PY</span>
                       <span className="text-foreground">.</span>
                   </span>
                    <p className="text-sm text-muted-foreground">
                        Open to opportunities · Available immediately.
                    </p>
                </div>

                {/* Row 2 — Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        bg-muted text-sm font-medium text-muted-foreground">
                    {/* Pulsing green dot */}
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    Open to Opportunities
                </div>

                {/* Row 3 — Social Icons */}
                <SocialLinks
                    iconSize={18}
                    showLabels={false}
                    className="justify-center"
                />

                {/* Row 4 — Copyright + Source */}
                <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                    <p>Designed &amp; Built by Prakhar Yadav</p>
                    <p>© {currentYear} · All Rights Reserved</p>
                    <a
                         href="https://github.com/yadavxprakhar/portfolio-website"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="hover:text-primary transition-colors duration-200 underline underline-offset-2 mt-0.5">
                         View Source on GitHub ↗
                    </a>
                </div>

        </motion.div>
</footer>
);
}