"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useScrollY } from "@/hooks/useScrollY";

export default function BackToTop() {
    const scrollY = useScrollY();
    const isVisible = scrollY > 300;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    key="back-to-top"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg cursor-pointer"
                >
                    <ChevronUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}