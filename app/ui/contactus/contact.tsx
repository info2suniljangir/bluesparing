import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="my-8" id="contactUs">
      <div className="max-w-6xl m-auto">
        {/* form */}
        <div className="flex justify-between">
          {/* mark this one */}
          <div className=" border border-customOrange rounded-lg px-6 py-10">
            <div className="text-center font-semibold text-3xl">
              Submit your query
            </div>
            <div className=" text-center my-4 font-semibold text-base">
              We will be glad to help you
            </div>
            <form action="" method="post">
              <div className="flex gap-2">
                <div className="border border-customOrange rounded py-2 px-3 w-1/2 my-2">
                  <input
                    type="text"
                    id="fName"
                    name="fName"
                    placeholder="Your Name"
                    className="outline-none "
                  />
                </div>
                <div className="border border-customOrange rounded py-2 px-3 w-1/2 my-2">
                  <input
                    type="email"
                    id="eamil"
                    name="email"
                    placeholder="Your E-mail"
                    className="outline-none "
                  />
                </div>
              </div>
              <div className="border border-customOrange rounded py-2 px-3 my-5">
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone"
                  className="outline-none"
                />
              </div>
              <div className="border border-customOrange rounded py-2 px-3 my-5">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="outline-none"
                />
              </div>
              <div className="border border-customOrange rounded py-2 px-3 ">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="outline-none w-full"
                />
              </div>
              <button
                type="submit"
                className="border-2 border-customOrange text-center font-medium text-base w-full my-5 py-2 rounded"
              >
                Send Your Message
              </button>
            </form>
            {/* Contact information */}
            <div className="flex justify-center items-center gap-2 text-sm font-semibold">
                <div>+91 96490 09500</div>
                <div className="border-l-[1px] border-gray-600 h-6 "></div>
                <div>support@bluesparing.com</div>
            </div>
          </div>
          {/* image */}
          <div className="hidden md:block w-1/2  ">
          <Image 
          src="/team_image.png"
          alt="/team_image"
          height={500}
          width={500}
          className="mx-auto"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
