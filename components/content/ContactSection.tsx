"use client";

import ScrollFadeIn from "@/components/common/FadeIn";
import { ContactContent } from "@/components/content/Contact/ContactContent";
import { ContactForm } from "@/components/content/Contact/ContactForm";

export function ContactSection() {
    return (
        <section className="py-20 px-2">
            <ScrollFadeIn>
                <div className="text-center mb-12">
                    <h2 className="light-heading-line dark:section-heading-line text-4xl font-bold dark:text-white mx-auto">
                        Let's Get In Touch
                    </h2>
                </div>
            </ScrollFadeIn>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ScrollFadeIn delay={0.1}>
                    <div className="order-2 md:order-1">
                        <ContactContent />
                    </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.2}>
                    <div className="order-1 md:order-2">
                        <ContactForm />
                    </div>
                </ScrollFadeIn>
            </div>
        </section>
    );
}
