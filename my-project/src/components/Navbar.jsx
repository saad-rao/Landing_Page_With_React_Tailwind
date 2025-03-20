import { useState } from "react";
import { Phone, Mail, Github, Twitter, Linkedin, Menu, X } from "lucide-react";
import logo from "../assets/images/logo (1).png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const navLinks = ["Home", "About", "Service","Contact"];
  const [activeLink, setActiveLink] = useState("Home"); // State for active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-500 text-white py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-md">
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
            <a href="mailto:hellomedic@gmail.com" className="hover:underline font-[16px]">
              hellomedic@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/saad-rao" className="hover:text-gray-200 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://x.com/Saad_X_0_0" className="hover:text-gray-200 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://www.linkedin.com/in/saad-naseem-99651a2b4/" className="hover:text-gray-200 transition-colors ">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-white shadow-md py-4 px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-teal-500 flex items-center">
            <span className="mr-2"></span> {}
            MEDIC
          </a>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-teal-500 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              <a
                href="#"
                className={`text-gray-700 hover:text-teal-500 transition-colors py-2 md:py-0 block ${
                  activeLink === link ? "text-teal-500" : ""
                }`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </a>
              {/* Underline Animation */}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-teal-500 transition-all duration-300 ${
                  activeLink === link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;