"use client";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 bg-opacity-95 backdrop-blur-sm border-b border-slate-700 shadow-xl">
      <Navbar />
    </header>
  );
}
