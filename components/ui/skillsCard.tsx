"use client";

interface SkillsCardProps {
    title: string;
    skills: string[];
}

export default function SkillsCard({ title, skills }: SkillsCardProps) {
    return (
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-sky-400">{title}</h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                    <span
                        key={idx}
                        className="px-4 py-1.5 bg-sky-900/40 text-sky-300 rounded-full text-sm font-medium border border-sky-800/50 transition duration-200 hover:bg-sky-900/60"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
