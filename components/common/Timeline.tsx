"use client";

import { LucideIcon } from "lucide-react";

interface TimelineCardProps {
  type: "education" | "experience";
  icon: LucideIcon;
  title: string;       
  institution?: string;
  company?: string;      
  period: string;
  points: string[];
}

export default function TimelineCard({
  type,
  icon: Icon,
  title,
  institution,
  company,
  period,
  points,
}: TimelineCardProps) {
  return (
    <div className="dark:bg-slate-800/50 p-6 rounded-xl shadow-md border border-slate-700 hover:border-gray-400 dark:hover:border-sky-500 transition duration-300 cursor-pointer">

      <div className="flex items-center mb-2">
        <Icon className="w-5 h-5 text-gray-400 dark:text-sky-400 mr-3" />
        <h3 className="text-xl font-bold dark:text-white mb-0">{title}</h3>
      </div>

      {type === "education" && institution && (
        <p className="dark:text-gray-300 mb-1">{institution}</p>
      )}
      {type === "experience" && company && (
        <p className="text-gray-400 dark:text-gray-300 mb-1">{company}</p>
      )}

      <p className="dark:text-slate-400 text-sm mb-3">{period}</p>

      <ul className="dark:text-slate-400 text-sm list-disc pl-5 space-y-1">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
