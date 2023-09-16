import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { RiTelegramFill, RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="py-10 text-lg font-medium text-center text-slate-900 dark:text-gray-200"
      id="contact us"
    >
      <div className="mb-5">
        Contact Us by
        <span className="flex items-center justify-center gap-5 py-3">
          <Link to={"http://t.me/saeedaltout"}>
            <RiTelegramFill className="text-2xl" />
          </Link>
          {"|"}
          <span className="flex items-center justify-center gap-2">
            <RiWhatsappFill className="text-2xl" />
            +963940043810
          </span>
        </span>
      </div>
      Copyright &copy; By Saeed Altout
      <span className="text-teal-500"> 2023</span>
    </div>
  );
};

export default Footer;
