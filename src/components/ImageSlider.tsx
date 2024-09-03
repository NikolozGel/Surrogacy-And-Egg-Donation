import { useEffect, useState } from "react";
import pregnantImage from "/images/parents-2.jpg";
import "./ImageSlider.css";
import parentImg2 from "/images/family-play.jpg";
import parentImg3 from "/images/family-fun-time-stockcake.jpg";
import baby from "/images/baby.jpg";
import smilingChildImg from "/images/smiling.jpg";
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
    }, 4000); // 4 წამი (4000 მილიწამი)

    // 3. გაწმენდა ინტერვალის, როცა კომპონენტი მოიხსნება
    return () => clearInterval(interval);
  }, [currentIndex]); // დამოკიდებულების სია შეიცავს currentIndex-ს

  return (
    <div className="flex justify-between relative">
      <button
        className="bg-green-600 w-[70px] h-[70px] rounded-full absolute bottom-[50%] ml-6"
        onClick={previousImage}
      >
        {"<"}
      </button>

      <div className="w-screen image">
        <img
          src={images[currentIndex]}
          alt="Slideshow"
          className="w-screen transition ease-in-out duration-300"
        />
      </div>

      <button
        className="bg-green-600 w-[70px] h-[70px] rounded-full absolute right-0 bottom-[50%] mr-6"
        onClick={nextImage}
      >
        {">"}
      </button>
    </div>
  );
}
