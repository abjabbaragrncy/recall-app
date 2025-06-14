import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
      <body>
        <header>
          <Navbar />
        </header>

        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
