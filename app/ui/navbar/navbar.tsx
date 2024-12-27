"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border border-gray-300 py-3 h-[90px]">
      <div className="flex justify-between items-center px-[15px] max-w-xs sm:max-w-[540px] md:max-w-6xl mx-auto h-full">
        {/* Logo Container */}
        <div className="flex gap-2">
          <div className="">
            <Image
              src="/New_Blue_Sparing_Logo.jpg"
              alt="Logo"
              width={35}
              height={35}
            />
          </div>
          <div className="h-10 border-s-2 border-gray-500"></div>

          <div>
            <div className="font-bold text-xl mt-[-2px]">Blue Sparing</div>
            <div className="text-xs mt-[-4px]">
              Think diffrent to be the best
            </div>
          </div>
        </div>

        {/* Navlink Contaienr */}
        <div className="hidden md:block">
          <ul className="flex">
            <li className=" px-3 font-bold text-customOrange ">
              <Link
                href="/Home"
                className="border-b-[1px] border-customOrange px-2"
              >
                Home
              </Link>
            </li>
            <li className=" px-3 font-bold text-customOrange ">
              <Link
                href="/Home"
                className="hover:border-b-[1px] hover:border-customOrange px-2"
              >
                About
              </Link>
            </li>
            <li className=" px-3 font-bold text-customOrange ">
              <Link
                href="/Home"
                className="hover:border-b-[1px] hover:border-customOrange px-2"
              >
                Service
              </Link>
            </li>
            <li className=" px-3 font-bold text-customOrange ">
              <Link
                href="/Home"
                className="hover:border-b-[1px] hover:border-customOrange px-2"
              >
                Blog
              </Link>
            </li>
            <li className=" px-3 font-bold text-customOrange ">
              <Link
                href="/Home"
                className="hover:border-b-[1px] hover:border-customOrange px-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
