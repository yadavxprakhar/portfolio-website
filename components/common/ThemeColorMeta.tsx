"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeColorMeta() {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        let meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "theme-color");
            document.head.appendChild(meta);
        }
        
        // Match the background theme colors exactly:
        // Light mode matches --background (#fdfbf7)
        // Dark mode matches --background (#0d0d0e)
        const color = resolvedTheme === "light" ? "#fdfbf7" : "#0d0d0e";
        meta.setAttribute("content", color);
    }, [resolvedTheme]);

    return null;
}
