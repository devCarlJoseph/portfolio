import { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
  DemoIcon?: LucideIcon;
  GithubIcon?: LucideIcon;
}

export default function ProjectCard({
  title,
  category,
  description,
  techStack,
  demoLink,
  githubLink,
  DemoIcon,
  GithubIcon,
}: ProjectCardProps) {
  return (
    <Card className="bg-gray-50 dark:bg-slate-800 rounded-xl px-3 shadow-xl border border-gray-200 dark:border-slate-700 hover:border-gray-500 cursor-pointer dark:hover:border-sky-500 transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-xl text-black font-bold dark:text-sky-400">{title}</CardTitle>
        <CardDescription className="text-gray-700 dark:text-slate-400 text-sm">{category}</CardDescription>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-gray-900 dark:text-gray-300 mb-4 text-sm">
          {description}
        </CardDescription>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-semibold px-3 py-1 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-gray-300 rounded-full transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {demoLink && DemoIcon && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 dark:text-sky-400 dark:hover:text-sky-300 font-medium transition-colors"
            >
              <DemoIcon className="w-4 h-4 mr-1" /> Demo
            </a>
          )}

          {githubLink && GithubIcon && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4 mr-1" /> GitHub
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
