import { LinkButton } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="hero" className="pt-20 pb-16 flex flex-col md:flex-row items-center justify-center">
            <div className="mb-12 md:mb-0 md:mr-10 text-center md:text-left">
                <p className="text-xl text-sky-400 mb-2 font-medium">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
                    Carl Joseph <span className="text-sky-400">Sumagang</span>
                </h1>
                <p className="mt-4 text-2xl font-light text-slate-400">
                    A highly motivated and enthusiastic <span className="font-semibold text-white">Future Developer.</span>
                </p>
                <p className="mt-6 text-base text-slate-400 max-w-xl">
                    Passionate about full-stack development and software engineering, with a focus on building
                    efficient, user-friendly applications. Eager to transform ideas into functional, high-quality code.
                </p>
                <div className="mt-8 flex justify-center md:justify-start space-x-4">
                    <LinkButton href="#projects" variant="default">
                        View Projects
                    </LinkButton>

                    <LinkButton href="#contact" variant="outline">
                        Get In Touch
                    </LinkButton>
                </div>
            </div>
            <div className="flex-shrink-0">
                <div className="bg-slate-800 rounded-full flex items-center justify-center border-4 border-sky-400 shadow-2xl shadow-sky-500/20"
                    style={{ width: "280px", height: "280px" }}>
                    <Image
                        src="/carl.jpg"
                        alt="Carl Joseph Sumagang"
                        width={208}
                        height={208}
                        className="w-11/12 h-11/12 object-cover rounded-full"
                    />
                </div>
            </div>
        </section>
    );
}