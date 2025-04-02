import { useState } from "react";
import { content } from "../Content";
import {HiMenuAlt2, HiOutlineTranslate} from "react-icons/hi";
import { createElement } from "react";
import i18n from "../i18n.js";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer
          ${i === active && "bg-dark_primary text-white"}`}
          >
            {createElement(item.icon)}
          </a>
        ))}
        <button
          className="text-xl p-2.5 rounded-full sm:cursor-pointer hover:bg-dark_primary hover:text-white flex items-center gap-2"
          onClick={() => changeLanguage(currentLang === 'en' ? 'de' : 'en')}
        >
          <HiOutlineTranslate />
          {currentLang.toUpperCase()}
        </button>
      </nav>
    </div>
  );
};

export default Navbar
