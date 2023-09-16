import React from "react";
import { Link } from "react-scroll";
import { FiX } from "react-icons/fi";
import { NavLinks } from "../data/dummy";
import { useStateContext } from "../contexts/ProviderContexts";
import { styles } from "../data/styles";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
const MenuMobile = () => {
  const {
    setMode,
    isClickedMode,
    setIsClickedMode,
    setCurrentMode,
    setActiveMenu,
  } = useStateContext();
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000073] z-[999] lg:hidden" />
      <ul className="fixed top-0 left-0 h-screen bg-white z-[10000] w-[250px] p-10 flex flex-col gap-y-10 lg:hidden dark:bg-slate-900">
        <div className={`${styles.flexStart}`}>
          <FiX
            onClick={() => {
              setActiveMenu(false);
            }}
            className="ml-4 text-2xl cursor-pointer text-slate-900 dark:text-teal-500 lg:hidden"
          />
          <li>
            {isClickedMode ? (
              <BsFillSunFill
                className="text-xl text-teal-500 cursor-pointer "
                onClick={() => {
                  setCurrentMode("light");
                  setActiveMenu(false);
                  setIsClickedMode(!isClickedMode);
                  setMode(isClickedMode);
                }}
              />
            ) : (
              <BsFillMoonStarsFill
                className="text-xl cursor-pointer "
                onClick={() => {
                  setCurrentMode("dark");
                  setActiveMenu(false);
                  setIsClickedMode(!isClickedMode);
                  setMode(isClickedMode);
                }}
              />
            )}
          </li>
        </div>
        {NavLinks.map((link) => (
          <Link
            key={link.id}
            to={link.href}
            className={`${styles.flexStart} gap-3 font-medium capitalize duration-100 cursor-pointer hover:ease-in-out hover:text-teal-500 dark:hover:text-teal-500 text-slate-900 dark:text-gray-200`}
            smooth={true}
            duration={500}
            onClick={() => {
              setActiveMenu(false);
            }}
          >
            <span>{link.icon}</span>
            {link.title}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MenuMobile;
