import React from "react";
import { FaDesktop } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import ServiceOverview from "./overview";
const Service = () => {
  return (
    <div className="my-8">
      {/* About top part */}
      <div className="flex justify-between flex-col md:flex-row max-w-6xl mx-auto">
        {/* Left Panel */}
        <div className="w-2/3 flex flex-wrap  justify-center border-gray-300 ">
        {/* App Development */}
          <div className="group border border-customOrange hover:bg-customOrange hover:text-white rounded-lg mx-1 my-2 p-9 w-calc-50-14 ">
            <div className="mb-2 text-customOrange group-hover:text-white">
              <FaMobile className="text-[40px]" />
            </div>
            <div className="font-bold text-2xl">App Development</div>
            <div> innovative mobile app development services.</div>
          </div>
          {/* Web Development */}
          <div className="mx-1 my-2 p-9 w-calc-50-14 bg-customOrange text-white  rounded-lg">
            <div className="mb-2">
              <FaDesktop className="text-[40px]" />
            </div>
            <div className="font-bold text-2xl">Web Development</div>
            <div>tailored software solutions</div>
          </div>
          {/* Consulting */}
          <div className="group border border-customOrange hover:bg-customOrange hover:text-white rounded-lg mx-1 my-2 p-9 w-calc-50-14 shadow-customShadow">
            <div className="mb-2 text-customOrange group-hover:text-white">
              <FaUsers className="text-[40px]" />
            </div>
            <div className="font-bold text-2xl">Consluting</div>
            <div>navigate the complex technology</div>
          </div>
          {/* Graphic Design */}
          <div className="group border border-customOrange hover:bg-customOrange hover:text-white rounded-lg mx-1 my-2 p-9 w-calc-50-14 shadow-customShadow">
            <div className="mb-2 text-customOrange group-hover:text-white">
              <FaCity className="text-[40px]" />
            </div>
            <div className="font-bold text-2xl">Graphics Design</div>
            <div> Enhance your brand appeal with our expert .</div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-1/3 py-2 px-8 ml-2 my-2 border border-customOrange rounded-lg">
          <div className="font-bold text-2xl mb-4">
            Innovative IT Solutions For Your Business
          </div>
          <div>
            At Blue Sparing, we specialize in providing innovative IT solution
            with a focus on the insurance industry. our mission is to empower
            insurance companies through cutting-edge technology, enhancing
            efficiency and customer engagement. Our expertise in developing
            robust, user-friendly insurance apps allows our clients to
            streamline their operations and provide exceptional service to their
            customers. Trust us to be your partner in digital transformation and
            innovation.
          </div>
          <button className="text-white font-bold bg-customOrange border-2 border-customOrange hover:bg-white hover:text-customOrange px-9 py-3 rounded-full mt-5">
            Learn More
          </button>
        </div>
      </div>
      <ServiceOverview />
    </div>
  );
};

export default Service;
