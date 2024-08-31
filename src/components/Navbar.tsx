import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul className="sm:hidden absolute flex flex-col gap-5 top-[200%] left-[45%]">
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
