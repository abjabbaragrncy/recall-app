import { manrope, poppins } from "@/Font/font";

export const metadata: Metadata = {
  title: "Terms & Conditions | Recall Products",
  description:
    "Read the terms and conditions governing your use of Recall Alerts. Understand your rights, responsibilities, and the rules that ensure transparency and trust across our platform.",
};

const page = () => {
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
        <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 ">
          <h2 className=" text-center text-3xl font-semibold  text-white sm:text-[40px] font-poppins">
            Terms & Conditions
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto min-h-screen space-y-8 md:py-[72px] py-[32px] px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            Acceptance of Terms
          </div>
          <div className="text-Subtitle text-base font-poppins ">
            By using RecallGuard, you confirm that you are at least 13 years old
            and legally capable of entering into binding agreements. Your use of
            the Service is subject to these Terms, as well as our [Privacy
            Policy].
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            Service Overview
          </div>
          <div className="text-Subtitle text-base font-poppins">
            RecallGuard is a platform designed to help users:
            <br />
            Search for product recall alerts
            <br />
            Receive custom notifications about scams and safety warnings
            <br />
            Report issues or concerns
            <br />
            Access educational safety content
            <br />
            We aim to provide accurate and up-to-date information, but we do not
            guarantee completeness or absolute accuracy due to the evolving
            nature of recall and scam alerts.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            User Responsibilities
          </div>
          <div className="text-Subtitle text-base font-poppins">
            When using RecallGuard, you agree to:
            <br />
            Use the platform for lawful purposes only
            <br />
            Provide accurate information when registering or submitting reports
            <br />
            Not impersonate others or misrepresent data
            <br />
            Refrain from uploading harmful, misleading, or malicious content
            <br />
            We reserve the right to suspend or remove any user account that
            violates these terms.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            Data & Privacy
          </div>
          <div className="text-Subtitle text-base font-poppins">
            Your privacy is important to us. Please review our [Privacy Policy]
            to understand how we collect, use, and protect your data when you
            use the Service.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            Content Ownership and Use
          </div>
          <div className="text-Subtitle text-base font-poppins">
            All text, graphics, data, logos, software, and trademarks on the
            platform are the property of RecallGuard or its licensors. You may
            not reproduce, modify, or distribute content without our prior
            written consent.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            Third-Party Links and Services
          </div>
          <div className="text-Subtitle text-base font-poppins">
            RecallGuard may contain links or references to third-party websites,
            databases, or services. We are not responsible for the content,
            accuracy, or security of these external resources.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            Disclaimer of Warranties
          </div>
          <div className="text-Subtitle text-base font-poppins">
            The Service is provided “as is” and “as available.” We make no
            guarantees that:
            <br />
            The information is always complete or error-free
            <br />
            Alerts will be delivered without delay
            <br />
            The app will operate uninterrupted or without bugs
            <br />
            Use of the platform is at your own risk.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            Limitation of Liability
          </div>
          <div className="text-Subtitle text-base font-poppins">
            To the fullest extent permitted by law, RecallGuard and its
            affiliates are not liable for any direct, indirect, incidental, or
            consequential damages related to your use of the Service. This
            includes, but is not limited to, loss of data, injury, or financial
            harm resulting from reliance on information provided.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            Modifications to the Terms
          </div>
          <div className="text-Subtitle text-base font-poppins">
            We may update these Terms from time to time. If we make significant
            changes, we will notify users via email or in-app notifications.
            Continued use after changes means you accept the updated Terms.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            Termination
          </div>
          <div className="text-Subtitle text-base font-poppins">
            We reserve the right to terminate or restrict your access to the
            Service at any time, with or without notice, for any conduct that we
            believe violates these Terms or is harmful to other users or the
            platform.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-BlackBg text-xl font-semibold font-manrope">
            Governing Law
          </div>
          <div className="text-Subtitle text-base font-poppins">
            These Terms and Conditions are governed by the laws of the State of
            [Insert State/Country]. Any disputes shall be resolved in the courts
            of that jurisdiction.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
