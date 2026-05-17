import type { Certification } from "@/types";

export const certifications: Certification[] = [
    {
        id: "wipro-java-fullstack",
        title: "Java Full Stack Development",
        issuer: "Wipro TalentNext",
        year: 2025,
        credentialUrl: "", // Add your credential URL when available
        relevance:
            "Industry-recognized certification covering Java, Spring Boot, Hibernate, React, and full-stack architecture fundamentals.",
    },
    {
        id: "infosys-java-developer",
        title: "Java Developer Certification",
        issuer: "Infosys Springboard",
        year: 2025,
        credentialUrl: "https://drive.google.com/file/d/1uNpFOtOa9jiJd1EvhfolNTlt3fni6rrj/view",
        relevance:
            "Verified Java Developer status validation covering Object-Oriented programming concepts, core data structures, and algorithmic principles.",
    },
    {
        id: "oracle-sql",
        title: "Programming with SQL",
        issuer: "Oracle Academy",
        year: 2024,
        credentialUrl: "", // Add your credential URL when available
        relevance:
            "Validated SQL proficiency including complex queries, joins, subqueries, and database design — directly applicable to backend development.",
    },
];