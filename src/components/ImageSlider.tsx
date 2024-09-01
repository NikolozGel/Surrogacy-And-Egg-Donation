import { useState } from "react";

interface Slide {
  url: string;
}

interface Islides {
  slides: Slide[];
}

const ImageSlider = ({ slides }: Islides) => {
  const [currentIndex, setCurrentindex] = useState<number>(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="h-[100%] relative">
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
