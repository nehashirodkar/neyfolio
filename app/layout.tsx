import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import FloatingChat from "@/components/FloatingChat";

// Playful handwriting font — used for the "Welcome to Neyfolio" tag in the hero
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Neha Shirodkar — AI Software Engineer",
  description:
    "Personal portfolio with an AI assistant grounded in my projects, case studies, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={caveat.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <StarfieldBackground />
        <Navbar />
        <div className="flex-1 relative">{children}</div>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
