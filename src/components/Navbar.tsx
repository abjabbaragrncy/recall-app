"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { roboto_flex } from "../font/Font.ts";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-Primary transition-shadow duration-300"
    >
      <div className="mx-auto max-w-7xl sm:px-3 lg:px-0">
        <nav className="flex flex-wrap items-center justify-between py-3">
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/logo/LogoLight.png"
              width={32}
              height={32}
              alt="wellsnap"
            />
            <a
              href="#"
              className={`text-2xl font-bold text-white ${roboto_flex.className}`}
            >
              Recall
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`px-3.5 py-1 rounded-full transition-all duration-400 ${
                pathname === "/about"
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

          <div className="flex items-center space-x-2">
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

          <div className="lg:hidden relative">
            <utton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span id="menu-icon">☰</span>
              <span id="close-icon" className="hidden">
                ✖
              </span>
            </utton>

            <ul
              id="mobile-menu"
              className="hidden absolute right-0 mt-3 w-52 bg-white text-white/70 shadow-lg rounded-lg z-10 p-2 space-y-1 transition-all duration-300"
            >
              <li>
                <a href="#about" className="block px-4 py-2 hover:bg-gray-100">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="block px-4 py-2 hover:bg-gray-100">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact
                </a>
              </li>
              <li className="mt-2 space-y-2">
                <button className="font-medium py-2 px-4 text-white rounded-xl border border-white text-sm ease-in-out hover:bg-white/10 transition-all duration-400">
                  Watch Demo
                </button>
                <button className="w-full text-left py-2 px-4 bg-Primary text-white hover:bg-indigo-800 rounded-xl mt-1 font-medium">
                  Download App
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
