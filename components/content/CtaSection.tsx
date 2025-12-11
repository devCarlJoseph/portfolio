import { LinkButton } from "@/components/ui/button";
import Dotted from "@/components/common/DotPatter";

export default function CTASection() {
    return (
        <>
            <section className="relative mt-2 lg:mt-15 py-20 bg-slate-900 overflow-hidden">

                <Dotted />

                <div className="absolute inset-0 bg-slate-950/40 z-0"></div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Let's Build Something Amazing Together
                    </h2>

                    <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                        Whether you have a project in mind or just want to connect, I'm always open
                        to new opportunities, collaborations, and conversations.
                    </p>

                    <div className="mt-8 flex justify-center items-center">
                        <LinkButton href="contact" variant="default" className="px-3 py-3 text-md w-50">
                            Get In Touch
                        </LinkButton>
                    </div>
                </div>
            </section>

        </>
    );
}