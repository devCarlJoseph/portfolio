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
    <div className="bg-slate-800/50 p-6 rounded-xl shadow-md border border-slate-700 hover:border-sky-500 transition duration-300">

      <div className="flex items-center mb-2">
        <Icon className="w-5 h-5 text-sky-400 mr-3" />
        <h3 className="text-xl font-bold text-white mb-0">{title}</h3>
      </div>

      {type === "education" && institution && (
        <p className="text-gray-300 mb-1">{institution}</p>
      )}
      {type === "experience" && company && (
        <p className="text-gray-300 mb-1">{company}</p>
      )}

      <p className="text-slate-400 text-sm mb-3">{period}</p>

      <ul className="text-slate-400 text-sm list-disc pl-5 space-y-1">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
