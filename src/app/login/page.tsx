"use client";

import AppInstallPrompt from "@/components/AppInstallPrompt";
import Social from "@/components/Social";
import { useAuthContext } from "@/context/AuthProvider";
import { manrope, poppins } from "@/Font/font";
import useMetadata from "@/hooks/useMetadata";
import { Envelope, Eye, EyeSlash, Lock } from "@phosphor-icons/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  useMetadata(
    "Login | Recall Products",
    "Access your Recall Products account securely."
  );

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { setAuthData } = useAuthContext();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
        formData
      );
      const { access_token, refresh_token, user } = res.data;

      // Store in context
      setAuthData({ access_token, refresh_token, user });

      // Optional: Save in localStorage
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("user", JSON.stringify(user));

      // Demo redirect after login
      router.push("/"); // Change to your route
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <section
      style={{
        backgroundImage: 'url("/assets/image/login_bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
      className="flex flex-col items-center justify-center px-4 py-10 max-sm:pt-[60px] max-sm:pb-5 min-h-screen gap-10"
    >
      {/* Login Box */}
      <div className="w-full max-w-xl bg-white p-6 sm:p-10 rounded-xl shadow-md space-y-8">
        <div className="text-center space-y-2">
          <h2
            className={`font-semibold text-xl sm:text-2xl text-[#131314] ${poppins.className}`}
          >
            Login to Your Account
          </h2>
          <p className={`text-Subtitle text-sm ${manrope.className}`}>
            Let&#39;s login to your account to continue where you left.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <fieldset className="border border-borderColor px-4 py-3 rounded-xl flex items-center gap-2">
            <Envelope size={25} color="#8D94AB" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="ex: johndoe@gmail.com"
              className={`w-full focus:outline-none ${manrope.className}`}
            />
          </fieldset>

          {/* Password */}
          <fieldset className="border border-borderColor px-4 py-3 rounded-xl flex items-center gap-2">
            <Lock size={25} color="#8D94AB" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="*************"
              className={`w-full focus:outline-none ${manrope.className}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlash size={20} color="#8D94AB" />
              ) : (
                <Eye size={20} color="#8D94AB" />
              )}
            </button>
          </fieldset>

          <Link href="/forgetPassword">
            <span
              className={`${poppins.className} font-medium underline text-[#425BD8]`}
            >
              Forgot Password?
            </span>
          </Link>

          <input
            type="submit"
            value="Login"
            className={`${poppins.className} mt-4 font-medium rounded-xl py-4 bg-[#425BD8] text-white w-full`}
          />

          <h3 className={`${poppins.className} text-sm text-center`}>
            <span className="text-TextInactive">New here?</span>
            <Link className="text-[#425BD8] underline ml-1" href="/signUp">
              Create Account
            </Link>
          </h3>
        </form>

        <Social />
      </div>

      {/* App Install Prompt */}
      {/* <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border py-4 px-6 rounded-[40px]">
        <h2
          className={`${poppins.className} text-[#595F71] text-center text-sm sm:text-base`}
        >
          We recommend to use our mobile application to use all features
        </h2>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-BlackBg text-white text-sm">
            <FaApple />
            App Store
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-BlackBg text-white text-sm">
            <Image
              src="/assets/SVG/google-play.svg"
              alt="Google Play"
              width={18}
              height={18}
            />
            Google Play
          </button>
        </div>
      </div> */}
      <AppInstallPrompt />
    </section>
  );
}
