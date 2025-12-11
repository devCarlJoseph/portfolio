
import { Lightbulb, Code, Users } from "lucide-react";
import InfoCard from "@/components/common/InfoCard";

export default function Description() {
    return (
        <>
            <h2 className="section-heading-line text-4xl font-bold mb-10 text-white">About Me</h2>
            <div className="bg-slate-800/50 p-6 sm:p-10 rounded-xl shadow-lg border border-slate-700">
                <p className="text-xl text-gray-300 leading-relaxed">
                    My journey into development is driven by a strong curiosity for how technology solves real-world
                    problems. While currently building my foundation, I am actively engaging with modern frameworks and
                    best practices. I thrive in environments that challenge me to learn quickly and iterate on
                    solutions. My focus is on creating scalable, maintainable, and highly performant applications.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    <InfoCard
                        icon={Lightbulb}
                        title="Problem Solver"
                        description="Analytical approach to complex technical challenges."
                    />
                    <InfoCard
                        icon={Code}
                        title="Developer"
                        description="Writing clean, maintainable code for scalable projects."
                    />
                    <InfoCard
                        icon={Users}
                        title="Team Player"
                        description="Collaborates effectively with cross-functional teams."
                    />
                </div>
            </div>
        </>
    );
}