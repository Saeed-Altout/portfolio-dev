import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link
      to="/"
      className="text-xl font-medium dark:text-teal-500 text-slate-950"
    >
      SaeedDev{" "}
      <span className="inline-block w-1.5 h-1.5 -ml-1 bg-teal-500 rounded-full dark:bg-white" />
    </Link>
  );
};

export default Logo;
