import React from "react";
const StartSteps = ({ number, text }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center w-16 h-16 bg-teal-500 dark:bg-slate-800 rounded-2xl">
        <p className="text-lg font-medium text-white dark:text-teal-500">
          {number}
        </p>
      </div>
      <p className="flex-1 ml-5 dark:text-gray-300 text-slate-500">{text}</p>
    </div>
  );
};

export default StartSteps;
