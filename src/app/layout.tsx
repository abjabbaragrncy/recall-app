import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Recall Alerts – Stay Informed & Protected",
  description:
    "Your safety, peace of mind, and informed decisions are our top priorities. Stay vigilant and ahead with real-time recall alerts. Search, browse, and track recalled products to stay protected in a rapidly changing world.",
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
        <ClientLayout>{children}</ClientLayout>
        {/* <main className="pt-12">{children}</main> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
