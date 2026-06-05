import type { Blog } from "@/types";

export const blogs: Blog[] = [
    {
        id: "learn-to-code-2026",
        title: "Should You Still Learn to Code in 2026?",
        subtitle: "The Honest Answer Nobody Is Giving You",
        description:
            "With the rise of generative AI, agentic workflows, and automated system synthesis, the role of a software engineer is shifting rapidly. Is coding still a viable career in 2026? Let's break down the reality of the industry.",
        publishDate: "May 20, 2026",
        readTime: "9 min read",
        url: "https://medium.com/@yadavxprakhar/should-you-still-learn-to-code-in-2026-cccab3bac4a6",
        tags: ["Software Engineering", "AI", "Career Guidance", "Web Development"],
        featured: true,
    },
    {
        id: "job-hunting-2026",
        title: "Job Hunting in 2026: What Nobody Tells New Graduates",
        subtitle: "The Raw Reality of the Post-College Job Hunt",
        description:
            "College is over, final exams are done, and the reality of the 2026 tech job market settles in. Let's talk about what it actually takes to get hired today, beyond just building projects and grinding LeetCode.",
        publishDate: "June 5, 2026",
        readTime: "7 min read",
        url: "https://medium.com/@yadavxprakhar/job-hunting-in-2026-what-nobody-tells-new-graduates-d2f4eafaf4d1",
        tags: ["Career Guidance", "Job Hunting", "Software Engineering", "AI"],
        featured: true,
    },
];

export const featuredBlogs = blogs.filter((b) => b.featured);
