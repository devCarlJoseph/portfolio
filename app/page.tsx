"use client";

import Image from "next/image";
import { LinkButton } from "@/components/ui/button";
import { Lightbulb, Code, Users, GraduationCap, Briefcase, Monitor, Github } from "lucide-react";
import InfoCard from "@/components/ui/card";
import TimelineCard from "@/components/ui/timelineCard";
import SkillsCard from "@/components/ui/skillsCard";
import ProjectCard from "@/components/ui/projectCard";
import ContactCard from "@/components/ui/contactCard";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section id="hero" className="pt-20 pb-16 flex flex-col md:flex-row items-center justify-center">
          <div className="mb-12 md:mb-0 md:mr-10 text-center md:text-left">
            <p className="text-xl text-sky-400 mb-2 font-medium">Hello, I'm</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
              Carl Joseph <span className="text-sky-400">Sumagang</span>
            </h1>
            <p className="mt-4 text-2xl font-light text-slate-400">
              A highly motivated and enthusiastic <span className="font-semibold text-white">Future Developer.</span>
            </p>
            <p className="mt-6 text-base text-slate-400 max-w-xl">
              Passionate about full-stack development and software engineering, with a focus on building
              efficient, user-friendly applications. Eager to transform ideas into functional, high-quality code.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <LinkButton href="#projects" variant="default">
                View Projects
              </LinkButton>

              <LinkButton href="#contact" variant="outline">
                Get In Touch
              </LinkButton>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-slate-800 rounded-full flex items-center justify-center border-4 border-sky-400 shadow-2xl shadow-sky-500/20"
              style={{ width: "280px", height: "280px" }}>
              <Image
                src="/carl.jpg"
                alt="Carl Joseph Sumagang"
                width={208}
                height={208}
                className="w-11/12 h-11/12 object-cover rounded-full"
              />
            </div>
          </div>
        </section>
        <div className="h-px bg-slate-700 my-16"></div>

        <section id="about" className="py-16">
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
        </section>
        <div className="h-px bg-slate-700 my-16"></div>

        <section id="experience" className="py-16">
          <h2 className="section-heading-line text-4xl font-bold mb-10 text-white">Experience & Education</h2>

          <div className="max-w-4xl mx-auto space-y-8">

            <div className="timeline-item pb-8">
              <div className="timeline-marker"></div>
              <div>
                <TimelineCard
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
                <TimelineCard
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
                <TimelineCard
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
        </section>
        <div className="h-px bg-slate-700 my-16"></div>
        <section id="skills" className="py-16">
          <h2 className="section-heading-line text-4xl font-bold mb-10 text-white">
            Core Skills & Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillsCard
              title="Front-End Development"
              skills={[
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Bootstrap 5",
                "JavaScript (ES6+)",
                "jQuery",
                "React",
                "Responsive Design",
                "UI/UX Principles",
              ]}
            />

            <SkillsCard
              title="Back-End & Database"
              skills={["Node.js / Express", "PHP", "MySQL", "PostgreSQL", "REST APIs"]}
            />

            <SkillsCard
              title="Tools & Version Control"
              skills={["Git & GitHub", "VS Code", "Figma (Basic)"]}
            />

            <SkillsCard
              title="Soft Skills"
              skills={["Rapid Learner", "Team Collaboration", "Documentation", "Time Management"]}
            />
          </div>
        </section>
        <div className="h-px bg-slate-700 my-16"></div>
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
        <div className="h-px bg-slate-700 my-16"></div>
        <section id="contact" className="py-16">
          <h2 className="section-heading-line text-4xl font-bold mb-10 text-white text-center mx-auto">
            Connect With Me
          </h2>
          <ContactCard />
        </section>
      </main>
    </div>
  );
}
