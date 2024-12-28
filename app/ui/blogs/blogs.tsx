
import React from "react";
import BlogSlider from "./blogslider";

const Blogs = () => {
  return (
    <div className="my-8" id="blogs">
      <div className="max-w-6xl mx-auto">
        {/* blog cards */}
        <BlogSlider />
      </div>
    </div>
  );
};

export default Blogs;
