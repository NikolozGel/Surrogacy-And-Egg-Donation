import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="z-10">
      {/* ეს არის ნავიგაცია რესპონსივის*/}
      <ul className="lg:hidden absolute flex flex-col gap-8 top-[4.4%] left-[0] pl-[50px]  bg-sky-200 bg-opacity-50 rounded-b-xl w-screen">
        <li className="text-[30px]">
          <Link to="/">Home</Link>
        </li>
        <li className="text-[30px]">
          <Link to="/about">About</Link>
        </li>
        <li className="text-[30px]">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="text-[30px]">
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
}
