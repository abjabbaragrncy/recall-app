"use client";
import AppInstallPrompt from "@/components/AppInstallPrompt";
import { manrope, poppins } from "@/Font/font";
import useMetadata from "@/hooks/useMetadata";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";

export default function ForgetPasswordPage() {
  useMetadata(
    "Set New Password | Recall Products",
    "Choose a new secure password."
  );

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
      {/* Form Card */}
      <div className="w-full max-w-md mt-10 bg-white p-6 md:p-10 rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] space-y-8">
        <div className="space-y-1.5 text-center">
          <h2
            className={`font-semibold text-xl leading-8 text-[#131314] ${poppins.className}`}
          >
            Forgot Password?
          </h2>
          <p className={`text-Subtitle leading-6 ${manrope.className}`}>
            Let’s reset your password with your email
          </p>
        </div>

        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          {/* Email Field */}
          <fieldset className="border border-borderColor px-4 py-3 rounded-4xl flex items-center gap-2.5">
            <legend
              className={`text-BlackBg px-0.5 text-sm leading-5 ${poppins.className}`}
            >
              Email address
            </legend>
            <TfiEmail className="text-Inactive text-xl font-bold" />
            <input
              type="email"
              name="email"
              required
              placeholder="ex: johndoe@gmail.com"
              className={`w-full border-none focus:outline-none ${manrope.className} text-Inactive leading-5.5 tracking-[0.07px]`}
            />
          </fieldset>

          <input
            type="submit"
            value="Send OTP"
            className={`${poppins.className} mt-6 font-medium leading-5 rounded-3xl px-2.5 py-4 bg-[#425BD8] text-white w-full`}
          />

          <Link href="/">
            <h3
              className={`text-[#595F71] underline ${poppins.className} text-sm font-medium leading-5 text-center`}
            >
              Cancel
            </h3>
          </Link>
        </form>
      </div>

      <AppInstallPrompt />
    </section>
  );
}
