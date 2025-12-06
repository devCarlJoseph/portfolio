import type { Metadata } from "next";
import Header from "@/components/partial/Header";
import Footer from "@/components/partial/Footer";
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
