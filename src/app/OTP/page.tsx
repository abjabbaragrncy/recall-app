"use client";
import AppInstallPrompt from "@/components/AppInstallPrompt";
import { manrope, poppins } from "@/Font/font";
import useMetadata from "@/hooks/useMetadata";
import Link from "next/link";

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
      className="flex flex-col items-center justify-evenly gap-10 pt-8 pb-10 min-h-screen px-4"
    >
      <div className="w-full max-w-md bg-white p-6 md:p-10 rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] space-y-8 mt-10">
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
            {["otp-1", "otp-2", "otp-3", "otp-4"].map((name, i) => (
              <input
                key={i}
                type="text"
                name={name}
                placeholder="-"
                required
                maxLength={1}
                className="border text-center border-[#babfcf] px-4 py-3 rounded-2xl w-12 h-12 md:w-[56px] md:h-[56px]"
              />
            ))}
          </div>

          <h3
            className={`mt-6 mb-4 text-center ${poppins.className} text-sm font-medium leading-5`}
          >
            <span className="text-TextInactive">Didn’t receive any code?</span>{" "}
            <Link className="text-[#425BD8] underline" href={"/OTP"}>
              Resend Code
            </Link>
          </h3>

          <input
            type="submit"
            value="Submit OTP"
            className={`${poppins.className} mt-6 font-medium leading-5 rounded-3xl px-2.5 py-4 bg-[#425BD8] text-white w-full`}
          />
        </form>
      </div>

      <AppInstallPrompt />
    </section>
  );
}
