import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSelector from "../LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#contact", label: t("contact") },
    { href: "#vacansy", label: t("vacansy") },
    { href: "#blog", label: t("blog") },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 text-[#eaeaea] ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" rx="10" stroke="purple" strokeWidth="5" fill="none" />
            <text x="50" y="65" fontSize="50" fontWeight="bold" fill="gold" textAnchor="middle">
              I
            </text>
          </svg>
          <span className="text-xl font-bold ml-2">ITERA</span>
        </Link>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-gray-400 uppercase font-medium">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
        </div>

        {/* Mobil menyu tugmasi */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil menyu */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-900 shadow-lg md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 max-h-60 py-4" : "opacity-0 max-h-0 py-0 overflow-hidden hidden"
        }`}
      >
        <ul className="flex flex-col text-center space-y-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)} className="hover:text-gray-400">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
