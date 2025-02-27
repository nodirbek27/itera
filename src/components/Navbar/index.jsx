import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSelector from "../LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold ml-2">ITERA</span>
        </Link>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#services" className="hover:text-gray-400">{t("services")}</a></li>
          <li><a href="#about" className="hover:text-gray-400">{t("about")}</a></li>
          <li><a href="#contact" className="hover:text-gray-400">{t("contact")}</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden relative w-8 h-8 flex items-center justify-center">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`absolute top-full left-0 w-full bg-gray-900 shadow-lg md:hidden transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 max-h-60 py-4" : "opacity-0 max-h-0 py-0 overflow-hidden"}`}>
        <ul className="flex flex-col text-center space-y-4">
          <li><a href="#services" className="hover:text-gray-400">{t("services")}</a></li>
          <li><a href="#about" className="hover:text-gray-400">{t("about")}</a></li>
          <li><a href="#contact" className="hover:text-gray-400">{t("contact")}</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
