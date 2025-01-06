import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MobileDropDownMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose(); // მენიუს დახურვის ფუნქცია
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`fixed w-full left-0 top-[40px] transform transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-y-[12px]" : "-translate-y-[380px]"
      }`}
    >
      <ul className="lg:hidden flex flex-col gap-10 bg-[#116466] bg-opacity-80 backdrop-blur-sm pb-4 pl-12 top-0 bottom-[45%] left-0 rounded-b-lg">
        <li className="text-[30px] text-white hover:opacity-50 mt-6">
          <Link to="/">Home</Link>
        </li>

        <li className="text-[30px]  text-white hover:opacity-50">
          <Link to="/about">About</Link>
        </li>
        <li className="text-[30px]  text-white hover:opacity-50">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="text-[30px]  text-white hover:opacity-50 ">
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
}
