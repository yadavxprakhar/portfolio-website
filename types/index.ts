// ─────────────────────────────────────────────────────────────
// types/index.ts — All TypeScript interfaces for the portfolio
// ─────────────────────────────────────────────────────────────

// ── Project ──────────────────────────────────────────────────
export interface Project {
    id: string;
    title: string;
    description: string; // Short description for card view
    longDescription?: string; // Detailed description for modal/expanded view
    techStack: string[];
    category: "fullstack" | "backend" | "frontend" | "tool" | "other";
    features: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    image?: string; // Path to project screenshot/image
}

// ── Skill ────────────────────────────────────────────────────
export interface Skill {
    name: string;
    category:
        | "Languages"
        | "Frontend"
        | "Backend"
        | "Databases"
        | "Tools & DevOps";
    icon?: string; // Optional icon name from react-icons
    proficiency?: number; // 1–100, optional for visual bars
}

// ── Education ────────────────────────────────────────────────
export interface Education {
    id: string;
    institution: string;
    degree: string; // e.g., "Bachelor of Technology"
    field: string; // e.g., "Computer Science & Engineering"
    startYear: number;
    endYear: number | null; // null if currently ongoing
    score: number; // Numeric score/percentage/CGPA
    scoreType: "CGPA" | "Percentage";
    location: string;
    current: boolean;
}

// ── Certification ────────────────────────────────────────────
export interface Certification {
    id: string;
    title: string;
    issuer: string;
    year: number;
    credentialUrl?: string;
    relevance: string; // One-line description of why it matters
}

// ── Navigation ───────────────────────────────────────────────
export interface NavLink {
    label: string;
    href: string; // e.g., "#about", "#projects"
}

// ── Social Links ─────────────────────────────────────────────
export interface SocialLink {
    label: string;
    href: string;
    icon: string; // Icon component name — mapped in SocialLinks.tsx
}

// ── Contact Form ─────────────────────────────────────────────
export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// ── Personal Info (for data/personal.ts) ─────────────────────
export interface PersonalInfo {
    name: string;
    title: string;
    tagline: string;
    location: string;
    availability: string;
    bio: string;
    shortBio: string;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    resumeUrl: string;
    currentStatus: string;
    hobbies: string;
}

// ── Site Config ───────────────────────────────────────────────
export interface SiteConfig {
    title: string;
    description: string;
    url: string;
    ogImage: string;
}

// ── Animation Variant (Framer Motion) ────────────────────────
export interface AnimationVariant {
    hidden: Record<string, unknown>;
    visible: Record<string, unknown>;
}