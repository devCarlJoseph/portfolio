
"use client";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon; 
  title: string;
  description: string;
}

export default function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <div className="p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-sky-500 transition duration-300 text-center">
      <Icon className="w-8 h-8 text-sky-400 mx-auto mb-3" />
      <h3 className="font-semibold text-lg text-white">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}
