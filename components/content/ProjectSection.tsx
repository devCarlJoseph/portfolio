import ProjectCard from "@/components/content/Projects/Projects";
import { ProjectsData } from "@/lib/data/projects";

export default function ProjectSection() {
    return (
        <section id="projects" className="py-16">
            <h2 className="section-heading-line text-4xl font-bold mb-10 text-white">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
