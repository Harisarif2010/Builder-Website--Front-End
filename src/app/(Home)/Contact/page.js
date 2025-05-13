import React from "react";
import Header from "../../../../Components/Layout/Header";
import { socialIcons } from "@/app/data";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <Header
        heading="Stay Updated with Real-Time Notifications"
        text="Never Miss a Quote Response or Exclusive Offer – Get Instant Alerts!"
      />
      <div className="w-full mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-[6vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Contact Form */}
          <div className="ml-[4vw]">
            <h2 className="text-2xl font-bold mb-6 text-[#000000]">
              Contact Us
            </h2>
            <form>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[22px] font-medium mb-1 text-[#000000] "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter a name"
                    className="w-full px-4 py-2 border border-[#C0C0C0] rounded-[24px] focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-[#8C8C8C]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[22px] font-medium mb-1 text-[#000000] "
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter a subject"
                    className="w-full px-4 py-2 border border-[#C0C0C0] rounded-[24px] focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-[#8C8C8C]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[22px] font-medium mb-1 text-[#000000]  "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter an email"
                    className="w-full px-4 py-2 border border-[#C0C0C0] rounded-[24px] focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-[#8C8C8C]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[22px] font-medium mb-1  "
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message"
                    rows={6}
                    className="w-full px-4 py-2 border border-[#C0C0C0] rounded-[24px] focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-[#8C8C8C]"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[var(--primary-blue)] text-white font-medium rounded-[38px] transition-colors duration-200"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className=" mr-[8vw]">
            <h2 className="text-2xl font-bold mb-6 text-[#000000]">
              Contact Info
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/mailblack.svg"
                  width={26}
                  height={26}
                  alt="mail"
                />
                <a
                  href="mailto:notaprox@gmail.com"
                  className="text-gray-700 hover:underline"
                >
                  builders@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/icons/phoneblack.svg"
                  width={26}
                  height={26}
                  alt="phone"
                />
                <a
                  href="tel:+9887593548"
                  className="text-gray-700 hover:underline"
                >
                  098675582348
                </a>
              </div>

              <div className="pt-4">
                <div className="flex gap-4 mt-2">
                  {socialIcons.map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      aria-label={`Social Icon ${index + 1}`}
                      className="h-10 w-10 flex items-center justify-center rounded-full border border-black hover:bg-gray-100 transition-colors"
                    >
                      <Image
                        src={icon}
                        alt={`Icon ${index + 1}`}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
