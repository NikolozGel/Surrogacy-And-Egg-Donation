import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // ეს არის მთავარ გვეერდზე ნავიგაციისთვის HomePage
  const navigate = useNavigate();

  return (
    <>
      <header className="flex justify-between py-2  px-12 items-center bg-[#116466] ">
        <div>
          <h1
            className="text-[25px] text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            New Hopes
          </h1>
        </div>
        {/* ეს არის ნავიგაცია რომ გამოჩნდეს Mobile device-სთვის*/}

        {isOpen ? <HamburgerMenu /> : null}

        {/* ესენია ჰამბურგერ და x ღილაკებისთვის*/}
        {isOpen ? (
          <button onClick={() => setIsOpen(false)} className="lg:hidden">
            <FaX color="gray" size={26} />
          </button>
        ) : (
          <button onClick={() => setIsOpen(!false)} className="lg:hidden">
            <FaBars color="gray" size={26} />
          </button>
        )}
        {/* ეს არის მთავარი მენიუ*/}
        <div className="hidden lg:flex">
          <div className="flex justify-center"></div>
          <ul className="flex gap-10">
            <li className="text-white text-[22px]">
              <Link to="/">HomePage</Link>
            </li>
            <li className="text-white  text-[22px]">
              <Link to="/about">About</Link>
            </li>
            <li className="text-white  text-[22px]">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-white  text-[22px]">
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
