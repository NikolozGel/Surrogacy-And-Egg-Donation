import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavBar from "../components/Navbar";
import { FaX } from "react-icons/fa6";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between py-5  px-4 items-center bg-[#1d2951] relative">
        <div>
          <h1
            className="text-[25px] text-orange-500 cursor-pointer"
            onClick={() => navigate("/")}
          >
            New Hopes
          </h1>
        </div>
        {isOpen ? <NavBar /> : null}

        {isOpen ? (
          <button
            onClick={() => setIsOpen(false)}
            className="sm:hidden"
          >
            <FaX color="gray" size={26} />
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(!false)}
            className="sm:hidden"
          >
            <FaBars color="gray" size={26} />
          </button>
        )}

        <div className="hidden sm:block">
          <ul className="flex gap-10">
            <li className="text-orange-500 text-[22px]">
              <Link to="/">HomePage</Link>
            </li>
            <li className="text-neutral-600 text-[22px]">
              <Link to="/about">About</Link>
            </li>
            <li className="text-neutral-600 text-[22px]">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-neutral-600 text-[22px]">
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
