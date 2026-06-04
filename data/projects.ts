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
    {
        id: "e-akhbar",
        title: "e-Akhbar",
        description:
            "A modern full-stack news aggregator built with React, TypeScript, Node.js, Spring Boot, and PostgreSQL. Get your daily news from multiple sources in one elegant platform.",
        longDescription: `e-Akhbar is a full-stack, highly scalable news aggregator platform. 
    It features a dual-backend microservices model combining Node.js and Spring Boot. 
    Automated background jobs fetch and normalize articles from various global RSS feeds 
    and APIs into a centralized PostgreSQL database, presenting them via a highly polished 
    React client with real-time search, customized views, and categorizations.`,
        techStack: [
            "React",
            "TypeScript",
            "Node.js",
            "Spring Boot",
            "PostgreSQL",
            "Tailwind CSS",
            "REST API",
            "Express",
            "Vercel",
        ],
        category: "fullstack",
        features: [
            "Automatic news feed synchronization and processing",
            "Robust microservices design connecting Spring Boot & Node.js",
            "Optimized relational PostgreSQL storage with indexes for search",
            "User-friendly customizable reading view",
            "Real-time text search and news category indexing",
        ],
        liveUrl: "https://modern-news-app.vercel.app/",
        githubUrl: "https://github.com/yadavxprakhar/e-akhbar",
        featured: true,
        image: "/images/eakhbar_v1.png",
    },
    {
        id: "polytest-ai",
        title: "Polytest AI",
        description:
            "AI-powered test generator for 12+ languages. Auto-creates comprehensive tests with 80%+ coverage for pytest, Jest, JUnit & more. Reduce testing time by 70-90%.",
        longDescription: `Polytest AI is an intelligent devtool designed to eliminate testing overhead. 
    It parses source code, identifies public boundaries and logic flows, and interacts with LLMs 
    to write fully complete, syntactically correct test suites. Developers can configure parameters, 
    specify target coverage, and download robust test files ready to run in Jest, pytest, JUnit, or mocha.`,
        techStack: [
            "AI/LLMs",
            "React",
            "TypeScript",
            "Node.js",
            "Tailwind CSS",
            "Framer Motion",
            "Jest",
            "pytest",
            "JUnit",
        ],
        category: "tool",
        features: [
            "Intelligent code analysis and testing strategy mapping",
            "Support for 12+ major backend and frontend languages",
            "Output optimized for mainstream runners (pytest, Jest, JUnit, etc.)",
            "80%+ automatic test coverage promise",
            "Interactive code block review and customization panel",
        ],
        liveUrl: "https://poly-test-ai.vercel.app/",
        githubUrl: "https://github.com/yadavxprakhar/PolyTest-AI",
        featured: true,
        image: "/images/polytest_v1.png",
    },
    {
        id: "ember-stone",
        title: "Ember & Stone",
        description:
            "An immersive wood-fired fine dining reservation website and booking dashboard featuring an organic layout, stateful menu accordions, and interactive bookings.",
        longDescription: `Ember & Stone is a conceptual premium wood-fired restaurant landing page and online booking platform. 
    It features an immersive, storytelling-driven client experience with organic layout segments, stateful interactive menu cards, 
    an dynamic table reservation dashboard with live seating charts, and fully responsive fluid layouts.`,
        techStack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "Lucide React",
        ],
        category: "frontend",
        features: [
            "Immersive fine dining storytelling theme & typography",
            "Stateful interactive food menu accordions & filters",
            "Live dining table booking & reservation dashboard mock workflow",
            "Parallax and sliding entry micro-animations",
            "Responsive fluid design optimized for all viewports",
        ],
        liveUrl: "https://ember-stone-seven.vercel.app/",
        githubUrl: "https://github.com/yadavxprakhar/Ember-Stone",
        featured: true,
        image: "/images/ember_stone_v1.png",
    },
];

export const featuredProjects = projects.filter((p) => p.featured);