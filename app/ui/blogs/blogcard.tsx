

import React from "react"
import Image from "next/image";

const BlogCard = () => {
  return (
    <div>
      <div className="rounded-lg max-w-80 shadow-md">
          {/* Image part */}
          <div className="">
            <Image
              src="/slider_1.jpg"
              alt="blog_image"
              width={320}
              height={280}
              className="rounded-t-lg"
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
