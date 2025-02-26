import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="10"
              stroke="purple"
              strokeWidth="5"
              fill="none"
            />
            <text
              x="50"
              y="65"
              fontSize="50"
              fontWeight="bold"
              fill="gold"
              textAnchor="middle"
            >
              I
            </text>
          </svg>
          <span className="text-xl font-bold ml-2">ITERA</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <a href="#services" className="hover:text-gray-400">
              Xizmatlar
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              Biz haqimizda
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Aloqa
            </a>
          </li>
        </ul>
        <button className="border p-2 rounded-md cursor-pointer">
          Bog`lanish
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
