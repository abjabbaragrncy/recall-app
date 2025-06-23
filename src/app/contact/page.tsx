"use client";
import { manrope, poppins } from "@/Font/font";
import useMetadata from "@/hooks/useMetadata";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import Image from "next/image";

const Page = () => {
  useMetadata(
    "Contact Us | Recall Products",
    "Get in touch with the Recall Products team for support, feedback, or partnership inquiries."
  );
  return (
    <div className={`${manrope.variable} ${poppins.variable}`}>
      <div className="relative bg-Primary pt-16 pb-32">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="-mb-1 w-full text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <h2 className="mb-5 text-center  text-3xl font-semibold font-poppins text-white sm:text-[32px]  leading-[48px]">
            We’re Here to Help <br />
            <span className="sm:text-[40px]  text-4xl">
              {" "}
              Let’s Stay Connected
            </span>
          </h2>
          <p className="text-center text-[16px] text-white max-w-2xl mx-auto font-manrope">
            Whether you have a question about a recall, want to report a product
            issue, or need help using the app, we’re just a message away.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-0 py-8 lg:py-[72px] px-4 lg:px-0">
        {/* General Support */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="text-[#131314] text-[28px] font-semibold font-poppins leading-[38px]">
              General support
            </div>
            <div className="text-[#595e70] text-base font-normal font-manrope ">
              For general inquiries, support, or feedback, contact us
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Email Icon Placeholder */}
            <EnvelopeSimple size={22} weight="fill" />

            <div className="text-[#595e70] text-[15px] font-medium font-poppins leading-snug">
              support@recall.com
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Phone Icon Placeholder */}
            <Phone size={22} weight="fill" />

            <div className="text-[#595e70] text-[15px] font-medium font-poppins leading-snug">
              +1 123 244 5342
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-auto bg-[#b9becf] mx-20  hidden lg:block" />

        {/* Technical Support */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="text-[#131314] text-[28px] font-semibold font-poppins leading-[38px]">
              Technical Support
            </div>
            <div className="text-[#595e70] text-base font-normal font-manrope ">
              Having trouble with the app? Call us or email us directly
            </div>
          </div>

          <div className="flex items-center gap-3">
            <EnvelopeSimple size={22} weight="fill" />
            <div className="text-[#595e70] text-[15px] font-medium font-poppins leading-snug">
              techsupport@recall.com
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={22} weight="fill" />
            <div className="text-[#595e70] text-[15px] font-medium font-poppins leading-snug">
              +1 123 244 5342
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f4f5f8]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between pt-8 pb-8 lg:pb-0 lg:pt-12 px-4 lg:px-0  bg-[#f4f5f8] items-center">
          <Image
            src="/assets/image/contact_section_bg.png"
            alt="contact_section"
            width={460}
            height={590}
            className="mb-6 lg:mb-0"
          />

          <form className="max-w-[610px] max-h-[528px] p-8 bg-white rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.20)] flex flex-col">
            {/* Heading */}
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-[#131314] text-[28px] font-semibold font-poppins">
                Get in touch
              </h2>
              <p className="text-[#595e70] text-[15px] font-normal font-manrope ">
                We value your feedback and aim to respond to all inquiries
                within 24–48 hours during business days.
              </p>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-3.5">
              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-[#131314] text-[13px] font-normal font-poppins"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="ex: John Doe"
                  className="w-full px-4 py-2.5 bg-white rounded-[30px] outline outline-[#b9becf] text-[#8c94ab] text-sm font-normal font-manrope "
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[#131314] text-[13px] font-normal font-poppins"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ex: johndoe@gmail.com"
                  className="w-full px-4 py-2.5 bg-white rounded-[30px] outline outline-[#b9becf] text-[#8c94ab] text-sm font-normal font-manrope "
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-[#131314] text-[13px] font-normal font-poppins"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type here"
                  className="w-full px-4 py-[11px] bg-white rounded-[30px] outline outline-[#b9becf] text-[#8c94ab] text-sm font-normal font-manrope  resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-[18px] py-2.5 bg-[#415ad7] rounded-[30px] text-white text-sm font-medium font-poppins mt-6"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
