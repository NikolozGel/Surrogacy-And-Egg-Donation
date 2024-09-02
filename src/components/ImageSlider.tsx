import { SetStateAction, useState, useEffect } from "react";
import "./ImageSlidesStyles.css";

interface Slide {
  url: string;
}

interface Islides {
  slides: Slide[];
}

const ImageSlider = ({ slides }: Islides) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isButtonActive, setIsButtonActive] = useState<boolean>(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(
    null
  );
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex =
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
        return newIndex;
      });
    }, 6000); // Change image every 6 seconds

    setIntervalId(id);

    // Clean up interval on component unmount
    return () => clearInterval(id);
  }, [slides.length]);

  const resetInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex =
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
        return newIndex;
      });
    }, 6000);

    setIntervalId(id);
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles: React.CSSProperties = {
    position: "absolute" as const,
    top: "40%",
    transform: "translate (0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
  };

  const rightArrowStyles: React.CSSProperties = {
    position: "absolute" as const,
    top: "40%",
    transform: "translate (0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotSTyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const handleButtonClick = (callback: () => void) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setIsButtonActive(false);
    callback();

    const id = setTimeout(() => {
      setIsButtonActive(true);
    }, 1000); // 1 წამი

    setTimeoutId(id);

    // Reset automatic slide change interval
    resetInterval();
  };

  const handleDotClick = (slideIndex: number) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setIsButtonActive(false);
    goToSlide(slideIndex);

    const id = setTimeout(() => {
      setIsButtonActive(true);
    }, 1000); // 1 წამი

    setTimeoutId(id);

    // Reset automatic slide change interval
    resetInterval();
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[100%] relative flex flex-col items-center">
      {/* ეს ორი არის ფოტოზე გადასასვლელი ღილაკი */}
      <div className="hidden md:block">
        <div
          style={leftArrowStyles}
          onClick={() =>
            isButtonActive && handleButtonClick(goToPrevious)
          }
          className={`bg-orange-600 w-[70px] h-[70px] pl-6 rounded-full opacity-60 ${
            isButtonActive
              ? "hover:opacity-100 active:opacity-100"
              : ""
          }`}
        >
          {"<"}
        </div>

        <div
          style={rightArrowStyles}
          onClick={() =>
            isButtonActive && handleButtonClick(goToNext)
          }
          className={`bg-orange-600 w-[70px] h-[70px] pl-6 rounded-full opacity-60 ${
            isButtonActive
              ? "hover:opacity-100 active:opacity-100"
              : ""
          }`}
        >
          {">"}
        </div>
      </div>
      <button className="absolute bg-[#5dbea3] w-[240px] h-[60px] mt-[100px] rounded-3xl text-white hover:opacity-70 ease duration-300">
        Contact Us To Start Now
      </button>
      <div style={slideStyles} className="slide"></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotSTyles}
            onClick={() =>
              isButtonActive && handleDotClick(slideIndex)
            }
            className={`text-orange-600 ${
              isButtonActive
                ? "hover:text-yellow-600 active:text-yellow-600"
                : ""
            }`}
          >
            {"●"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
