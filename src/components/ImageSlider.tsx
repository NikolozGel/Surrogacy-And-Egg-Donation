import { Carousel } from "antd";
import "./slider.css";

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: "#fff",
  width: "100vw",
};

const App: React.FC = () => {
  return (
    <>
      <Carousel
        className="custom-carousel"
        arrows
        autoplay={true}
        autoplaySpeed={5000}
        infinite={true}
        speed={900}
        effect="fade"
        touchMove={true}
        waitForAnimate={true}
      >
        <div className="w-screen">
          <h3>
            <img
              src={"/images/photo-1.jpg"}
              alt=""
              style={contentStyle}
              className="w-full h-[35rem] object-cover"
            />
          </h3>
        </div>

        <div className="w-screen">
          <h3>
            <img
              src={"/images/happy-parents.jpg"}
              alt=""
              style={contentStyle}
              className="w-full h-[35rem] object-cover"
            />
          </h3>
        </div>
        <div className="w-screen">
          <h3>
            <img
              src={"/images/family-play.jpg"}
              alt=""
              style={contentStyle}
              className="w-full h-[35rem] object-cover"
            />
          </h3>
        </div>

        <div className="w-screen">
          <h3>
            <img
              src={"/images/parents-2.jpg"}
              alt=""
              style={contentStyle}
              className="w-full h-[35rem] object-cover"
            />
          </h3>
        </div>
      </Carousel>
    </>
  );
};

export default App;
