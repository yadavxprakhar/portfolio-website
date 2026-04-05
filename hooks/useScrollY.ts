"use client";

import { useState, useEffect } from "react";

/**
 * useScrollY
 *
 * Returns the current vertical scroll position of the window.
 * Throttled via requestAnimationFrame for optimal performance.
 *
 * @returns scrollY — Current window.scrollY value
 */
export function useScrollY(): number {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Set initial value
        setScrollY(window.scrollY);

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollY;
}