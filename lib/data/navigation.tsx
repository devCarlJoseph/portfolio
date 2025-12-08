import{ Linkedin, Github, Twitter, Facebook } from "lucide-react";

export const NavData = {
    navbar: {
        data: [
            { name: "Home", href: "home" },
            { name: "About", href: "about" },
            { name: "Projects", href: "projects" },
            { name: "Contact", href: "contact" },
        ]
    },
    footer: {
        data : [
            { name: "GitHub", href: "#", icon: <Github className="w-5 h-5 inline mr-2" /> },
            { name: "LinkedIn", href: "#", icon: <Linkedin className="w-5 h-5 inline mr-2" />},
            { name: "Facebook", href: "#", icon: <Facebook className="w-5 h-5 inline mr-2" /> },
            { name: "Twitter", href: "#", icon: <Twitter className="w-5 h-5 inline mr-2" /> },
        ]
    }
} 