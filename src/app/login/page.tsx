"use client"

import { poppins } from "@/Font/font";



export default function LoginPage() {
  return (
    <section className="flex items-center justify-center pt-20 min-h-[65vh]">
      <div className="text-center p-10 rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] sha">
        {/* className={`${poppins.className} `} */}
        <h2 className={`font-semibold text-xl leading-8 ${poppins.className}`}>
          Login to Your Account
        </h2>
        <p>Let’s login to your account to continue where you left.</p>
        <form action="">
          <input
            type="email"
            name="email"
            id=""
            className="border rounded-full"
          />
          <input
            type="password"
            name="password"
            id=""
            className="border rounded-full"
          />
        </form>
      </div>
    </section>
  );
}
