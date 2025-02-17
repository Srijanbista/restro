import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactRibbon from "@/components/ContactRibbon";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dine Sphere",
  description: "A Restaurant Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Toaster />
        <ContactRibbon />
        <Navbar />
        <section className="overflow-y-auto">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
