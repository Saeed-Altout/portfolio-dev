import React from "react";
import { Projects } from "../data/dummy";
import { styles } from "../data/styles";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { RiShareBoxLine } from "react-icons/ri";
const Portfolio = () => {
  return (
    <section className="py-20" id="portfolio">
      <h2 className="mb-5 text-3xl font-semibold dark:text-white md:text-4xl">
        Portfolio
      </h2>
      <p className="mb-3 text-lg leading-loose text-gray-800 dark:text-gray-200">
        Since the beginning of my journey as a freelance designer and developer,
        I've done remote work for
        <span className="font-medium text-teal-500"> agencies </span>
        consulted for{" "}
        <span className="font-medium text-teal-500 ">startups </span>
        and collaborated with talented people to create digital products for
        both business and consumer use.
      </p>
      <p className="text-lg leading-loose text-gray-800 dark:text-gray-200">
        I offer from a wide range of services, including brand design,
        programming and teaching.
      </p>

      <div className={`${styles.gridSystem} mt-10 gap-5`}>
        {Projects.map((project) => (
          <div
            className="h-auto overflow-hidden bg-white rounded-lg hover:shadow-xl dark:bg-slate-900"
            key={project.id}
          >
            <img
              src={project.imgUrl}
              className="w-full md:h-[50%] lg:h-[350px]"
              alt="Project"
            />
            <div className="p-5 leading-loose">
              <h3 className="text-2xl font-medium text-slate-900 dark:text-gray-200">
                {project.title}
              </h3>
              <p className="py-2 text-md text-slate-900 dark:text-gray-200">
                {project.description}
              </p>
              <div className={`${styles.flexStart} gap-x-2 flex-wrap  `}>
                {project.categories.map((category, index) => (
                  <p key={index} className="font-medium text-teal-500">
                    {category}
                  </p>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-slate-900 dark:text-gray-200">
                <Link
                  to={project.linkUrl}
                  className="flex items-center justify-center gap-3"
                >
                  <AiFillGithub className="text-2xl dark:text-teal-500 text-slate-900" />
                  View Source
                </Link>
                <Link
                  to={project.linkUrl}
                  className="flex items-center justify-center gap-3"
                >
                  <RiShareBoxLine className="text-2xl dark:text-teal-500 text-slate-900" />
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
