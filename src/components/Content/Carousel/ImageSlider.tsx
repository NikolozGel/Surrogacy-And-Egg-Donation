import { Carousel } from "antd";
import "./slider.css";

const App: React.FC = () => {
  return (
    <>
      <Carousel
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
          <h3>
            <img
              src={"/images/photo-1.jpg"}
              alt="Description of photo-1"
              className="w-full h-auto max-h-[35rem] object-cover"
            />
          </h3>
        </div>

        <div className="w-full overflow-hidden">
          <h3>
            <img
              src={"/images/happy-parents.jpg"}
              alt="Description of happy-parents"
              className="w-full h-auto max-h-[35rem] object-cover"
            />
          </h3>
        </div>

        <div className="w-full overflow-hidden">
          <h3>
            <img
              src={"/images/family-play.jpg"}
              alt="Description of family-play"
              className="w-full h-auto max-h-[35rem] object-cover"
            />
          </h3>
        </div>

        <div className="w-full overflow-hidden">
          <h3>
            <img
              src={"/images/parents-2.jpg"}
              alt="Description of parents-2"
              className="w-full h-auto max-h-[35rem] object-cover"
            />
          </h3>
        </div>
      </Carousel>
    </>
  );
};

export default App;
