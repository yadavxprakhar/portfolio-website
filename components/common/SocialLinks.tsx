"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

// Map icon name strings to actual react-icon components
const ICON_MAP: Record<string, React.ElementType> = {
    FiGithub,
    FiLinkedin,
    FiTwitter,
    FiInstagram,
    FiMail,
};

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
        <div className={cn("flex items-center gap-3", className)}>
            {SOCIAL_LINKS.map((link: SocialLink, index: number) => {
                const IconComponent = ICON_MAP[link.icon];
                if (!IconComponent) return null;

                return (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                            "flex items-center gap-1.5 text-muted-foreground",
                            "hover:text-primary transition-colors duration-200",
                            "focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                        )}
                    >
                        <IconComponent size={iconSize} />
                        {showLabels && (
                            <span className="text-sm font-medium">{link.label}</span>
                        )}
                    </motion.a>
                );
            })}
        </div>
    );
}