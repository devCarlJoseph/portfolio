"use client";

import { TechStack } from "@/lib/data/techstack";

export default function SkillsCard() {
    const stacks = Object.values(TechStack);

    return (
        <>
            <div>
                <h2 className="section-heading-line text-4xl font-bold mb-10 text-white text-center">
                    Tech Stack
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {stacks.map((stack, idx) => (
                    <div
                        key={idx}
                        className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-sky-400">
                            {stack.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {stack.skills.map((skill, skillIdx) => (
                                <span
                                    key={skillIdx}
                                    className="px-4 py-1.5 bg-sky-900/40 text-sky-300 rounded-full text-sm font-medium border border-sky-800/50 transition duration-200 hover:bg-sky-900/60"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
