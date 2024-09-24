import { Link } from "react-router-dom";

export default function HamburgerMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`z-10 fixed w-full left-0 top-[53px]  transform transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-[370px]"
      }`}
    >
      <ul className="lg:hidden  flex flex-col gap-10 bg-[#116466] bg-opacity-95 pt-5 pl-12   top-0 bottom-[45%] left-0 rounded-b-lg pb-10">
        <li className="text-[30px] text-white hover:opacity-50">
          <Link to="/">Home</Link>
        </li>

        <li className="text-[30px]  text-white hover:opacity-50">
          <Link to="/about">About</Link>
        </li>
        <li className="text-[30px]  text-white hover:opacity-50">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="text-[30px]  text-white hover:opacity-50">
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
}
