import { manrope, poppins } from "@/Font/font";
import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Social() {
  return (
    <div className="space-y-3">
      <h3 className="flex items-center w-full space-x-4">
        <span className="flex-grow bg-[#BABFCF] rounded h-[1px]"></span>
        <span
          className={`${manrope.className} leading-5 text-[#595F71] text-sm`}
        >
          or Continue with
        </span>
        <span className="flex-grow bg-[#BABFCF] rounded h-[1px]"></span>
      </h3>
      <div className="grid grid-cols-2 justify-center items-center gap-3">
        <button className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-4xl border border-[#BABFCF]">
          <FcGoogle />
          <span
            className={`${poppins.className} text-[#595F71] font-medium leading-5 text-sm `}
          >
            Google
          </span>
        </button>
        <button className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-4xl border border-[#BABFCF]">
          <FaApple />
          <span
            className={`${poppins.className} text-[#595F71] font-medium leading-5 text-sm `}
          >
            Apple
          </span>
        </button>
      </div>
    </div>
  );
}
