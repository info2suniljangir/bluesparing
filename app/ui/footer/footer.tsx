import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialGooglePlusCircular } from "react-icons/ti";
import { DiGithub } from "react-icons/di";
import { PiFacebookLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div
      className=" text-white py-12 "
      style={{ color: "#d6c4c4", background: "#0d0c0c" }}
    >
      <div className="max-w-6xl mx-auto ">
        {/* Top Section */}
        <div className="flex justify-between">
          {/* About */}
          <div className="w-1/4">
            <div className="font-extrabold text-lg text-white mb-5 ">
              <h3 className="relative text-xl font-bold before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-10 before:h-[2px] before:bg-white">
                Blue Sparing
              </h3>
            </div>
            <div className="text-[13px] pr-12 leading-7">
              We are the best IT software provider to improve your work.
              Specializing in insurance IT solutions, we enhance efficiency and
              customer engagement through innovative app development.
            </div >
           
            
            <div></div>
          </div>
          {/* Quick Links */}
          <div className="w-1/4">
            <div className="font-extrabold text-lg text-white mb-5 ">
              <h3 className="relative text-xl font-bold before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-10 before:h-[2px] before:bg-white">
                Quick Links
              </h3>
            </div>
            <div className="text-[13px] leading-7 hover:text-customOrange">About</div>
            <div className="text-[13px] leading-7 hover:text-customOrange">Services</div>
            <div className="text-[13px] leading-7 hover:text-customOrange">Testimonials</div>
            <div className="text-[13px] leading-7 hover:text-customOrange">Contact Us</div>
          </div>
          {/* Contact Info */}
          <div className="w-1/4 px-2">
            <div className="font-extrabold text-lg text-white mb-5 ">
              <h3 className="relative text-xl font-bold before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-10 before:h-[2px] before:bg-white">
                Contact Info
              </h3>
            </div>

            <div className="text-[13px] leading-7">
              505, 5th Floor, Royal Word, Sansar Chandra Road, Jaipur - 302001
            </div>
            <div className="text-[13px] leading-7">+91 96490 09500</div>
            <div className="text-[13px] leading-7">support@bluesparing.com</div>
          </div>
          {/* Newsletter */}
          <div className="w-1/4">
            <div className="font-extrabold text-lg text-white mb-5 ">
              <h3 className="relative text-xl font-bold before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-10 before:h-[2px] before:bg-white">
                Newsletter
              </h3>
            </div>

            <div className="my-5">
              <input type="email" placeholder="Email Address" className="h-11 rounded-tl-[4px] rounded-bl-[4px] outline-none text-black p-[10px] text-sm w-[80%]"/>
              <button className="bg-customOrange absolute h-11 p-4 rounded-tr-[4px] rounded-br-[4px] text-white">
                <FaPaperPlane />
              </button>
            </div>
            <div className="text-[13px] leading-7">
              Subscribe to our mailing list and get updates to your email inbox.
            </div>
          </div>
        </div>
        <div className="border-[1px] border-b-[#d6c4c4] w-full my-8"></div>
        {/* Bottom Section */}
        <div className="text-center my-4 flex justify-between items-center">
            <div className="text-xs font-normal"> © 2024 Work Field. All rights reserved. Design by❤️ Blue Sparing</div>
            <div className="text-xs font-bold text-customOrange">TOP WEB AND APP DESIGN COMPANY IN INDIA</div>
             {/* Social media logos */}
             <div className="flex gap-4 ">
            <div className="font-bold text-[32px] pt-[2px] hover:text-customOrange">
              <PiFacebookLogoBold />
            </div>
            <div className="font-bold text-4xl hover:text-customOrange">
              <TiSocialLinkedinCircular />
            </div>
            <div className="font-bold text-4xl hover:text-customOrange">
              <TiSocialTwitterCircular />
            </div>
            <div className="font-bold text-4xl hover:text-customOrange">
              <TiSocialGooglePlusCircular />
            </div>
            <div className="font-bold text-4xl hover:text-customOrange">
              <DiGithub />
            </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
