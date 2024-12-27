"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative bg-customOrange">
      <div className="max-w-6xl flex mx-auto justify-between">
        {/* left Side Panel */}
        <div className="w-1/2">
        <div className="text-white font-bold text-[40px]">Empowering your business</div>
        <div className="text-white font-bold text-[40px]">Next-Gen IT Solutions</div>
        <button className="text-black font-bold hover:bg-customOrange border-2 border-customOrange hover:border-white hover:text-white bg-white px-9 py-3 rounded-full mt-10">Get Started</button>
        </div>
        {/* // Slider Container */}
        <div className="border border-gray-300 w-1/3" >
          <Slider {...settings}>
            {/* the height of all the sliders equal to max hight of a slider in them
            this makes a mismatch in the heights of slider
            there is a issue with height in slick-carousel
            I have to solve it later
            */}
            <div className="mb-[-10px]">
              <Image 
              src='/Slider_1.jpg'
              alt="slider1.jpg"
              width={384}
              height={384}
              className=""
              />
            </div>
            <div className="mb-[-10px]">
              <Image 
              src='/Slider_1.jpg'
              alt="slider1.jpg"
              width={384}
              height={384}
              className=""
              />
            </div>
            <div className="mb-[-10px]">
            <Image 
              src='/Slider_1.jpg'
              alt="slider2.jpg"
              width={384}
              height={384}
              className=""
              />
            </div>
            <div className="mb-[-10px]">
            <Image 
              src='/Slider_1.jpg'
              alt="slider3.jpg"
              width={384}
              height={384}
              className=""
              />
            </div>
            <div className="mb-[-10px]">
            <Image 
              src='/Slider_1.jpg'
              alt="slider4.jpg"
              width={384}
              height={384}
              className=""
              />
            </div>
            <div className="mb-[-10px]">
            <Image 
              src='/Slider_1.jpg'
              alt="slider6.jpg"
              width={384}
              height={384}
              className=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
