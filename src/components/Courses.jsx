import React from "react";
import { MyCourses } from "../data/dummy";

const Courses = () => {
  const dot = `before:absolute before:rounded-full before:w-2  before:top-[50%] before:left-0 before:translate-y-[-50%] before:h-2 before:bg-teal-500 `;

  return (
    <div className="py-5">
      <h1 className="py-4 text-2xl font-medium text-teal-500">Courses</h1>
      <div className="flex flex-wrap gap-5">
        {MyCourses.map((course) => (
          <div key={course.id} className="flex items-center justify-start">
            <span
              className={`mr-1 text-lg font-semibold  relative pl-5 ${dot} text-gray-800 dark:text-gray-200`}
            >
              {course.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
