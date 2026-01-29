"use client";

import { useEffect, useState } from "react";
import { Mail, Linkedin, Github, Phone, MessageCircle, Clock, Instagram, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";

export function ContactContent() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const updateTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };

        updateTheme();

        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const socialsItems = [
        {
            label: "Email",
            value: "carljosephsumagang17@gmail.com",
            href: "mailto:carljosephsumagang17@gmail.com",
            Icon: Mail,
            note: "This is my Gmail so you can contact or send some mail here.",
            SubIcon: MessageCircle,
        },
        {
            label: "Phone",
            value: "+63 948 466 5123",
            href: "tel:+639484665123",
            Icon: Phone,
            note: "You can contact me from 10:00 A.M to 8:00 P.M",
            SubIcon: Clock,
        },
        {
            label: "Connect With Me",
            Icon: Github,
            socials: [
                { icon: Github, href: "https://github.com/devCarlJoseph" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/carl-joseph-sumagang-38291a379/" },
                { icon: Instagram, href: "https://www.instagram.com/kuyacaarl/" },
                { icon: Facebook, href: "https://www.facebook.com/Jeekoy17" },
            ],
        },
    ];

    return (
        <div className="flex flex-col gap-4 w-full order-2 lg:order-1">
            {socialsItems.map(({ label, value, href, Icon, note, SubIcon, socials }) => (
                <Card
                    key={label}
                    className="relative bg-black dark:bg-slate-800/50 p-4 rounded-xl shadow-lg border border-slate-700 overflow-hidden w-full"
                >
                    <ShineBorder
                        borderWidth={2}
                        shineColor={isDark ? ["#0ea5e9", "#38bdf8"] : ["#fdfdfdff", "#e4e4e4ff"]}
                        duration={10}
                        className="rounded-xl"
                    />

                    <div className="relative z-10 flex flex-col p-2">
                        <div className="flex items-center gap-3 mb-3">
                            {Icon && (
                                <div className="bg-gray-500 dark:bg-sky-500 rounded-lg p-2 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            )}
                            <span className="font-semibold text-lg text-white dark:text-gray-300">{label}</span>
                        </div>

                        {socials ? (
                            <div className="w-full flex justify-center items-center gap-3 mb-2 mt-3 flex-wrap">
                                {socials.map(({ icon: SocialIcon, href }, index) => (
                                    <a
                                        key={index}
                                        href={href}
                                        target="_blank"
                                        className="bg-slate-700 p-3 sm:p-3 md:p-4 rounded-lg hover:bg-sky-500 transition flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16"
                                    >
                                        <SocialIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                    </a>
                                ))}
                            </div>
                        ) : href ? (
                            <a
                                href={href}
                                target="_blank"
                                className="text-white dark:text-gray-300 hover:text-gray-400 dark:hover:text-sky-400 text-md font-medium mb-2"
                            >
                                {value}
                            </a>
                        ) : (
                            <div className="text-white dark:text-gray-300 text-md font-medium mb-2">{value}</div>
                        )}

                        {note && (
                            <div className="flex items-center gap-1 text-gray-100 dark:text-gray-400 text-sm mt-1">
                                {SubIcon ? <SubIcon className="w-3 h-3" /> : <MessageCircle className="w-3 h-3" />}
                                <span>{note}</span>
                            </div>
                        )}
                    </div>
                </Card>
            ))}
        </div>
    );
}
