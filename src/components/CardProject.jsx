import React from "react";
import { Link } from "react-router-dom";
import { RiShareBoxLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { styles } from "../data/styles";

const CardProject = ({
  id,
  imgUrl,
  title,
  description,
  categories,
  linkUrl,
}) => {
  return (
    <div
      className="overflow-hidden bg-white rounded-lg shadow-lg h-fit dark:bg-slate-900"
      key={id}
    >
      <img
        src={imgUrl}
        className="w-full md:h-[50%] lg:h-[350px]"
        alt="Project"
      />
      <div className="p-5 leading-loose">
        <h3 className="text-2xl font-medium text-slate-900 dark:text-gray-200">
          {title}
        </h3>
        <p className="py-2 text-md text-slate-900 dark:text-gray-200">
          {description}
        </p>
        <div className={`${styles.flexStart} gap-x-2 flex-wrap  `}>
          {categories.map((category, index) => (
            <p key={index} className="font-medium text-teal-500">
              {category}
            </p>
          ))}
        </div>
        <div className="flex justify-between mt-3 text-slate-900 dark:text-gray-200">
          <Link to={linkUrl} className="flex items-center justify-center gap-3">
            <AiFillGithub className="text-2xl dark:text-teal-500 text-slate-900" />
            View Source
          </Link>
          <Link to={linkUrl} className="flex items-center justify-center gap-3">
            <RiShareBoxLine className="text-2xl dark:text-teal-500 text-slate-900" />
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
