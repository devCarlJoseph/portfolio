
import {HeroSection} from "@/components/content/HeroSection";
import { ProjectSection } from "@/components/content/ProjectSection";
import { CTASection } from "@/components/content/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection className="my-2 pt-15 pb-4 lg:pb-3 lg:my-7"/>
      <ProjectSection className="py-1" />
      <CTASection className="mt-2 lg:mt-20 lg:mb-15 py-20" />
    </>
  );
}
