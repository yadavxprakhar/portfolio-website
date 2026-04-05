import type { NavLink, SocialLink, SiteConfig, AnimationVariant } from "@/types";

// ── Navigation Links ──────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

// ── Social Links ──────────────────────────────────────────────
// icon values map to react-icons keys — resolved in SocialLinks.tsx
export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: "GitHub",
        href: "https://github.com/prakharyadav",
        icon: "FiGithub",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/prakharyadav",
        icon: "FiLinkedin",
    },
    {
        label: "Twitter",
        href: "https://twitter.com/prakharyadav",
        icon: "FiTwitter",
    },
    {
        label: "Instagram",
        href: "https://instagram.com/prakharyadav",
        icon: "FiInstagram",
    },
    {
        label: "Email",
        href: "mailto:prakharyadav@email.com",
        icon: "FiMail",
    },
];

// ── Site Config ───────────────────────────────────────────────
export const SITE_CONFIG: SiteConfig = {
    title: "Prakhar Yadav | Full Stack Developer",
    description:
        "Final-year CS student and Full Stack Developer specializing in Java, Spring Boot & React. Open to internships and full-time opportunities.",
    url:
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://prakharyadav.dev",
    ogImage: "/images/og-image.png",
};

// ── Framer Motion Animation Variants ─────────────────────────
// Reusable across all section components

export const ANIMATION_VARIANTS: Record<string, AnimationVariant> = {
    /**
     * Fade up from 30px below — for section entry animations
     */
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    },

    /**
     * Simple fade in — for overlays, modals, badges
     */
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    },

    /**
     * Parent container for stagger animations
     * Children inherit staggerChildren timing
     */
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    },

    /**
     * Individual stagger item — pair with staggerContainer as parent
     */
    staggerItem: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    },

    /**
     * Scale in from 90% — for cards, modals, badges
     */
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    },
};