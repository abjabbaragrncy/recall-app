"use client";
import { manrope, poppins } from "@/Font/font";
import useMetadata from "@/hooks/useMetadata";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa";

export default function OTPPage() {
  useMetadata(
    "Verify OTP | Recall Products",
    "Enter the one-time code sent to your email."
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
      className="flex flex-col items-center justify-evenly gap-20 pt-8 pb-10 min-h-[100vh]"
    >
      <div className="w-[36%] mt-20 bg-white p-10 rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] space-y-10">
        <div className="space-y-1.5 text-center">
          <h2
            className={`font-semibold text-xl leading-8 text-[#131314] ${poppins.className}`}
          >
            Submit OTP
          </h2>

          <p className={`text-Subtitle leading-6 ${manrope.className}`}>
            Please submit the OTP that has been sent to your email
          </p>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-3">
            <input
              type="text"
              name="otp-1"
              placeholder="-"
              required
              className="border text-center border-[#babfcf] px-4 py-3 rounded-2xl w-[56px] h-[56px]"
            />
            <input
              type="text"
              name="otp-2"
              placeholder="-"
              required
              className="border text-center border-[#babfcf] px-4 py-3 rounded-2xl w-[56px] h-[56px]"
            />
            <input
              type="text"
              name="otp-3"
              placeholder="-"
              required
              className="border text-center border-[#babfcf] px-4 py-3 rounded-2xl w-[56px] h-[56px]"
            />
            <input
              type="text"
              name="otp-4"
              placeholder="-"
              required
              className="border text-center border-[#babfcf] px-4 py-3 rounded-2xl w-[56px] h-[56px]"
            />
          </div>
          <h3
            className={`mt-8 mb-4 space-x-1.5 ${poppins.className} text-sm font-medium leading-5 text-center`}
          >
            <span className="text-TextInactive">Didn’t receive any code?</span>
            <Link className="text-[#425BD8] underline" href={"/OTP"}>
              Resend Code
            </Link>
          </h3>
          <input
            type="submit"
            value="Submit OTP"
            className={`${poppins.className} mt-8 mb-4 font-medium leading-5 rounded-4xl px-2.5 py-4.5 bg-[#425BD8] text-white w-full`}
          />
        </form>
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
}
