"use client";
import AppInstallPrompt from "@/components/AppInstallPrompt";
import { manrope, poppins } from "@/Font/font";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { LuLockKeyhole } from "react-icons/lu";

export default function SetNewPasswordPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      className="flex flex-col items-center justify-evenly gap-10 pt-8 pb-10 min-h-screen px-4"
    >
      <div className="w-full max-w-md bg-white p-6 md:p-10 rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] space-y-8 mt-10">
        <div className="space-y-1.5 text-center">
          <h2
            className={`font-semibold text-xl leading-8 text-[#131314] ${poppins.className}`}
          >
            Set New Password
          </h2>
          <p className={`text-Subtitle leading-6 ${manrope.className}`}>
            Let’s set a strong password to keep your account secure
          </p>
        </div>

        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          {/* Password Field */}
          <fieldset className="border border-borderColor px-4 py-3 rounded-4xl flex items-center gap-2.5">
            <legend
              className={`text-BlackBg px-0.5 text-sm leading-5 ${poppins.className}`}
            >
              New Password
            </legend>
            <LuLockKeyhole className="text-Inactive text-xl font-bold" />
            <input
              type={showPassword ? "text" : "password"}
              name="new-password"
              placeholder="*************"
              required
              className={`w-full border-none focus:outline-none ${manrope.className} text-Inactive leading-5.5 tracking-[0.07px]`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </fieldset>

          {/* Confirm Password Field */}
          <fieldset className="border border-borderColor px-4 py-3 rounded-4xl flex items-center gap-2.5">
            <legend
              className={`text-BlackBg px-0.5 text-sm leading-5 ${poppins.className}`}
            >
              Retype New Password
            </legend>
            <LuLockKeyhole className="text-Inactive text-xl font-bold" />
            <input
              type={showPassword ? "text" : "password"}
              name="retype-password"
              placeholder="*************"
              required
              className={`w-full border-none focus:outline-none ${manrope.className} text-Inactive leading-5.5 tracking-[0.07px]`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </fieldset>

          <input
            type="submit"
            value="Set New Password"
            className={`${poppins.className} font-medium leading-5 rounded-3xl px-2.5 py-4 bg-[#425BD8] text-white w-full`}
          />
        </form>
      </div>

      <AppInstallPrompt />
    </section>
  );
}
