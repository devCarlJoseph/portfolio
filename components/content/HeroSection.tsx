"use client";

import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ScrollFadeIn from "@/components/common/FadeIn";

export function HeroSection({ className }: { className?: string }) {
    return (
        <section className={cn("py-12 md:py-16", className)}>
            <div className="mx-auto w-full max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-16">

                <div className="mt-6 md:mt-0 md:mr-10 text-center md:text-left flex-1 space-y-5">
                    <ScrollFadeIn>
                        <p className="text-xl text-gray-500 dark:text-sky-500 font-medium transition-colors">
                            Hello, I'm
                        </p>
                    </ScrollFadeIn>

                    <ScrollFadeIn delay={0.1}>
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white transition-colors">
                            Carl Joseph <span className="text-gray-500 dark:text-sky-500">Sumagang</span>
                        </h1>
                    </ScrollFadeIn>

                    <ScrollFadeIn delay={0.2}>
                        <p className="text-2xl font-light text-gray-700 dark:text-gray-300 transition-colors">
                            A highly motivated and enthusiastic{" "}
                            <span className="font-semibold text-gray-900 dark:text-white transition-colors">
                                Future Developer.
                            </span>
                        </p>
                    </ScrollFadeIn>

                    <ScrollFadeIn delay={0.3}>
                        <p className="text-base text-gray-700 dark:text-gray-300 transition-colors">
                            Passionate about full-stack development and software engineering, with a
                            focus on building efficient, user-friendly applications. Eager to transform
                            ideas into functional, high-quality code.
                        </p>
                    </ScrollFadeIn>

                    <ScrollFadeIn delay={0.4}>
                        <div className="mt-4 flex justify-center lg:justify-start gap-4">
                            <LinkButton
                                href="#projects"
                                variant="default"
                                className="px-5 py-2.5 text-sm md:text-base lg:text-base rounded-lg transition-all hover:scale-105"
                            >
                                View Projects
                            </LinkButton>

                            <LinkButton
                                href="#contact"
                                variant="outline"
                                className="px-5 py-2.5 text-sm md:text-base lg:text-base rounded-lg transition-all hover:scale-105"
                            >
                                Get In Touch
                            </LinkButton>
                        </div>
                    </ScrollFadeIn>
                </div>

                <ScrollFadeIn delay={0.5} className="shrink-0 mb-6 md:mb-0">
                    <div className="bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center border-4 border-black dark:border-sky-400 shadow-2xl dark:shadow-sky-500/20 w-72 md:w-80 lg:w-96 aspect-square mx-auto transition-colors">
                        <Image
                            src="/carl.jpg"
                            alt="Carl Joseph Sumagang"
                            width={208}
                            height={208}
                            className="w-11/12 h-11/12 object-cover rounded-lg"
                        />
                    </div>
                </ScrollFadeIn>

            </div>
        </section>
    );
}
