import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 pt-16 pb-10 bg-white flex gap-10">
      <div className="w-full lg:relative  bg-[#415ad7] rounded-[30px] min-h-[400px] flex max-sm:flex-col-reverse items-center max-sm:justify-center max-sm:gap-12 lg:justify-between ">
        <figure>
          <Image
            width={448}
            height={468}
            src="/assets/image/download_app_bg.svg"
            alt="App Preview"
            className="mx-auto lg:absolute lg:top-[-68px] lg:left-4 md:left-0 w-[80%] md:w-[448px] h-auto z-40"
          />
        </figure>
        {/* Right side - Text and Download Buttons */}
        <div className="w-full md:w-1/2 max-w-[622px] flex flex-col justify-center gap-10 p-6 md:p-12 z-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-white text-xl md:text-2xl font-semibold font-poppins leading-snug">
              Download our app and explore more
            </h2>
            <p className="text-white opacity-80 text-sm md:text-base font-manrope leading-relaxed">
              Recall mobile application offers more features like browsing
              products, see community scam alerts, submitting own report and
              many more.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* App Store */}
            <button className="w-[140px] md:w-[150px] px-3 py-2 bg-white rounded-full flex items-center gap-2">
              <Image
                src="assets/SVG/Apple.svg"
                width={22}
                height={22}
                alt="Apple Logo"
                className=""
              />
              <span className="text-[#131314] text-sm font-medium font-poppins">
                App Store
              </span>
            </button>

            {/* Google Play */}
            <button className="w-[140px] md:w-[150px] px-3 py-2 bg-white rounded-full flex items-center gap-2">
              <Image
                src="assets/SVG/google-play.svg"
                width={22}
                height={22}
                alt="google-play Logo"
                className=""
              />
              <span className="text-[#131314] text-sm font-medium font-poppins">
                Google Play
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
