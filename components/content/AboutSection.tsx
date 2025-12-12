"use client";

import { Description } from "./About/Description";
import { Experience } from "./About/Experience";
import { Skills } from "./About/Skills";

export function AboutSection() {
  return (
    <section>
        <Description />
        <Experience />
        <Skills />
    </section>
  );
}
