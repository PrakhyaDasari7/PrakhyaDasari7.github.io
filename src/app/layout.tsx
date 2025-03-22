import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpaceScene from "@/components/SpaceScene";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "A space-themed portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <SpaceScene />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
