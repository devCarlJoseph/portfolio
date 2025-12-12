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
  title: "CJS Portfolio",
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

