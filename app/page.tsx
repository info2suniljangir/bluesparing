import Service from "./ui/service/service";
import Experience from "./ui/experience/experience";
import Navbar from "./ui/navbar/navbar";
import About from "./ui/about/about";
import ImageSlider from "./ui/slider/slider";
import Blogs from "./ui/blogs/blogs";
// import Testimonials from "./ui/testimonial/testimonial";
import Footer from "./ui/footer/footer";
import TestimonialSlider from "./ui/testimonial/testimonialslider";
import ContactUs from "./ui/contactus/contact";


export default function Home() {
  return (
    <div>
      {/* Header */}
      <div>
        <Navbar />
        <ImageSlider />
        <About />
        <Experience />
        <Service />
        <Blogs />
        {/* <Testimonials /> */}
        <TestimonialSlider />
        <ContactUs />
      </div>


      <footer>
       <Footer />
      </footer>
    </div>
  );
}
