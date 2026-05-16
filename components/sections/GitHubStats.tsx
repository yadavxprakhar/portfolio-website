"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";

const GH_USER = "yadavxprakhar";

interface StatCard {
    id: string;
    label: string;
    getUrl: (theme: string) => string;
}

const STAT_CARDS: StatCard[] = [
    {
        id: "stats",
        label: "GitHub Stats",
        getUrl: (t) =>
            `https://github-readme-stats.shion.dev/api?username=${GH_USER}&show_icons=true&hide_border=true&include_all_commits=true&count_private=true&${t}`,
    },
    {
        id: "langs",
        label: "Top Languages",
        getUrl: (t) =>
            `https://github-readme-stats.shion.dev/api/top-langs?username=${GH_USER}&layout=compact&hide_border=true&include_all_commits=true&count_private=true&${t}`,
    },
    {
        id: "streak",
        label: "Streak Stats",
        getUrl: (t) =>
            `https://github-readme-streak-stats.herokuapp.com?user=${GH_USER}&hide_border=true&${t}`,
    },
];

function themeQuery(resolvedTheme: string | undefined): string {
    return "theme=transparent&text_color=94a3b8&icon_color=6366f1&title_color=ffffff&bg_color=00000000";
}

export default function GitHubStats() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const themeQ = themeQuery(resolvedTheme);

    return (
        <SectionWrapper id="github-stats" className="py-32">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        Code <span className="text-gradient">Activity</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Real-time statistics of my contributions and open-source presence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {STAT_CARDS.map((card, i) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all flex items-center justify-center min-h-[220px] overflow-hidden"
                        >
                            {mounted && (
                                <img
                                    src={card.getUrl(themeQ)}
                                    alt={card.label}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Button variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold px-8 h-12" asChild>
                        <a href={`https://github.com/${GH_USER}`} target="_blank">
                            <FaGithub className="w-4 h-4 mr-2" />
                            Explore GitHub Profile
                        </a>
                    </Button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}