import React from "react";
import Header from "../../../../Components/Layout/Header";

const Privacy = () => {
  return (
    <div>
      <Header
        heading="Your Privacy our Commitment"
        text="We value your privacy and are committed to protecting your personal data. Learn how we collect, use, and safeguard your information."
      />

      <div className="bg-white w-full my-5">
        <div className=" px-4 sm:px-6   py-8">
          <h1 className="text-[#000000] text-center font-bold text-3xl sm:text-4xl md:text-5xl p-3 mb-6">
            Privacy Policy
          </h1>

          <h3 className="text-[#767676] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed mb-6">
            At Builder website, we prioritize your privacy and are committed to
            protecting your personal data. We collect essential information such
            as your name, email, contact details, and securely processed payment
            data to ensure a seamless user experience. Additionally, we gather
            usage data and cookies to enhance functionality. Your information is
            used to improve our services, process transactions securely, and
            communicate important updates or promotions. We implement strict
            security measures, including end-to-end encryption and compliance
            with global privacy regulations, to safeguard your data. Users have
            full control over their personal information, with the ability to
            access, edit, or delete their data at any time. You can also opt out
            of promotional emails and request a copy of stored data. We do not
            share personal information with unauthorized third parties, and any
            collaborations with verified partners are conducted transparently.
            Our website may use cookies and tracking technologies to enhance
            your experience, with the option to manage cookie preferences. For
            any privacy-related concerns, our dedicated support team is
            available via email or live chat to assist you. By continuing to use
            our platform, you agree to our Privacy Policy. You can review the
            full details by clicking the{" "}
            <span className="text-[var(--primary-blue)] underline cursor-pointer">
              &quot;Read Full Privacy Policy link.&quot;
            </span>
          </h3>

          <h3 className="text-[#000000] text-xl sm:text-2xl md:text-3xl font-semibold mt-8 mb-2">
            Contact Us
          </h3>
          <p className="text-[#000000] text-base sm:text-lg md:text-xl font-normal leading-relaxed">
            If you have any questions about this Privacy Policy, the practices
            of this Website, or your dealings with this Website, please contact
            us at (Email) or alternatively by website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
