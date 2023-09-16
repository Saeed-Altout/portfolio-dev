import React from "react";
import { Link } from "react-scroll";
import { NavLinks } from "../data/dummy";
import { useStateContext } from "../contexts/ProviderContexts";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
const MenuDesktop = () => {
  const { setMode, setIsClickedMode, isClickedMode, setCurrentMode } =
    useStateContext();
  return (
    <ul className=" z-[10000] items-center justify-between gap-10 hidden lg:flex ">
      {NavLinks.map((link) => (
        <Link
          key={link.id}
          to={link.title}
          className="font-medium capitalize cursor-pointer text-slate-900 dark:text-gray-200"
          duration={300}
          scrolling="smooth"
        >
          {link.title}
        </Link>
      ))}

      {isClickedMode ? (
        <BsFillSunFill
          className="text-xl text-teal-500 cursor-pointer "
          onClick={() => {
            setCurrentMode("light");
            setIsClickedMode(!isClickedMode);
            setMode(isClickedMode);
          }}
        />
      ) : (
        <BsFillMoonStarsFill
          className="text-xl cursor-pointer "
          onClick={() => {
            setCurrentMode("dark");
            setIsClickedMode(!isClickedMode);
            setMode(isClickedMode);
          }}
        />
      )}
    </ul>
  );
};

export default MenuDesktop;
