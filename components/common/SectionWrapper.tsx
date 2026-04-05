"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANIMATION_VARIANTS } from "@/lib/constants";

interface SectionWrapperProps {
    id: string;
    className?: string;
    children: React.ReactNode;
    altBackground?: boolean; // Alternate section bg for visual rhythm
}

export default function SectionWrapper({
                                           id,
                                           className,
                                           children,
                                           altBackground = false,
                                       }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-20 px-4 md:px-8 w-full",
                altBackground && "bg-[var(--section-bg-alt)]",
                className
            )}
        >
            <motion.div
                className="max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={ANIMATION_VARIANTS.fadeUp}
            >
                {children}
            </motion.div>
        </section>
    );
}