import Timeline from "@/components/common/Timeline";
import { ExperienceData } from "@/lib/data/experience";
import ScrollFadeIn from "@/components/common/FadeIn";

export function Experience() {
    return (
        <section className="w-full py-5">
            <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-16">

                <ScrollFadeIn>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-black dark:text-white relative after:bg-gray-400 after:block after:w-24 after:h-1 dark:after:bg-sky-400 after:rounded-full after:mt-4">
                        Experience & Education
                    </h2>
                </ScrollFadeIn>

                <div className="space-y-8">
                    {ExperienceData.data.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div key={index} className="timeline-item pb-8">
                                <div className="light-marker dark:timeline-marker"></div>
                                <ScrollFadeIn delay={index * 0.1} className="w-full">
                                    <Timeline
                                        type={item.type}
                                        icon={Icon}
                                        title={item.title}
                                        company={item.company}
                                        institution={item.institution}
                                        period={item.period}
                                        points={item.points}
                                    />
                                </ScrollFadeIn>
                            </div>

                        );
                    })}
                </div>

            </div>
        </section>
    );
}
