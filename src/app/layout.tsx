import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
// import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Selasie Sepenu",
  description: "The portfolio of an Accra based SE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">

      <body className="bg-main-bg">
        <main className=" px-5 md:px-10 body">
        {children}
        </main>
        <Analytics/>
        {/* <ThemeToggle/> */}
       </body>
    </html>
  );
}
