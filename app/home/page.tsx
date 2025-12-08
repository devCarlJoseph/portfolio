"use client";

import HeroSection from "@/components/content/HeroSection";
import Projects from "@/components/content/ProjectSection";
import ContactSection from "@/components/content/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-px bg-slate-700 my-16"></div>
      <Projects />
      <div className="h-px bg-slate-700 my-16"></div>
      <ContactSection />
    </>
  );
}
