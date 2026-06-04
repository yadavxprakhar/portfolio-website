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
];

export const featuredBlogs = blogs.filter((b) => b.featured);
