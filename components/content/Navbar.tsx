"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NavData } from "@/lib/data/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 bg-slate-900 bg-opacity-95 backdrop-blur-sm border-b border-slate-700 shadow-xl">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    
                    <div>
                        <Link href="#hero" className="text-[1.2rem] font-extrabold text-white tracking-widest hover:text-sky-400 transition">
                            Carl Joseph
                        </Link>
                        <div className="text-[0.85rem]">
                            Future Software Developer
                        </div>
                    </div>

                    <div className="hidden md:flex space-x-6 text-sm font-medium">
                        {NavData.navbar.data.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-sky-400 transition"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-gray-400 hover:text-sky-400 transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </nav>
                {isOpen && (
                    <div className="md:hidden pb-4 px-4 border-t border-slate-800">
                        <div className="flex flex-col space-y-2 text-center">
                            {NavData.navbar.data.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="py-2 text-gray-200 hover:bg-slate-800 rounded-md"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
