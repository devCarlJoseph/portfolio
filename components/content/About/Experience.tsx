import { Briefcase, GraduationCap } from "lucide-react";
import Timeline from "@/components/common/Timeline";


export default function ExperienceSection() {
    return (
        <div className="py-14">
            <h2 className="section-heading-line text-4xl font-bold mb-10 text-white">Experience & Education</h2>

            <div className="max-w-4xl mx-auto space-y-8">

                <div className="timeline-item pb-8">
                    <div className="timeline-marker"></div>
                    <div>
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
                </div>

                <div className="timeline-item pb-8">
                    <div className="timeline-marker"></div>
                    <div>
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
                </div>

                <div className="timeline-item pb-8">
                    <div className="timeline-marker"></div>
                    <div>
                        <Timeline
                            type="experience"
                            icon={Briefcase}
                            title="Internt at Cloomero"
                            company="Virtual Classroom Platform"
                            period="December 2025 - Present"
                            points={[
                                "Filipino-owned all-in-one virtual classroom platform for Teachers, Schools, Bootcamps, and Tutors.",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}