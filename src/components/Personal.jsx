import React from "react";
import { InfoPersonal } from "../data/dummy";
import { Link } from "react-router-dom";
import { FiHash } from "react-icons/fi";

const Personal = () => {
  return (
    <div className="py-5">
      <h1 className="py-4 text-2xl font-medium text-teal-500">Info Personal</h1>
      <div className="flex flex-wrap items-center justify-between gap-5">
        {InfoPersonal.map((info) => (
          <div key={info.id}>
            <span
              className={`mr-1 text-lg font-bold text-teal-500 flex items-center justify-start`}
            >
              <FiHash className="mr-2 text-teal-500" />
              {info.title} :
            </span>

            {info.title === "Website" || info.title === "E-mail" ? (
              <Link
                className={`mr-1 text-lg font-semibold  text-gray-800 dark:text-gray-200`}
                to={info.content}
              >
                {info.content}
              </Link>
            ) : (
              <span
                className={`mr-1 text-lg font-semibold  text-gray-800 dark:text-gray-200`}
              >
                {info.content}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personal;
