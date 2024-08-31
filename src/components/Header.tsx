import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

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
