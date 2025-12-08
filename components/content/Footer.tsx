"use client";

import Link from "next/link";
import { NavData } from "@/lib/data/navigation";

export default function Footer() {

    return (
        <footer className="bg-slate-900 text-slate-300 py-10">
            <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500"></div>

            <div className="max-w-6xl mx-auto mt-5 px-4 md:flex md:justify-between md:items-start">

                <div className="mb-6 md:mb-0">
                    <h4 className="text-xl font-semibold text-white mb-2">Carl Joseph Sumagang</h4>
                    <p className="text-sm max-w-xs">
                        Future Software Developer
                    </p>
                    <p>
                        Cordova, Cebu, Philippines
                    </p>
                </div>

                <div className="mb-6 md:mb-0">
                    <h4 className="text-xl font-semibold text-white mb-2">Quick Links</h4>
                    <div className="flex flex-col space-y-2 text-sm font-medium">
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
                </div>

                <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Connect</h4>
                    <div className="flex flex-col space-y-2 text-sm font-medium">
                        {NavData.footer.data.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-sky-400 transition flex items-center"
                            >
                                {link.icon} {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 pt-6 text-center text-md text-slate-500">
                &copy; {new Date().getFullYear()} Carl Joseph Sumagang. All rights reserved.
            </div>

        </footer>
    );
}
