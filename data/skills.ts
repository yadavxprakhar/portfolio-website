import type { Skill } from "@/types";

export const skills: Skill[] = [
    // ── Languages ──────────────────────────────────────────
    { name: "Java", category: "Languages", proficiency: 90 },
    { name: "TypeScript", category: "Languages", proficiency: 80 },
    { name: "JavaScript", category: "Languages", proficiency: 82 },
    { name: "SQL", category: "Languages", proficiency: 78 },
    { name: "Python", category: "Languages", proficiency: 65 },

    // ── Frontend ───────────────────────────────────────────
    { name: "React", category: "Frontend", proficiency: 82 },
    { name: "Next.js", category: "Frontend", proficiency: 75 },
    { name: "Tailwind CSS", category: "Frontend", proficiency: 88 },
    { name: "HTML & CSS", category: "Frontend", proficiency: 90 },
    { name: "Framer Motion", category: "Frontend", proficiency: 70 },

    // ── Backend ────────────────────────────────────────────
    { name: "Spring Boot", category: "Backend", proficiency: 85 },
    { name: "Spring Security", category: "Backend", proficiency: 78 },
    { name: "Spring AI", category: "Backend", proficiency: 65 },
    { name: "REST APIs", category: "Backend", proficiency: 88 },
    { name: "JWT & OAuth2", category: "Backend", proficiency: 75 },
    { name: "Hibernate / JPA", category: "Backend", proficiency: 80 },

    // ── Databases ──────────────────────────────────────────
    { name: "MySQL", category: "Databases", proficiency: 82 },
    { name: "PostgreSQL", category: "Databases", proficiency: 72 },
    { name: "MongoDB", category: "Databases", proficiency: 65 },
    { name: "Redis", category: "Databases", proficiency: 60 },

    // ── Tools & DevOps ─────────────────────────────────────
    { name: "Git & GitHub", category: "Tools & DevOps", proficiency: 88 },
    { name: "Docker", category: "Tools & DevOps", proficiency: 70 },
    { name: "Maven", category: "Tools & DevOps", proficiency: 78 },
    { name: "Postman", category: "Tools & DevOps", proficiency: 85 },
    { name: "IntelliJ IDEA", category: "Tools & DevOps", proficiency: 88 },
    { name: "VS Code", category: "Tools & DevOps", proficiency: 90 },
];

// Helper: get skills grouped by category
export const skillsByCategory = skills.reduce(
    (acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    },
    {} as Record<string, Skill[]>
);

// Ordered category list for consistent rendering
export const skillCategories: Skill["category"][] = [
    "Languages",
    "Frontend",
    "Backend",
    "Databases",
    "Tools & DevOps",
];