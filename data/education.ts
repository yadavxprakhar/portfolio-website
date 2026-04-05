import type { Education } from "@/types";

export const education: Education[] = [
    {
        id: "galgotia-btech",
        institution: "Galgotia College of Engineering & Technology",
        degree: "Bachelor of Technology",
        field: "Computer Science & Engineering",
        startYear: 2022,
        endYear: 2026,
        score: 7.6, // Update with your actual CGPA
        scoreType: "CGPA",
        location: "Greater Noida, Uttar Pradesh",
        current: true,
    },
    {
        id: "jnv-class12",
        institution: "Jawahar Navodaya Vidyalaya",
        degree: "Senior Secondary",
        field: "Science (PCM + CS)",
        startYear: 2020,
        endYear: 2021,
        score: 89,
        scoreType: "Percentage",
        location: "Uttar Pradesh",
        current: false,
    },
    {
        id: "jnv-class10",
        institution: "Jawahar Navodaya Vidyalaya",
        degree: "Secondary",
        field: "General with Science & Mathematics",
        startYear: 2018,
        endYear: 2019,
        score: 92,
        scoreType: "Percentage",
        location: "Uttar Pradesh",
        current: false,
    },
];