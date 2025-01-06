import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-[#116466] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0 ml-[]">
          <h2 className="text-2xl font-bold">New Hopes</h2>
        </div>

        <div className="my-5">
          <p>email@example.com</p>
        </div>
        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="hover:text-gray-400">
            <FaFacebook className="w-7 h-7" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter className="w-7 h-7" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram className="w-7 h-7" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedin className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-gray-500">
        © {date.getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
