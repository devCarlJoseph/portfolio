"use client"

import { Briefcase, GraduationCap } from "lucide-react";
import Timeline from "@/components/common/Timeline";

export function Experience() {
    return (
        <section className="w-full py-10">
            <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-black dark:text-white relative after:bg-gray-400 after:block after:w-24 after:h-1 dark:after:bg-sky-400 after:rounded-full after:mt-4">
                    Experience & Education
                </h2>

                <div className="space-y-8">
                    <div className="timeline-item pb-8">
                        <div className="light-marker dark:timeline-marker"></div>
                        <Timeline
                            type="education"
                            icon={GraduationCap}
                            title="Bachelor of Science in Information Technology"
                            institution="Cordova Public College"
                            period="August 2024 - Present"
                            points={[
                                "Focused on Web Development, Database Management, and Object-Oriented Programming (OOP).",
                                "Strong interest in building efficient, scalable, and user-friendly software solutions.",
                                "Aspiring to grow as a software engineer and contribute to innovative projects through clean code, problem-solving, and continuous learning.",
                            ]}
                        />
                    </div>

                    <div className="timeline-item pb-8">
                        <div className="light-marker dark:timeline-marker"></div>
                        <Timeline
                            type="experience"
                            icon={Briefcase}
                            title="Project Lead (Mini Capstone Project)"
                            company="HayGo Car Rental"
                            period="October 2025 - November 2025"
                            points={[
                                "Led a team of five to develop a real-time car rental system using PHP and MySQL.",
                                "Designed and implemented the responsive UI, focusing on modern aesthetics and accessibility.",
                            ]}
                        />
                    </div>

                    <div className="timeline-item pb-8">
                        <div className="light-marker dark:timeline-marker"></div>
                        <Timeline
                            type="experience"
                            icon={Briefcase}
                            title="Intern at Cloomero"
                            company="Virtual Classroom Platform"
                            period="December 2025 - Present"
                            points={[
                                "Filipino-owned all-in-one virtual classroom platform for Teachers, Schools, Bootcamps, and Tutors.",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
