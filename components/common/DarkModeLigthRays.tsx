"use client";

import { useEffect, useState } from "react";
import { LightRays } from "@/components/ui/light-rays";

export default function DarkModeLightRays() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  if (!isDark) return null;

  return <LightRays className="fixed inset-0 -z-10" theme="coolBlue" blur={40} speed={16} length="100vh" />;
}
