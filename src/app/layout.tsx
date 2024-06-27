import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocean.",
  description: "best modern crn dashboard for engineering teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden min-h-svh bg-slate-900 text-slate-400 text-lg`}
      >
        <Loader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
