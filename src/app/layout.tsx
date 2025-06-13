import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { poppins } from "../Font/Font.ts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recall",
  description: "A modern, open-source, and self-hosted note-taking app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
