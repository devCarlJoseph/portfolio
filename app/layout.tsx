import type { Metadata } from "next";
import { Navbar } from "@/components/content/Navbar";
import { Footer } from "@/components/content/Footer";
import "./globals.css";
import { Inter, Sora } from "next/font/google";
import DarkModeLightRays from "@/components/common/DarkModeLigthRays";
import ThemeProvider from "@/components/common/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {

  title: "Carl Joseph Sumagang | Portfolio",
  description: "Portfolio of Carl Joseph Sumagang, a highly motivated Future Developer passionate about full-stack development and software engineering.",
  keywords: ["Carl Joseph Sumagang", "Portfolio", "Web Developer", "Future Developer", "Full Stack", "Software Engineering", "HayGo Car Rental", "CjCo Restaurant"],
  authors: [{ name: "Carl Joseph Sumagang" }],
  verification: {
    google: "nFsP4Xn7VtyTeXQ0aj3OqwDp7owD53FLf9G03wHSwWs",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Carl Joseph Sumagang | Portfolio",
    description: "Building efficient, user-friendly applications with passion.",
    url: "carlsumagang.vercel.app",
    siteName: "Carl Joseph Sumagang - Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carl Joseph Sumagang | Portfolio",
    description: "Building efficient, user-friendly applications with passion.",
  },
};

const mainVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Carl Joseph Sumagang",
              "url": "https://carlsumagang.vercel.app",
              "sameAs": [
                "https://www.linkedin.com/in/carl-joseph-sumagang-38291a379/",
                "https://github.com/devCarlJoseph",
                "https://www.facebook.com/Jeekoy17",
                "https://www.instagram.com/kuyacaarl/"
              ]
            })
          }}
        />

      </head>

      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider />
        <DarkModeLightRays />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

