import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between pt-5 px-4 items-center">
        <div>
          <h1
            className="text-[20px] text-orange-500 cursor-pointer"
            onClick={() => navigate("/")}
          >
            New Hopes
          </h1>
        </div>
        <button
          onClick={() => setIsOpen(!false)}
          className="sm:hidden"
        >
          <FaBars />
        </button>
        <div className="hidden sm:block">
          <ul className="flex gap-5">
            <li className="text-neutral-500 hover:text-orange-500">
              <Link to="/">Home</Link>
            </li>
            <li className="text-neutral-600">
              <Link to="/about">About</Link>
            </li>
            <li className="text-neutral-600">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
