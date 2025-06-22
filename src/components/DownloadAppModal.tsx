"use client";
import { manrope, poppins } from "@/Font/font";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Adjust path as needed
import Image from "next/image";

export default function DownloadAppModal() {
  return (
    <Dialog className={`${manrope.variable} ${poppins.variable} `}>
      <DialogTrigger asChild>
        <button className="hidden lg:block font-medium px-3.5 py-1 text-white rounded-xl text-sm cursor-pointer">
          Download App
        </button>
      </DialogTrigger>

      <DialogContent className="animate-slide-in-top fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-none  max-w-[706px] shadow-none">
        <div className="w-full p-[60px] bg-[#415ad7] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center gap-10 relative">
          {/* Text Section */}
          <div className="flex-1 flex flex-col items-center text-center gap-[50px]">
            <div>
              <DialogTitle className="text-white font-poppins leading-[38px] mb-5">
                Download our app and explore more
              </DialogTitle>

              <p className="text-white opacity-80 text-base text-center font-normal font-manrope leading-[24px]  tracking-[0.005em]">
                Recall mobile application offers more features like browsing
                products, seeing community scam alerts, submitting your own
                report, and many more.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {/* App Store */}
              <button className="w-[140px] md:w-[150px] px-3 py-2 bg-white rounded-full flex items-center gap-2">
                <Image
                  src="assets/SVG/Apple.svg"
                  width={22}
                  height={22}
                  alt="Apple Logo"
                />
                <span className="text-[#131314] text-sm font-medium font-poppins">
                  App Store
                </span>
              </button>

              {/* Google Play */}
              <button className="w-[140px] md:w-[150px] px-3 py-2 bg-white rounded-full flex items-center gap-2">
                <Image
                  src="assets/SVG/google-play.svg"
                  width={22}
                  height={22}
                  alt="Google Play Logo"
                />
                <span className="text-[#131314] text-sm font-medium font-poppins">
                  Google Play
                </span>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
