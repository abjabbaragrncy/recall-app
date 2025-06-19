import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="relative bg-Primary pt-16 pb-32">
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
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <div className="text-center justify-start text-white text-[32px] font-semibold font-poppins leading-[48px] mb-2">
            Search or Browse Products
          </div>
          <div className="mb-5 text-center  text-3xl font-semibold font-poppins text-white sm:text-[40px] mx-auto leading-[60px]">
            Stay Updated for Recall Alerts
          </div>

          <p className="text-center text-[16px] text-white/70 max-w-3xl mx-auto font-manrope mb-14">
            Your safety, peace of mind, and ability to make informed choices are
            our top priorities. Stay vigilant, stay protected, and stay ahead
            with alerts designed to keep you safe in a rapidly changing world.
          </p>

          <div className="w-full max-w-lg mx-auto flex flex-col gap-6 px-4">
            <div className="w-full bg-white rounded-full flex items-center pl-4 py-[5px] pr-[5px] gap-2.5">
              <span className="flex-1 text-sm text-[#595e70] font-normal font-manrope leading-snug tracking-tight">
                Search by product name or UPC
              </span>
              <button className="flex items-center gap-1.5 bg-[#415ad7] text-white text-[13px] font-normal font-poppins rounded-full pl-[13px] pr-[15px] py-[7px]">
                <Image
                  src="assets/SVG/MagnifyingGlass.svg"
                  width={18}
                  height={18}
                  alt="MagnifyingGlass Icon"
                />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
