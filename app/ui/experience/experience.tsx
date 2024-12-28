import React from "react";
import { FaRProject } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaMugHot } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="bg-customOrange py-12" id="experience">
      <div className="max-w-6xl mx-auto text-center text-white py-12 px-4">
        {/* Heading */}
        <div className="max-w-lg mx-auto">
          <h3 className="text-[40px] font-bold ">
            We have over 10 years Experience
          </h3>
        </div>
        {/* Experience Datas */}
        <div className="flex justify-between mt-10 ">
            {/* NO-1 */}
            <div className="py-8 px-10">
                <div className="flex justify-center">
                    <FaRProject className="text-4xl" />
                </div>
                <div className="m-3 font-bold text-5xl">20</div>
                <div className="text-lg font-normal">Successful Projects</div>
            </div>
            {/* NO-2 */}
            <div className="py-8 px-10">
                <div className="flex justify-center">
                    <FaSmile className="text-4xl" />
                </div>
                <div className="m-3 font-bold text-5xl">20</div>
                <div className="text-lg font-normal">Hapy Clients</div>
            </div>
            {/* No-3 */}
            <div className="py-8 px-10">
                <div className="flex justify-center">
                    <FaMedal className="text-4xl" />
                </div>
                <div className="m-3 font-bold text-5xl">20</div>
                <div className="text-lg font-normal">Successful Projects</div>
            </div>
            {/* No-4 */}
            <div className="py-8 px-10">
                <div className="flex justify-center">
                    <FaMugHot className="text-4xl" />
                </div>
                <div className="m-3 font-bold text-5xl">20</div>
                <div className="text-lg font-normal">Successful Projects</div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
