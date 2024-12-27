

import React from "react"
import Image from "next/image";

const BlogCard = () => {
  return (
    <div>
      <div className="rounded-lg max-w-80 shadow-md">
          {/* Image part */}
          <div className="w-80 h-72 relative">
            <Image
              src="/Slider_2.jpg"
              alt="blog_image"
              fill
              className="rounded-t-lg"
              sizes="(max-width: 768px) 320px, (max-width: 1200px) 320px, 320px" // Define image size based on viewport width
              style={{objectFit: 'cover'}}
            />
          </div>
          {/* text part */}
          <div className="p-4">
            {/* Description */}
            <div className="font-bold text-base">
              CodeCrafted: Mastering the Art and Science of Programming
            </div>
            {/* Date */}
            <div className="mt-2 text-sm" style={{ color: "#696969" }}>
              <span className="border-r border-gray-400 mr-2 pr-2 py-0">
                admin
              </span>
              <span>Dec 24, 2024</span>
            </div>
          </div>
        </div>
    </div>
  )
};

export default BlogCard;
