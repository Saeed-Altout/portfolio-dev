import React from "react";
import { OurServices } from "../data/dummy";
import { styles } from "../data/styles";
const Services = () => {
  return (
    <section id="services" className="py-20">
      <h2 className="mb-5 text-3xl font-semibold dark:text-white md:text-4xl">
        Services I offer
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

      <div className={`${styles.gridSystem} gap-5 text-center mt-10`}>
        {OurServices.map((card) => (
          <div
            className="p-10 bg-white rounded-lg hover:shadow-xl dark:bg-slate-900"
            key={card.id}
          >
            <img
              src={card.imgUrl}
              className="object-contain w-12 h-12 mx-auto"
              alt="Service"
            />
            <h3 className="mt-5 mb-3 text-xl font-medium text-slate-900 dark:text-gray-200">
              {card.title}
            </h3>
            <p className="py-2 text-slate-900 dark:text-gray-200">
              {card.description}
            </p>
            <h4 className="py-2 font-medium text-teal-600 ">{card.category}</h4>
            {card.services.map((service, index) => (
              <p key={index} className="py-2 text-slate-900 dark:text-gray-200">
                {service}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
