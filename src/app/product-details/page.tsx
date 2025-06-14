"use client";

import { ArrowLeft, ArrowRight, ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link.js";
import { manrope } from "../../Font/font.js";
const Page = () => {
  const product = {
    name: "The Heroes Enchanted mushroom chips",
    imageUrl: "/assets/logo/Pleaseholder.jpg",
    lastUpdated: "12 May 2025",
    summary:
      "The Heroes has issued a voluntary recall of its Enchanted Mushroom Chips due to the potential presence of undeclared psychoactive compounds found in select batches. Lab analysis conducted by the FDA revealed traces of compounds associated with hallucinogenic effects, which were not listed on the ingredient labe This poses a serious health risk, especially to children, pregnant individuals, and anyone with underlying health conditions.",
    tags: [
      "Hallucinations",
      "Allergic",
      "Nausea",
      "Dizziness",
      "Hardware problem",
    ],
    reports: 28,
    recallChance: 78,
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-24 px-4 pb-14 overflow-x-hidden space-y-6">
      <div>
        <button
          className="flex items-center text-[#595F71] px-4 py-2.5 rounded-full border border-gray-300"
          onClick={() => window.history.back()}
          aria-label="Go back to previous page"
        >
          <ArrowLeft size={20} />
          <span className="ml-1.5 text-sm font-medium">Go Back</span>
        </button>
      </div>

      <div className=" flex flex-col md:flex-row gap-12">
        {/* Left: Image */}
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600}
          height={700}
          className="rounded-lg object-cover w-full h-[423px] md:h-auto"
          priority
        />

        {/* Right: Info */}
        <div className=" w-full space-y-3">
          <h2 className="text-[20px] md:text-[28px] font-semibold text-BlackBg">
            {product.name}
          </h2>
          <div className="w-fit flex items-center text-sm text-TextSubtle px-3 py-1 bg-WhiteSubtle2 rounded-full gap-x-1.5">
            <Image
              src="/assets/SVG/CalendarBlank.svg"
              alt="Calendar Icon"
              width={20}
              height={20}
            />
            <p className="font-medium">Last updated: {product.lastUpdated}</p>
          </div>

          <div className="border-t border-BorderBg my-6"></div>

          <div className="flex items-center mb-4">
            <Image
              src="/assets/SVG/Ai.svg"
              alt="Info Icon"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            <p className="text-sm md:text-lg font-medium text-BlackBg">
              Ai Summary
            </p>
          </div>
          <div
            className={`bg-gray-100 p-4 rounded-md font-normal text-[16px] ${manrope.className}`}
          >
            <p>{product.summary}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="bg-WhiteSubtle text-TextSubtle px-2 py-1 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link href="/">
            <button
              className="w-full md:w-fit flex items-center justify-center text-Primary px-4 py-2.5 rounded-full border border-Primary mt-6"
              aria-label="Go back to previous page"
            >
              <span className="mr-1.5 text-sm font-medium">
                Read the full article
              </span>
              <ArrowRightIcon size={20} />
            </button>
          </Link>

          <div className="border-t border-BorderBg my-6"></div>

          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4 bg-[#E8790A] p-2.5 rounded-[8px] text-Inactive"
            style={{
              backgroundImage: "url('/assets/image/report_count_pattern.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Left section */}
            <div className="flex items-center space-x-3">
              <div className="w-fit p-2.5 bg-Inactive/20 rounded-[8px]">
                <Image
                  src="/assets/SVG/Warning.svg"
                  alt="Warning Icon"
                  width={26}
                  height={26}
                />
              </div>
              <div>
                <p className={`text-sm font-normal ${manrope.className}`}>
                  Total Reports
                </p>
                <p
                  className={`font-medium text-[18px] md:text-lg ${manrope.className}`}
                >
                  {product.reports} reports
                </p>
              </div>
            </div>

            {/* Right section */}
            <Link href="/">
              <button
                className="w-full md:w-fit flex items-center justify-center text-Inactive px-4 py-2.5 rounded-full border border-BorderMild hover:bg-white/10 transition"
                aria-label="Go back to previous page"
              >
                <span className="mr-1.5 text-sm font-medium">
                  Read all reports
                </span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          <div className="flex bg-orange-100 p-3  rounded-[10px]  gap-3">
            <Image
              src="/assets/SVG/WarningDiamond.svg"
              alt="Warning Icon"
              width={24}
              height={24}
            />

            <p className="text-sm text-orange-700">
              Based on historical trends, this product has a{" "}
              {product.recallChance}% chance of being recalled. We recommend
              monitoring this item.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
