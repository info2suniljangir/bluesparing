"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogCard from "./blogcard";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { CustomArrowProps } from "react-slick";

function NextArrow(props: CustomArrowProps) {
  const {  onClick } = props;
  return (
    <div
      className="text-3xl absolute right-[-10px] top-40 hidden md:block"
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle className="text-customOrange" />
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const {  onClick } = props;
  return (
    <div
      className="text-3xl absolute left-[-40px] top-40 hidden md:block"
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle className="text-customOrange"/>
    </div>
  );
}

const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <div className="slider-container m-10 ">
        <Slider {...settings}>
          <div className="mb-10">
            <BlogCard />
          </div>
          <div className="mb-10">
            <BlogCard />
          </div>
          <div className="mb-10">
            <BlogCard />
          </div>
          <div className="mb-10">
            <BlogCard />
          </div>
          <div className="mb-10">
            <BlogCard />
          </div>
          <div className="mb-10">
            <BlogCard />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BlogSlider;
