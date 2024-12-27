import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
   
      
        <div className="mb-8">
          <div className="text-center text-white">
            {/* Heading */}
            <div className="text-center text-[40px] font-bold mb-12">Testimonial</div>
            {/* Photo */}
            <div className="">
              <Image
                src="/testimonial_profile_pic.png"
                alt="User Profile Pic"
                width={100}
                height={100}
                className="mx-auto border-2 rounded-full my-12"
              />
            </div>
            {/* Name */}
            <div className="text-3xl mb-8">Mohhamad Roshan</div>
            {/* Description */}
            <div className="text-[22px] font-medium ">
              I am extremely satisfied with the services provided by Blue
              Sparing. Their expertise in IT solutions is unmatched, and they
              have truly transformed our business operations. The team at blue
              sparing is highly professional, responsive, and dedicated to
              delivering results. With their help, we were able to streamline
              our processes, improve efficiency, and enhance customer
              satisfaction. I highly recommend blue sparing to any business
              looking to elevate their IT infrastructure and stay ahead in
              todays competitive market
            </div>
          </div>
        </div>
  );
};

export default Testimonials;
