
import {HeroSection} from "@/components/content/HeroSection";
import { ProjectSection } from "@/components/content/ProjectSection";
import { CTASection } from "@/components/content/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection className="my-14 pb-4 lg:pb-1 lg:mt-17 lg:mb-12"/>
      <ProjectSection className="py-1" />
      <CTASection className="my-15 lg:my-20 py-20" />
    </>
  );
}
