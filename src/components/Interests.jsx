import React from "react";
import { MyInterests } from "../data/dummy";

const Interests = () => {
  const dot = `before:absolute before:rounded-full before:w-2  before:top-[50%] before:left-0 before:translate-y-[-50%] before:h-2 before:bg-teal-500 `;
  return (
    <div className="py-5">
      <h1 className="py-4 text-2xl font-medium text-teal-500">Interest</h1>
      <div className="flex flex-wrap gap-5">
        {MyInterests.map((interest) => (
          <div key={interest.id}>
            <span
              className={`mr-1 text-lg font-semibold  relative pl-5 ${dot} text-gray-800 dark:text-gray-200`}
            >
              {interest.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
