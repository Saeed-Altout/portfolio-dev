import React from "react";
const NewFeatures = ({ imgUrl, name, comment, positionJob }) => (
  <div className="p-5 bg-white shadow-xl rounded-xl dark:bg-slate-900">
    <div className="flex items-center justify-start gap-3 py-5">
      <img src={imgUrl} alt="icon" className="object-cover w-12" />
      <div>
        <p className="text-xl font-semibold dark:text-gray-200 text-slate-900">
          {name}
        </p>
        <p className="text-sm font-medium text-teal-500">{positionJob}</p>
      </div>
    </div>
    <span className="block">⭐⭐⭐⭐⭐</span>
    <p className="py-2 dark:text-gray-400 text-slate-400 text-md">{comment}</p>
  </div>
);

export default NewFeatures;
