"use client";

import ProjectCard from "@/components/common/ProjectsCard";
import { ProjectsData } from "@/lib/data/projects";

export default function ProjectSection() {
    return (
        <section className=" py-16">
            <h2 className="section-heading-line text-4xl font-bold mt-4 mb-4 text-white lg:mb-10 lg:mt-10">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                {ProjectsData.data.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        category={project.category}
                        description={project.description}
                        techStack={project.techStack}
                        demoLink={project.demoLink}
                        githubLink={project.githubLink}
                        DemoIcon={project.DemoIcon}
                        GithubIcon={project.GithubIcon}
                    />
                ))}
            </div>
        </section>
    );
}
