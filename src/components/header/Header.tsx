import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import MobileDropDownMenu from "./MobileDropDownMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ეს არის მთავარ გვეერდზე ნავიგაციისთვის HomePage
  const navigate = useNavigate();

  // მენიუს დახურვის ფუნქცია
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between py-2 px-12 items-center bg-[#116466] fixed z-20 w-full backdrop-blur-sm">
      <h1
        className="text-[25px] text-white cursor-pointer z-20"
        onClick={() => navigate("/")}
      >
        New Hopes
      </h1>
      {isOpen ? (
        <button onClick={handleCloseMenu} className="lg:hidden z-20">
          <FaX color="gray" size={26} />
        </button>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-20">
          <FaBars color="gray" size={26} />
        </button>
      )}

      {/* MobileDropDownMenu კომპონენტს ვაწვდით isOpen და onClose */}
      <MobileDropDownMenu isOpen={isOpen} onClose={handleCloseMenu} />

      {/* ეს არის მთავარი მენიუ*/}
      <div className="hidden lg:flex">
        <ul className="flex gap-10 z-20">
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
  );
};

export default Header;
