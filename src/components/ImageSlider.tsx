import { useEffect, useState } from "react";
import pregnantImage from "/images/parents-2.jpg";

import parentImg2 from "/images/family-play.jpg";
import parentImg3 from "/images/family-fun-time-stockcake.jpg";
import baby from "/images/baby.jpg";
import smilingChildImg from "/images/smiling.jpg";
import "./imageSlider.css";
import RightArrow from "/images/right-arrow.png";
import LeftArrow from "/images/left-chevron.png";
export default function ImageSlider() {
  const images = [pregnantImage, parentImg2, parentImg3, smilingChildImg, baby]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // 4 წამი (4000 მილიწამი)

    // 3. გაწმენდა ინტერვალის, როცა კომპონენტი მოიხსნება
    return () => clearInterval(interval);
  }, [currentIndex]); // დამოკიდებულების სია შეიცავს currentIndex-ს

  return (
    <div className="flex justify-between relative">
      <button
        className="bg-green-600 w-[70px] h-[70px] rounded-full absolute bottom-[50%] ml-6 flex items-center justify-center"
        onClick={previousImage}
      >
        <img src={LeftArrow} alt="leftArrowImg" className="w-8" />
      </button>

      <div className="w-screen image slider-container">
        <img
          src={images[currentIndex]}
          alt="Slideshow"
          className="w-screen slider-image"
        />
      </div>

      <button
        className="bg-green-600 w-[70px] h-[70px] rounded-full absolute right-0 bottom-[50%] mr-6  flex items-center justify-center"
        onClick={nextImage}
      >
        <img src={RightArrow} alt="rightArrowImg" className="w-8" />
      </button>
      <h1></h1>
    </div>
  );
}
