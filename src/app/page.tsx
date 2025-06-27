"use client";
import Banner from "@/components/Home/Banner";
import CallToAction from "@/components/Home/CallToAction";
import SliderHome from "@/components/Home/SliderHome";
import { manrope, poppins } from "@/Font/font";
import Image from "next/image";
export default function Home() {
  return (
    <div className={`${manrope.variable} ${poppins.variable}`}>
      <Banner />
      <div className="bg-WhiteSubtle ">
        <SliderHome />
      </div>

      <div className="max-w-7xl mx-auto px-4  md:px-0 pt-8 pb-4 lg:py-[60px] bg-white flex flex-col gap-10">
        <h2 className="text-[#131314] text-2xl md:text-[32px] font-semibold font-poppins leading-[1.5] max-w-[628px]">
          Explore exciting more features on our mobile application
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {/* Left Feature Box */}
          <div className="lg:col-span-5 bg-[#FFFBED] border border-[#F4CE4B] rounded-[17px] pl-6 pt-6 flex flex-col justify-between">
            <h3 className="text-[#131314] text-xl md:text-[28px] font-medium font-poppins leading-10 max-w-[328px]">
              Huge collection of recall product library
            </h3>
            <div className="flex justify-end mt-4">
              <Image
                src="/assets/image/o_bg_01.png"
                width={445}
                height={338}
                alt="Recall Product Library"
                className="object-contain"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* AI Suggestion Box */}
            <div className="relative bg-[#CFF2DA] rounded-2xl border border-[#40c86b] p-4.5 pb-[70px] overflow-hidden h-36 lg:h-[45%]">
              <div className="text-[#131314] text-base md:text-lg font-medium font-poppins leading-relaxed max-w-[200px]">
                Get AI suggestions & recommendations
              </div>
              <div className="absolute right-0.5 -bottom-0.5">
                <Image
                  src="/assets/image/o_bg_02.png"
                  alt="AI Suggestions"
                  width={155}
                  height={122}
                />
              </div>
            </div>

            {/* Submit Story Box */}
            <div className="relative bg-[#E0E6FF] border border-[#8FA6FF] h-60 lg:h-full rounded-2xl  overflow-hidden px-[15px] pt-[17px]">
              <div className="text-[#131314] text-base md:text-xl font-medium font-poppins leading-loose max-w-[307px] text-center">
                Write & submit your story to warn others
              </div>
              <div className="absolute right-14 -bottom-0.5">
                <Image
                  src="/assets/image/o_bg_03.png"
                  alt="Submit Story"
                  width={192}
                  height={152}
                />
              </div>
            </div>
          </div>

          {/* Right Feature Box */}
          <div className="lg:col-span-4 bg-[#FFEDDC] border border-[#FFC065] rounded-2xl pt-[23px] pl-[26px] flex flex-col justify-between">
            <div className="text-[#131314] text-xl md:text-[28px] font-medium font-poppins leading-[38px] max-w-[248px]">
              Scam alert from community
            </div>
            <div className="flex justify-end mt-4">
              <Image
                src="/assets/image/o_bg_04.png"
                alt="Community Scam Alert"
                width={445}
                height={338}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
}
