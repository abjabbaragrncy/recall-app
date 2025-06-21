import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
  const statusInfo = {
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
  return (
    <div
      key={item.id}
      className="bg-white rounded-xl border border-[#b9becf] p-2.5"
    >
      <Link href={item.link}>
        <div className="relative rounded-lg overflow-hidden h-[220px] bg-[#e7eaf1]">
          <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <span
            className={`absolute top-3 left-3 text-white text-[13px] font-normal pr-1.5 pl-1 py-0.5 rounded-full flex items-center gap-1 font-poppins font ${
              statusInfo[item.status]?.bgColor || "bg-gray-400"
            }`}
          >
            {statusInfo[item.status]?.icon}
            <span>{item.status}</span>
          </span>
        </div>

        <div className="mt-3 space-y-1">
          <h3 className="text-[#131314] text-lg font-medium font-poppins leading-relaxed">
            {item.name}
          </h3>

          <div className="text-[#8c94ab] text-sm">
            {item.reports > 0 ? (
              <span
                className="inline-flex items-center gap-1.5
             text-[#E8790A] text-[15px] font-medium font-poppins leading-snug"
              >
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
                  alt="Warning Icon"
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
              alt="Warning Icon"
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
