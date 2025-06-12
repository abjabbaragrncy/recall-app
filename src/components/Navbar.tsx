import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-Primary transition-shadow duration-300"
    >
      <div className="mx-auto max-w-7xl px-3">
        <nav className="flex flex-wrap items-center justify-between py-5">
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/logo/LogoLight.png"
              width={32}
              height={32}
              alt="wellsnap"
            />
            <a href="#" className="text-2xl font-bold text-white">
              Recall
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white/70 px-3 py-2 hover:bg-white/10 hover:text-white hover:rounded-lg transition-all duration-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/70 px-3 py-2 hover:bg-white/10 hover:text-white hover:rounded-lg transition-all duration-400"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white/70 px-3 py-2 hover:text-white hover:bg-white/10 hover:rounded-lg transition-all duration-400"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <div>
              <Search className="text-white" />
            </div>
            <button
              id="open-modal"
              className="font-medium py-2 px-4 text-white rounded-xl text-sm ease-in-out hover:bg-white/10 transition-all duration-400 cursor-pointer"
            >
              Download App
            </button>
            <button className="py-2 px-4 bg-white text-Primary hover:shadow-xl/20 rounded-lg text-sm font-medium cursor-pointer">
              Get Started
            </button>
          </div>

          <div className="lg:hidden relative">
            <button
              id="menu-toggle"
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span id="menu-icon">☰</span>
              <span id="close-icon" className="hidden">
                ✖
              </span>
            </button>

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
