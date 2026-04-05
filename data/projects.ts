import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "linklytics",
        title: "Linklytics",
        description:
            "A production-ready URL shortener with real-time click analytics, custom aliases, and a clean dashboard. Built for scale with Spring Boot and React.",
        longDescription: `Linklytics is a full-stack URL shortening platform inspired by Bitly. 
    It handles link creation, custom short aliases, expiry settings, and tracks every click 
    with metadata including referrer, device type, and timestamp. The dashboard gives users 
    a clear view of link performance in real time.`,
        techStack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "MySQL",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "JWT",
            "Docker",
        ],
        category: "fullstack",
        features: [
            "Custom short alias creation with collision detection",
            "Real-time click analytics (referrer, device, timestamp)",
            "JWT-based user authentication with Spring Security",
            "Link expiry with scheduled cleanup jobs",
            "REST API with Swagger documentation",
            "Responsive React dashboard with live stats",
        ],
        liveUrl: "https://linklytics.vercel.app",
        githubUrl: "https://github.com/prakharyadav/linklytics",
        featured: true,
        image: "/images/linklytics.png",
    },
    {
        id: "resume-builder",
        title: "Resume Builder",
        description:
            "A web-based resume builder that lets developers generate ATS-friendly resumes with a live preview, multiple templates, and PDF export.",
        longDescription: `A React-based resume builder focused on developer use cases. 
    Users fill in sections like experience, education, and skills through a clean form interface, 
    see a live preview on the right, and export a clean PDF. Designed with ATS formatting in mind.`,
        techStack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "react-hook-form",
            "react-to-print",
            "Zustand",
        ],
        category: "frontend",
        features: [
            "Live two-panel preview while editing",
            "Multiple resume templates (minimal, modern)",
            "ATS-safe formatting — no tables or columns",
            "PDF export with proper print styles",
            "Local state persistence with Zustand",
            "Section reordering with drag and drop",
        ],
        liveUrl: "https://resume-builder-prakhar.vercel.app",
        githubUrl: "https://github.com/prakharyadav/resume-builder",
        featured: false,
        image: "/images/resume-builder.png",
    },
];

export const featuredProjects = projects.filter((p) => p.featured);