"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./testimonial";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { CustomArrowProps } from "react-slick";


function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="text-3xl absolute right-[-10px] top-40 hidden md:block"
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle className="text-white" />
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const {  onClick } = props;
  return (
    <div
      className="text-3xl absolute left-[-10px] top-40 hidden md:block"
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle className="text-white"/>
    </div>
  );
}

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="mt-16" id="testimonial">
      <div className="bg-customOrange py-20 px-4">
        <div className="slider-container relative max-w-6xl m-auto">
          <Slider {...settings}>
            <div>
              <Testimonials />
            </div>
            <div>
              <Testimonials />
            </div>
            <div>
              <Testimonials />
            </div>
            <div>
              <Testimonials />
            </div>
            <div>
              <Testimonials />
            </div>
            <div>
              <Testimonials />
            </div>
            <div>
              <Testimonials />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
