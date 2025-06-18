"use client";
import Calltoaction from "@/components/Calltoaction";
import { manrope, poppins } from "@/Font/font";
export default function Home() {
  return (
    <div className={`${manrope.variable} ${poppins.variable} `}>
      <h1 className="p-24 text-xl text-center ">this is Home page.</h1>
      <div className="max-w-7xl  py-[60px] bg-white flex flex-col gap-10 ">
        <h2 className="text-[#131314] text-2xl md:text-[32px] font-semibold font-poppins leading-[1.5] max-w-[628px]">
          Explore exciting more features on our mobile application
        </h2>
        <div></div>
      </div>

      <Calltoaction />
    </div>
  );
}
