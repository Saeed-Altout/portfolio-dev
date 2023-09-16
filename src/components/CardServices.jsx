import React from "react";
const CardServices = ({
  id,
  imgUrl,
  title,
  description,
  category,
  services,
}) => {
  return (
    <div
      className="p-10 bg-white rounded-lg shadow-xl dark:bg-slate-900"
      key={id}
    >
      <img
        src={imgUrl}
        className="object-contain mx-auto w-36 h-36"
        alt="Service"
      />
      <h3 className="mt-5 mb-3 text-xl font-medium text-slate-900 dark:text-gray-200">
        {title}
      </h3>
      <p className="py-2 text-slate-900 dark:text-gray-200">{description}</p>
      <h4 className="py-2 font-medium text-teal-600 ">{category}</h4>
      {services.map((service, index) => (
        <p key={index} className="py-2 text-slate-900 dark:text-gray-200">
          {service}
        </p>
      ))}
    </div>
  );
};

export default CardServices;
