"use client";

import ClientLayout from "@/components/ClientLayout";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthProvider";
import useMetadata from "@/hooks/useMetadata";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useMetadata(
    "Recall Products | Stay Informed & Protected",
    "Your safety, peace of mind, and informed decisions are our top priorities. Stay vigilant and ahead with real-time recall alerts. Search, browse, and track recalled products to stay protected in a rapidly changing world."
  );
  return (
    <html lang="en">
      <meta name="color-scheme" content="light" />

      <body>
        <header>
          <Navbar />
        </header>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
