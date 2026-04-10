"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Render a size-stable placeholder before mount to prevent layout shift
    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full"
                disabled
                aria-label="Toggle theme"
            >
                <span className="w-4 h-4 block" />
            </Button>
        );
    }

    const isDark = theme === "dark";

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full relative overflow-hidden"
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.span
                        key="sun"
                        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.2, ease: "easeOut" as const }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <Sun className="w-4 h-4 text-yellow-400" />
                    </motion.span>
                ) : (
                    <motion.span
                        key="moon"
                        initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.2, ease: "easeOut" as const }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <Moon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    </motion.span>
                )}
            </AnimatePresence>
        </Button>
    );
}