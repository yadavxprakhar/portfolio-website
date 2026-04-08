"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/common/SectionWrapper";

const GH_USER = "yadavxprakhar";

interface StatCard {
    id: string;
    label: string;
    getUrl: (theme: string) => string;
    width: number;
    height: number;
}

const STAT_CARDS: StatCard[] = [
    {
        id: "stats",
        label: "GitHub Stats",
        getUrl: (t) =>
            `https://github-readme-stats.vercel.app/api?username=${GH_USER}&show_icons=true&hide_border=true&${t}`,
        width: 495,
        height: 195,
    },
    {
        id: "langs",
        label: "Top Languages",
        getUrl: (t) =>
            `https://github-readme-stats.vercel.app/api/top-langs?username=${GH_USER}&layout=compact&hide_border=true&${t}`,
        width: 495,
        height: 195,
    },
    {
        id: "streak",
        label: "Streak Stats",
        getUrl: (t) =>
            `https://github-readme-streak-stats.herokuapp.com?user=${GH_USER}&hide_border=true&${t}`,
        width: 495,
        height: 195,
    },
];

function themeQuery(resolvedTheme: string | undefined): string {
    if (resolvedTheme === "dark") {
        return "theme=dark&bg_color=0d1117";
    }
    return "theme=default&bg_color=ffffff";
}

function SkeletonCard() {
    return (
        <div className="w-full h-48 rounded-xl bg-muted animate-pulse" />
    );
}

function StatImageCard({ card, themeQ }: { card: StatCard; themeQ: string }) {
    const [loaded, setLoaded] = useState(false);
    const url = card.getUrl(themeQ);

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="bg-card border border-border rounded-xl p-4
                 hover:shadow-lg transition-shadow duration-200
                 flex items-center justify-center overflow-hidden min-h-[200px]"
        >
            {!loaded && <SkeletonCard />}
            <Image
                src={url}
                alt={card.label}
                width={card.width}
                height={card.height}
                className={`w-full h-auto object-contain rounded-lg
                    transition-opacity duration-300
                    ${loaded ? "opacity-100" : "opacity-0 absolute"}`}
                onLoad={() => setLoaded(true)}
                unoptimized // These are remote SVGs — bypass Next.js image optimization
            />
        </motion.div>
    );
}

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function GitHubStats() {
    const { resolvedTheme } = useTheme();
    const themeQ = themeQuery(resolvedTheme);

    return (
        <SectionWrapper id="github-stats" alternate>
            {/* Header */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                    Open Source
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    GitHub Activity
                </h2>
                <p className="text-muted-foreground mt-3 text-base max-w-xl mx-auto">
                    My open source presence and coding activity
                </p>
            </motion.div>

            {/* Stat Cards */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
            >
                {STAT_CARDS.map((card) => (
                    <motion.div key={card.id} variants={fadeUp}>
                        <StatImageCard card={card} themeQ={themeQ} />
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA */}
            <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
            >
                <a
                    href={`https://github.com/${GH_USER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="outline" size="default" className="font-medium">
                        View GitHub Profile ↗
                    </Button>
                </a>
            </motion.div>
        </SectionWrapper>
    );
}