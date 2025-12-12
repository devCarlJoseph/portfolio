"use client";

import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Dotted from "@/components/common/DotPatter";
import ScrollFadeIn from "@/components/common/FadeIn";

export function CTASection({ className }: { className?: string }) {
    return (
        <section
            className={cn(
                "relative bg-slate-900 overflow-hidden mx-1 lg:mx-22 py-16 rounded-xl",
                className
            )}
        >
            <Dotted />
            <div className="absolute inset-0 bg-slate-950/40 z-0 rounrded-xl"></div>

            <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 lg:px-16 text-center">
                <ScrollFadeIn>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Let's Build Something Amazing Together
                    </h2>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.1}>
                    <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                        Whether you have a project in mind or just want to connect, I'm always open to new opportunities, collaborations, and conversations.
                    </p>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.2}>
                    <div className="mt-8 flex justify-center items-center">
                        <LinkButton
                            href="contact"
                            variant="default"
                            className="px-6 py-3 text-md"
                        >
                            Get In Touch
                        </LinkButton>
                    </div>
                </ScrollFadeIn>
            </div>
        </section>
    );
}
