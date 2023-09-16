import React from "react";
import { MyExperiences } from "../data/dummy";
import { FiHash } from "react-icons/fi";

const Experiences = () => {
  return (
    <div className="py-5">
      <h1 className="py-4 text-2xl font-medium text-teal-500">Experiences</h1>
      {MyExperiences.map((Experience) => (
        <div key={Experience.id}>
          <span
            className={`text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center justify-start `}
          >
            <FiHash className="mr-2 text-teal-500" />
            {Experience.title}
          </span>
          <span className="pl-5 italic text-gray-400 ">{Experience.data}</span>
          <p className="py-5 text-lg leading-loose text-gray-800 dark:text-gray-200">
            {Experience.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
