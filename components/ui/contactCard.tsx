"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";

interface SocialLink {
  name: string;
  href: string;
  Icon: typeof Mail;
}

export default function ContactCard() {
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const socialLinks: SocialLink[] = [
    { name: "Email", href: "mailto:carl.joseph.sumagang@example.com", Icon: Mail },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sumagang-carl-joseph-38291a379/", Icon: Linkedin },
    { name: "GitHub", href: "https://github.com/devCarlJoseph", Icon: Github },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Thank you for your message! I will be in touch soon.");
    setShowAlert(true);
    e.currentTarget.reset();
  };

  return (
    <div className="bg-slate-800/50 p-6 sm:p-10 rounded-xl shadow-lg border border-slate-700 mx-auto max-w-xl">
      
      <p className="text-xl text-gray-300 mb-6 text-center">
        I'm always open to discussing new opportunities, projects, and learning new things. Feel free to reach out!
      </p>

      <div className="flex justify-center mb-8 space-x-6">
        {socialLinks.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            className="flex flex-col items-center text-sky-400 hover:text-sky-300 transition"
            aria-label={name}
          >
            <Icon className="w-8 h-8" />
            <span className="text-sm mt-1">{name}</span>
          </a>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {showAlert && (
          <div className="p-3 bg-green-900/50 text-green-300 rounded-lg text-center font-semibold" role="alert">
            {message}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:ring-sky-500 transition"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:ring-sky-500 transition"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-sky-500 focus:ring-sky-500 transition"
            placeholder="Your Message"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
