"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useScrollY } from "@/hooks/useScrollY";

const SCROLL_THRESHOLD = 300;

export default function BackToTop() {
    const scrollY = useScrollY();
    const isVisible = scrollY > SCROLL_THRESHOLD;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full
                     bg-primary text-white shadow-blue-glow
                     flex items-center justify-center
                     hover:bg-primary-600 hover:scale-110
                     transition-transform duration-200
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                    <ChevronUp className="w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}