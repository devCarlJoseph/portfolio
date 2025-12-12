"use client";

import ScrollFadeIn from "@/components/common/FadeIn";
import { Description } from "./About/Description";
import { Experience } from "./About/Experience";
import { Skills } from "./About/Skills";

export function AboutSection() {
  return (
    <section>
      <ScrollFadeIn>
        <Description />
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.1}>
        <Experience />
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.2}>
        <Skills />
      </ScrollFadeIn>
    </section>
  );
}
