import React from "react";
import {
  Personal,
  Courses,
  Education,
  Experiences,
  Information,
  Interests,
  Skills,
} from "../components";

const Resume = () => {
  return (
    <div>
      <h2 className="mb-5 text-3xl font-semibold dark:text-white md:text-4xl">
        Cv
      </h2>
      <div className="p-5 overflow-hidden bg-white rounded-lg shadow-lg md:p-10 dark:bg-slate-900">
        <Personal />
        <Information />
        <Education />
        <Skills />
        <Experiences />
        <Courses />
        <Interests />
      </div>
    </div>
  );
};

export default Resume;
