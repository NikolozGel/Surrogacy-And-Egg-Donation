import { Carousel } from "antd";
import "./slider.css";

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: "#fff",
  width: "100vw",
};

const App: React.FC = () => {
  return (
    <Carousel
      className="custom-carousel"
      arrows
      infinite={true}
      autoplay={true}
      autoplaySpeed={5000}
      speed={900}
      effect="fade"
    >
      <div className="w-screen">
        <h3>
          <img src={"/images/smiling.jpg"} alt="" style={contentStyle} />
        </h3>
      </div>
      <div className="w-screen">
        <h3>
          <img
            src={"/images/family-fun-time-stockcake.jpg"}
            alt=""
            style={contentStyle}
          />
        </h3>
      </div>
      <div>
        <h3>
          <img src={"/images/family-play.jpg"} alt="" style={contentStyle} />
        </h3>
      </div>

      <div>
        <h3>
          <img src={"/images/parents-2.jpg"} alt="" style={contentStyle} />
        </h3>
      </div>
    </Carousel>
  );
};

export default App;
