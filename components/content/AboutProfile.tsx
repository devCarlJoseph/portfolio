import { cn } from "@/lib/utils";
import ScrollFadeIn from "../common/FadeIn";


export function AboutProfile({ className }: { className?: string }) {
    return (
        <ScrollFadeIn>
            <section
                className={cn(
                    "relative mx-auto w-full max-w-screen-lg flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat rounded-xl",
                    className
                )}
                style={{ backgroundImage: "url('/background.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/50 rounded-xl" />

                <ScrollFadeIn>
                    <div className="relative z-10 w-full px-6 lg:px-16 py-16 text-center">
                        <img
                            src="/carl.jpg"
                            alt="Profile Picture"
                            className="w-40 h-40 mx-auto rounded-full border-4 border-sky-400 mb-4 object-cover"
                        />
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Carl Joseph Sumagang
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl">
                            Future Software Developer | Cordova, Cebu, Philippines
                        </p>
                    </div>
                </ScrollFadeIn>
            </section>
        </ScrollFadeIn>
    );
}
