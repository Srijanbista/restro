import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactRibbon from "@/components/ContactRibbon";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bistro Bliss",
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
        <ContactRibbon />
        <Navbar />
        <section className="overflow-y-auto">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
