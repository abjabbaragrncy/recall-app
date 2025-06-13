import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-10 space-y-10 lg:space-y-0">
          <div className="flex flex-col justify-start items-start space-y-8 w-full lg:w-[500px]">
            <div className="flex flex-col justify-start items-start space-y-6 w-full">
              <Link href="/">
                <div className="flex items-center space-x-4">
                  <Image
                    className="h-6 w-auto rounded-lg object-contain"
                    src="/assets/logo/Logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    priority
                    decoding="async"
                  />

                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    Recall Products
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-[16px]">Follow us on</p>
              <Link
                href="https://www.facebook.com/wellsnap "
                aria-label="Visit our Facebook page"
              >
                <div className="p-2 border border-white/10 rounded-md">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.75 10C18.75 5.16701 14.833 1.25 10 1.25C5.16701 1.25 1.25 5.16701 1.25 10C1.25 14.3682 4.44922 17.9878 8.63281 18.6441V12.5293H6.41111V10H8.63281V8.07227C8.63281 5.87962 9.93849 4.66797 11.938 4.66797C12.895 4.66797 13.8965 4.83887 13.8965 4.83887V6.99219H12.7925C11.7056 6.99219 11.3672 7.66725 11.3672 8.35938V10H13.7939L13.406 12.5293H11.3672V18.6441C15.5508 17.9878 18.75 14.3682 18.75 10Z"
                      fill="#0866FF"
                    />
                    <path
                      d="M13.406 12.5293L13.7939 10H11.3672V8.35938C11.3672 7.66725 11.7056 6.99219 12.7925 6.99219H13.8965V4.83887C13.8965 4.83887 12.895 4.66797 11.938 4.66797C9.93851 4.66797 8.63283 5.87962 8.63283 8.07227V10H6.41113V12.5293H8.63283V18.6441C9.07886 18.7141 9.53517 18.75 10 18.75C10.4649 18.75 10.9212 18.7141 11.3672 18.6441V12.5293H13.406Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://x.com/WellSnapapp"
                aria-label="Visit our X page"
              >
                <div className="p-2 border border-white/10 rounded-md">
                  <Image
                    src="/assets/logo/whatsapp.svg"
                    width={20}
                    height={20}
                    alt="whatsapp"
                  />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/wellsnap"
                aria-label="Visit our LinkedIn page"
              >
                <div className="p-2 border border-white/10 rounded-md">
                  <Image
                    src="/assets/logo/linkedin.svg"
                    width={20}
                    height={20}
                    alt="Linkdin-Icon"
                    className="size-5"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-row space-x-8 sm:space-x-16">
            <div className="flex flex-col space-y-3 w-28 sm:w-36">
              <Link href="#about">
                <p className="text-sm text-gray-200">About</p>
              </Link>
              <Link href="#about">
                <p className="text-base text-gray-200 opacity-60">About Us</p>
              </Link>
              <Link href="our-manifesto.html">
                <p className="text-base text-gray-200 opacity-60">Contact Us</p>
              </Link>
              <Link href="terms-of-services.html">
                <p className="text-base text-gray-200 opacity-60">
                  Terms & Conditions
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-Gray mt-10">
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm mx-auto max-w-7xl px-4 sm:px-8">
          <p>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            Recall Products
          </p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <p>Developed by</p>
            <Link
              href="https://devdec.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/logo/devdec.svg"
                width={100}
                height={20}
                alt="devdec logo"
                className="h-5"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
