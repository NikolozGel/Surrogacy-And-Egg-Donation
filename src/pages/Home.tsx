import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Header from "../components/Header";
import parentsImg from "/images/parents.webp";
import { useState } from "react";

export default function Home() {
  const [changeImg, setChangeImg] = useState<boolean>(false);

  return (
    <div className="">
      <Header />

      <div className="flex absolute ">
        <button className="bg-[#f2923c] w-[60px] h-[60px] top-[40%] absolute ml-6 rounded-full pl-4 opacity-75 hover:opacity-100 hidden md:block">
          <FaAngleLeft style={{ fontSize: "25px", color: "#fff" }} />
        </button>
        <div>
          <img src={parentsImg} alt="parentImg" />
        </div>
        <button className="bg-[#f2923c] w-[60px] h-[60px] right-0 top-[40%] absolute mr-6 rounded-full pl-4 opacity-75 hover:opacity-100 hidden md:block">
          <FaAngleRight style={{ fontSize: "25px", color: "#fff" }} />
        </button>
      </div>
    </div>
  );
}
