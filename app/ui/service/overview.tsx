import Image from "next/image";
import React from "react";

const ServiceOverview = () => {
  return (
    <div className="my-10">
      <div className="max-w-6xl mx-auto border border-customOrange rounded-lg  flex justify-between">
        {/* dialogue div */}
        <div className="  py-5 pr-5 pl-[30px]">
          <div className="font-bold text-xl">
            All Your Development, Design, and Consultancy Needs in One Place
          </div>
          <button className="text-white font-bold bg-customOrange border-2 border-customOrange hover:bg-white hover:text-customOrange px-5 rounded-full mt-5">
            View More
          </button>
        </div>
        {/* icon div */}
        <div className="p-5 my-auto">
          <Image
            src="/technology.png"
            alt="all-your-development.png"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
