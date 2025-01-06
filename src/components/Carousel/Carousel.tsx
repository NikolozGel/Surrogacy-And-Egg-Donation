import { Carousel } from "antd";
import "./slider.css";

const images = [
  { src: "photo-1", alt: "Description of photo-1" },
  { src: "mother-6935339_1280", alt: "Description of happy-parents" },
  { src: "mother-1171569_1280", alt: "Description of family-play" },
  { src: "mother-1851485_1280", alt: "Description of parents-2" },
];

const App: React.FC = () => {
  return (
    <>
      <Carousel
        className="custom-carousel bg-[#F1F5F9]"
        arrows
        autoplay
        autoplaySpeed={5000}
        infinite
        speed={1500}
        effect="fade"
        touchMove
        waitForAnimate
      >
        {images.map((image, index) => (
          <div key={index} className="w-full overflow-hidden">
            <img
              src={`/images/${image.src}.jpg`}
              alt={image.alt}
              className="w-full h-auto max-h-[40rem] object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* <Carousel
        className="custom-carousel bg-[#F1F5F9]"
        arrows
        autoplay={true}
        autoplaySpeed={5000}
        infinite={true}
        speed={900}
        effect="fade"
        touchMove={true}
        waitForAnimate={true}
      >
        <div className="w-full overflow-hidden">
          <img
            src={"/images/photo-1.jpg"}
            alt="Description of photo-1"
            className="w-full h-auto max-h-[40rem] object-cover"
          />
        </div>

        <div className="w-full overflow-hidden">
          <img
            src={"/images/mother-6935339_1280.jpg"}
            alt="Description of happy-parents"
            className="w-full h-auto max-h-[40rem] object-cover"
          />
        </div>

        <div className="w-full overflow-hidden">
          <img
            src={"/images/mother-1171569_1280.jpg"}
            alt="Description of family-play"
            className="w-full h-auto max-h-[40rem] object-cover"
          />
        </div>

        <div className="w-full overflow-hidden">
          <img
            src={"/images/mother-1851485_1280.jpg"}
            alt="Description of parents-2"
            className="w-full h-auto max-h-[40rem] object-cover"
          />
        </div>
      </Carousel> */}
    </>
  );
};

export default App;
