"use client"

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";

export function ContactForm() {

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

  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!showAlert) return;

    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showAlert]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setShowAlert(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setMessage("Thank you for your message! I will be in touch soon.");
      setShowAlert(true);
      form.reset();
    } catch {
      setMessage("Something went wrong. Please try again.");
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };


  return (
    <Card className="relative dark:bg-slate-800/50 p-4 sm:p-6 rounded-xl shadow-lg border border-slate-700 overflow-hidden w-full order-1 lg:order-2">
      <ShineBorder borderWidth={2} shineColor={isDark ? ["#0ea5e9", "#38bdf8"] : ["#666666ff", "#000000ff"]} duration={12} className="rounded-xl" />

      <div className="relative z-10">
        <CardHeader>
          <CardTitle className="text-xl font-bold dark:text-gray-300 mb-2 text-start">
            Let’s get in touch
          </CardTitle>
          <CardDescription className="text-md dark:text-gray-300 mb-6 text-start">
            I'm always open to discussing new opportunities, projects, and learning new things.
            Whether you want to collaborate or simply connect, feel free to reach out anytime.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {showAlert && (
              <div className="p-3 bg-green-900/50 text-green-300 rounded-lg text-center font-semibold" role="alert">
                {message}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 dark:bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500
              focus:border-sky-500 focus:ring-sky-500 transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 dark:bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500
              focus:border-sky-500 focus:ring-sky-500 transition"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 dark:bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500
              focus:border-sky-500 focus:ring-sky-500 transition"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-5 mb-2 py-2.5 bg-black dark:bg-sky-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 dark:hover:bg-sky-600 transition duration-300 disabled:opacity-50 cursor-pointer">
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </CardContent>
      </div>
    </Card>
  );
}
