import Image from "next/image";
import SearchBox from "./SearchBox";

const Banner = () => {
  return (
    <div>
      <div className="relative bg-Primary pt-16 max-sm:pb-24 pb-32">
        <Image
          width={100}
          height={100}
          src="/assets/SVG/web_hero_bg_person.svg"
          alt=""
          className="lg:block absolute  w-full h-full   max-sm:hidden top-0 left-0 object-cover"
        />
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="#e7eaf1"
            className="-mb-1 w-full text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl max-sm:px-4 ">
          <div className="text-center text-white max-sm:text-[20px] text-[32px] font-semibold font-poppins leading-[48px] mb-2">
            Search or Browse Products
          </div>
          <div className="mb-5 text-center max-sm:text-[32px] text-[40px]  font-semibold font-poppins text-white sm:text-[40px] mx-auto max-sm:leading-[48px] leading-[60px]">
            Stay Updated for Recall Alerts
          </div>

          <p className="text-center text-[16px] text-white/70 max-w-3xl mx-auto font-manrope max-sm:mb-10 mb-14">
            Your safety, peace of mind, and ability to make informed choices are
            our top priorities. Stay vigilant, stay protected, and stay ahead
            with alerts designed to keep you safe in a rapidly changing world.
          </p>

          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Banner;
