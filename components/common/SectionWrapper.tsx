"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    id: string;
    className?: string;
    children: React.ReactNode;
    alternate?: boolean;
}

export default function SectionWrapper({
                                           id,
                                           className,
                                           children,
                                           alternate = false,
                                       }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn(
                "w-full py-20 px-4 md:px-8 lg:px-16",
                alternate && "bg-[var(--section-bg-alt)]",
                className
            )}
        >
            <motion.div
                className="max-w-6xl mx-auto"
                // initial={{ opacity: 0, y: 40 }}
                // whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                viewport={{ once: true, margin: "-100px" }}
            >
                {children}
            </motion.div>
        </section>
    );
}