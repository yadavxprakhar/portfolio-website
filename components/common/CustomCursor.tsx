"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    
    const cursorX = useSpring(0, { damping: 20, stiffness: 300 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 300 });

    useEffect(() => {
        setMounted(true);
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    if (!mounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 pointer-events-none z-[9999] hidden lg:block backdrop-blur-[2px]"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        />
    );
}
