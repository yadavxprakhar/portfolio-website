"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

const PARTICLE_COUNT = 25;
const MAX_DISTANCE = 140;
const PARTICLE_COLOR = "29, 78, 216"; // #1d4ed8 as RGB
const SPEED = 0.35;

function createParticles(width: number, height: number): Particle[] {
    return Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED * 2,
        vy: (Math.random() - 0.5) * SPEED * 2,
        radius: Math.random() * 2 + 1,
    }));
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            // Re-generate particles in new bounds
            particles = createParticles(canvas.width, canvas.height);
        };

        resize();

        const drawFrame = () => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);

            // Update and draw each particle
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off walls
                if (p.x <= 0 || p.x >= width) p.vx *= -1;
                if (p.y <= 0 || p.y >= height) p.vy *= -1;

                // Draw particle dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${PARTICLE_COLOR}, 0.15)`;
                ctx.fill();
            }

            // Draw connecting lines between nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MAX_DISTANCE) {
                        const alpha = 0.08 * (1 - dist / MAX_DISTANCE);
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            animationId = requestAnimationFrame(drawFrame);
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animationId = requestAnimationFrame(drawFrame);
            }
        };

        animationId = requestAnimationFrame(drawFrame);

        window.addEventListener("resize", resize);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        />
    );
}