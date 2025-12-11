"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavData } from "@/lib/data/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [activeStyles, setActiveStyles] = useState({ left: 0, width: 0 });
    useEffect(() => {
        const activeLink = document.querySelector(".nav-link.active") as HTMLElement;
        if (activeLink && navRef.current) {
            setActiveStyles({
                left: activeLink.offsetLeft,
                width: activeLink.offsetWidth,
            });
        }
    }, [currentPath]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                    isScrolled && !isMenuOpen ? "backdrop-blur-md bg-slate-900/70" : "bg-slate-900"
                )}
            >
                <nav className="container mx-auto flex justify-between items-center px-4 py-4 relative">
                    <div>
                        <Link
                            href="#hero"
                            className="text-[1.2rem] font-extrabold text-white tracking-widest hover:text-sky-400 transition"
                        >
                            Carl Joseph
                        </Link>
                        <div className="text-[0.85rem] text-gray-400">
                            Future Software Developer
                        </div>
                    </div>
                    <div ref={navRef} className="hidden md:flex items-center gap-4 relative">
                        {NavData.navbar.data.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "nav-link font-normal text-sm text-gray-200 p-2 relative transition-all rounded-md z-50",
                                    currentPath === link.href
                                        ? "active text-white bg-slate-800"
                                        : "hover:text-sky-400"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div
                            className="absolute h-9 bg-slate-800 rounded-lg transition-all duration-300 z-40"
                            style={{ left: activeStyles.left, width: activeStyles.width }}
                        />
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-200 hover:text-sky-400 transition z-50"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </header>

            <div
                className={cn(
                    "fixed top-16 left-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-md transition-transform transform z-40 md:hidden",
                    isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                )}
            >
                <div className="flex flex-col space-y-2 py-6 px-4">
                    {NavData.navbar.data.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                                "py-2 px-4 rounded-md text-gray-200 transition-all text-center",
                                currentPath === link.href
                                    ? "bg-slate-800 text-white"
                                    : "hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
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
