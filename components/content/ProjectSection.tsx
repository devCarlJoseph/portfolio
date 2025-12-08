import { Monitor, Github } from "lucide-react";
import ProjectCard from "@/components/content/Projects/Projects";

export default function ProjectSection() {
    return (
        <section id="projects" className="py-16">
            <h2 className="section-heading-line text-4xl font-bold mb-10 text-white">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    title="HayGo Car Rental"
                    category="Rental Platform"
                    description="A user-friendly system that allows customers to browse, book, and manage car rentals efficiently, while providing administrators with tools to track vehicles, reservations, and customer information seamlessly."
                    techStack={["PHP", "MySQL"]}
                    demoLink="#"
                    githubLink="https://github.com/devCarlJoseph/haygo-car"
                    DemoIcon={Monitor}
                    GithubIcon={Github}
                />

                <ProjectCard
                    title="CjCo Restaurant"
                    category="Restaurant"
                    description="A user-friendly system that allows customers to reserve tables, place orders, and enjoy a seamless dining experience, while helping staff manage reservations, orders, and restaurant operations efficiently."
                    techStack={["React", "Tailwind"]}
                    demoLink="#"
                    githubLink="https://github.com/devCarlJoseph/final-proj"
                    DemoIcon={Monitor}
                    GithubIcon={Github}
                />
            </div>
        </section>
    );
}