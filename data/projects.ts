import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "lynkforge",
        title: "Lynkforge",
        description:
            "A production-ready URL shortener with real-time click analytics, custom aliases, and a clean dashboard. Built for scale with Spring Boot and React.",
        longDescription: `Lynkforge is a full-stack URL shortening platform inspired by Bitly. 
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
        liveUrl: "https://lynkforge.vercel.app",
        githubUrl: "https://github.com/prakharyadav/lynkforge",
        featured: true,
        image: "/images/lynkforge_v2.png",
    },
    {
        id: "flowkit",
        title: "FlowKit",
        description:
            "A collaborative team task management system with real-time updates, project tracking, and workspace isolation.",
        longDescription: `FlowKit is a comprehensive team collaboration tool designed to streamline project management. 
    It features real-time workspace updates, task assignment, status tracking, and a clean, 
    intuitive dashboard for teams to stay aligned. Built with a focus on speed and flow.`,
        techStack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "MongoDB",
            "Framer Motion",
            "Zustand",
        ],
        category: "fullstack",
        features: [
            "Real-time workspace and task updates",
            "Team collaboration with role-based access",
            "Task status tracking and project management",
            "Intuitive, high-performance dashboard",
            "Workspace isolation for multiple teams",
        ],
        liveUrl: "https://flow-kit-flame.vercel.app/",
        githubUrl: "https://github.com/yadavxprakhar/FlowKit",
        featured: true,
        image: "/images/flowkit_v2.png",
    },
];

export const featuredProjects = projects.filter((p) => p.featured);