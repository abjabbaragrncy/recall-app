"use client";
import Calltoaction from "@/components/Calltoaction";
import { manrope, poppins } from "@/Font/font";
import { Minus, Plus } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const faqs = [
    {
      question:
        "How can users customize their notification settings in the Recall Publisher app?",
      answer:
        "Users can access notification settings from the app menu and toggle alerts by category or urgency.",
    },
    {
      question:
        "What steps should users take to report a product issue through the Recall Publisher application?",
      answer:
        "Tap 'Report Issue' in the app, fill out the form with details and submit photos if needed.",
    },
    {
      question:
        "Is there a way to search for specific recalls in the Recall Publisher app?",
      answer:
        "Yes, use the built-in search bar to find recalls by product name, brand, or category.",
    },
    {
      question:
        "How does the Recall Publisher app ensure the accuracy of recall information?",
      answer:
        "The app syncs with verified government databases and is updated regularly for accuracy.",
    },
    {
      question:
        "Can users access historical recall data through the Recall Publisher application?",
      answer:
        "Yes, users can browse the archive to view past recalls by date or product category.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className={`${manrope.variable} ${poppins.variable} bg-WhiteSubtle `}>
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
          <h2 className="mb-5 text-center  text-3xl font-semibold font-poppins text-white sm:text-[40px]  leading-[48px] max-w-xl mx-auto">
            Who We Are & Why Product Safety Matters
          </h2>
          <p className="text-center text-[16px] text-white/70 max-w-2xl mx-auto font-manrope">
            We’re a team of technologists, consumer advocates, and safety
            experts united by a single mission — to make product safety simple,
            accessible, and proactive for everyone.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16  gap-[116px] px-4 md:px-0 py-8 lg:py-0 lg:pt-16 flex flex-col lg:flex-row items-center">
        {/* Left Rounded Image Card */}
        <div className="w-full max-w-[460px]  h-auto">
          <Image
            src="/assets/image/about_section_bg_02.png"
            width={772}
            height={1158}
            alt="Mission Illustration"
            className=""
          />
        </div>

        {/* Right Content */}
        <div className="w-full py-5 flex flex-col">
          <div className="flex flex-col gap-5">
            <h2 className="text-[#131314] text-[32px] font-semibold font-poppins leading-[48px]">
              Our mission is to keep individuals and families informed about
              product recalls that affect their daily lives
            </h2>
            <p className="text-[#595e70] text-base font-normal font-manrope tracking-tight">
              We’re committed to bridging the gap between official safety alerts
              and the people who need them most. By combining public data,
              expert insight, and user-submitted reports, we aim to make recall
              and scam awareness accessible to all.
            </p>
          </div>

          {/* Divider */}
          <div className=" h-0 my-8 outline-1 outline-offset-[-0.50px] outline-[#b9becf]" />

          {/* Quote & Author */}
          <div className="flex flex-col gap-6">
            <blockquote className="text-[#425bd8] text-lg font-medium font-poppins leading-relaxed">
              “We envision a future where no consumer is left in the dark —
              where recall alerts are automatic and safety is part of every
              purchase”
            </blockquote>
            <div className="flex items-center gap-3">
              <Image
                src="/assets/image/ellipse.png"
                alt="Karen Lynn"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col gap-0.5">
                <p className="text-[#131314] text-lg font-medium font-poppins">
                  Karen Lynn
                </p>
                <p className="text-[#595e70] text-[13px] font-normal font-poppins">
                  CEO & Co-founder @ Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-8 lg:pt-16 bg-white flex flex-col lg:flex-row items-center gap-10 lg:gap-[116px] px-4 md:px-0">
          {/* Text Section */}
          <div className="w-full lg:flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <h2 className="text-[#131314] text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-semibold font-poppins leading-[36px] md:leading-[42px] lg:leading-[48px]">
                A safer, smarter world where everyone has the tools to avoid
                dangerous products and fraudulent practices.
              </h2>
              <p className="text-[#595e70] text-sm sm:text-base font-normal font-manrope tracking-tight leading-normal">
                We noticed a critical gap: official recall information was out
                there, but it was hard to find, slow to update, and often
                ignored. We created RecallGuard to change that. By building a
                recall and scam alert system that’s mobile-first, user-friendly,
                and community-driven, we’re helping millions of people stay safe
                with just a few taps.
                <br className="hidden md:block" />
                Whether you&apos;re a parent, shopper, car owner, or just
                someone who wants to stay informed, RecallGuard is here to help
                you stay one step ahead of risk. Your safety is our priority.
              </p>
            </div>

            {/* Button */}
            <button className="w-fit px-6 py-2.5 bg-[#415ad7] rounded-[30px] flex items-center gap-2 hover:bg-[#334ac2] transition">
              <span className="text-white text-sm font-medium font-poppins">
                Get in Touch
              </span>
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-[460px] relative bg-white">
            <Image
              src="/assets/image/about_section_bg_01.png"
              width={1030}
              height={1158}
              alt="Mission Illustration"
              className=""
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 lg:py-14 space-y-8 px-4 md:px-0">
        <div className="max-w-xl mx-auto text-center  text-[#131314] text-[32px] font-semibold font-poppins leading-[48px]">
          Our core values that drive everything we do
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="max-w-xl w-full px-6 sm:px-8 py-5 bg-white rounded-[10px] shadow-md flex flex-col-reverse sm:flex-row  justify-center md:items-center gap-6 sm:gap-8">
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start gap-2.5">
              <h3 className="text-[#131314] text-lg font-medium font-poppins leading-relaxed">
                Smart Recall Search
              </h3>
              <p className="text-[#595e70] text-sm font-normal font-manrope leading-snug tracking-tight">
                Easily look up recalls across major categories like electronics,
                vehicles, baby products, food — all in one place.
              </p>
            </div>

            {/* Illustration */}
            <div className="w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] relative shrink-0">
              <Image
                src="/assets/image/core_values_01.png"
                width={140}
                height={140}
                alt="Recall Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="max-w-xl w-full px-6 sm:px-8 py-5 bg-white rounded-[10px] shadow-md flex flex-col-reverse sm:flex-row justify-center md:items-center gap-6 sm:gap-8">
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start gap-2.5">
              <h3 className="text-[#131314] text-lg font-medium font-poppins leading-relaxed">
                Custom Alert Notifications
              </h3>
              <p className="text-[#595e70] text-sm font-normal font-manrope leading-snug tracking-tight">
                Set preferences to get real-time notifications for the products
                and categories that matter most to you.
              </p>
            </div>

            {/* Illustration */}
            <div className="w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] relative shrink-0">
              <Image
                src="/assets/image/core_values_02.png"
                width={140}
                height={140}
                alt="Recall Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="max-w-xl w-full px-6 sm:px-8 py-5 bg-white rounded-[10px] shadow-md flex flex-col-reverse sm:flex-row justify-center md:items-center gap-6 sm:gap-8">
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start gap-2.5">
              <h3 className="text-[#131314] text-lg font-medium font-poppins leading-relaxed">
                Scam Awareness Tools
              </h3>
              <p className="text-[#595e70] text-sm font-normal font-manrope leading-snug tracking-tight">
                Receive warnings about trending scams targeting consumers
                through sms, email & in app notifications
              </p>
            </div>

            {/* Illustration */}
            <div className="w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] relative shrink-0">
              <Image
                src="/assets/image/core_values_03.png"
                width={140}
                height={140}
                alt="Recall Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="max-w-xl w-full px-6 sm:px-8 py-5 bg-white rounded-[10px] shadow-md flex flex-col-reverse sm:flex-row justify-center md:items-center gap-6 sm:gap-8">
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start gap-2.5">
              <h3 className="text-[#131314] text-lg font-medium font-poppins leading-relaxed">
                Community Reporting
              </h3>
              <p className="text-[#595e70] text-sm font-normal font-manrope leading-snug tracking-tight">
                Help protect others by submitting suspected product issues or
                scam experiences directly through our app.
              </p>
            </div>

            {/* Illustration */}
            <div className="w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] relative shrink-0">
              <Image
                src="/assets/image/core_values_04.png"
                width={140}
                height={140}
                alt="Recall Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 py-14 flex flex-col items-center gap-8">
          <h2 className="text-center text-[#131314] text-[28px] md:text-4xl font-semibold font-poppins leading-snug md:leading-[48px] max-w-xl">
            Frequently asked questions about our application
          </h2>

          <div className="w-full max-w-5xl rounded-[10px] border border-[#b9becf] overflow-hidden flex flex-col">
            {faqs.map((faq, i) => {
              const isActive = i === activeIndex;

              return (
                <div
                  key={i}
                  onClick={() => toggleFAQ(i)}
                  className={`px-6 py-5 border border-[#e3e5ec] flex items-start gap-4 cursor-pointer transition-all duration-300 hover:border-Primary  ${
                    isActive ? " " : "bg-white"
                  }`}
                >
                  <div className="flex-1 flex flex-col gap-2">
                    <p
                      className={`text-[15px] font-medium font-poppins leading-snug hover:text-Primary   ${
                        isActive ? "text-[#131314]" : "text-[#595e70]"
                      }`}
                    >
                      {faq.question}
                    </p>
                    {isActive && (
                      <p className="text-[#595e70] text-sm font-normal font-manrope leading-snug tracking-tight">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      isActive ? "bg-[#425bd8]" : "bg-[#8c94ab]"
                    }`}
                  >
                    {isActive ? (
                      <Minus size={16} weight="bold" color="#ffffff" />
                    ) : (
                      <Plus size={16} weight="bold" color="#ffffff" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Box */}
          <div className="w-full max-w-5xl px-8 py-8 bg-[#e8efff] rounded-[10px] flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
            {/* Blurred Backgrounds (optional visual effect) */}
            <div className="absolute w-[227px] h-[227px] top-[-50px] left-[-60px] opacity-50 bg-[#30acff] rounded-full blur-[155px] pointer-events-none" />
            <div className="absolute w-[357px] h-[357px] top-[-180px] right-[-70px] opacity-20 bg-[#76ff58] rounded-full blur-[155px] pointer-events-none" />

            <div className="flex-1 space-y-1">
              <h3 className="text-[#131314] text-lg font-medium font-poppins leading-relaxed">
                Still have a question?
              </h3>
              <p className="text-[#595e70] text-[15px] font-normal font-manrope leading-snug tracking-tight">
                Reach out to us for any questions. Our support team will try to
                respond as soon as possible.
              </p>
            </div>

            <button className="px-6 py-2.5 bg-[#415ad7] text-white text-sm font-medium font-poppins rounded-full">
              Contact Us
            </button>
            <Image
              src="assets/SVG/Frame 1597880480.svg"
              width={54}
              height={61}
              alt="arow"
              className="absolute -top-3 right-40"
            />
          </div>
        </div>

        <Calltoaction />
      </div>
    </div>
  );
};

export default Page;
