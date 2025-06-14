"use client";
import { List, MagnifyingGlass, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-Primary transition-shadow duration-300"
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex flex-wrap items-center justify-between py-3 px-4 lg:px-0 ">
          <div className="flex items-center gap-4">
            <div className="lg:hidden relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-2xl focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <List size={24} />}
              </button>

              {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-Background-Inverse z-[999] flex flex-col justify-between">
                  {/* <div className="pt-20 flex flex-col justify-start items-center gap-6">
                  <Link
                    href="/"
                    className="text-Text-Default text-lg font-medium font-['Poppins']"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-Text-Default text-lg font-medium font-['Poppins']"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-Text-Default text-lg font-medium font-['Poppins']"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="mt-6 border-b border-Border-Accent px-4 py-2">
                    <span className="text-Text-Accent text-sm font-medium font-['Poppins']">
                      Download App
                    </span>
                  </div>
                </div>

                <div className="w-full p-4 border-t border-Border-Mild text-center">
                  <button
                    className="w-full py-3 bg-white text-Primary font-medium rounded-xl text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Close Menu
                  </button>
                </div> */}
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
              <a
                href="#"
                className="text-lg lg:text-2xl font-bold text-Inactive "
              >
                Recall
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`px-3.5 py-1 rounded-full transition-all duration-400 ${
                pathname === "/"
                  ? "text-white bg-white/20"
                  : "text-white/70 hover:bg-white/20 hover:text-Inactive"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3.5 py-1 rounded-full transition-all duration-400 ${
                pathname === "/about"
                  ? "text-white bg-white/20"
                  : "text-white/70 hover:bg-white/20 hover:text-Inactive"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-3.5 py-1 rounded-full transition-all duration-400 ${
                pathname === "/contact"
                  ? "text-white bg-white/20"
                  : "text-white/70 hover:bg-white/20 hover:text-Inactive"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center lg:space-x-2 space-x-3">
            <div>
              <MagnifyingGlass size={20} className="text-white" />
            </div>
            <button
              id="open-modal"
              className="hidden lg:block font-medium px-3.5 py-1 text-white rounded-xl text-sm  cursor-pointer"
            >
              Download App
            </button>
            <button className="py-1.5 px-3.5 bg-white text-Primary hover:shadow-xl/20 rounded-full text-sm font-medium cursor-pointer">
              Login/Signup
            </button>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
