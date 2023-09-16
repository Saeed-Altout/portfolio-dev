import React from "react";
import { MySkills } from "../data/dummy";
const Skills = () => {
  return (
    <div className="py-5">
      <h1 className="py-4 text-2xl font-medium text-teal-500">Skills</h1>
      <ul className="flex flex-wrap items-center justify-center gap-5">
        {MySkills.map((skill) => (
          <li
            key={skill.id}
            className="text-lg font-semibold text-gray-800 dark:text-gray-200"
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
