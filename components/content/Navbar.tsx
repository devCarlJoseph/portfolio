"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavData } from "@/lib/data/navigation";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";


export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedLink, setSelectedLink] = useState<string | null>(null);
    const currentPath = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkSelect = (href: string) => {
        setSelectedLink(href);
        setIsMenuOpen(false);
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                    isScrolled && !isMenuOpen
                        ? "backdrop-blur-md bg-white/70 dark:bg-slate-900/70"
                        : "bg-white dark:bg-slate-900"
                )}
            >
                <nav className="w-full">
                    <div className="mx-auto w-full max-w-screen-xl flex justify-between items-center py-4 px-6 lg:px-16">
                        <div>
                            <Link
                                href="#hero"
                                className="text-[1.2rem] font-extrabold tracking-widest text-gray-900 dark:text-gray-200 hover:text-gray-400 dark:hover:text-sky-400 transition"
                            >
                                Carl Joseph
                            </Link>
                            <div className="text-[0.85rem] text-gray-600 dark:text-gray-400">
                                Future Software Developer
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            {NavData.navbar.data.map((link) => {
                                const isActive = currentPath === link.href || selectedLink === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onMouseDown={() => handleLinkSelect(link.href)}
                                        className={cn(
                                            "nav-link font-normal text-sm p-2 rounded-md",
                                            isActive
                                                ? "text-gray-900 dark:text-white bg-gray-200 dark:bg-slate-800"
                                                : "text-gray-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-sky-400"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <AnimatedThemeToggler className="ml-2 cursor-pointer hover:text-sky-400" />
                        </div>
                    </div>
                </nav>
            </header>



            <div
                className={cn(
                    "fixed top-16 left-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-md transition-transform transform z-40 lg:hidden",
                    isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                )}
            >
                <div className="flex flex-col space-y-2 py-6 px-4 lg:px-8 max-w-screen-lg mx-auto w-full">
                    {NavData.navbar.data.map((link) => {
                        const isActive = currentPath === link.href || selectedLink === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onMouseDown={() => handleLinkSelect(link.href)}
                                className={cn(
                                    "py-2 px-4 rounded-md text-gray-200 text-center",
                                    isActive ? "bg-slate-800 text-white" : "hover:bg-slate-800 hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <AnimatedThemeToggler className="mt-4 p-2 rounded-md w-full text-gray-200 hover:bg-slate-800 cursor-pointer" />
                </div>

            </div>

            {isMenuOpen && (
                <div
                    className="fixed top-16 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-30"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    );
}
