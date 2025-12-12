"use client";

import Link from "next/link";
import { NavData } from "@/lib/data/navigation";

export function Footer() {
    return (
        <footer className="bg-gradient-to-t from-white via-white/95 to-white text-gray-900 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-900 dark:text-slate-300 py-12 w-full relative transition-colors duration-300">
            <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-16 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Carl Joseph Sumagang
                    </h4>
                    <p className="text-sm max-w-xs leading-relaxed text-gray-700 dark:text-gray-400">
                        Future Software Developer
                    </p>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-400">
                        Cordova, Cebu, Philippines
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Quick Links
                    </h4>
                    <div className="flex flex-col space-y-2 text-sm font-medium">
                        {NavData.navbar.data.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-400 hover:text-gray-500 dark:hover:text-sky-400 transition focus:outline-none"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Connect
                    </h4>
                    <div className="flex flex-col space-y-2 text-sm font-medium">
                        {NavData.footer.data.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-400 hover:text-gray-500 dark:hover:text-sky-400 transition flex items-center gap-2 focus:outline-none"
                            >
                                {link.icon} {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Recent Projects
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-400">
                        <li>HayGo Car Rental</li>
                        <li>Portfolio Website</li>
                        <li>SRP Altar Tracker</li>
                        <li>CjCo Restaurant</li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 pt-6 text-center text-sm text-gray-500 dark:text-gray-400 mx-auto max-w-screen-xl px-6 lg:px-16 transition-colors duration-300">
                &copy; {new Date().getFullYear()} Carl Joseph Sumagang. All rights reserved.
            </div>
        </footer>
    );
}
