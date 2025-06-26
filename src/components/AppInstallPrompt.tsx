import { poppins } from "@/Font/font";
import Image from "next/image";

const AppInstallPrompt = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border py-4 px-6 rounded-[40px]">
      <h2
        className={`${poppins.className} text-[#595F71] text-center text-sm sm:text-base`}
      >
        We recommend to use our mobile application to use all features
      </h2>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-BlackBg text-white text-sm">
          <Image
            src="assets/SVG/AppleWhite.svg"
            width={15}
            height={15}
            alt="Apple Logo"
          />
          App Store
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-BlackBg text-white text-sm">
          <Image
            src="/assets/SVG/google-play.svg"
            alt="Google Play"
            width={18}
            height={18}
          />
          Google Play
        </button>
      </div>
    </div>
  );
};

export default AppInstallPrompt;
