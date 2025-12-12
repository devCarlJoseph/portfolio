import { AboutSection } from "@/components/content/AboutSection";
import { AboutProfile } from "@/components/content/AboutProfile";

export default function About() {
    return (
        <>
            <AboutProfile className="mt-35 mb-2"/>
            <AboutSection/>
        </>
    );
}