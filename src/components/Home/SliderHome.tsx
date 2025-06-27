"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

const SliderHome = () => {
  // Show 5 items at a time (1 row per item on mobile, full grid on desktop)
  //   const [currentPage, setCurrentPage] = useState(0);

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
    {
      id: 11,
      name: "YFood Strawberry Juice",
      date: "07 May 2025",
      image:
        "https://i.ibb.co/S7wD5VHm/PRODUCT-RTD-fruity-Strawberry-standing-shadow-on-drops-on-nutriscore-off-DE-2500x2500px-removebg-pre.png",
      status: "Neutral",
      reports: 5,
      link: "/product-details",
    },
    {
      id: 12,
      name: "Toyota Echo 5X 2024",
      date: "06 May 2025",
      image: "https://i.ibb.co/4Rpx1wzG/images-removebg-preview-1.png",
      status: "Risky",
      reports: 30,
      link: "/product-details",
    },
    {
      id: 13,
      name: "YFood Strawberry Juice",
      date: "07 May 2025",
      image:
        "https://i.ibb.co/S7wD5VHm/PRODUCT-RTD-fruity-Strawberry-standing-shadow-on-drops-on-nutriscore-off-DE-2500x2500px-removebg-pre.png",
      status: "Neutral",
      reports: 5,
      link: "/product-details",
    },
    {
      id: 14,
      name: "Toyota Echo 5X 2024",
      date: "06 May 2025",
      image: "https://i.ibb.co/4Rpx1wzG/images-removebg-preview-1.png",
      status: "Risky",
      reports: 30,
      link: "/product-details",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-[#131314] text-[28px] font-semibold font-poppins leading-[38px]">
              Explore recent recalls
            </h2>
            <p className="text-[#595e70] text-base font-normal font-manrope tracking-tight">
              Check for recent recall alerts on products that are recently
              updated
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="prev-button p-2 rounded-full outline outline-[#b9becf]">
              <CaretLeft size={18} color="#595F71" />
            </button>
            <button className="next-button p-2 rounded-full outline outline-[#b9becf]">
              <CaretRight size={18} color="#595F71" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Grid]}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          spaceBetween={15}
          breakpoints={{
            320: {
              slidesPerView: 1,
              grid: {
                rows: 1,
              },
            },
            1024: {
              slidesPerView: 5,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
          }}
          className="mySwiper"
        >
          {fakeProducts.map((item) => (
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-4 md:absolute md:top-10 md:right-10">
          <button className="prev-button p-2 rounded-full outline outline-[#b9becf]">
            <CaretLeft size={18} color="#595F71" />
          </button>
          <button className="next-button p-2 rounded-full outline outline-[#b9becf]">
            <CaretRight size={18} color="#595F71" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
