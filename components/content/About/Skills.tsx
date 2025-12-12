"use client";

import { TechStack } from "@/lib/data/techstack";

export function Skills() {
    const stacks = Object.values(TechStack);

    return (
        <section className="w-full py-10">
            <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-16">
                <h2 className="light-heading-line dark:section-heading-line text-4xl font-bold mb-10 dark:text-white text-center">
                    Tech Stack
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {stacks.map((stack, idx) => (
                        <div
                            key={idx}
                            className="dark:bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md"
                        >
                            <h3 className="text-2xl font-semibold mb-4 dark:text-sky-400">
                                {stack.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {stack.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="px-4 py-1.5 dark:bg-sky-900/40 text-gray-800 dark:text-sky-300 rounded-full text-sm font-medium border border-gray-400 dark:border-sky-800/50 transition duration-200 hover:bg-gray-300/30 dark:hover:bg-sky-900/60 cursor-pointer"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
