"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
    texts: string[];
    speed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
    className?: string;
}

type Phase = "typing" | "deleting" | "waiting";

export default function TypingAnimation({
                                            texts,
                                            speed = 100,
                                            deleteSpeed = 50,
                                            pauseTime = 2000,
                                            className,
                                        }: TypingAnimationProps) {
    const [displayText, setDisplayText] = useState("");
    const [phase, setPhase] = useState<Phase>("typing");
    const textIndexRef = useRef(0);
    const charIndexRef = useRef(0);

    useEffect(() => {
        if (texts.length === 0) return;

        const currentText = texts[textIndexRef.current];
        let timer: ReturnType<typeof setTimeout>;

        if (phase === "typing") {
            if (charIndexRef.current < currentText.length) {
                // Add slight randomness to typing speed to feel more natural
                const variableSpeed = speed + Math.random() * 60 - 30;
                timer = setTimeout(() => {
                    charIndexRef.current += 1;
                    setDisplayText(currentText.slice(0, charIndexRef.current));
                }, variableSpeed);
            } else {
                // Finished typing — pause before deleting
                timer = setTimeout(() => setPhase("deleting"), pauseTime);
            }
        } else if (phase === "deleting") {
            if (charIndexRef.current > 0) {
                timer = setTimeout(() => {
                    charIndexRef.current -= 1;
                    setDisplayText(currentText.slice(0, charIndexRef.current));
                }, deleteSpeed);
            } else {
                // Finished deleting — move to next text
                textIndexRef.current = (textIndexRef.current + 1) % texts.length;
                setPhase("waiting");
            }
        } else if (phase === "waiting") {
            // Brief pause before typing next word
            timer = setTimeout(() => setPhase("typing"), 300);
        }

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phase, texts.length, speed, deleteSpeed, pauseTime]);

    return (
        <span className={cn("inline-flex items-center gap-0", className)}>
            <span>{displayText}</span>
            {/* Blinking cursor */}
            <span
                className="ml-[1px] inline-block w-[3px] h-[1.1em] bg-primary align-middle rounded-full"
                style={{
                    animation: "blink-cursor 1s step-end infinite",
                }}
                aria-hidden="true"
            />
            <style>{`
                @keyframes blink-cursor {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </span>
    );
}