import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="my-8" id="about">
      <div className="max-w-6xl mx-auto py-12">
        <div className="flex justify-between px-4">
          {/* Image Section */}
          <div className="w-1/2 px-3 pt-8 my-auto">
            <Image
              src="/about_image.jpg"
              alt="about_image"
              width={400}
              height={300}
              className="rounded-lg w-auto h-auto"
              style={{ boxShadow: '30px 30px #fd7d6a'}}
            />
          </div>
          {/* Description */}
          <div className="w-1/2 p-4">
          <div className="font-semibold text-lg">Who we are</div>
            <div className="text-[40px] font-bold leading-10 my-5">Welcome to Blue Sparing - A Top Digital Solution Company in India</div>
            <div className="text-lg font-normal">
              At BlueSparing, we are dedicated to empowering businesses with
              cutting-edge digital solutions that drive growth and innovation.
              Since our inception, we have been on a mission to simplify
              technology for our clients by offering tailored web and app
              development services. 
            </div>
            <div className="group">
            <button className="transition-all ease-in duration-1800 group-hover:duration-200 group-hover:ease-in-out text-white font-bold bg-customOrange border-2 border-customOrange hover:bg-white hover:text-customOrange px-9 py-3 rounded-full mt-5">
            Read More
          </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
