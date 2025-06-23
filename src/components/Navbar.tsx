"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { doLogout } from "@/actions";
import { poppins, roboto_flex } from "@/Font/font";
import { SessionDetails } from "@/session/sessionDetails";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useEffect, useState } from "react";
import { CiLogin } from "react-icons/ci";
import DownloadAppModal from "./DownloadAppModal";
interface User {
  name: string;
  email: string;
  image: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const [user, setUser] = useState<User | null | undefined>(null);
  useEffect(() => {
    async function fetchUser() {
      const res = await SessionDetails();
      setUser(res);
    }
    fetchUser();
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-Primary transition-shadow duration-300"
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex flex-wrap items-center justify-between py-3 px-4 lg:px-0 ">
          <div className="flex items-center gap-4">
            <div className="lg:hidden  z-[999]">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-2xl focus:outline-none"
                aria-label="Toggle Menu"
              >
                <Image
                  src="/assets/SVG/List.svg"
                  height={28}
                  width={28}
                  alt="Icon"
                  className={`p-0.5  rounded-lg ${
                    isMenuOpen ? "bg-white/30" : ""
                  }`}
                />
              </button>

              {/* Dropdown menu that opens below nav */}
              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-md border-b border-BorderMild z-[999]">
                  <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col items-center gap-4 py-6">
                      <Link
                        href="/"
                        className="text-BlackBg text-lg font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="text-BlackBg text-lg font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        href="/contact"
                        className="text-BlackBg text-lg font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </Link>
                      <div className="border-b border-Border-Accent px-4 py-2">
                        <DownloadAppModal triggerClassName="text-Primary text-sm font-medium" />
                      </div>
                    </div>

                    <div className="w-full  border-t border-BorderMild text-center">
                      <button
                        className="w-full py-2 bg-white flex items-center justify-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Image
                          src="/assets/SVG/CaretUp.svg"
                          height={24}
                          width={24}
                          alt="Close Icon"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <Image
                src="/assets/logo/LogoLight.png"
                width={32}
                height={32}
                alt="wellsnap"
              />
              <Link
                href="/"
                className={`text-lg lg:text-2xl font-bold text-white  ${roboto_flex.className}`}
              >
                Recall
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`px-3.5 py-1 rounded-full transition-all duration-400 ${
                pathname === "/"
                  ? "text-white bg-white/20"
                  : "text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3.5 py-1 rounded-full transition-all duration-400 ${
                pathname === "/about"
                  ? "text-white bg-white/20"
                  : "text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-3.5 py-1 rounded-full transition-all duration-400 ${
                pathname === "/contact"
                  ? "text-white bg-white/20"
                  : "text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center lg:space-x-2 space-x-3">
            <div>
              <MagnifyingGlass size={20} className="text-white" />
            </div>

            <DownloadAppModal triggerClassName="hidden lg:block font-medium px-3.5 py-1 text-white rounded-xl text-sm cursor-pointer" />
            {user ? (
              <div className="flex items-center gap-1.5 p-[5px] border border-white rounded-full pr-[9px] bg-white/10">
                <Image
                  // src={"/assets/image/rectangle 6.png"}
                  src={user?.image}
                  height={24}
                  width={24}
                  alt="an user image"
                  className="rounded-full"
                />
                <p className="text-white font-poppins text-sm font-medium leading-tight">
                  {user?.name}
                  {/* user */}
                </p>

                <Popover>
                  <PopoverTrigger>
                    <Image
                      src="assets/SVG/CaretDown.svg"
                      height={14}
                      width={14}
                      alt="an user image"
                      className="rounded-full cursor-pointer"
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="bg-white p-5 rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]">
                      <div className="flex items-center gap-3">
                        <Image
                          // src={"/assets/image/rectangle 6.png"}
                          src={user?.image}
                          height={34}
                          width={34}
                          alt="an user image"
                          className="rounded-full"
                        />
                        <div>
                          <h1
                            className={`${poppins.className} text-sm font-medium leading-5 text-BlackBg `}
                          >
                            {user?.name}
                            {/* User */}
                          </h1>

                          <p
                            className={`${poppins.className} text-[13px] leading-5 text-TextSubtle`}
                          >
                            {user?.email}
                            {/* user@gmail.com */}
                          </p>
                        </div>
                      </div>
                      <form action={doLogout}>
                        <button
                          type="submit"
                          className={`${poppins.className} flex items-center justify-center gap-2 text-[13px] text-BlackBg border border-borderColor mt-4 font-medium leading-5 rounded-4xl px-4 py-1.5 w-full`}
                        >
                          <CiLogin className="font-bold text-sm text-BlackBg" />
                          <span>Log Out</span>
                        </button>
                      </form>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <Link href={"/login"}>
                <button className="py-1.5 px-3.5 bg-white text-Primary hover:shadow-xl/20 rounded-full text-sm font-medium cursor-pointer">
                  Login/Signup
                </button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
