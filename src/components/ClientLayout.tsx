"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideFooterPaths = [
    "/login",
    "/signUp",
    "/forgetPassword",
    "/OTP",
    "/newPassword",
  ];

  const shouldHideFooter = hideFooterPaths.includes(pathname);

  return (
    <>
      <main className="pt-12">{children}</main>
      {!shouldHideFooter && <Footer />}
    </>
  );
}
