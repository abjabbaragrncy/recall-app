"use client";
import Social from "@/components/Social";
import { manrope, poppins } from "@/Font/font";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaApple, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { LuLockKeyhole, LuUserRound } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      style={{
        backgroundImage: 'url("/assets/image/login_bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        objectFit: "cover",
      }}
      className="flex flex-col items-center justify-evenly gap-20 pt-8 pb-10 min-h-[100vh]"
    >
      <div className="w-[36%] mt-20 bg-white p-10 rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] space-y-10">
        <div className="space-y-1.5 text-center">
          <h2
            className={`font-semibold text-xl leading-8 text-[#131314] ${poppins.className}`}
          >
            Create New Account
          </h2>

          <p className={`text-Subtitle leading-6 ${manrope.className}`}>
            Let’s create your account with simple & easy steps.
          </p>
        </div>
        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          <fieldset className="border border-borderColor px-4 py-3 rounded-4xl flex items-center  gap-2.5">
            <legend
              className={`text-BlackBg px-0.5 text-sm leading-5 ${poppins.className}`}
            >
              Name
            </legend>

            <LuUserRound className="text-Inactive text-xl font-bold" />
            <input
              type="text"
              name="name"
              placeholder="ex: John Doe"
              className={`w-full border-none focus:outline-none focus:border-none ${manrope.className} text-Inactive leading-5.5 tracking-[0.07px]`}
            />
          </fieldset>
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

          <div className="space-y-3">
            <input
              type="submit"
              value="Create Account"
              className={`${poppins.className} mt-4 font-medium leading-5 rounded-4xl px-2.5 py-4.5 bg-[#425BD8] text-white w-full`}
            />

            <h3
              className={`${poppins.className} text-sm font-medium leading-5 text-center space-x-1.5`}
            >
              <span className="text-TextInactive">
                Already have an account?
              </span>
              <Link className="text-[#425BD8] underline" href={"/login"}>
                Login
              </Link>
            </h3>
          </div>
        </form>
        <Social />
      </div>
      <div className="flex items-center justify-evenly gap-20 bg-white border py-3 pl-8 pr-3 rounded-[60px]">
        <h2
          className={`${poppins.className} text-[#595F71] font-medium leading-5`}
        >
          We recommend to use our mobile application to use all features
        </h2>
        <div className="flex items-center gap-4">
          <button
            className={`flex items-center gap-2.5 rounded-[40px] px-3 py-1.5 ${poppins.className} text-sm leading-5 bg-BlackBg text-white`}
          >
            <FaApple />
            <span>App Store</span>
          </button>
          <button
            className={`flex items-center gap-2.5 rounded-[40px] px-3 py-1.5 ${poppins.className} text-sm leading-5 bg-BlackBg text-white`}
          >
            <Image
              src={"/assets/SVG/google-play.svg"}
              alt="google play"
              width={18}
              height={18}
            />

            <span>Google Play</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
