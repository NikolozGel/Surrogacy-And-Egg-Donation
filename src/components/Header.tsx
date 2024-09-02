import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import { FaX } from "react-icons/fa6";

export default function Header() {
  // ეს არის მთავარ გვეერდზე ნავიგაციისთვის HomePage
  const navigate = useNavigate();

  // For Navbar Hamburger Menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between py-2  px-12 items-center bg-[#fff]">
        <div>
          <h1
            className="text-[25px] text-orange-500 cursor-pointer"
            onClick={() => navigate("/")}
          >
            New Hopes
          </h1>
        </div>
        {/* ეს არის ნავიგაცია რომ გამოჩნდეს Mobile device-სთვის*/}
        <div></div>

        {isOpen ? <SideBar /> : null}

        {/* ესენია ჰამბურგერ და x ღილაკებისთვის*/}
        {isOpen ? (
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
          >
            <FaX color="gray" size={26} />
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(!false)}
            className="lg:hidden"
          >
            <FaBars color="gray" size={26} />
          </button>
        )}
        {/* ეს არის მთავარი მენიუ*/}
        <div className="hidden lg:block">
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
