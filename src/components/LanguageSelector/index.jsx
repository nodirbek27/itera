import { useEffect, useState, useRef } from "react";
import i18n from "../../i18n";
import flag_1 from "../../assets/icons/flag-uz.png";
import flag_2 from "../../assets/icons/flag-ru.png";
import flag_3 from "../../assets/icons/flag-en.png";

const languages = [
  { lang: "uz", src: flag_1, label: "Uz" },
  { lang: "ru", src: flag_2, label: "Ру" },
  { lang: "en", src: flag_3, label: "En" },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const langRef = useRef(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(savedLang);
    setCurrentLang(savedLang);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={langRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-2 rounded cursor-pointer"
      >
        <img
          src={
            languages.find((item) => item.lang === currentLang)?.src || flag_1
          }
          alt={currentLang}
          className="w-[30px] mr-2"
        />
        <span className="uppercase text-white">{currentLang}</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full mt-2 w-full rounded shadow-md bg-white">
          {languages
            .filter((item) => item.lang !== currentLang)
            .map(({ lang, src, label }) => (
              <li
                key={lang}
                onClick={() => changeLanguage(lang)}
                className="flex items-center gap-x-2 px-2 py-1 cursor-pointer text-[#222] hover:bg-neutral-200"
              >
                <img src={src} alt={label} className="w-[30px]" />
                <span className="uppercase">{label}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
