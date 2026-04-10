"use client";

import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

interface SocialItem {
    label: string;
    href: string;
    icon: React.ElementType;
    external: boolean;
}

const SOCIAL_ITEMS: SocialItem[] = [
    {
        label: "GitHub",
        href: "https://github.com/yadavxprakhar",
        icon: FaGithub,
        external: true,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/prakharyxdev",
        icon: FaLinkedin,
        external: true,
    },
    {
        label: "Twitter",
        href: "https://x.com/PrakharYxdev",
        icon: FaTwitter,
        external: true,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/prakharyxdev/",
        icon: FaInstagram,
        external: true,
    },
    {
        label: "Email",
        href: "mailto:yadavprakhar1034@gmail.com",
        icon: FaEnvelope,
        external: false,
    },
];

interface SocialLinksProps {
    className?: string;
    iconSize?: number;
    showLabels?: boolean;
}

export default function SocialLinks({
                                        className,
                                        iconSize = 20,
                                        showLabels = false,
                                    }: SocialLinksProps) {
    return (
        <div className={cn("flex items-center gap-3 flex-wrap", className)}>
            {SOCIAL_ITEMS.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        aria-label={item.label}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.07, duration: 0.3, ease: "easeOut" as const }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                            "flex items-center gap-1.5 text-muted-foreground",
                            "hover:text-primary transition-colors duration-200",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                        )}
                    >
                        <Icon size={iconSize} />
                        {showLabels && (
                            <span className="text-sm font-medium">{item.label}</span>
                        )}
                    </motion.a>
                );
            })}
        </div>
    );
}