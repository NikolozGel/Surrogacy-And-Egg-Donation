import { useState } from "react";
import pregnantImage from "/images/parents-2.jpg";
import parents from "/images/parents.webp";

export default function ImageSlider() {
  const images = [pregnantImage, parents]; // Array of images
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

  return (
    <div className="flex justify-between relative ">
      <button
        className="bg-green-600 w-[70px] h-[70px] rounded-full absolute"
        onClick={previousImage}
      >
        {"<"}
      </button>

      <div className="w-[100%]">
        <img src={images[currentIndex]} alt="Slideshow" />
      </div>

      <button
        className="bg-green-600 w-[70px] h-[70px] rounded-full absolute right-0"
        onClick={nextImage}
      >
        {">"}
      </button>
    </div>
  );
}
