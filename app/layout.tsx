import type { Metadata } from "next";
import Navbar from "@/components/content/Navbar";
import Footer from "@/components/content/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "CJS Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-gray-200">
        <Navbar />
         <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
