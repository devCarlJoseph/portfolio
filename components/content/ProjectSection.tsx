"use client";

import ProjectCard from "@/components/common/ProjectsCard";
import { ProjectsData } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import ScrollFadeIn from "@/components/common/FadeIn";

export function ProjectSection({ className }: { className?: string }) {
    return (
        <section className={cn("py-12", className)}>
            <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-16">
                <ScrollFadeIn>
                    <h2 className="light-heading-line dark:section-heading-line text-4xl font-bold mt-4 mb-4 text-gray-900 dark:text-white lg:mb-10 lg:mt-10 transition-colors">
                        Featured Projects
                    </h2>
                </ScrollFadeIn>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                    {ProjectsData.data.map((project, index) => (
                        <ScrollFadeIn key={project.title} delay={index * 0.1} className="w-full">
                            <ProjectCard
                                title={project.title}
                                category={project.category}
                                description={project.description}
                                techStack={project.techStack}
                                demoLink={project.demoLink}
                                githubLink={project.githubLink}
                                DemoIcon={project.DemoIcon}
                                GithubIcon={project.GithubIcon}
                            />
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
