"use client";
import AppInstallPrompt from "@/components/AppInstallPrompt";
import Social from "@/components/Social";
import { useAuthContext } from "@/context/AuthProvider"; // ✅ import your context
import { manrope, poppins } from "@/Font/font";
import useMetadata from "@/hooks/useMetadata";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { LuLockKeyhole, LuUserRound } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const RegisterPage = () => {
  useMetadata(
    "Sign Up | Recall Products",
    "Create your new Recall Products account."
  );

  const { setAuthData } = useAuthContext(); // ✅ use your context API
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`,
        formData
      );
      const { access_token, refresh_token, user } = res.data;

      setAuthData({ access_token, refresh_token, user }); // ✅ context update
      localStorage.setItem("access_token", access_token); // optional
      router.push("/");
    } catch (err) {
      console.error("Signup failed", err);
    }
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
      {/* Signup Card */}
      <div className="w-full max-w-xl s mt-10 bg-white p-6 sm:p-10 rounded-xl shadow-md space-y-8">
        <div className="text-center space-y-2">
          <h2
            className={`font-semibold text-xl sm:text-2xl text-[#131314] ${poppins.className}`}
          >
            Create New Account
          </h2>
          <p className={`text-Subtitle text-sm ${manrope.className}`}>
            Let’s create your account with simple & easy steps.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <fieldset className="border border-borderColor px-4 py-3 rounded-xl flex items-center gap-2">
            <LuUserRound className="text-Inactive text-xl" />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="ex: John Doe"
              className={`w-full focus:outline-none ${manrope.className}`}
            />
          </fieldset>

          {/* Email */}
          <fieldset className="border border-borderColor px-4 py-3 rounded-xl flex items-center gap-2">
            <TfiEmail className="text-Inactive text-xl" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ex: johndoe@gmail.com"
              className={`w-full focus:outline-none ${manrope.className}`}
            />
          </fieldset>

          {/* Password */}
          <fieldset className="border border-borderColor px-4 py-3 rounded-xl flex items-center gap-2">
            <LuLockKeyhole className="text-Inactive text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
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

          <input
            type="submit"
            value="Create Account"
            className={`${poppins.className} font-medium bg-[#425BD8] text-white w-full py-3 rounded-xl`}
          />

          <p className={`${poppins.className} text-sm text-center`}>
            <span className="text-TextInactive">Already have an account?</span>
            <Link className="text-[#425BD8] underline ml-1" href="/login">
              Login
            </Link>
          </p>
        </form>

        <Social />
      </div>

      <AppInstallPrompt />
    </section>
  );
};

export default RegisterPage;
