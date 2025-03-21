import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Phone, Mail, Github, Twitter, Linkedin, Menu, X } from "lucide-react";
import logo from "../assets/images/logo (1).png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const navLinks = ["Home", "About", "Service", "Contact"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-500 text-white py-4 px-4 md:px-8 flex flex-col md:flex-row justify-around items-center text-md">
        {/* Contact Info */}
        <div className="flex space-x-6 mb-2 md:mb-0">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <a href="tel:+463281626556" className="hover:underline font-[16px]">
              +463281626556
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <a href="mailto:hellomedic@gmail.com" target="_blank" className="hover:underline font-[16px]">
              raosad786@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/saad-rao" target="_blank" className="hover:text-gray-200 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://x.com/Saad_X_0_0" target="_blank" className="hover:text-gray-200 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://www.linkedin.com/in/saad-naseem-99651a2b4/" target="_blank" className="hover:text-gray-200 transition-colors ">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex text-[18px] md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-center transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          } md:flex py-4 md:py-0 shadow-md md:shadow-none z-10`}
        >
          {navLinks.map((link) => (
            <li key={link} className="relative group">
              <NavLink
                to={link === "Home" ? "/home" : `/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-teal-500 transition-colors py-2 md:py-0 block ${
                    isActive ? "text-teal-500" : ""
                  }`
                }
              >
                {link}
              </NavLink>
              {/* Underline Animation */}
              <span
                className={({ isActive }) =>
                  `absolute left-0 bottom-0 h-0.5 bg-teal-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`
                }
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;