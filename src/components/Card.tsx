import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type StatusType = "Very Risky" | "Risky" | "Neutral" | "Safe";

interface Item {
  id: string | number;
  link: string;
  image: string | StaticImageData;
  name: string;
  status: StatusType | string; // Allow string if you want to handle unknown statuses gracefully
  reports: number;
  date: string;
}

type CardProps = {
  item: Item;
};

const statusInfo: Record<
  StatusType,
  { bgColor: string; icon: React.ReactElement }
> = {
  "Very Risky": {
    bgColor: "bg-[#EF5858]",
    icon: (
      <Image
        src="/assets/SVG/Warning.svg"
        alt="Very Risky Icon"
        width={16}
        height={16}
      />
    ),
  },
  Risky: {
    bgColor: "bg-[#E8790A]",
    icon: (
      <Image
        src="/assets/SVG/Warning.svg"
        alt="Risky Icon"
        width={16}
        height={16}
      />
    ),
  },
  Neutral: {
    bgColor: "bg-[#8D94AB]",
    icon: (
      <Image
        src="/assets/SVG/Info-1.svg"
        alt="Neutral Icon"
        width={16}
        height={16}
      />
    ),
  },
  Safe: {
    bgColor: "bg-[#24965F]",
    icon: (
      <Image
        src="/assets/SVG/CheckCircle.svg"
        alt="Safe Icon"
        width={16}
        height={16}
      />
    ),
  },
};

const Card: React.FC<CardProps> = ({ item }) => {
  // Use type assertion and fallback for unknown statuses
  const info = statusInfo[item.status as StatusType] ?? {
    bgColor: "bg-gray-400",
    icon: (
      <Image
        src="/assets/SVG/Info.svg"
        alt="Default Icon"
        width={16}
        height={16}
      />
    ),
  };

  function truncateName(name: string) {
    const words = name.split(" ").slice(0, 4); // Max 4 words
    let result = words.join(" ");

    if (result.length > 21) {
      result = result.slice(0, 21).trimEnd(); // Max 21 characters
      if (!result.endsWith("…")) result += "…";
    }

    return result;
  }

  return (
    <div
      key={item.id}
      className="h-full flex flex-col justify-between bg-white rounded-xl border border-[#b9becf] p-2.5"
    >
      <Link href={item.link} className="flex flex-col grow">
        {/* Image Section */}
        <div className="relative rounded-lg overflow-hidden h-[220px] bg-[#e7eaf1]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain  p-1"
          />
          <span
            className={`absolute top-3 left-3 text-white text-[13px] font-normal pr-1.5 pl-1 py-0.5 rounded-full flex items-center gap-1 font-poppins ${info.bgColor}`}
          >
            {info.icon}
            <span>{item.status}</span>
          </span>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-between flex-1 mt-3 space-y-1">
          <h3 className="text-[#131314] text-lg font-medium font-poppins leading-relaxed line-clamp-2">
            {truncateName(item.name)}
          </h3>

          <div className="text-[#8c94ab] text-sm">
            {item.reports > 0 ? (
              <span className="inline-flex items-center gap-1.5 text-[#E8790A] text-[15px] font-medium font-poppins leading-snug">
                <Image
                  src="/assets/SVG/WarningDiamond.svg"
                  alt="Warning Icon"
                  width={24}
                  height={24}
                />
                {item.reports} reports
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-Inactive text-[15px] font-medium font-poppins leading-snug">
                <Image
                  src="/assets/SVG/Info.svg"
                  alt="Info Icon"
                  width={24}
                  height={24}
                />
                No reports found
              </span>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 text-Inactive text-[15px] font-medium font-poppins leading-snug">
            <Image
              src="/assets/SVG/CalendarBlank.svg"
              alt="Calendar Icon"
              width={24}
              height={24}
            />
            {item.date}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
