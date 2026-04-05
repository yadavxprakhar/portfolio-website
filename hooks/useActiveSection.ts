"use client";

import { useState, useEffect } from "react";

/**
 * useActiveSection
 *
 * Tracks which section (by id) is currently most visible in the viewport.
 * Uses IntersectionObserver for performance — no scroll event listeners.
 *
 * @param sectionIds - Array of section element IDs to observe
 * @param threshold  - Intersection ratio to consider a section "active" (default: 0.4)
 * @returns activeSection - The id string of the currently visible section
 */
export function useActiveSection(
    sectionIds: string[],
    threshold: number = 0.4
): string {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null, // viewport
            rootMargin: "0px 0px -10% 0px",
            threshold,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        // Observe each section by id
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sectionIds, threshold]);

    return activeSection;
}