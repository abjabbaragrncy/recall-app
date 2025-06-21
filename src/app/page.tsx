"use client";
import Card from "@/components/Card";
import Banner from "@/components/Home/Banner";
import CallToAction from "@/components/Home/CallToAction";


import { manrope, poppins } from "@/Font/font";
import Image from "next/image";
export default function Home() {
  const fakeProducts = [
    {
      id: 1,
      name: "Brown Neoseal IWP 500",
      date: "12 May 2025",
      image: "https://i.ibb.co/xSfm9L2x/Brown-Neoseal-IWP-500.png",
      status: "Safe",
      reports: 0,
      link: "/product-details",
    },
    {
      id: 2,
      name: "Infra Market Leak Resist-5L",
      date: "12 May 2025",
      image:
        "https://i.ibb.co/Lz1wgPmv/Kinder-Wet-Wipes-120-pcs-Pouch-Kinder-4c04e-363052-removebg-preview.png",
      status: "Risky",
      reports: 18,
      link: "/product-details",
    },
    {
      id: 3,
      name: "YFood Strawberry Juice",
      date: "12 May 2025",
      image:
        "https://i.ibb.co/S7wD5VHm/PRODUCT-RTD-fruity-Strawberry-standing-shadow-on-drops-on-nutriscore-off-DE-2500x2500px-removebg-pre.png",
      status: "Very Risky",
      reports: 54,
      link: "/product-details",
    },
    {
      id: 4,
      name: "AquaMist Red Bottle",
      date: "12 May 2025",
      image:
        "https://i.ibb.co/fz07p6Qv/water-bottle-red-metal-vn-J2la0-600-removebg-preview-1.png",
      status: "Safe",
      reports: 2,
      link: "/product-details",
    },
    {
      id: 5,
      name: "Infra Market Leak Resist-5L",
      date: "11 May 2025",
      image: "https://i.ibb.co/QF18P8mb/images-removebg-preview.png",
      status: "Neutral",
      reports: 6,
      link: "/product-details",
    },
    {
      id: 6,
      name: "O’food Tteokbokki Sauce",
      date: "10 May 2025",
      image:
        "https://i.ibb.co/vxfd3V3X/Gochujang-Tteokbokki-Saus-removebg-preview.png",
      status: "Risky",
      reports: 22,
      link: "/product-details",
    },
    {
      id: 7,
      name: "Cussons Baby Soft Oil",
      date: "09 May 2025",
      image: "https://i.ibb.co/7tmYnrtd/download-removebg-preview.png",
      status: "Very Risky",
      reports: 61,
      link: "/product-details",
    },
    {
      id: 8,
      name: "Kinder Baby Wipes",
      date: "08 May 2025",
      image:
        "https://i.ibb.co/Lz1wgPmv/Kinder-Wet-Wipes-120-pcs-Pouch-Kinder-4c04e-363052-removebg-preview.png",
      status: "Safe",
      reports: 1,
      link: "/product-details",
    },
    {
      id: 9,
      name: "YFood Strawberry Juice",
      date: "07 May 2025",
      image:
        "https://i.ibb.co/S7wD5VHm/PRODUCT-RTD-fruity-Strawberry-standing-shadow-on-drops-on-nutriscore-off-DE-2500x2500px-removebg-pre.png",
      status: "Neutral",
      reports: 5,
      link: "/product-details",
    },
    {
      id: 10,
      name: "Toyota Echo 5X 2024",
      date: "06 May 2025",
      image: "https://i.ibb.co/4Rpx1wzG/images-removebg-preview-1.png",
      status: "Risky",
      reports: 30,
      link: "/product-details",
    },
  ];

  return (
    <div className={`${manrope.variable} ${poppins.variable}`}>
      <Banner />
      <div className="bg-WhiteSubtle ">
        <div className="max-w-7xl mx-auto px-4 pt-10 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ">
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-[#131314] text-[28px] font-semibold font-poppins leading-[38px]">
                Explore recent recalls
              </h2>
              <p className="text-[#595e70] text-base font-normal font-manrope tracking-tight">
                Check for recent recall alerts on products that are recently
                updated
              </p>
            </div>
            <div className="flex gap-4">
              <button className="p-2 rounded-full outline  outline-[#b9becf] flex items-center justify-center">
                {/* Left arrow icon */}
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="#595e70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.71 0.29C7.1 0.68 7.1 1.31 6.71 1.7L2.41 6L6.71 10.3C7.1 10.69 7.1 11.32 6.71 11.71C6.32 12.1 5.69 12.1 5.3 11.71L0.29 6.7C-0.1 6.31 -0.1 5.68 0.29 5.29L5.3 0.29C5.69 -0.1 6.32 -0.1 6.71 0.29Z" />
                </svg>
              </button>
              <button className="p-2 rounded-full outline  outline-[#b9becf] flex items-center justify-center">
                {/* Right arrow icon */}
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="#595e70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.29 0.29C0.9 0.68 0.9 1.31 1.29 1.7L5.59 6L1.29 10.3C0.9 10.69 0.9 11.32 1.29 11.71C1.68 12.1 2.31 12.1 2.7 11.71L7.71 6.7C8.1 6.31 8.1 5.68 7.71 5.29L2.7 0.29C2.31 -0.1 1.68 -0.1 1.29 0.29Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-[15px] pt-10">
            {fakeProducts.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
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
