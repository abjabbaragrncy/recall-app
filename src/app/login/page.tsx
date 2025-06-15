"use client";

import Social from "@/components/Social";
import { manrope, poppins } from "@/Font/font";

import Link from "next/link";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { LuLockKeyhole } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="flex items-center justify-center pt-20 min-h-[65vh]">
      <div className=" p-10 rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] space-y-10">
        <div className="space-y-1.5 text-center">
          <h2
            className={`font-semibold text-xl leading-8 text-[#131314] ${poppins.className}`}
          >
            Login to Your Account
          </h2>

          <p className={`text-Subtitle leading-6 ${manrope.className}`}>
            Lets login to your account to continue where you left.
          </p>
        </div>
        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          <fieldset className="border border-borderColor px-4 py-3 rounded-4xl flex items-center  gap-2.5">
            <legend
              className={`text-BlackBg px-0.5 text-sm leading-5 ${poppins.className}`}
            >
              Email address
            </legend>
            <TfiEmail className="text-Inactive text-xl font-bold" />
            <input
              type="email"
              name="email"
              id=""
              placeholder="ex: johndoe@gmail.com"
              className={`w-full border-none focus:outline-none focus:border-none ${manrope.className} text-Inactive leading-5.5 tracking-[0.07px]`}
            />
          </fieldset>
          <fieldset className="border border-borderColor px-4 py-3 rounded-4xl flex items-center  gap-2.5">
            <legend
              className={`text-BlackBg px-0.5 text-sm leading-5 ${poppins.className}`}
            >
              Password
            </legend>
            <LuLockKeyhole className="text-Inactive text-xl font-bold" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              placeholder="*************"
              className={`w-full border-none focus:outline-none focus:border-none ${manrope.className} text-Inactive leading-5.5 tracking-[0.07px]`}
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </fieldset>

          <Link href={"/"}>
            <span
              className={`${poppins.className} font-medium leading-5 underline  text-[#425BD8]`}
            >
              Forgot Password?
            </span>
          </Link>
          <div className="space-y-3">
            <input
              type="submit"
              value="Login"
              className={`${poppins.className} mt-4 font-medium leading-5 rounded-4xl px-2.5 py-4.5 bg-[#425BD8] text-white w-full`}
            />

            <h3
              className={`${poppins.className} text-sm font-medium leading-5 text-center`}
            >
              <span className="text-TextInactive">New here?</span>
              <Link className="text-[#425BD8] underline" href={"/signUp"}>
                Create Account
              </Link>
            </h3>
          </div>
        </form>
        <Social />
      </div>
    </section>
  );
}
