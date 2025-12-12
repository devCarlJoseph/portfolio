import { GraduationCap, Briefcase } from "lucide-react";

export type ExperienceType = "education" | "experience";

export interface ExperienceItem {
    type: ExperienceType;
    icon: any;
    title: string;
    institution?: string;
    company?: string;
    period: string;
    points: string[];
}

export const ExperienceData: ExperienceItem[] = [
    {
        type: "education",
        icon: GraduationCap,
        title: "Bachelor of Science in Information Technology",
        institution: "Cordova Public College",
        period: "August 2024 - Present",
        points: [
            "Focused on Web Development, Database Management, and Object-Oriented Programming (OOP).",
            "Strong interest in building efficient, scalable, and user-friendly software solutions.",
            "Aspiring to grow as a software engineer and contribute to innovative projects through clean code, problem-solving, and continuous learning."
        ]
    },
    {
        type: "experience",
        icon: Briefcase,
        title: "Project Lead (Mini Capstone Project)",
        company: "HayGo Car Rental",
        period: "October 2025 - November 2025",
        points: [
            "Led a team of five to develop a real-time car rental system using PHP and MySQL.",
            "Designed and implemented the responsive UI, focusing on modern aesthetics and accessibility."
        ]
    },
    {
        type: "experience",
        icon: Briefcase,
        title: "Intern at Cloomero",
        company: "Virtual Classroom Platform",
        period: "December 2025 - Present",
        points: [
            "Filipino-owned all-in-one virtual classroom platform for Teachers, Schools, Bootcamps, and Tutors."
        ]
    }
];
