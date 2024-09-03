import { Carousel } from "antd";
import { useRef, useEffect } from "react";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "560px",
  color: "#fff",
  width: "100vw",
  transition: "0.5s ease in-out",
};

const App: React.FC = () => {
  return (
    <>
      <Carousel arrows infinite={false}>
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
    </>
  );
};

export default App;
