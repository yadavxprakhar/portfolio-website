"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
    texts: string[];
    speed?: number;       // ms per character typed (default: 80)
    deleteSpeed?: number; // ms per character deleted (default: 40)
    pauseTime?: number;   // ms to pause at full text (default: 1800)
    className?: string;
}

type Phase = "typing" | "pausing" | "deleting";

export default function TypingAnimation({
                                            texts,
                                            speed = 80,
                                            deleteSpeed = 40,
                                            pauseTime = 1800,
                                            className,
                                        }: TypingAnimationProps) {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [phase, setPhase] = useState<Phase>("typing");

    const currentText = texts[textIndex];

    const tick = useCallback(() => {
        if (phase === "typing") {
            if (displayText.length < currentText.length) {
                setDisplayText(currentText.slice(0, displayText.length + 1));
            } else {
                setPhase("pausing");
            }
        } else if (phase === "pausing") {
            // Handled by separate setTimeout below
        } else if (phase === "deleting") {
            if (displayText.length > 0) {
                setDisplayText(displayText.slice(0, -1));
            } else {
                setTextIndex((prev) => (prev + 1) % texts.length);
                setPhase("typing");
            }
        }
    }, [phase, displayText, currentText, texts.length]);

    useEffect(() => {
        if (phase === "pausing") {
            const pauseTimer = setTimeout(() => {
                setPhase("deleting");
            }, pauseTime);
            return () => clearTimeout(pauseTimer);
        }

        const interval = setInterval(
            tick,
            phase === "typing" ? speed : deleteSpeed
        );
        return () => clearInterval(interval);
    }, [phase, tick, speed, deleteSpeed, pauseTime]);

    return (
        <span className={cn("inline-flex items-center", className)}>
      <span>{displayText}</span>
            {/* Blinking cursor */}
            <span
                className="ml-0.5 inline-block w-0.5 h-[1em] bg-current animate-blink"
                aria-hidden="true"
            />
    </span>
    );
}