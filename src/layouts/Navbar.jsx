import React from "react";
import { FiMenu } from "react-icons/fi";
import { MenuMobile, MenuDesktop } from "../components/index";
import { useStateContext } from "../contexts/ProviderContexts";
import { styles } from "../data/styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setActiveMenu, activeMenu } = useStateContext();
  return (
    <nav className={`${styles.flexBetween} py-10`} id="home">
      <Link
        to="/"
        className="text-xl font-medium dark:text-teal-500 text-slate-950"
      >
        سعيد
      </Link>

      <FiMenu
        onClick={() => {
          setActiveMenu(true);
        }}
        className="text-2xl cursor-pointer text-slate-900 dark:text-teal-500 lg:hidden"
      />
      {activeMenu && <MenuMobile />}
      <MenuDesktop />
    </nav>
  );
};

export default Navbar;
