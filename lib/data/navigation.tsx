import{ Linkedin, Github, Twitter, Facebook } from "lucide-react";

export const NavData = {
    navbar: {
        data: [
            { name: "Home", href: "/" },
            { name: "About", href: "about" },
            { name: "Projects", href: "projects" },
            { name: "Contact", href: "contact" },
        ]
    },
    footer: {
        data : [
            { name: "GitHub", href: "https://github.com/devCarlJoseph", icon: <Github className="w-5 h-5 inline mr-2" /> },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/sumagang-carl-joseph-38291a379/", icon: <Linkedin className="w-5 h-5 inline mr-2" />},
            { name: "Facebook", href: "https://www.facebook.com/Jeekoy17", icon: <Facebook className="w-5 h-5 inline mr-2" /> },
            { name: "Twitter", href: "#", icon: <Twitter className="w-5 h-5 inline mr-2" /> },
        ]
    }
} 