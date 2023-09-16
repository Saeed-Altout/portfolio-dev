import React from "react";

const Image = ({ src, styleImage }) => {
  return <img src={src} className={`${styleImage}`} alt="Developer" />;
};

export default Image;
