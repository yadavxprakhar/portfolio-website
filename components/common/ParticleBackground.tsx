"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

const PARTICLE_COUNT = 25;
const CONNECTION_DISTANCE = 140;
const PARTICLE_OPACITY = 0.18;
const LINE_OPACITY = 0.08;
const SPEED = 0.4;

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animFrameRef = useRef<number>(0);
    const { theme } = useTheme();

    const particleColor =
        theme === "dark" ? "96, 165, 250" : "29, 78, 216"; // blue-400 : blue-700

    const initParticles = useCallback(
        (width: number, height: number) => {
            particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * SPEED,
                vy: (Math.random() - 0.5) * SPEED,
                radius: Math.random() * 2 + 1,
            }));
        },
        []
    );

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, width: number, height: number) => {
            ctx.clearRect(0, 0, width, height);

            const particles = particlesRef.current;

            // Update positions
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECTION_DISTANCE) {
                        const alpha =
                            LINE_OPACITY * (1 - distance / CONNECTION_DISTANCE);
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${particleColor}, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particleColor}, ${PARTICLE_OPACITY})`;
                ctx.fill();
            });
        },
        [particleColor]
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles(width, height);
        };

        setSize();

        const animate = () => {
            // Pause when tab is hidden — saves CPU
            if (!document.hidden) {
                draw(ctx, width, height);
            }
            animFrameRef.current = requestAnimationFrame(animate);
        };

        animFrameRef.current = requestAnimationFrame(animate);

        const resizeObserver = new ResizeObserver(setSize);
        resizeObserver.observe(document.body);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            resizeObserver.disconnect();
        };
    }, [draw, initParticles]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            aria-hidden="true"
        />
    );
}