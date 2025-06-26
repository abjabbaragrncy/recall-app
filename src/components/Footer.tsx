import { manrope, roboto_flex } from "@/Font/font";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className={`bg-BlackBg text-white ${manrope.variable}  ${roboto_flex.variable}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col  lg:flex-row  justify-between py-10 lg:py-12 gap-10 items-center lg:items-start">
        <div className="flex flex-col justify-start items-center lg:items-start space-y-8 w-full lg:w-[1080px]">
          <Link href="/">
            <div className="flex items-center space-x-3 w-full">
              <Image
                className="rounded-lg object-contain"
                src="/assets/logo/Logo.png"
                alt="Logo"
                width={40}
                height={40}
                priority
                decoding="async"
              />
              <p className="text-[26px]  font-bold text-white font-roboto-flex">
                Recall Products
              </p>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <p
              className={`text-[16px] font-normal text-white ${manrope.className}`}
            >
              Follow us on
            </p>
            <Link
              href="https://www.facebook.com/recall"
              aria-label="Visit our Facebook page"
            >
              <Image
                src="/assets/SVG/facebook.svg"
                alt="Facebook Logo"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://whatsapp.com/recall"
              aria-label="Visit our WhatsApp page"
            >
              <Image
                src="/assets/logo/whatsapp.svg"
                width={24}
                height={24}
                alt="whatsapp"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/recall"
              aria-label="Visit our LinkedIn page"
            >
              <Image
                src="/assets/SVG/linkedin.svg"
                width={24}
                height={24}
                alt="linkedin"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-3 lg:w-[200px] ">
          <Link href="/about">
            <p className="text-[15px] font-medium text-white font-manrope">
              About
            </p>
          </Link>
          <div className="flex flex-row lg:flex-col items-center lg:items-start space-x-6 lg:space-y-3">
            <Link href="/about">
              <p className={`text-sm text-Inactive ${manrope.className}`}>
                About Us
              </p>
            </Link>
            <Link href="/contact">
              <p className={`text-sm text-Inactive ${manrope.className}`}>
                Contact Us
              </p>
            </Link>
            <Link href="/terms">
              <p className={`text-sm text-Inactive ${manrope.className}`}>
                Terms & Conditions
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="py-4 lg:py-6 px-4 lg:px-0 flex flex-col md:flex-row justify-between items-center mx-auto max-w-7xl gap-3">
          <p
            className={`text-[13px] lg:text-[16px] font-normal text-center ${manrope.className}`}
          >
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            Recall Products
          </p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <p className={`text-sm font-normal ${manrope.className}`}>
              Developed by
            </p>
            <Link
              href="https://devdec.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/logo/devdec.svg"
                width={98}
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
