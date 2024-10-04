import { useState } from "react";
import { MdStars, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import FeedbackCard from "../Cards/FeedbackCard";


const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 4 : prevIndex - 1
    );
  };


  return (
    <div className="mb-20">
      <div className="items-center flex justify-center mb-10 mt-10">
        <h1 className="md:text-6xl text-4xl pl-3 pr-3 text-center font-bold text-[#004D43] mt-4 mb-40">
          Testimonials
        </h1>
      </div>



      <FeedbackCard />

    </div>  








  );
};

export default ReviewCarousel;
