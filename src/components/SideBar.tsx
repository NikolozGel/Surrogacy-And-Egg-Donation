import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="z-10">
      <ul className="lg:hidden absolute flex flex-col gap-8 bg-white bg-opacity-70 mt-[53.2px] pt-5 pl-12 w-[100%] top-0 bottom-0 left-0">
        <li className="text-[30px] text-orange-600 hover:opacity-50">
          <Link to="/">Home</Link>
        </li>
        <li className="text-[30px] text-orange-600 hover:opacity-50">
          <Link to="/about">About</Link>
        </li>
        <li className="text-[30px] text-orange-600 hover:opacity-50">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="text-[30px] text-orange-600 hover:opacity-50">
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
}
