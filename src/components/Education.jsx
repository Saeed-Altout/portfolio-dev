import React from "react";
import { FiHash } from "react-icons/fi";

const Education = () => {
  return (
    <div className="py-5">
      <h1 className="py-4 text-2xl font-medium text-teal-500">Education</h1>
      <div>
        <span
          className={`mr-1 text-lg font-semibold text-teal-500 flex items-center justify-start`}
        >
          <FiHash className="mr-2 text-teal-500" />
          Damascus University
        </span>
        <span className="p-5 italic text-gray-400">2020-9-15 - 2025-9-15</span>
        <p className="py-4 text-gray-800 dark:text-gray-200">
          Biomedical Engineering
        </p>
      </div>
    </div>
  );
};

export default Education;
