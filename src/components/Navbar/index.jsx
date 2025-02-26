import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" rx="10" stroke="purple" strokeWidth="5" fill="none" />
            <text x="50" y="65" fontSize="50" fontWeight="bold" fill="gold" textAnchor="middle">I</text>
          </svg>
          <span className="text-xl font-bold ml-2">ITERA</span>
        </Link>

        {/* Large screen menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#services" className="hover:text-gray-400">Xizmatlar</a></li>
          <li><a href="#about" className="hover:text-gray-400">Biz haqimizda</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Aloqa</a></li>
        </ul>

        <button className="hidden md:flex border p-2">Bog`lanish</button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none relative w-8 h-8 flex items-center justify-center"
          >
            <div
              className={`absolute transition-opacity duration-300 ease-in-out ${
                isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            >
              <Menu size={28} />
            </div>
            <div
              className={`absolute transition-opacity duration-300 ease-in-out ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <X size={28} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-900 shadow-lg md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-60 py-4" : "opacity-0 max-h-0 py-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col text-center space-y-4">
          <li><a href="#services" className="hover:text-gray-400">Xizmatlar</a></li>
          <li><a href="#about" className="hover:text-gray-400">Biz haqimizda</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Aloqa</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
